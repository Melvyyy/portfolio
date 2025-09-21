// Deals Page JavaScript
let currentDealsSlideIndex = 0;
let dealsCarouselInterval;

// Deals Products Data (mix of all categories with special deals)
const dealsProducts = [
    {
        id: 1,
        name: "iPhone 14 Pro Max",
        brand: "Apple",
        category: "electronics",
        dealType: "flash-sale",
        price: 999,
        originalPrice: 1299,
        rating: 4.8,
        reviews: 234,
        image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=300&fit=crop&crop=center",
        stock: 5,
        features: ["5G", "Pro Camera", "A16 Bionic"],
        description: "Latest iPhone with Pro camera system and A16 Bionic chip. Limited time offer!"
    },
    {
        id: 2,
        name: "Nike Air Jordan 1",
        brand: "Nike",
        category: "fashion",
        dealType: "clearance",
        price: 120,
        originalPrice: 200,
        rating: 4.6,
        reviews: 189,
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=300&fit=crop&crop=center",
        stock: 8,
        features: ["Basketball", "Classic", "Retro"],
        description: "Classic Air Jordan 1 in multiple colorways. Clearance sale!"
    },
    {
        id: 3,
        name: "Samsung 55\" 4K Smart TV",
        brand: "Samsung",
        category: "electronics",
        dealType: "bundle",
        price: 599,
        originalPrice: 899,
        rating: 4.7,
        reviews: 156,
        image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400&h=300&fit=crop&crop=center",
        stock: 3,
        features: ["4K", "Smart TV", "HDR"],
        description: "55-inch 4K Smart TV with HDR support. Bundle deal with soundbar!"
    },
    {
        id: 4,
        name: "Levi's 501 Original Jeans",
        brand: "Levi's",
        category: "fashion",
        dealType: "daily",
        price: 45,
        originalPrice: 80,
        rating: 4.4,
        reviews: 267,
        image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=300&fit=crop&crop=center",
        stock: 15,
        features: ["Denim", "Classic", "Straight Fit"],
        description: "Original 501 jeans in various sizes. Daily deal special!"
    },
    {
        id: 5,
        name: "Dyson V15 Detect Vacuum",
        brand: "Dyson",
        category: "home-garden",
        dealType: "weekend",
        price: 399,
        originalPrice: 549,
        rating: 4.9,
        reviews: 98,
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop&crop=center",
        stock: 6,
        features: ["Cordless", "Laser", "HEPA Filter"],
        description: "Advanced cordless vacuum with laser dust detection. Weekend special!"
    },
    {
        id: 6,
        name: "MacBook Air M2",
        brand: "Apple",
        category: "electronics",
        dealType: "seasonal",
        price: 999,
        originalPrice: 1199,
        rating: 4.8,
        reviews: 178,
        image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=300&fit=crop&crop=center",
        stock: 4,
        features: ["M2 Chip", "13-inch", "8GB RAM"],
        description: "MacBook Air with M2 chip. Holiday season special pricing!"
    },
    {
        id: 7,
        name: "Adidas Ultraboost 22",
        brand: "Adidas",
        category: "fashion",
        dealType: "flash-sale",
        price: 120,
        originalPrice: 180,
        rating: 4.7,
        reviews: 145,
        image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=300&fit=crop&crop=center",
        stock: 12,
        features: ["Running", "Boost", "Primeknit"],
        description: "Premium running shoes with Boost technology. Flash sale limited time!"
    },
    {
        id: 8,
        name: "KitchenAid Stand Mixer",
        brand: "KitchenAid",
        category: "home-garden",
        dealType: "bundle",
        price: 299,
        originalPrice: 399,
        rating: 4.9,
        reviews: 203,
        image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop&crop=center",
        stock: 7,
        features: ["5-Quart", "Multiple Attachments", "Professional"],
        description: "Professional stand mixer with multiple attachments. Bundle deal with extra bowl!"
    }
];

// Shopping Cart
let cart = [];
let cartCount = 0;

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
    displayProducts(dealsProducts);
    initializeDealsCarousel();
    setupEventListeners();
});

// Display products
function displayProducts(products) {
    const productsGrid = document.getElementById('productsGrid');
    if (!productsGrid) return;

    productsGrid.innerHTML = '';

    if (products.length === 0) {
        productsGrid.innerHTML = '<div class="no-products">No products found matching your criteria.</div>';
        return;
    }

    products.forEach(product => {
        const productCard = createProductCard(product);
        productsGrid.appendChild(productCard);
    });
}

// Create product card
function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.onclick = () => showProductDetails(product);

    const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);
    const stockStatus = product.stock > 10 ? 'In Stock' : product.stock > 0 ? 'Low Stock' : 'Out of Stock';
    const stockClass = product.stock > 10 ? 'deals-stock' : product.stock > 0 ? 'deals-stock low' : 'deals-stock out';

    card.innerHTML = `
        <div class="product-image">
            <img src="${product.image}" alt="${product.name}" loading="lazy" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
            <div class="product-image-fallback" style="display: none; font-size: 3rem; align-items: center; justify-content: center; height: 100%; background: #f3f4f6;">🏷️</div>
            <div class="product-overlay">
                <button class="quick-view-btn" onclick="event.stopPropagation(); showProductDetails(${product.id})">
                    <i class="fas fa-eye"></i> Quick View
                </button>
            </div>
            ${discount > 0 ? `<div class="discount-badge deals-discount">-${discount}%</div>` : ''}
            <div class="stock-badge ${stockClass}">${stockStatus}</div>
            <div class="deal-type-badge">${getDealTypeLabel(product.dealType)}</div>
        </div>
        <div class="product-info">
            <div class="product-brand deals-brand">${product.brand}</div>
            <h3 class="product-name">${product.name}</h3>
            <div class="product-rating">
                <div class="stars">
                    ${generateStars(product.rating)}
                </div>
                <span class="rating-text">(${product.reviews})</span>
            </div>
            <div class="product-price">
                <span class="current-price">$${product.price}</span>
                ${product.originalPrice > product.price ? `<span class="original-price">$${product.originalPrice}</span>` : ''}
            </div>
            <div class="product-features">
                ${product.features.map(feature => `<span class="feature-tag deals-feature">${feature}</span>`).join('')}
            </div>
            <button class="add-to-cart" onclick="event.stopPropagation(); addToCart(${product.id})" ${product.stock === 0 ? 'disabled' : ''}>
                <i class="fas fa-shopping-cart"></i> 
                ${product.stock > 0 ? 'Add to Cart' : 'Out of Stock'}
            </button>
        </div>
    `;

    return card;
}

// Get deal type label
function getDealTypeLabel(dealType) {
    const labels = {
        'flash-sale': 'FLASH SALE',
        'clearance': 'CLEARANCE',
        'bundle': 'BUNDLE DEAL',
        'daily': 'DAILY DEAL',
        'weekend': 'WEEKEND SPECIAL',
        'seasonal': 'SEASONAL SALE'
    };
    return labels[dealType] || 'DEAL';
}

// Generate star rating
function generateStars(rating) {
    let stars = '';
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
        stars += '<i class="fas fa-star"></i>';
    }
    if (hasHalfStar) {
        stars += '<i class="fas fa-star-half-alt"></i>';
    }
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
        stars += '<i class="far fa-star"></i>';
    }
    return stars;
}

// Add to cart - using shared cart utilities
function addToCart(productId) {
    const product = dealsProducts.find(p => p.id === productId);
    if (product) {
        // Use the shared cart utility
        window.addToCart(productId, product);
    }
}

// Update cart UI
function updateCartUI() {
    const cartCountElement = document.getElementById('cartCount');
    if (cartCountElement) {
        cartCountElement.textContent = cartCount;
    }

    const cartItems = document.getElementById('cartItems');
    if (cartItems) {
        cartItems.innerHTML = '';
        if (cart.length === 0) {
            cartItems.innerHTML = '<p>Your cart is empty</p>';
            return;
        }

        cart.forEach(item => {
            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';
            cartItem.innerHTML = `
                <img src="${item.image}" alt="${item.name}">
                <div class="cart-item-details">
                    <h4>${item.name}</h4>
                    <p>$${item.price} x ${item.quantity}</p>
                </div>
                <button onclick="removeFromCart(${item.id})">×</button>
            `;
            cartItems.appendChild(cartItem);
        });

        const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        const cartTotal = document.getElementById('cartTotal');
        if (cartTotal) {
            cartTotal.textContent = total.toFixed(2);
        }
    }
}

// Remove from cart
function removeFromCart(productId) {
    const itemIndex = cart.findIndex(item => item.id === productId);
    if (itemIndex === -1) return;

    const item = cart[itemIndex];
    cartCount -= item.quantity;
    cart.splice(itemIndex, 1);
    updateCartUI();
}

// Show cart notification
function showCartNotification() {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = 'cart-notification';
    notification.innerHTML = '<i class="fas fa-check"></i> Added to cart!';
    document.body.appendChild(notification);

    // Show notification
    setTimeout(() => notification.classList.add('show'), 100);

    // Remove notification
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 300);
    }, 2000);
}

// Toggle cart
function toggleCart() {
    const cartSidebar = document.getElementById('cartSidebar');
    const cartOverlay = document.getElementById('cartOverlay');
    
    if (cartSidebar && cartOverlay) {
        cartSidebar.classList.toggle('active');
        cartOverlay.classList.toggle('active');
    }
}

// Show product details modal
function showProductDetails(product) {
    const modal = document.getElementById('productModal');
    const modalBody = document.getElementById('modalBody');
    
    if (!modal || !modalBody) return;

    const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);
    
    modalBody.innerHTML = `
        <div class="modal-product-image">
            <img src="${product.image}" alt="${product.name}">
            ${discount > 0 ? `<div class="discount-badge">-${discount}%</div>` : ''}
            <div class="deal-type-badge">${getDealTypeLabel(product.dealType)}</div>
        </div>
        <div class="modal-product-info">
            <div class="product-brand">${product.brand}</div>
            <h2>${product.name}</h2>
            <div class="product-rating">
                <div class="stars">${generateStars(product.rating)}</div>
                <span class="rating-text">${product.rating} (${product.reviews} reviews)</span>
            </div>
            <div class="product-price">
                <span class="current-price">$${product.price}</span>
                ${product.originalPrice > product.price ? `<span class="original-price">$${product.originalPrice}</span>` : ''}
            </div>
            <p class="product-description">${product.description}</p>
            <div class="product-features">
                <h4>Features:</h4>
                <ul>
                    ${product.features.map(feature => `<li>${feature}</li>`).join('')}
                </ul>
            </div>
            <div class="product-actions">
                <button class="add-to-cart-btn" onclick="addToCart(${product.id}); closeProductModal();">
                    <i class="fas fa-shopping-cart"></i> Add to Cart - $${product.price}
                </button>
            </div>
        </div>
    `;

    modal.classList.add('show');
}

// Close product modal
function closeProductModal() {
    const modal = document.getElementById('productModal');
    if (modal) {
        modal.classList.remove('show');
    }
}

// Filter products
function filterProducts() {
    const dealTypeFilter = document.getElementById('dealTypeFilter');
    const discountFilter = document.getElementById('discountFilter');
    const priceFilter = document.getElementById('priceFilter');
    
    if (!dealTypeFilter || !discountFilter || !priceFilter) return;

    let filteredProducts = dealsProducts;

    // Filter by deal type
    if (dealTypeFilter.value !== 'all') {
        filteredProducts = filteredProducts.filter(product => product.dealType === dealTypeFilter.value);
    }

    // Filter by discount range
    if (discountFilter.value) {
        const [min, max] = discountFilter.value.split('-').map(Number);
        filteredProducts = filteredProducts.filter(product => {
            const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);
            if (max) {
                return discount >= min && discount <= max;
            } else {
                return discount >= min;
            }
        });
    }

    // Filter by price
    if (priceFilter.value) {
        const [min, max] = priceFilter.value.split('-').map(Number);
        filteredProducts = filteredProducts.filter(product => {
            if (max) {
                return product.price >= min && product.price <= max;
            } else {
                return product.price >= min;
            }
        });
    }

    displayProducts(filteredProducts);
}

// Clear filters
function clearFilters() {
    const dealTypeFilter = document.getElementById('dealTypeFilter');
    const discountFilter = document.getElementById('discountFilter');
    const priceFilter = document.getElementById('priceFilter');
    
    if (dealTypeFilter) dealTypeFilter.value = 'all';
    if (discountFilter) discountFilter.value = '';
    if (priceFilter) priceFilter.value = '';
    
    displayProducts(dealsProducts);
}

// Filter by category (from carousel buttons)
function filterByCategory(category) {
    const dealTypeFilter = document.getElementById('dealTypeFilter');
    if (dealTypeFilter) {
        dealTypeFilter.value = category;
        filterProducts();
    }
}

// Toggle view
function toggleView(view) {
    const productsGrid = document.getElementById('productsGrid');
    const viewBtns = document.querySelectorAll('.view-btn');
    
    if (!productsGrid) return;

    viewBtns.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');

    if (view === 'list') {
        productsGrid.classList.add('list-view');
    } else {
        productsGrid.classList.remove('list-view');
    }
}

// Load more products
function loadMoreProducts() {
    // In a real application, this would load more products from an API
    console.log('Loading more products...');
}

// Proceed to checkout
function proceedToCheckout() {
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }
    // Save cart data for checkout
    localStorage.setItem('techmart_checkout_cart', JSON.stringify(cart));
    // Redirect to cart page
    window.location.href = 'cart.html';
}

// Setup event listeners
function setupEventListeners() {
    // Search functionality
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();
            const filteredProducts = dealsProducts.filter(product =>
                product.name.toLowerCase().includes(searchTerm) ||
                product.brand.toLowerCase().includes(searchTerm) ||
                product.features.some(feature => feature.toLowerCase().includes(searchTerm))
            );
            displayProducts(filteredProducts);
        });
    }

    // Close modal when clicking outside
    const modal = document.getElementById('productModal');
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                closeProductModal();
            }
        });
    }
}

// Deals Carousel Functions
function initializeDealsCarousel() {
    const slides = document.querySelectorAll('#dealsCarouselSlides .carousel-slide');
    if (slides.length === 0) return;

    showDealsSlide(0);
    startDealsAutoSlide();
    
    // Pause on hover
    const carousel = document.querySelector('.deals-hero .carousel-container');
    if (carousel) {
        carousel.addEventListener('mouseenter', stopDealsAutoSlide);
        carousel.addEventListener('mouseleave', startDealsAutoSlide);
    }
}

function showDealsSlide(index) {
    const slides = document.querySelectorAll('#dealsCarouselSlides .carousel-slide');
    const indicators = document.querySelectorAll('.deals-hero .indicator');
    
    if (slides.length === 0) return;

    // Hide all slides
    slides.forEach(slide => slide.classList.remove('active'));
    indicators.forEach(indicator => indicator.classList.remove('active'));

    // Show current slide
    if (slides[index]) {
        slides[index].classList.add('active');
    }
    if (indicators[index]) {
        indicators[index].classList.add('active');
    }
}

function changeDealsSlide(direction) {
    const slides = document.querySelectorAll('#dealsCarouselSlides .carousel-slide');
    if (slides.length === 0) return;

    currentDealsSlideIndex += direction;
    
    if (currentDealsSlideIndex >= slides.length) {
        currentDealsSlideIndex = 0;
    } else if (currentDealsSlideIndex < 0) {
        currentDealsSlideIndex = slides.length - 1;
    }
    
    showDealsSlide(currentDealsSlideIndex);
}

function currentDealsSlide(index) {
    currentDealsSlideIndex = index - 1;
    showDealsSlide(currentDealsSlideIndex);
}

function startDealsAutoSlide() {
    stopDealsAutoSlide(); // Clear any existing interval
    dealsCarouselInterval = setInterval(() => {
        changeDealsSlide(1);
    }, 5000);
}

function stopDealsAutoSlide() {
    if (dealsCarouselInterval) {
        clearInterval(dealsCarouselInterval);
        dealsCarouselInterval = null;
    }
}

// Touch/Swipe support for carousel
function handleDealsSwipe() {
    const carousel = document.querySelector('.deals-hero .carousel-container');
    if (!carousel) return;

    let startX = 0;
    let endX = 0;

    carousel.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
    });

    carousel.addEventListener('touchend', (e) => {
        endX = e.changedTouches[0].clientX;
        handleSwipeGesture();
    });

    function handleSwipeGesture() {
        const threshold = 50;
        const diff = startX - endX;

        if (Math.abs(diff) > threshold) {
            if (diff > 0) {
                changeDealsSlide(1); // Swipe left - next slide
            } else {
                changeDealsSlide(-1); // Swipe right - previous slide
            }
        }
    }
}

// Initialize touch support
document.addEventListener('DOMContentLoaded', function() {
    handleDealsSwipe();
});
