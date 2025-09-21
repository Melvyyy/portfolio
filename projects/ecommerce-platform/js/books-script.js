// Books Page JavaScript
let currentBooksSlideIndex = 0;
let booksCarouselInterval;

// Books Products Data
const booksProducts = [
    {
        id: 1,
        name: "The Great Gatsby",
        brand: "F. Scott Fitzgerald",
        category: "fiction",
        price: 12.99,
        originalPrice: 15.99,
        rating: 4.5,
        reviews: 128,
        image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop&crop=center",
        stock: 25,
        features: ["Classic", "Literature", "American"],
        description: "A classic American novel set in the Jazz Age, exploring themes of wealth, love, and the American Dream."
    },
    {
        id: 2,
        name: "Sapiens: A Brief History of Humankind",
        brand: "Yuval Noah Harari",
        category: "non-fiction",
        price: 18.99,
        originalPrice: 24.99,
        rating: 4.7,
        reviews: 95,
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop&crop=center",
        stock: 18,
        features: ["History", "Anthropology", "Bestseller"],
        description: "An exploration of how Homo sapiens came to dominate the world through three major revolutions."
    },
    {
        id: 3,
        name: "Harry Potter and the Sorcerer's Stone",
        brand: "J.K. Rowling",
        category: "children",
        price: 14.99,
        originalPrice: 19.99,
        rating: 4.8,
        reviews: 203,
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop&crop=center",
        stock: 32,
        features: ["Fantasy", "Children", "Magic"],
        description: "The first book in the magical Harry Potter series that captivated readers worldwide."
    },
    {
        id: 4,
        name: "Calculus: Early Transcendentals",
        brand: "James Stewart",
        category: "textbooks",
        price: 89.99,
        originalPrice: 120.99,
        rating: 4.3,
        reviews: 67,
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop&crop=center",
        stock: 8,
        features: ["Mathematics", "Textbook", "Calculus"],
        description: "Comprehensive calculus textbook for university students with clear explanations and examples."
    },
    {
        id: 5,
        name: "The Walking Dead Compendium 1",
        brand: "Robert Kirkman",
        category: "comics",
        price: 35.99,
        originalPrice: 45.99,
        rating: 4.6,
        reviews: 156,
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop&crop=center",
        stock: 12,
        features: ["Comics", "Horror", "Zombie"],
        description: "The first compendium of the acclaimed Walking Dead comic series."
    },
    {
        id: 6,
        name: "National Geographic Magazine",
        brand: "National Geographic",
        category: "magazines",
        price: 6.99,
        originalPrice: 8.99,
        rating: 4.4,
        reviews: 89,
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop&crop=center",
        stock: 45,
        features: ["Photography", "Nature", "Science"],
        description: "Monthly magazine featuring stunning photography and in-depth articles about our world."
    },
    {
        id: 7,
        name: "Atomic Habits",
        brand: "James Clear",
        category: "non-fiction",
        price: 16.99,
        originalPrice: 21.99,
        rating: 4.8,
        reviews: 234,
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop&crop=center",
        stock: 28,
        features: ["Self-Help", "Productivity", "Habits"],
        description: "A practical guide to building good habits and breaking bad ones through small changes."
    },
    {
        id: 8,
        name: "The Cat in the Hat",
        brand: "Dr. Seuss",
        category: "children",
        price: 8.99,
        originalPrice: 11.99,
        rating: 4.6,
        reviews: 178,
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop&crop=center",
        stock: 22,
        features: ["Children", "Rhyming", "Classic"],
        description: "A beloved children's book featuring the mischievous Cat in the Hat and his antics."
    }
];

// Books page uses centralized cart system from cart-utils.js

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
    displayProducts(booksProducts);
    initializeBooksCarousel();
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
    const stockClass = product.stock > 10 ? 'books-stock' : product.stock > 0 ? 'books-stock low' : 'books-stock out';

    card.innerHTML = `
        <div class="product-image">
            <img src="${product.image}" alt="${product.name}" loading="lazy" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
            <div class="product-image-fallback" style="display: none; font-size: 3rem; align-items: center; justify-content: center; height: 100%; background: #f3f4f6;">📚</div>
            <div class="product-overlay">
                <button class="quick-view-btn" onclick="event.stopPropagation(); showProductDetails(${product.id})">
                    <i class="fas fa-eye"></i> Quick View
                </button>
            </div>
            ${discount > 0 ? `<div class="discount-badge books-discount">-${discount}%</div>` : ''}
            <div class="stock-badge ${stockClass}">${stockStatus}</div>
        </div>
        <div class="product-info">
            <div class="product-brand books-brand">${product.brand}</div>
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
                ${product.features.map(feature => `<span class="feature-tag books-feature">${feature}</span>`).join('')}
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
    const product = booksProducts.find(p => p.id === productId);
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
    const genreFilter = document.getElementById('genreFilter');
    const priceFilter = document.getElementById('priceFilter');
    
    if (!categoryFilter || !genreFilter || !priceFilter) return;

    let filteredProducts = booksProducts;

    // Filter by category
    if (categoryFilter.value !== 'all') {
        filteredProducts = filteredProducts.filter(product => product.category === categoryFilter.value);
    }

    // Filter by genre (this would need to be added to product data in a real app)
    if (genreFilter.value) {
        // For now, just filter by features that might match genre
        filteredProducts = filteredProducts.filter(product => 
            product.features.some(feature => 
                feature.toLowerCase().includes(genreFilter.value.toLowerCase())
            )
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
    const genreFilter = document.getElementById('genreFilter');
    const priceFilter = document.getElementById('priceFilter');
    
    if (categoryFilter) categoryFilter.value = 'all';
    if (genreFilter) genreFilter.value = '';
    if (priceFilter) priceFilter.value = '';
    
    displayProducts(booksProducts);
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
            const filteredProducts = booksProducts.filter(product =>
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

// Books Carousel Functions
function initializeBooksCarousel() {
    const slides = document.querySelectorAll('#booksCarouselSlides .carousel-slide');
    if (slides.length === 0) return;

    showBooksSlide(0);
    startBooksAutoSlide();
    
    // Pause on hover
    const carousel = document.querySelector('.books-hero .carousel-container');
    if (carousel) {
        carousel.addEventListener('mouseenter', stopBooksAutoSlide);
        carousel.addEventListener('mouseleave', startBooksAutoSlide);
    }
}

function showBooksSlide(index) {
    const slides = document.querySelectorAll('#booksCarouselSlides .carousel-slide');
    const indicators = document.querySelectorAll('.books-hero .indicator');
    
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

function changeBooksSlide(direction) {
    const slides = document.querySelectorAll('#booksCarouselSlides .carousel-slide');
    if (slides.length === 0) return;

    currentBooksSlideIndex += direction;
    
    if (currentBooksSlideIndex >= slides.length) {
        currentBooksSlideIndex = 0;
    } else if (currentBooksSlideIndex < 0) {
        currentBooksSlideIndex = slides.length - 1;
    }
    
    showBooksSlide(currentBooksSlideIndex);
}

function currentBooksSlide(index) {
    currentBooksSlideIndex = index - 1;
    showBooksSlide(currentBooksSlideIndex);
}

function startBooksAutoSlide() {
    stopBooksAutoSlide(); // Clear any existing interval
    booksCarouselInterval = setInterval(() => {
        changeBooksSlide(1);
    }, 5000);
}

function stopBooksAutoSlide() {
    if (booksCarouselInterval) {
        clearInterval(booksCarouselInterval);
        booksCarouselInterval = null;
    }
}

// Touch/Swipe support for carousel
function handleBooksSwipe() {
    const carousel = document.querySelector('.books-hero .carousel-container');
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
                changeBooksSlide(1); // Swipe left - next slide
            } else {
                changeBooksSlide(-1); // Swipe right - previous slide
            }
        }
    }
}

// Initialize touch support
document.addEventListener('DOMContentLoaded', function() {
    handleBooksSwipe();
});
