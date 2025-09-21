// Electronics Page JavaScript
let currentView = 'grid';
let currentCategory = 'all';
let currentBrand = '';
let currentPriceRange = '';
let currentSort = 'featured';

// Electronics Products Data
const electronicsProducts = [
    // Smartphones
    {
        id: 1,
        name: "iPhone 15 Pro Max",
        brand: "Apple",
        price: 1199,
        originalPrice: 1299,
        image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=400&fit=crop&crop=center",
        category: "smartphones",
        rating: 4.8,
        reviews: 1250,
        stockCount: 15,
        features: ["A17 Pro Chip", "48MP Camera", "Titanium Design", "5G Ready"],
        specifications: {
            "Display": "6.7-inch Super Retina XDR",
            "Storage": "256GB",
            "Camera": "48MP Main + 12MP Ultra Wide",
            "Battery": "Up to 29 hours video playback"
        }
    },
    {
        id: 2,
        name: "Samsung Galaxy S24 Ultra",
        brand: "Samsung",
        price: 1099,
        originalPrice: 1199,
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop&crop=center",
        category: "smartphones",
        rating: 4.7,
        reviews: 980,
        stockCount: 22,
        features: ["S Pen Included", "200MP Camera", "AI Features", "5G Ready"],
        specifications: {
            "Display": "6.8-inch Dynamic AMOLED 2X",
            "Storage": "512GB",
            "Camera": "200MP Main + 50MP Periscope",
            "Battery": "5000mAh with Fast Charging"
        }
    },
    {
        id: 3,
        name: "Google Pixel 8 Pro",
        brand: "Google",
        price: 899,
        originalPrice: 999,
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop&crop=center",
        category: "smartphones",
        rating: 4.6,
        reviews: 756,
        stockCount: 18,
        features: ["Google AI", "50MP Camera", "7 Years Updates", "Titan Security"],
        specifications: {
            "Display": "6.7-inch LTPO OLED",
            "Storage": "128GB",
            "Camera": "50MP Main + 48MP Ultra Wide",
            "Battery": "5050mAh with Wireless Charging"
        }
    },

    // Laptops
    {
        id: 4,
        name: "MacBook Pro 16-inch M3 Max",
        brand: "Apple",
        price: 2499,
        originalPrice: 2699,
        image: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=400&h=400&fit=crop&crop=center",
        category: "laptops",
        rating: 4.9,
        reviews: 432,
        stockCount: 8,
        features: ["M3 Max Chip", "22-hour Battery", "Liquid Retina XDR", "Pro Performance"],
        specifications: {
            "Processor": "Apple M3 Max (12-core CPU)",
            "Memory": "32GB Unified Memory",
            "Storage": "1TB SSD",
            "Display": "16.2-inch Liquid Retina XDR"
        }
    },
    {
        id: 5,
        name: "Dell XPS 15 OLED",
        brand: "Dell",
        price: 1899,
        originalPrice: 2099,
        image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=400&fit=crop&crop=center",
        category: "laptops",
        rating: 4.5,
        reviews: 678,
        stockCount: 12,
        features: ["4K OLED Display", "Intel i7", "RTX 4060", "Premium Build"],
        specifications: {
            "Processor": "Intel Core i7-13700H",
            "Graphics": "NVIDIA RTX 4060",
            "Memory": "16GB DDR5",
            "Storage": "512GB NVMe SSD"
        }
    },
    {
        id: 6,
        name: "HP Spectre x360 14",
        brand: "HP",
        price: 1299,
        originalPrice: 1499,
        image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=400&fit=crop&crop=center",
        category: "laptops",
        rating: 4.4,
        reviews: 543,
        stockCount: 15,
        features: ["2-in-1 Design", "Intel i7", "13.5-inch Display", "All-day Battery"],
        specifications: {
            "Processor": "Intel Core i7-1360P",
            "Memory": "16GB LPDDR5",
            "Storage": "512GB PCIe NVMe SSD",
            "Display": "13.5-inch 3K2K OLED"
        }
    },

    // Tablets
    {
        id: 7,
        name: "iPad Pro 12.9-inch M2",
        brand: "Apple",
        price: 1099,
        originalPrice: 1199,
        image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=400&fit=crop&crop=center",
        category: "tablets",
        rating: 4.8,
        reviews: 890,
        stockCount: 20,
        features: ["M2 Chip", "Liquid Retina XDR", "Apple Pencil Support", "5G Ready"],
        specifications: {
            "Processor": "Apple M2",
            "Display": "12.9-inch Liquid Retina XDR",
            "Storage": "128GB",
            "Connectivity": "Wi-Fi + Cellular"
        }
    },
    {
        id: 8,
        name: "Samsung Galaxy Tab S9 Ultra",
        brand: "Samsung",
        price: 999,
        originalPrice: 1099,
        image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=400&fit=crop&crop=center",
        category: "tablets",
        rating: 4.6,
        reviews: 456,
        stockCount: 14,
        features: ["S Pen Included", "14.6-inch Display", "Snapdragon 8 Gen 2", "DeX Mode"],
        specifications: {
            "Processor": "Snapdragon 8 Gen 2",
            "Display": "14.6-inch Dynamic AMOLED 2X",
            "Storage": "256GB",
            "S Pen": "Included with 2.8ms latency"
        }
    },

    // Audio
    {
        id: 9,
        name: "Sony WH-1000XM5 Headphones",
        brand: "Sony",
        price: 399,
        originalPrice: 449,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop&crop=center",
        category: "audio",
        rating: 4.7,
        reviews: 1234,
        stockCount: 25,
        features: ["Industry-leading Noise Cancellation", "30-hour Battery", "Quick Charge", "Hi-Res Audio"],
        specifications: {
            "Driver": "30mm Dynamic",
            "Frequency Response": "4Hz-40kHz",
            "Battery": "30 hours (NC on)",
            "Connectivity": "Bluetooth 5.2, NFC"
        }
    },
    {
        id: 10,
        name: "Apple AirPods Pro 2nd Gen",
        brand: "Apple",
        price: 249,
        originalPrice: 279,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop&crop=center",
        category: "audio",
        rating: 4.8,
        reviews: 2100,
        stockCount: 30,
        features: ["Active Noise Cancellation", "Spatial Audio", "H2 Chip", "MagSafe Charging"],
        specifications: {
            "Driver": "Custom high-excursion driver",
            "Battery": "6 hours (ANC on)",
            "Case Battery": "30 hours total",
            "Connectivity": "Bluetooth 5.3"
        }
    },

    // Cameras
    {
        id: 11,
        name: "Canon EOS R5 Mirrorless Camera",
        brand: "Canon",
        price: 3899,
        originalPrice: 4199,
        image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400&h=400&fit=crop&crop=center",
        category: "cameras",
        rating: 4.9,
        reviews: 234,
        stockCount: 5,
        features: ["45MP Full-Frame", "8K Video Recording", "In-Body Stabilization", "Dual Pixel AF"],
        specifications: {
            "Sensor": "45MP Full-Frame CMOS",
            "Video": "8K RAW, 4K 120p",
            "ISO": "100-51200 (expandable to 102400)",
            "Autofocus": "1053 AF points"
        }
    },
    {
        id: 12,
        name: "Sony A7 IV Mirrorless Camera",
        brand: "Sony",
        price: 2499,
        originalPrice: 2699,
        image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400&h=400&fit=crop&crop=center",
        category: "cameras",
        rating: 4.8,
        reviews: 567,
        stockCount: 8,
        features: ["33MP Full-Frame", "4K 60p Video", "Real-time Tracking", "5-axis Stabilization"],
        specifications: {
            "Sensor": "33MP Full-Frame Exmor R CMOS",
            "Video": "4K 60p, 10-bit 4:2:2",
            "ISO": "100-51200 (expandable to 50-204800)",
            "Autofocus": "759 phase-detection points"
        }
    },

    // Gaming
    {
        id: 13,
        name: "PlayStation 5 Console",
        brand: "Sony",
        price: 499,
        originalPrice: 549,
        image: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=400&h=400&fit=crop&crop=center",
        category: "gaming",
        rating: 4.9,
        reviews: 3456,
        stockCount: 12,
        features: ["4K Gaming", "Ray Tracing", "3D Audio", "Ultra-fast SSD"],
        specifications: {
            "CPU": "AMD Zen 2-based CPU",
            "GPU": "AMD RDNA 2-based GPU",
            "Memory": "16GB GDDR6",
            "Storage": "825GB Custom SSD"
        }
    },
    {
        id: 14,
        name: "Xbox Series X Console",
        brand: "Microsoft",
        price: 499,
        originalPrice: 549,
        image: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=400&h=400&fit=crop&crop=center",
        category: "gaming",
        rating: 4.8,
        reviews: 2890,
        stockCount: 15,
        features: ["4K Gaming", "120 FPS", "Quick Resume", "Backward Compatibility"],
        specifications: {
            "CPU": "AMD Zen 2-based CPU",
            "GPU": "AMD RDNA 2-based GPU",
            "Memory": "16GB GDDR6",
            "Storage": "1TB Custom NVMe SSD"
        }
    }
];

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
    displayProducts(electronicsProducts);
    setupEventListeners();
});

// Setup event listeners
function setupEventListeners() {
    // Search functionality
    document.getElementById('searchInput').addEventListener('input', handleSearch);
    
    // Filter functionality
    document.getElementById('brandFilter').addEventListener('change', handleFilter);
    document.getElementById('priceFilter').addEventListener('change', handleFilter);
    document.getElementById('sortFilter').addEventListener('change', handleSort);
}

// Display products
function displayProducts(products) {
    const productsGrid = document.getElementById('productsGrid');
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
    card.className = `product-card ${currentView === 'list' ? 'list-view' : ''}`;
    
    const discount = product.originalPrice ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100) : 0;
    
    card.innerHTML = `
        <div class="product-image">
            <img src="${product.image}" alt="${product.name}" loading="lazy" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
            <div class="product-image-fallback" style="display: none; font-size: 3rem; align-items: center; justify-content: center; height: 100%; background: #f3f4f6;">📱</div>
            <div class="product-overlay">
                <button class="quick-view-btn" onclick="event.stopPropagation(); showProductDetails(${product.id})">
                    <i class="fas fa-eye"></i> Quick View
                </button>
            </div>
            ${discount > 0 ? `<span class="discount-badge electronics-discount">-${discount}%</span>` : ''}
            ${product.stockCount < 5 ? `<span class="stock-badge electronics-stock">Only ${product.stockCount} left</span>` : ''}
        </div>
        <div class="product-info">
            <div class="product-brand electronics-brand">${product.brand}</div>
            <h3 class="product-name">${product.name}</h3>
            <div class="product-rating">
                <div class="stars">
                    ${generateStars(product.rating)}
                </div>
                <span class="rating-text">${product.rating} (${product.reviews})</span>
            </div>
            <div class="product-price">
                <span class="current-price">$${product.price}</span>
                ${product.originalPrice ? `<span class="original-price">$${product.originalPrice}</span>` : ''}
            </div>
            <div class="product-features">
                ${product.features.slice(0, 2).map(feature => `<span class="feature-tag electronics-feature">${feature}</span>`).join('')}
            </div>
            <button class="add-to-cart" onclick="event.stopPropagation(); addToCart(${product.id})" ${product.stockCount === 0 ? 'disabled' : ''}>
                <i class="fas fa-shopping-cart"></i> 
                ${product.stockCount > 0 ? 'Add to Cart' : 'Out of Stock'}
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

// Handle search
function handleSearch() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const filteredProducts = electronicsProducts.filter(product => 
        product.name.toLowerCase().includes(searchTerm) ||
        product.brand.toLowerCase().includes(searchTerm) ||
        product.category.toLowerCase().includes(searchTerm)
    );
    displayProducts(filteredProducts);
}

// Handle filters
function handleFilter() {
    const brand = document.getElementById('brandFilter').value;
    const priceRange = document.getElementById('priceFilter').value;
    
    let filteredProducts = electronicsProducts;
    
    // Filter by brand
    if (brand) {
        filteredProducts = filteredProducts.filter(product => product.brand === brand);
    }
    
    // Filter by price range
    if (priceRange) {
        const [min, max] = priceRange.split('-').map(Number);
        if (max) {
            filteredProducts = filteredProducts.filter(product => product.price >= min && product.price <= max);
        } else {
            filteredProducts = filteredProducts.filter(product => product.price >= min);
        }
    }
    
    // Filter by category
    if (currentCategory !== 'all') {
        filteredProducts = filteredProducts.filter(product => product.category === currentCategory);
    }
    
    displayProducts(filteredProducts);
}

// Handle sorting
function handleSort() {
    const sortBy = document.getElementById('sortFilter').value;
    let sortedProducts = [...electronicsProducts];
    
    switch (sortBy) {
        case 'price-low':
            sortedProducts.sort((a, b) => a.price - b.price);
            break;
        case 'price-high':
            sortedProducts.sort((a, b) => b.price - a.price);
            break;
        case 'rating':
            sortedProducts.sort((a, b) => b.rating - a.rating);
            break;
        case 'newest':
            sortedProducts.sort((a, b) => b.id - a.id);
            break;
        default:
            // Featured - keep original order
            break;
    }
    
    displayProducts(sortedProducts);
}

// Filter by category
function filterByCategory(category) {
    currentCategory = category;
    const filteredProducts = electronicsProducts.filter(product => product.category === category);
    displayProducts(filteredProducts);
    
    // Update active category card
    document.querySelectorAll('.category-card').forEach(card => {
        card.classList.remove('active');
    });
    event.target.closest('.category-card').classList.add('active');
}

// Set view mode
function setView(view) {
    currentView = view;
    document.querySelectorAll('.view-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    
    // Update product cards
    document.querySelectorAll('.product-card').forEach(card => {
        if (view === 'list') {
            card.classList.add('list-view');
        } else {
            card.classList.remove('list-view');
        }
    });
}

// Clear all filters
function clearFilters() {
    document.getElementById('brandFilter').value = '';
    document.getElementById('priceFilter').value = '';
    document.getElementById('sortFilter').value = 'featured';
    document.getElementById('searchInput').value = '';
    currentCategory = 'all';
    
    document.querySelectorAll('.category-card').forEach(card => {
        card.classList.remove('active');
    });
    
    displayProducts(electronicsProducts);
}

// Add to cart - using shared cart utilities
function addToCart(productId) {
    const product = electronicsProducts.find(p => p.id === productId);
    if (product) {
        // Use the shared cart utility
        window.addToCart(productId, product);
    }
}

// Cart functions - handled by cart-utils.js

// Show product details
function showProductDetails(productId) {
    const product = electronicsProducts.find(p => p.id === productId);
    if (product) {
        const modalBody = document.getElementById('modalBody');
        modalBody.innerHTML = `
            <div class="product-detail">
                <div class="product-detail-image">
                    <img src="${product.image}" alt="${product.name}">
                </div>
                <div class="product-detail-info">
                    <div class="product-brand">${product.brand}</div>
                    <h2>${product.name}</h2>
                    <div class="product-rating">
                        <div class="stars">
                            ${generateStars(product.rating)}
                        </div>
                        <span class="rating-text">${product.rating} (${product.reviews} reviews)</span>
                    </div>
                    <div class="product-price">
                        <span class="current-price">$${product.price}</span>
                        ${product.originalPrice ? `<span class="original-price">$${product.originalPrice}</span>` : ''}
                    </div>
                    <div class="product-features">
                        <h4>Key Features:</h4>
                        <ul>
                            ${product.features.map(feature => `<li>${feature}</li>`).join('')}
                        </ul>
                    </div>
                    <div class="product-specifications">
                        <h4>Specifications:</h4>
                        <div class="specs-grid">
                            ${Object.entries(product.specifications).map(([key, value]) => 
                                `<div class="spec-item">
                                    <span class="spec-key">${key}:</span>
                                    <span class="spec-value">${value}</span>
                                </div>`
                            ).join('')}
                        </div>
                    </div>
                    <div class="product-actions">
                        <button class="add-to-cart-btn large" onclick="addToCart(${product.id}); closeProductModal();">
                            <i class="fas fa-shopping-cart"></i>
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        `;
        
        document.getElementById('productModal').classList.add('active');
    }
}

// Close product modal
function closeProductModal() {
    document.getElementById('productModal').classList.remove('active');
}

// Checkout
function checkout() {
    if (cart.length === 0) {
        showNotification('Your cart is empty!', 'error');
        return;
    }
    
    showNotification('Redirecting to checkout...', 'success');
    // Save cart data for checkout
    localStorage.setItem('techmart_checkout_cart', JSON.stringify(cart));
    // Redirect to cart page
    setTimeout(() => {
        window.location.href = 'cart.html';
    }, 1500);
}

// Show notification
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.classList.add('show');
    }, 100);
    
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Load more products (placeholder)
function loadMoreProducts() {
    showNotification('Loading more products...', 'info');
    // In a real application, this would load additional products from an API
}

// Electronics Carousel Functionality
let currentElectronicsSlideIndex = 0;
let electronicsCarouselInterval;

// Initialize electronics carousel
function initializeElectronicsCarousel() {
    const slides = document.querySelectorAll('#electronicsCarouselSlides .carousel-slide');
    const indicators = document.querySelectorAll('.carousel-indicators .indicator');
    
    if (slides.length === 0) return;
    
    // Set initial slide
    showElectronicsSlide(0);
    
    // Start auto-slide
    startElectronicsAutoSlide();
    
    // Add event listeners for indicators
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => currentElectronicsSlide(index + 1));
    });
}

// Show specific slide
function showElectronicsSlide(index) {
    const slides = document.querySelectorAll('#electronicsCarouselSlides .carousel-slide');
    const indicators = document.querySelectorAll('.carousel-indicators .indicator');
    
    if (slides.length === 0) return;
    
    // Remove active class from all slides and indicators
    slides.forEach(slide => slide.classList.remove('active'));
    indicators.forEach(indicator => indicator.classList.remove('active'));
    
    // Add active class to current slide and indicator
    if (slides[index]) {
        slides[index].classList.add('active');
    }
    if (indicators[index]) {
        indicators[index].classList.add('active');
    }
    
    currentElectronicsSlideIndex = index;
}

// Change slide (next/previous)
function changeElectronicsSlide(direction) {
    const slides = document.querySelectorAll('#electronicsCarouselSlides .carousel-slide');
    if (slides.length === 0) return;
    
    let newIndex = currentElectronicsSlideIndex + direction;
    
    if (newIndex >= slides.length) {
        newIndex = 0;
    } else if (newIndex < 0) {
        newIndex = slides.length - 1;
    }
    
    showElectronicsSlide(newIndex);
}

// Go to specific slide
function currentElectronicsSlide(slideNumber) {
    showElectronicsSlide(slideNumber - 1);
}

// Start auto-slide
function startElectronicsAutoSlide() {
    stopElectronicsAutoSlide();
    electronicsCarouselInterval = setInterval(() => {
        changeElectronicsSlide(1);
    }, 5000);
}

// Stop auto-slide
function stopElectronicsAutoSlide() {
    if (electronicsCarouselInterval) {
        clearInterval(electronicsCarouselInterval);
    }
}

// Initialize carousel when page loads
document.addEventListener('DOMContentLoaded', function() {
    // Initialize existing functionality
    renderProducts();
    setupEventListeners();
    
    // Initialize electronics carousel
    initializeElectronicsCarousel();
    
    // Pause carousel on hover
    const carousel = document.querySelector('.carousel-container');
    if (carousel) {
        carousel.addEventListener('mouseenter', stopElectronicsAutoSlide);
        carousel.addEventListener('mouseleave', startElectronicsAutoSlide);
    }
});

// Keyboard navigation
document.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowLeft') {
        changeElectronicsSlide(-1);
    } else if (event.key === 'ArrowRight') {
        changeElectronicsSlide(1);
    }
});

// Touch/swipe support
let touchStartX = 0;
let touchEndX = 0;

document.addEventListener('touchstart', function(e) {
    touchStartX = e.changedTouches[0].screenX;
});

document.addEventListener('touchend', function(e) {
    touchEndX = e.changedTouches[0].screenX;
    handleElectronicsSwipe();
});

function handleElectronicsSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartX - touchEndX;
    
    if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
            // Swipe left - next slide
            changeElectronicsSlide(1);
        } else {
            // Swipe right - previous slide
            changeElectronicsSlide(-1);
        }
    }
}
