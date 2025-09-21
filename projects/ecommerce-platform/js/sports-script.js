// Sports Page JavaScript
let currentSportsSlideIndex = 0;
let sportsCarouselInterval;

// Sports Products Data
const sportsProducts = [
    {
        id: 1,
        name: "Nike Air Max 270",
        brand: "Nike",
        category: "fitness",
        price: 150,
        originalPrice: 180,
        rating: 4.5,
        reviews: 128,
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=300&fit=crop&crop=center",
        stock: 15,
        features: ["Running", "Athletic", "Comfortable"],
        description: "Premium running shoes with maximum comfort and style."
    },
    {
        id: 2,
        name: "Adidas Ultraboost 22",
        brand: "Adidas",
        category: "fitness",
        price: 180,
        originalPrice: 220,
        rating: 4.7,
        reviews: 95,
        image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=300&fit=crop&crop=center",
        stock: 8,
        features: ["Running", "Boost Technology", "Lightweight"],
        description: "Advanced running shoes with Boost technology for superior energy return."
    },
    {
        id: 3,
        name: "Wilson Pro Staff Tennis Racket",
        brand: "Wilson",
        category: "team",
        price: 200,
        originalPrice: 250,
        rating: 4.6,
        reviews: 67,
        image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=300&fit=crop&crop=center",
        stock: 12,
        features: ["Tennis", "Professional", "Carbon Fiber"],
        description: "Professional-grade tennis racket for serious players."
    },
    {
        id: 4,
        name: "Spalding NBA Basketball",
        brand: "Spalding",
        category: "team",
        price: 45,
        originalPrice: 60,
        rating: 4.4,
        reviews: 203,
        image: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8b?w=400&h=300&fit=crop&crop=center",
        stock: 25,
        features: ["Basketball", "Official Size", "Indoor/Outdoor"],
        description: "Official NBA size basketball for indoor and outdoor play."
    },
    {
        id: 5,
        name: "Coleman Sundome Tent",
        brand: "Coleman",
        category: "outdoor",
        price: 80,
        originalPrice: 120,
        rating: 4.3,
        reviews: 156,
        image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=300&fit=crop&crop=center",
        stock: 6,
        features: ["Camping", "4-Person", "Weather Resistant"],
        description: "Reliable 4-person tent perfect for camping adventures."
    },
    {
        id: 6,
        name: "Speedo Fastskin Swimsuit",
        brand: "Speedo",
        category: "water",
        price: 65,
        originalPrice: 85,
        rating: 4.5,
        reviews: 89,
        image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=300&fit=crop&crop=center",
        stock: 18,
        features: ["Swimming", "Competition", "Hydrodynamic"],
        description: "High-performance swimsuit for competitive swimming."
    },
    {
        id: 7,
        name: "Garmin Forerunner 945",
        brand: "Garmin",
        category: "fitness",
        price: 500,
        originalPrice: 600,
        rating: 4.8,
        reviews: 234,
        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop&crop=center",
        stock: 4,
        features: ["GPS", "Heart Rate", "Multisport"],
        description: "Advanced GPS multisport watch with comprehensive fitness tracking."
    },
    {
        id: 8,
        name: "Yoga Mat Premium",
        brand: "Lululemon",
        category: "fitness",
        price: 85,
        originalPrice: 110,
        rating: 4.6,
        reviews: 178,
        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop&crop=center",
        stock: 22,
        features: ["Yoga", "Non-slip", "Eco-friendly"],
        description: "Premium non-slip yoga mat made from eco-friendly materials."
    }
];

// Sports page uses centralized cart system from cart-utils.js

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
    displayProducts(sportsProducts);
    initializeSportsCarousel();
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
    const stockClass = product.stock > 10 ? 'sports-stock' : product.stock > 0 ? 'sports-stock low' : 'sports-stock out';

    card.innerHTML = `
        <div class="product-image">
            <img src="${product.image}" alt="${product.name}" loading="lazy" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
            <div class="product-image-fallback" style="display: none; font-size: 3rem; align-items: center; justify-content: center; height: 100%; background: #f3f4f6;">⚽</div>
            <div class="product-overlay">
                <button class="quick-view-btn" onclick="event.stopPropagation(); showProductDetails(${product.id})">
                    <i class="fas fa-eye"></i> Quick View
                </button>
            </div>
            ${discount > 0 ? `<div class="discount-badge sports-discount">-${discount}%</div>` : ''}
            <div class="stock-badge ${stockClass}">${stockStatus}</div>
        </div>
        <div class="product-info">
            <div class="product-brand sports-brand">${product.brand}</div>
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
                ${product.features.map(feature => `<span class="feature-tag sports-feature">${feature}</span>`).join('')}
            </div>
            <button class="add-to-cart" onclick="event.stopPropagation(); addToCart(${product.id})" ${product.stock === 0 ? 'disabled' : ''}>
                <i class="fas fa-shopping-cart"></i> 
                ${product.stock > 0 ? 'Add to Cart' : 'Out of Stock'}
            </button>
        </div>
    `;

    return card;
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
    const product = sportsProducts.find(p => p.id === productId);
    if (product) {
        // Use the shared cart utility
        window.addToCart(productId, product);
    }
}

// Cart functions are handled by cart-utils.js

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
    const categoryFilter = document.getElementById('categoryFilter');
    const brandFilter = document.getElementById('brandFilter');
    const priceFilter = document.getElementById('priceFilter');
    
    if (!categoryFilter || !brandFilter || !priceFilter) return;

    let filteredProducts = sportsProducts;

    // Filter by category
    if (categoryFilter.value !== 'all') {
        filteredProducts = filteredProducts.filter(product => product.category === categoryFilter.value);
    }

    // Filter by brand
    if (brandFilter.value) {
        filteredProducts = filteredProducts.filter(product => 
            product.brand.toLowerCase() === brandFilter.value.toLowerCase()
        );
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
    const categoryFilter = document.getElementById('categoryFilter');
    const brandFilter = document.getElementById('brandFilter');
    const priceFilter = document.getElementById('priceFilter');
    
    if (categoryFilter) categoryFilter.value = 'all';
    if (brandFilter) brandFilter.value = '';
    if (priceFilter) priceFilter.value = '';
    
    displayProducts(sportsProducts);
}

// Filter by category (from carousel buttons)
function filterByCategory(category) {
    const categoryFilter = document.getElementById('categoryFilter');
    if (categoryFilter) {
        categoryFilter.value = category;
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

// Proceed to checkout - using shared cart utilities
function proceedToCheckout() {
    // Use the shared cart utility
    window.proceedToCheckout();
}

// Setup event listeners
function setupEventListeners() {
    // Search functionality
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();
            const filteredProducts = sportsProducts.filter(product =>
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

// Sports Carousel Functions
function initializeSportsCarousel() {
    const slides = document.querySelectorAll('#sportsCarouselSlides .carousel-slide');
    if (slides.length === 0) return;

    showSportsSlide(0);
    startSportsAutoSlide();
    
    // Pause on hover
    const carousel = document.querySelector('.sports-hero .carousel-container');
    if (carousel) {
        carousel.addEventListener('mouseenter', stopSportsAutoSlide);
        carousel.addEventListener('mouseleave', startSportsAutoSlide);
    }
}

function showSportsSlide(index) {
    const slides = document.querySelectorAll('#sportsCarouselSlides .carousel-slide');
    const indicators = document.querySelectorAll('.sports-hero .indicator');
    
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

function changeSportsSlide(direction) {
    const slides = document.querySelectorAll('#sportsCarouselSlides .carousel-slide');
    if (slides.length === 0) return;

    currentSportsSlideIndex += direction;
    
    if (currentSportsSlideIndex >= slides.length) {
        currentSportsSlideIndex = 0;
    } else if (currentSportsSlideIndex < 0) {
        currentSportsSlideIndex = slides.length - 1;
    }
    
    showSportsSlide(currentSportsSlideIndex);
}

function currentSportsSlide(index) {
    currentSportsSlideIndex = index - 1;
    showSportsSlide(currentSportsSlideIndex);
}

function startSportsAutoSlide() {
    stopSportsAutoSlide(); // Clear any existing interval
    sportsCarouselInterval = setInterval(() => {
        changeSportsSlide(1);
    }, 5000);
}

function stopSportsAutoSlide() {
    if (sportsCarouselInterval) {
        clearInterval(sportsCarouselInterval);
        sportsCarouselInterval = null;
    }
}

// Touch/Swipe support for carousel
function handleSportsSwipe() {
    const carousel = document.querySelector('.sports-hero .carousel-container');
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
                changeSportsSlide(1); // Swipe left - next slide
            } else {
                changeSportsSlide(-1); // Swipe right - previous slide
            }
        }
    }
}

// Initialize touch support
document.addEventListener('DOMContentLoaded', function() {
    handleSportsSwipe();
});
