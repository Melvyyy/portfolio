// Home & Garden Page JavaScript
let currentView = 'grid';
let currentCategory = 'all';
let currentPriceRange = '';
let currentRoom = '';
let currentStyle = '';

// Home & Garden Products Data
const homeGardenProducts = [
    // Furniture
    {
        id: 1,
        name: "Modern Sectional Sofa",
        brand: "Comfort Living",
        price: 899,
        originalPrice: 1199,
        image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop&crop=center",
        category: "furniture",
        room: "living",
        style: "modern",
        rating: 4.8,
        reviews: 156,
        stockCount: 8,
        features: ["L-Shaped Design", "Reversible Chaise", "Easy Assembly", "Stain Resistant"],
        specifications: {
            "Dimensions": "120\" x 84\" x 34\"",
            "Material": "Polyester Fabric",
            "Frame": "Hardwood",
            "Weight": "180 lbs"
        }
    },
    {
        id: 2,
        name: "Dining Table Set",
        brand: "Elegant Dining",
        price: 650,
        originalPrice: 850,
        image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop&crop=center",
        category: "furniture",
        room: "dining",
        style: "traditional",
        rating: 4.6,
        reviews: 89,
        stockCount: 12,
        features: ["Solid Oak Wood", "Seats 6 People", "Extendable", "Easy Clean"],
        specifications: {
            "Dimensions": "72\" x 40\" x 30\"",
            "Material": "Solid Oak",
            "Seating": "6 Chairs Included",
            "Weight": "120 lbs"
        }
    },
    {
        id: 3,
        name: "Platform Bed Frame",
        brand: "Sleep Well",
        price: 450,
        originalPrice: 600,
        image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop&crop=center",
        category: "furniture",
        room: "bedroom",
        style: "minimalist",
        rating: 4.7,
        reviews: 234,
        stockCount: 15,
        features: ["Low Profile", "No Box Spring Needed", "Under Bed Storage", "Easy Assembly"],
        specifications: {
            "Dimensions": "80\" x 60\" x 12\"",
            "Material": "Engineered Wood",
            "Weight Capacity": "500 lbs",
            "Weight": "85 lbs"
        }
    },

    // Home Decor
    {
        id: 4,
        name: "Abstract Wall Art",
        brand: "Art Gallery",
        price: 125,
        originalPrice: 175,
        image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=400&fit=crop&crop=center",
        category: "decor",
        room: "living",
        style: "modern",
        rating: 4.5,
        reviews: 67,
        stockCount: 20,
        features: ["Canvas Print", "Gallery Wrap", "Ready to Hang", "UV Resistant"],
        specifications: {
            "Dimensions": "24\" x 36\"",
            "Material": "Canvas",
            "Frame": "Gallery Wrap",
            "Weight": "3 lbs"
        }
    },
    {
        id: 5,
        name: "Floor Lamp",
        brand: "Lighting Plus",
        price: 85,
        originalPrice: 120,
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=center",
        category: "decor",
        room: "living",
        style: "modern",
        rating: 4.4,
        reviews: 123,
        stockCount: 18,
        features: ["Adjustable Height", "LED Bulb Included", "Touch Control", "Modern Design"],
        specifications: {
            "Height": "60\"",
            "Material": "Metal & Fabric",
            "Bulb": "LED (included)",
            "Weight": "12 lbs"
        }
    },
    {
        id: 6,
        name: "Area Rug",
        brand: "Rug Masters",
        price: 180,
        originalPrice: 250,
        image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop&crop=center",
        category: "decor",
        room: "living",
        style: "traditional",
        rating: 4.6,
        reviews: 89,
        stockCount: 14,
        features: ["Hand Woven", "Non-Slip Backing", "Easy Clean", "Fade Resistant"],
        specifications: {
            "Dimensions": "8' x 10'",
            "Material": "Wool Blend",
            "Thickness": "0.5\"",
            "Weight": "25 lbs"
        }
    },

    // Kitchen & Dining
    {
        id: 7,
        name: "Stainless Steel Cookware Set",
        brand: "Chef's Choice",
        price: 220,
        originalPrice: 300,
        image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop&crop=center",
        category: "kitchen",
        room: "kitchen",
        style: "modern",
        rating: 4.8,
        reviews: 345,
        stockCount: 25,
        features: ["10-Piece Set", "Dishwasher Safe", "Oven Safe", "Non-Stick Coating"],
        specifications: {
            "Pieces": "10",
            "Material": "Stainless Steel",
            "Coating": "Non-Stick",
            "Weight": "15 lbs"
        }
    },
    {
        id: 8,
        name: "Coffee Maker",
        brand: "Brew Master",
        price: 95,
        originalPrice: 130,
        image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop&crop=center",
        category: "kitchen",
        room: "kitchen",
        style: "modern",
        rating: 4.7,
        reviews: 456,
        stockCount: 30,
        features: ["12-Cup Capacity", "Programmable", "Auto Shut-Off", "Glass Carafe"],
        specifications: {
            "Capacity": "12 cups",
            "Material": "Plastic & Glass",
            "Power": "900W",
            "Weight": "5 lbs"
        }
    },
    {
        id: 9,
        name: "Dining Chairs (Set of 4)",
        brand: "Seating Solutions",
        price: 320,
        originalPrice: 400,
        image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop&crop=center",
        category: "kitchen",
        room: "dining",
        style: "modern",
        rating: 4.5,
        reviews: 178,
        stockCount: 16,
        features: ["Upholstered Seats", "Wooden Legs", "Easy Assembly", "Comfortable"],
        specifications: {
            "Quantity": "4 Chairs",
            "Material": "Fabric & Wood",
            "Height": "32\"",
            "Weight": "40 lbs"
        }
    },

    // Bedroom
    {
        id: 10,
        name: "Memory Foam Mattress",
        brand: "Sleep Comfort",
        price: 550,
        originalPrice: 750,
        image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop&crop=center",
        category: "bedroom",
        room: "bedroom",
        style: "modern",
        rating: 4.9,
        reviews: 567,
        stockCount: 10,
        features: ["10-inch Thickness", "Cooling Gel", "Pressure Relief", "Hypoallergenic"],
        specifications: {
            "Size": "Queen",
            "Thickness": "10 inches",
            "Material": "Memory Foam",
            "Weight": "80 lbs"
        }
    },
    {
        id: 11,
        name: "Dresser with Mirror",
        brand: "Bedroom Essentials",
        price: 425,
        originalPrice: 550,
        image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop&crop=center",
        category: "bedroom",
        room: "bedroom",
        style: "traditional",
        rating: 4.6,
        reviews: 234,
        stockCount: 8,
        features: ["6 Drawers", "Attached Mirror", "Soft Close", "Easy Assembly"],
        specifications: {
            "Dimensions": "60\" x 18\" x 32\"",
            "Material": "Engineered Wood",
            "Drawers": "6",
            "Weight": "120 lbs"
        }
    },
    {
        id: 12,
        name: "Bedding Set",
        brand: "Luxury Linens",
        price: 85,
        originalPrice: 120,
        image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop&crop=center",
        category: "bedroom",
        room: "bedroom",
        style: "modern",
        rating: 4.7,
        reviews: 189,
        stockCount: 35,
        features: ["100% Cotton", "Deep Pockets", "Wrinkle Resistant", "Machine Washable"],
        specifications: {
            "Size": "Queen",
            "Material": "100% Cotton",
            "Thread Count": "300",
            "Weight": "3 lbs"
        }
    },

    // Garden & Outdoor
    {
        id: 13,
        name: "Outdoor Dining Set",
        brand: "Garden Living",
        price: 450,
        originalPrice: 600,
        image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=400&fit=crop&crop=center",
        category: "garden",
        room: "outdoor",
        style: "rustic",
        rating: 4.5,
        reviews: 123,
        stockCount: 12,
        features: ["Weather Resistant", "Seats 4 People", "Easy Assembly", "UV Protected"],
        specifications: {
            "Material": "Aluminum & Glass",
            "Seating": "4 Chairs",
            "Table Size": "48\" x 48\"",
            "Weight": "80 lbs"
        }
    },
    {
        id: 14,
        name: "Garden Tools Set",
        brand: "Green Thumb",
        price: 65,
        originalPrice: 90,
        image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=400&fit=crop&crop=center",
        category: "garden",
        room: "outdoor",
        style: "traditional",
        rating: 4.6,
        reviews: 234,
        stockCount: 40,
        features: ["8-Piece Set", "Stainless Steel", "Ergonomic Handles", "Storage Case"],
        specifications: {
            "Pieces": "8",
            "Material": "Stainless Steel",
            "Handles": "Wood",
            "Weight": "8 lbs"
        }
    },
    {
        id: 15,
        name: "Plant Pots (Set of 6)",
        brand: "Garden Decor",
        price: 45,
        originalPrice: 65,
        image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=400&fit=crop&crop=center",
        category: "garden",
        room: "outdoor",
        style: "modern",
        rating: 4.4,
        reviews: 156,
        stockCount: 50,
        features: ["Terracotta Material", "Drainage Holes", "Various Sizes", "Indoor/Outdoor"],
        specifications: {
            "Quantity": "6 Pots",
            "Material": "Terracotta",
            "Sizes": "4\" to 8\"",
            "Weight": "12 lbs"
        }
    },

    // Storage & Organization
    {
        id: 16,
        name: "Storage Bins (Set of 6)",
        brand: "Organize It",
        price: 35,
        originalPrice: 50,
        image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop&crop=center",
        category: "storage",
        room: "living",
        style: "modern",
        rating: 4.5,
        reviews: 189,
        stockCount: 60,
        features: ["Clear Design", "Stackable", "Easy to Clean", "Durable"],
        specifications: {
            "Quantity": "6 Bins",
            "Material": "Plastic",
            "Dimensions": "12\" x 8\" x 6\"",
            "Weight": "5 lbs"
        }
    },
    {
        id: 17,
        name: "Bookshelf",
        brand: "Storage Solutions",
        price: 180,
        originalPrice: 240,
        image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop&crop=center",
        category: "storage",
        room: "living",
        style: "modern",
        rating: 4.7,
        reviews: 267,
        stockCount: 15,
        features: ["5 Shelves", "Adjustable Heights", "Easy Assembly", "Sturdy Construction"],
        specifications: {
            "Dimensions": "72\" x 30\" x 12\"",
            "Material": "Engineered Wood",
            "Shelves": "5",
            "Weight": "65 lbs"
        }
    },
    {
        id: 18,
        name: "Closet Organizer",
        brand: "Closet Max",
        price: 125,
        originalPrice: 175,
        image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop&crop=center",
        category: "storage",
        room: "bedroom",
        style: "modern",
        rating: 4.6,
        reviews: 198,
        stockCount: 22,
        features: ["Hanging Rods", "Shelves", "Drawers", "Easy Installation"],
        specifications: {
            "Dimensions": "48\" x 24\" x 72\"",
            "Material": "Steel & Fabric",
            "Components": "Rods, Shelves, Drawers",
            "Weight": "45 lbs"
        }
    }
];

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
    displayProducts(homeGardenProducts);
    setupEventListeners();
});

// Setup event listeners
function setupEventListeners() {
    // Search functionality
    document.getElementById('searchInput').addEventListener('input', handleSearch);
    
    // Filter functionality
    document.getElementById('categoryFilter').addEventListener('change', handleFilter);
    document.getElementById('priceFilter').addEventListener('change', handleFilter);
    document.getElementById('roomFilter').addEventListener('change', handleFilter);
    document.getElementById('styleFilter').addEventListener('change', handleFilter);
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
            <div class="product-image-fallback" style="display: none; font-size: 3rem; align-items: center; justify-content: center; height: 100%; background: #f3f4f6;">🏠</div>
            <div class="product-overlay">
                <button class="quick-view-btn" onclick="event.stopPropagation(); showProductDetails(${product.id})">
                    <i class="fas fa-eye"></i> Quick View
                </button>
            </div>
            ${discount > 0 ? `<span class="discount-badge home-discount">-${discount}%</span>` : ''}
            ${product.stockCount < 5 ? `<span class="stock-badge home-stock">Only ${product.stockCount} left</span>` : ''}
        </div>
        <div class="product-info">
            <div class="product-brand home-brand">${product.brand}</div>
            <h3 class="product-name">${product.name}</h3>
            <div class="product-details home-details">
                <span class="product-room">Room: ${product.room}</span>
                <span class="product-style">Style: ${product.style}</span>
            </div>
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
                ${product.features.slice(0, 2).map(feature => `<span class="feature-tag home-feature">${feature}</span>`).join('')}
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
    const filteredProducts = homeGardenProducts.filter(product => 
        product.name.toLowerCase().includes(searchTerm) ||
        product.brand.toLowerCase().includes(searchTerm) ||
        product.category.toLowerCase().includes(searchTerm)
    );
    displayProducts(filteredProducts);
}

// Handle filters
function handleFilter() {
    const category = document.getElementById('categoryFilter').value;
    const priceRange = document.getElementById('priceFilter').value;
    const room = document.getElementById('roomFilter').value;
    const style = document.getElementById('styleFilter').value;
    
    let filteredProducts = homeGardenProducts;
    
    // Filter by category
    if (category) {
        filteredProducts = filteredProducts.filter(product => product.category === category);
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
    
    // Filter by room
    if (room) {
        filteredProducts = filteredProducts.filter(product => product.room === room);
    }
    
    // Filter by style
    if (style) {
        filteredProducts = filteredProducts.filter(product => product.style === style);
    }
    
    displayProducts(filteredProducts);
}

// Filter by category
function filterByCategory(category) {
    currentCategory = category;
    const filteredProducts = homeGardenProducts.filter(product => product.category === category);
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
    document.getElementById('categoryFilter').value = '';
    document.getElementById('priceFilter').value = '';
    document.getElementById('roomFilter').value = '';
    document.getElementById('styleFilter').value = '';
    document.getElementById('searchInput').value = '';
    currentCategory = 'all';
    
    document.querySelectorAll('.category-card').forEach(card => {
        card.classList.remove('active');
    });
    
    displayProducts(homeGardenProducts);
}

// Add to cart - using shared cart utilities
function addToCart(productId) {
    const product = homeGardenProducts.find(p => p.id === productId);
    if (product) {
        // Use the shared cart utility
        window.addToCart(productId, product);
    }
}

// Update cart display
function updateCartDisplay() {
    const cartCount = document.getElementById('cartCount');
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
    
    // Update cart items in sidebar
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');
    
    if (cart.length === 0) {
        cartItems.innerHTML = '<div class="empty-cart">Your cart is empty</div>';
        cartTotal.textContent = '0.00';
    } else {
        cartItems.innerHTML = cart.map(item => `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}">
                <div class="cart-item-info">
                    <h4>${item.name}</h4>
                    <p>Room: ${item.room} | Style: ${item.style}</p>
                    <p>$${item.price} x ${item.quantity}</p>
                </div>
                <div class="cart-item-actions">
                    <button onclick="updateQuantity(${item.id}, -1)">-</button>
                    <span>${item.quantity}</span>
                    <button onclick="updateQuantity(${item.id}, 1)">+</button>
                    <button onclick="removeFromCart(${item.id})" class="remove-btn">×</button>
                </div>
            </div>
        `).join('');
        
        const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        cartTotal.textContent = total.toFixed(2);
    }
}

// Update quantity
function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            cart = cart.filter(item => item.id !== productId);
        }
        updateCartDisplay();
    }
}

// Remove from cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartDisplay();
}

// Toggle cart
function toggleCart() {
    const cartOverlay = document.getElementById('cartOverlay');
    cartOverlay.classList.toggle('active');
}

// Show product details
function showProductDetails(productId) {
    const product = homeGardenProducts.find(p => p.id === productId);
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
                    <div class="product-details">
                        <p><strong>Room:</strong> ${product.room}</p>
                        <p><strong>Style:</strong> ${product.style}</p>
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

// Home & Garden Carousel Functionality
let currentHomeSlideIndex = 0;
let homeCarouselInterval;

// Initialize home carousel
function initializeHomeCarousel() {
    const slides = document.querySelectorAll('#homeCarouselSlides .carousel-slide');
    const indicators = document.querySelectorAll('.carousel-indicators .indicator');
    
    if (slides.length === 0) return;
    
    // Set initial slide
    showHomeSlide(0);
    
    // Start auto-slide
    startHomeAutoSlide();
    
    // Add event listeners for indicators
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => currentHomeSlide(index + 1));
    });
}

// Show specific slide
function showHomeSlide(index) {
    const slides = document.querySelectorAll('#homeCarouselSlides .carousel-slide');
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
    
    currentHomeSlideIndex = index;
}

// Change slide (next/previous)
function changeHomeSlide(direction) {
    const slides = document.querySelectorAll('#homeCarouselSlides .carousel-slide');
    if (slides.length === 0) return;
    
    let newIndex = currentHomeSlideIndex + direction;
    
    if (newIndex >= slides.length) {
        newIndex = 0;
    } else if (newIndex < 0) {
        newIndex = slides.length - 1;
    }
    
    showHomeSlide(newIndex);
}

// Go to specific slide
function currentHomeSlide(slideNumber) {
    showHomeSlide(slideNumber - 1);
}

// Start auto-slide
function startHomeAutoSlide() {
    stopHomeAutoSlide();
    homeCarouselInterval = setInterval(() => {
        changeHomeSlide(1);
    }, 5000);
}

// Stop auto-slide
function stopHomeAutoSlide() {
    if (homeCarouselInterval) {
        clearInterval(homeCarouselInterval);
    }
}

// Initialize carousel when page loads
document.addEventListener('DOMContentLoaded', function() {
    // Initialize existing functionality
    renderProducts();
    updateCartUI();
    setupEventListeners();
    
    // Initialize home carousel
    initializeHomeCarousel();
    
    // Pause carousel on hover
    const carousel = document.querySelector('.carousel-container');
    if (carousel) {
        carousel.addEventListener('mouseenter', stopHomeAutoSlide);
        carousel.addEventListener('mouseleave', startHomeAutoSlide);
    }
});

// Keyboard navigation
document.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowLeft') {
        changeHomeSlide(-1);
    } else if (event.key === 'ArrowRight') {
        changeHomeSlide(1);
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
    handleHomeSwipe();
});

function handleHomeSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartX - touchEndX;
    
    if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
            // Swipe left - next slide
            changeHomeSlide(1);
        } else {
            // Swipe right - previous slide
            changeHomeSlide(-1);
        }
    }
}
