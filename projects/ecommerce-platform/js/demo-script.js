// E-Commerce Demo JavaScript - Full Functionality

// Product Data (simulating database)
const products = [
    {
        id: 1,
        name: "Samsung Galaxy S24 Ultra",
        category: "electronics",
        price: 999.99,
        originalPrice: 1199.99,
        rating: 4.8,
        reviews: 1250,
        image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=400&h=300&fit=crop&crop=center",
        badge: "Best Seller",
        description: "Latest flagship smartphone with advanced camera system",
        brand: "Samsung",
        specifications: {
            "Display": "6.8-inch Dynamic AMOLED 2X",
            "Processor": "Snapdragon 8 Gen 3",
            "Storage": "256GB",
            "RAM": "12GB",
            "Camera": "200MP Main + 50MP Periscope",
            "Battery": "5000mAh",
            "OS": "Android 14"
        },
        features: ["5G Ready", "S Pen Included", "Wireless Charging", "Water Resistant"],
        inStock: true,
        stockCount: 15
    },
    {
        id: 2,
        name: "MacBook Pro 16-inch M3 Max",
        category: "electronics",
        price: 2499.99,
        originalPrice: 2799.99,
        rating: 4.9,
        reviews: 890,
        image: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=400&h=300&fit=crop&crop=center",
        badge: "New",
        description: "Powerful laptop for professionals and creators",
        brand: "Apple",
        specifications: {
            "Display": "16.2-inch Liquid Retina XDR",
            "Processor": "Apple M3 Max",
            "Storage": "1TB SSD",
            "RAM": "32GB",
            "Graphics": "40-core GPU",
            "Battery": "Up to 22 hours",
            "OS": "macOS Sonoma"
        },
        features: ["M3 Max Chip", "Liquid Retina Display", "Touch ID", "Thunderbolt 4"],
        inStock: true,
        stockCount: 8
    },
    {
        id: 3,
        name: "Nike Air Max 270",
        category: "fashion",
        price: 129.99,
        originalPrice: 159.99,
        rating: 4.6,
        reviews: 2100,
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=300&fit=crop&crop=center",
        badge: "Sale",
        description: "Comfortable running shoes with modern design",
        brand: "Nike",
        specifications: {
            "Material": "Mesh and Synthetic",
            "Sole": "Rubber",
            "Closure": "Lace-up",
            "Weight": "320g",
            "Sizes": "US 7-12",
            "Colors": "Multiple Available"
        },
        features: ["Air Max Cushioning", "Breathable Upper", "Durable Outsole", "Lightweight"],
        inStock: true,
        stockCount: 25
    },
    {
        id: 4,
        name: "Levi's 501 Original Jeans",
        category: "fashion",
        price: 79.99,
        originalPrice: 99.99,
        rating: 4.5,
        reviews: 3200,
        image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=300&fit=crop&crop=center",
        badge: "Popular",
        description: "Classic straight-fit jeans in blue denim",
        brand: "Levi's",
        specifications: {
            "Material": "100% Cotton Denim",
            "Fit": "Straight",
            "Rise": "Mid Rise",
            "Wash": "Dark Blue",
            "Sizes": "28-40",
            "Care": "Machine Washable"
        },
        features: ["Classic 501 Fit", "Durable Denim", "Button Fly", "5-Pocket Design"],
        inStock: true,
        stockCount: 40
    },
    {
        id: 5,
        name: "Dyson V15 Detect Cordless Vacuum",
        category: "home",
        price: 599.99,
        originalPrice: 699.99,
        rating: 4.7,
        reviews: 450,
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop&crop=center",
        badge: "Top Rated",
        description: "Cordless vacuum with powerful suction and laser dust detection",
        brand: "Dyson",
        specifications: {
            "Power": "230 Air Watts",
            "Battery": "60 minutes runtime",
            "Dustbin": "0.77L capacity",
            "Weight": "3.04kg",
            "Charging": "4.5 hours",
            "Filtration": "HEPA filtration"
        },
        features: ["Laser Dust Detection", "60min Runtime", "HEPA Filtration", "Cordless"],
        inStock: true,
        stockCount: 12
    },
    {
        id: 6,
        name: "IKEA Kallax Storage Unit",
        category: "home",
        price: 89.99,
        originalPrice: 109.99,
        rating: 4.4,
        reviews: 1800,
        image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop&crop=center",
        badge: "Deal",
        description: "Modular storage solution for any room",
        brand: "IKEA",
        specifications: {
            "Dimensions": "147x147x39cm",
            "Material": "Particleboard",
            "Color": "White",
            "Assembly": "Required",
            "Weight": "25kg",
            "Shelf Space": "16 compartments"
        },
        features: ["Modular Design", "Easy Assembly", "Versatile Storage", "Modern Look"],
        inStock: true,
        stockCount: 20
    },
    {
        id: 7,
        name: "Adidas Tiro 21 Training Pants",
        category: "sports",
        price: 24.99,
        originalPrice: 34.99,
        rating: 4.3,
        reviews: 950,
        image: "https://images.unsplash.com/photo-1506629905607-1b4b0a0b5a0a?w=400&h=300&fit=crop&crop=center",
        badge: "Sports",
        description: "Comfortable training pants for active lifestyle",
        brand: "Adidas",
        specifications: {
            "Material": "100% Polyester",
            "Fit": "Regular",
            "Pockets": "2 side pockets",
            "Elastic": "Drawstring waist",
            "Sizes": "XS-XXL",
            "Care": "Machine washable"
        },
        features: ["Moisture Wicking", "Comfortable Fit", "Durable Material", "Easy Care"],
        inStock: true,
        stockCount: 30
    },
    {
        id: 8,
        name: "Lululemon The Reversible Mat",
        category: "sports",
        price: 39.99,
        originalPrice: 49.99,
        rating: 4.8,
        reviews: 1200,
        image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=300&fit=crop&crop=center",
        badge: "Fitness",
        description: "Non-slip yoga mat with carrying strap",
        brand: "Lululemon",
        specifications: {
            "Dimensions": "71x26x0.5cm",
            "Weight": "1.4kg",
            "Material": "Natural rubber",
            "Thickness": "5mm",
            "Grip": "Non-slip surface",
            "Carrying": "Strap included"
        },
        features: ["Non-Slip Surface", "Reversible Design", "Carrying Strap", "Eco-Friendly"],
        inStock: true,
        stockCount: 18
    },
    {
        id: 9,
        name: "The Great Gatsby - F. Scott Fitzgerald",
        category: "books",
        price: 12.99,
        originalPrice: 15.99,
        rating: 4.6,
        reviews: 2800,
        image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=300&fit=crop&crop=center",
        badge: "Classic",
        description: "F. Scott Fitzgerald's masterpiece novel",
        brand: "Penguin Classics",
        specifications: {
            "Pages": "180 pages",
            "Language": "English",
            "Format": "Paperback",
            "Publisher": "Penguin Classics",
            "ISBN": "9780141182636",
            "Publication": "1925"
        },
        features: ["Classic Literature", "Penguin Edition", "Study Notes", "Timeless Story"],
        inStock: true,
        stockCount: 50
    },
    {
        id: 10,
        name: "JavaScript: The Good Parts - Douglas Crockford",
        category: "books",
        price: 29.99,
        originalPrice: 39.99,
        rating: 4.7,
        reviews: 1500,
        image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop&crop=center",
        badge: "Tech",
        description: "Essential guide for JavaScript developers",
        brand: "O'Reilly Media",
        specifications: {
            "Pages": "176 pages",
            "Language": "English",
            "Format": "Paperback",
            "Publisher": "O'Reilly Media",
            "ISBN": "9780596517748",
            "Edition": "1st Edition"
        },
        features: ["Programming Guide", "Best Practices", "Code Examples", "Developer Reference"],
        inStock: true,
        stockCount: 35
    },
    {
        id: 11,
        name: "iPhone 15 Pro Max",
        category: "electronics",
        price: 1199.99,
        originalPrice: 1299.99,
        rating: 4.9,
        reviews: 2100,
        image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=300&fit=crop&crop=center",
        badge: "Latest",
        description: "Apple's most advanced iPhone with titanium design",
        brand: "Apple",
        specifications: {
            "Display": "6.7-inch Super Retina XDR",
            "Processor": "A17 Pro chip",
            "Storage": "256GB",
            "RAM": "8GB",
            "Camera": "48MP Main + 12MP Ultra Wide",
            "Battery": "Up to 29 hours video",
            "OS": "iOS 17"
        },
        features: ["Titanium Design", "A17 Pro Chip", "Action Button", "USB-C"],
        inStock: true,
        stockCount: 10
    },
    {
        id: 12,
        name: "Sony WH-1000XM5 Noise Canceling Headphones",
        category: "electronics",
        price: 399.99,
        originalPrice: 449.99,
        rating: 4.8,
        reviews: 1800,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop&crop=center",
        badge: "Audio",
        description: "Industry-leading noise canceling headphones",
        brand: "Sony",
        specifications: {
            "Driver": "30mm dynamic",
            "Frequency": "4Hz-40kHz",
            "Battery": "30 hours",
            "Charging": "3 minutes = 3 hours",
            "Weight": "250g",
            "Connectivity": "Bluetooth 5.2"
        },
        features: ["Industry-Leading ANC", "30hr Battery", "Quick Charge", "Hi-Res Audio"],
        inStock: true,
        stockCount: 22
    },
    {
        id: 13,
        name: "Canon EOS R6 Mark II Camera",
        category: "electronics",
        price: 2499.99,
        originalPrice: 2799.99,
        rating: 4.9,
        reviews: 320,
        image: "https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=400&h=300&fit=crop&crop=center",
        badge: "Professional",
        description: "Professional mirrorless camera for photography and videography",
        brand: "Canon",
        specifications: {
            "Sensor": "24.2MP Full-Frame CMOS",
            "ISO": "100-102400",
            "Video": "4K 60p",
            "Burst": "40 fps",
            "Stabilization": "5-axis IBIS",
            "Battery": "LP-E6NH"
        },
        features: ["4K Video", "40fps Burst", "5-Axis Stabilization", "Dual Pixel AF"],
        inStock: true,
        stockCount: 6
    },
    {
        id: 14,
        name: "Nintendo Switch OLED Console",
        category: "electronics",
        price: 349.99,
        originalPrice: 399.99,
        rating: 4.7,
        reviews: 4500,
        image: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=400&h=300&fit=crop&crop=center",
        badge: "Gaming",
        description: "Handheld gaming console with OLED display",
        brand: "Nintendo",
        specifications: {
            "Display": "7-inch OLED",
            "Storage": "64GB",
            "Battery": "4.5-9 hours",
            "Resolution": "1280x720",
            "Connectivity": "Wi-Fi, Bluetooth",
            "Weight": "420g"
        },
        features: ["OLED Display", "Handheld/Docked", "Joy-Con Controllers", "Nintendo eShop"],
        inStock: true,
        stockCount: 28
    },
    {
        id: 15,
        name: "KitchenAid Stand Mixer",
        category: "home",
        price: 299.99,
        originalPrice: 349.99,
        rating: 4.8,
        reviews: 1200,
        image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop&crop=center",
        badge: "Kitchen",
        description: "Professional stand mixer for baking enthusiasts",
        brand: "KitchenAid",
        specifications: {
            "Power": "325W motor",
            "Capacity": "4.5L bowl",
            "Attachments": "Dough hook, whisk, paddle",
            "Speeds": "10 speeds",
            "Color": "Multiple options",
            "Warranty": "1 year"
        },
        features: ["10 Speeds", "Multiple Attachments", "Durable Construction", "Easy Clean"],
        inStock: true,
        stockCount: 14
    }
];

// Shopping Cart (using shared cart utilities)
let currentFilter = 'all';
let currentSort = 'default';

// Carousel functionality
let currentSlideIndex = 0;
let slideInterval;
const totalSlides = 4;

// DOM Elements
const productsGrid = document.getElementById('productsGrid');
// Cart elements - handled by cart-utils.js

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    renderProducts();
    setupEventListeners();
    initializeCarousel();
});

// Setup event listeners
function setupEventListeners() {
    // Search functionality
    const searchInput = document.querySelector('.search-input');
    searchInput.addEventListener('input', handleSearch);
    
    // Category filtering
    const categoryCards = document.querySelectorAll('.category-card');
    categoryCards.forEach(card => {
        card.addEventListener('click', function() {
            const category = this.getAttribute('onclick').match(/'([^']+)'/)[1];
            filterProducts(category);
        });
    });
}

// Render products based on current filter and sort
function renderProducts() {
    let filteredProducts = products;
    
    // Apply category filter
    if (currentFilter !== 'all') {
        filteredProducts = products.filter(product => product.category === currentFilter);
    }
    
    // Apply sorting
    filteredProducts = sortProductsArray(filteredProducts, currentSort);
    
    // Clear existing products
    productsGrid.innerHTML = '';
    
    // Reset display count
    currentDisplayCount = 6;
    
    // Render only first 6 products initially
    const productsToShow = filteredProducts.slice(0, currentDisplayCount);
    productsToShow.forEach(product => {
        const productCard = createProductCard(product);
        productsGrid.appendChild(productCard);
    });
    
    // Update load more button
    const loadMoreBtn = document.querySelector('.load-more-btn');
    if (loadMoreBtn) {
        if (filteredProducts.length <= currentDisplayCount) {
            loadMoreBtn.style.display = 'none';
        } else {
            loadMoreBtn.style.display = 'block';
            loadMoreBtn.textContent = 'Load More Products';
            loadMoreBtn.onclick = loadMoreProducts;
            loadMoreBtn.disabled = false;
        }
    }
}

// Create product card HTML
function createProductCard(product) {
    const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);
    
    const card = document.createElement('div');
    card.className = 'product-card fade-in-up';
    card.innerHTML = `
        <div class="product-image">
            <div class="product-badge">${product.badge}</div>
            <img src="${product.image}" alt="${product.name}" loading="lazy" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
            <div class="product-image-fallback" style="display: none; font-size: 3rem; align-items: center; justify-content: center; height: 100%; background: #f3f4f6;">📦</div>
            <div class="product-overlay">
                <button class="quick-view-btn" onclick="showProductDetails(${product.id})">
                    <i class="fas fa-eye"></i> Quick View
                </button>
            </div>
        </div>
        <div class="product-info">
            <div class="product-brand">${product.brand}</div>
            <h3 class="product-title">${product.name}</h3>
            <div class="product-rating">
                <div class="stars">${generateStars(product.rating)}</div>
                <span class="rating-text">(${product.reviews.toLocaleString()})</span>
            </div>
            <div class="product-price">
                <span class="current-price">$${product.price.toFixed(2)}</span>
                <span class="original-price">$${product.originalPrice.toFixed(2)}</span>
                <span class="discount">-${discount}%</span>
            </div>
            <div class="product-stock">
                <span class="stock-indicator ${product.inStock ? 'in-stock' : 'out-of-stock'}">
                    ${product.inStock ? `${product.stockCount} in stock` : 'Out of stock'}
                </span>
            </div>
            <div class="product-features">
                ${product.features.slice(0, 2).map(feature => `<span class="feature-tag">${feature}</span>`).join('')}
            </div>
            <button class="add-to-cart" onclick="addToCart(${product.id})" ${!product.inStock ? 'disabled' : ''}>
                <i class="fas fa-shopping-cart"></i> 
                ${product.inStock ? 'Add to Cart' : 'Out of Stock'}
            </button>
        </div>
    `;
    
    return card;
}

// Generate star rating HTML
function generateStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    let stars = '';
    
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

// Add product to cart - handled by cart-utils.js

// Remove product from cart - handled by cart-utils.js

// Update item quantity in cart - handled by cart-utils.js

// Cart UI functions - handled by cart-utils.js

// Toggle cart - handled by cart-utils.js

// Filter products by category
function filterProducts(category) {
    currentFilter = category;
    renderProducts();
    
    // Update active category
    document.querySelectorAll('.category-card').forEach(card => {
        card.classList.remove('active');
    });
    
    event.currentTarget.classList.add('active');
}

// Sort products
function sortProducts() {
    const sortSelect = document.getElementById('sortSelect');
    currentSort = sortSelect.value;
    renderProducts();
}

// Sort products array
function sortProductsArray(products, sortType) {
    const sorted = [...products];
    
    switch (sortType) {
        case 'price-low':
            return sorted.sort((a, b) => a.price - b.price);
        case 'price-high':
            return sorted.sort((a, b) => b.price - a.price);
        case 'name':
            return sorted.sort((a, b) => a.name.localeCompare(b.name));
        case 'rating':
            return sorted.sort((a, b) => b.rating - a.rating);
        default:
            return sorted;
    }
}

// Handle search
function handleSearch(event) {
    const searchTerm = event.target.value.toLowerCase();
    
    if (searchTerm === '') {
        renderProducts();
        return;
    }
    
    const filteredProducts = products.filter(product => 
        product.name.toLowerCase().includes(searchTerm) ||
        product.description.toLowerCase().includes(searchTerm) ||
        product.category.toLowerCase().includes(searchTerm)
    );
    
    // Clear and render filtered products
    productsGrid.innerHTML = '';
    filteredProducts.forEach(product => {
        const productCard = createProductCard(product);
        productsGrid.appendChild(productCard);
    });
}

// Load more products (simulate pagination)
let currentDisplayCount = 6;
const productsPerPage = 6;
let currentFilteredProducts = [];

function loadMoreProducts() {
    const productsGrid = document.getElementById('productsGrid');
    const loadMoreBtn = document.querySelector('.load-more-btn');
    
    if (!productsGrid || !loadMoreBtn) return;
    
    // Get current filtered products
    let filteredProducts = products;
    if (currentFilter !== 'all') {
        filteredProducts = products.filter(product => product.category === currentFilter);
    }
    filteredProducts = sortProductsArray(filteredProducts, currentSort);
    currentFilteredProducts = filteredProducts;
    
    // Show loading state
    loadMoreBtn.textContent = 'Loading...';
    loadMoreBtn.disabled = true;
    
    // Simulate loading delay
    setTimeout(() => {
        const startIndex = currentDisplayCount;
        const endIndex = Math.min(startIndex + productsPerPage, filteredProducts.length);
        
        // Display more products
        for (let i = startIndex; i < endIndex; i++) {
            const productCard = createProductCard(filteredProducts[i]);
            productsGrid.appendChild(productCard);
        }
        
        currentDisplayCount = endIndex;
        
        // Update button text or hide if no more products
        if (currentDisplayCount >= filteredProducts.length) {
            loadMoreBtn.textContent = 'See Fewer';
            loadMoreBtn.onclick = showFewerProducts;
        } else {
            loadMoreBtn.textContent = 'Load More Products';
            loadMoreBtn.disabled = false;
        }
    }, 500);
}

function showFewerProducts() {
    const productsGrid = document.getElementById('productsGrid');
    const loadMoreBtn = document.querySelector('.load-more-btn');
    
    if (!productsGrid || !loadMoreBtn) return;
    
    // Reset to initial count
    currentDisplayCount = 6;
    
    // Get current filtered products
    let filteredProducts = products;
    if (currentFilter !== 'all') {
        filteredProducts = products.filter(product => product.category === currentFilter);
    }
    filteredProducts = sortProductsArray(filteredProducts, currentSort);
    
    // Clear and redisplay initial products
    productsGrid.innerHTML = '';
    const productsToShow = filteredProducts.slice(0, currentDisplayCount);
    productsToShow.forEach(product => {
        const productCard = createProductCard(product);
        productsGrid.appendChild(productCard);
    });
    
    // Reset button
    loadMoreBtn.textContent = 'Load More Products';
    loadMoreBtn.onclick = loadMoreProducts;
    loadMoreBtn.disabled = false;
}

// Proceed to checkout
function proceedToCheckout() {
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
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div style="display: flex; align-items: center; gap: 10px;">
            <i class="fas fa-${getNotificationIcon(type)}"></i>
            <span>${message}</span>
        </div>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 20px;
        border-radius: 8px;
        color: white;
        font-weight: 600;
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 300px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        background: ${getNotificationColor(type)};
    `;
    
    // Add to DOM
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Auto remove after 3 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, 300);
    }, 3000);
}

// Get notification icon based on type
function getNotificationIcon(type) {
    const icons = {
        success: 'check-circle',
        error: 'exclamation-circle',
        info: 'info-circle',
        warning: 'exclamation-triangle'
    };
    return icons[type] || 'info-circle';
}

// Get notification color based on type
function getNotificationColor(type) {
    const colors = {
        success: '#10b981',
        error: '#ef4444',
        info: '#3b82f6',
        warning: '#f59e0b'
    };
    return colors[type] || '#3b82f6';
}

// Cart event listeners - handled by cart-utils.js

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add loading animation to buttons
function addLoadingAnimation(button, text = 'Loading...') {
    const originalText = button.textContent;
    button.textContent = text;
    button.disabled = true;
    
    return () => {
        button.textContent = originalText;
        button.disabled = false;
    };
}

// Simulate API calls with loading states
function simulateApiCall(callback, delay = 1000) {
    setTimeout(callback, delay);
}

// Cart initialization - handled by cart-utils.js

// Add some demo data interactions
function addDemoInteractions() {
    // Add click handlers for demo purposes
    document.querySelectorAll('.cta-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            showNotification('Welcome to TechMart! Start shopping now.', 'success');
        });
    });
    
    // Add hover effects to product cards
    document.addEventListener('mouseover', function(e) {
        if (e.target.closest('.product-card')) {
            e.target.closest('.product-card').style.transform = 'translateY(-5px)';
        }
    });
    
    document.addEventListener('mouseout', function(e) {
        if (e.target.closest('.product-card')) {
            e.target.closest('.product-card').style.transform = 'translateY(0)';
        }
    });
}

// Initialize demo interactions
document.addEventListener('DOMContentLoaded', function() {
    addDemoInteractions();
});

// Product Details Modal
function showProductDetails(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    const modal = document.createElement('div');
    modal.className = 'product-modal';
    modal.innerHTML = `
        <div class="modal-overlay" onclick="closeProductModal()"></div>
        <div class="modal-content">
            <button class="modal-close" onclick="closeProductModal()">
                <i class="fas fa-times"></i>
            </button>
            <div class="modal-body">
                <div class="modal-image">
                    <img src="${product.image}" alt="${product.name}" onerror="this.src='data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 400 300\"><rect width=\"400\" height=\"300\" fill=\"%23f3f4f6\"/><text x=\"50%\" y=\"50%\" text-anchor=\"middle\" dy=\".3em\" font-family=\"Arial\" font-size=\"48\" fill=\"%236b7280\">📦</text></svg>'">
                </div>
                <div class="modal-info">
                    <div class="modal-badge">${product.badge}</div>
                    <div class="modal-brand">${product.brand}</div>
                    <h2 class="modal-title">${product.name}</h2>
                    <div class="modal-rating">
                        <div class="stars">${generateStars(product.rating)}</div>
                        <span class="rating-text">${product.rating} (${product.reviews.toLocaleString()} reviews)</span>
                    </div>
                    <div class="modal-price">
                        <span class="current-price">$${product.price.toFixed(2)}</span>
                        <span class="original-price">$${product.originalPrice.toFixed(2)}</span>
                        <span class="discount">-${Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%</span>
                    </div>
                    <div class="modal-description">
                        <p>${product.description}</p>
                    </div>
                    <div class="modal-specifications">
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
                    <div class="modal-features">
                        <h4>Key Features:</h4>
                        <div class="features-list">
                            ${product.features.map(feature => `<span class="feature-item">${feature}</span>`).join('')}
                        </div>
                    </div>
                    <div class="modal-stock">
                        <span class="stock-indicator ${product.inStock ? 'in-stock' : 'out-of-stock'}">
                            ${product.inStock ? `${product.stockCount} in stock` : 'Out of stock'}
                        </span>
                    </div>
                    <div class="modal-actions">
                        <button class="add-to-cart-large" onclick="addToCart(${product.id}); closeProductModal();" ${!product.inStock ? 'disabled' : ''}>
                            <i class="fas fa-shopping-cart"></i> 
                            ${product.inStock ? 'Add to Cart' : 'Out of Stock'}
                        </button>
                        <button class="wishlist-btn" onclick="addToWishlist(${product.id})">
                            <i class="far fa-heart"></i> Add to Wishlist
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    document.body.style.overflow = 'hidden';
    
    // Animate modal in
    setTimeout(() => {
        modal.classList.add('show');
    }, 10);
}

function closeProductModal() {
    const modal = document.querySelector('.product-modal');
    if (modal) {
        modal.classList.remove('show');
        setTimeout(() => {
            modal.remove();
            document.body.style.overflow = 'auto';
        }, 300);
    }
}

function addToWishlist(productId) {
    showNotification('Added to wishlist!', 'success');
    // In a real app, this would save to localStorage or send to server
}

// Close modal with escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeProductModal();
    }
});

// Carousel Functions
function initializeCarousel() {
    // Start auto-slide
    startAutoSlide();
    
    // Pause on hover
    const carousel = document.querySelector('.carousel-container');
    if (carousel) {
        carousel.addEventListener('mouseenter', stopAutoSlide);
        carousel.addEventListener('mouseleave', startAutoSlide);
    }
}

function startAutoSlide() {
    slideInterval = setInterval(() => {
        changeSlide(1);
    }, 5000); // Change slide every 5 seconds
}

function stopAutoSlide() {
    clearInterval(slideInterval);
}

function changeSlide(direction) {
    const slides = document.querySelectorAll('.carousel-slide');
    const indicators = document.querySelectorAll('.indicator');
    
    // Remove active class from current slide
    slides[currentSlideIndex].classList.remove('active');
    indicators[currentSlideIndex].classList.remove('active');
    
    // Calculate new slide index
    currentSlideIndex += direction;
    
    // Handle wrap-around
    if (currentSlideIndex >= totalSlides) {
        currentSlideIndex = 0;
    } else if (currentSlideIndex < 0) {
        currentSlideIndex = totalSlides - 1;
    }
    
    // Add active class to new slide
    slides[currentSlideIndex].classList.add('active');
    indicators[currentSlideIndex].classList.add('active');
}

function currentSlide(slideNumber) {
    const slides = document.querySelectorAll('.carousel-slide');
    const indicators = document.querySelectorAll('.indicator');
    
    // Remove active class from current slide
    slides[currentSlideIndex].classList.remove('active');
    indicators[currentSlideIndex].classList.remove('active');
    
    // Set new slide index
    currentSlideIndex = slideNumber - 1;
    
    // Add active class to new slide
    slides[currentSlideIndex].classList.add('active');
    indicators[currentSlideIndex].classList.add('active');
    
    // Restart auto-slide
    stopAutoSlide();
    startAutoSlide();
}

// Touch/swipe support for mobile
let touchStartX = 0;
let touchEndX = 0;

document.addEventListener('touchstart', function(e) {
    touchStartX = e.changedTouches[0].screenX;
});

document.addEventListener('touchend', function(e) {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
});

function handleSwipe() {
    const swipeThreshold = 50; // Minimum distance for a swipe
    const swipeDistance = touchEndX - touchStartX;
    
    if (Math.abs(swipeDistance) > swipeThreshold) {
        if (swipeDistance > 0) {
            // Swipe right - previous slide
            changeSlide(-1);
        } else {
            // Swipe left - next slide
            changeSlide(1);
        }
    }
}

// Keyboard navigation
document.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowLeft') {
        changeSlide(-1);
    } else if (event.key === 'ArrowRight') {
        changeSlide(1);
    }
});

console.log('TechMart E-Commerce Demo loaded successfully!');
console.log('Features: Product catalog, Shopping cart, Search, Filtering, Sorting, Product details modal, Image carousel, Responsive design');
