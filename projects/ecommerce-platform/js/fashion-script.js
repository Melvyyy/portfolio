// Fashion Page JavaScript
let currentView = 'grid';
let currentCategory = 'all';
let currentSize = '';
let currentPriceRange = '';
let currentColor = '';

// Fashion Products Data
const fashionProducts = [
    // Women's Fashion
    {
        id: 1,
        name: "Elegant Summer Dress",
        brand: "ChicStyle",
        price: 89,
        originalPrice: 120,
        image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=400&fit=crop&crop=center",
        category: "women",
        size: "M",
        color: "blue",
        rating: 4.7,
        reviews: 234,
        stockCount: 12,
        features: ["Lightweight Fabric", "A-Line Silhouette", "Machine Washable", "Comfortable Fit"],
        specifications: {
            "Material": "100% Cotton",
            "Care": "Machine Wash Cold",
            "Fit": "Regular Fit",
            "Length": "Knee Length"
        }
    },
    {
        id: 2,
        name: "Designer Blouse",
        brand: "Fashion Forward",
        price: 65,
        originalPrice: 85,
        image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=400&fit=crop&crop=center",
        category: "women",
        size: "L",
        color: "white",
        rating: 4.5,
        reviews: 189,
        stockCount: 8,
        features: ["Silk Material", "Button Front", "Long Sleeves", "Professional Look"],
        specifications: {
            "Material": "100% Silk",
            "Care": "Dry Clean Only",
            "Fit": "Slim Fit",
            "Sleeves": "Long Sleeves"
        }
    },
    {
        id: 3,
        name: "High-Waist Jeans",
        brand: "Denim Co.",
        price: 75,
        originalPrice: 95,
        image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400&h=400&fit=crop&crop=center",
        category: "women",
        size: "S",
        color: "blue",
        rating: 4.6,
        reviews: 312,
        stockCount: 15,
        features: ["High Waist", "Stretch Denim", "Skinny Fit", "Distressed Details"],
        specifications: {
            "Material": "98% Cotton, 2% Elastane",
            "Care": "Machine Wash Cold",
            "Fit": "Skinny Fit",
            "Rise": "High Waist"
        }
    },

    // Men's Fashion
    {
        id: 4,
        name: "Classic White Shirt",
        brand: "Gentleman's Choice",
        price: 55,
        originalPrice: 70,
        image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&h=400&fit=crop&crop=center",
        category: "men",
        size: "L",
        color: "white",
        rating: 4.8,
        reviews: 456,
        stockCount: 20,
        features: ["100% Cotton", "Button Down", "Classic Collar", "Professional"],
        specifications: {
            "Material": "100% Cotton",
            "Care": "Machine Wash",
            "Fit": "Regular Fit",
            "Collar": "Button Down"
        }
    },
    {
        id: 5,
        name: "Slim Fit Chinos",
        brand: "Urban Style",
        price: 68,
        originalPrice: 85,
        image: "https://images.unsplash.com/photo-1506629905607-3a4b4b4b4b4b?w=400&h=400&fit=crop&crop=center",
        category: "men",
        size: "M",
        color: "black",
        rating: 4.4,
        reviews: 278,
        stockCount: 18,
        features: ["Slim Fit", "Stretch Fabric", "Modern Cut", "Versatile"],
        specifications: {
            "Material": "98% Cotton, 2% Elastane",
            "Care": "Machine Wash",
            "Fit": "Slim Fit",
            "Style": "Chinos"
        }
    },
    {
        id: 6,
        name: "Casual Blazer",
        brand: "Executive Wear",
        price: 125,
        originalPrice: 160,
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=center",
        category: "men",
        size: "XL",
        color: "blue",
        rating: 4.9,
        reviews: 189,
        stockCount: 6,
        features: ["Wool Blend", "Two Button", "Notched Lapel", "Professional"],
        specifications: {
            "Material": "70% Wool, 30% Polyester",
            "Care": "Dry Clean Only",
            "Fit": "Regular Fit",
            "Style": "Single Breasted"
        }
    },

    // Shoes
    {
        id: 7,
        name: "Leather Ankle Boots",
        brand: "ShoeCraft",
        price: 145,
        originalPrice: 180,
        image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop&crop=center",
        category: "shoes",
        size: "8",
        color: "black",
        rating: 4.7,
        reviews: 423,
        stockCount: 10,
        features: ["Genuine Leather", "Rubber Sole", "Ankle Height", "Comfortable"],
        specifications: {
            "Material": "Genuine Leather Upper",
            "Sole": "Rubber",
            "Heel": "Flat",
            "Closure": "Zipper"
        }
    },
    {
        id: 8,
        name: "Running Sneakers",
        brand: "SportMax",
        price: 95,
        originalPrice: 120,
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop&crop=center",
        category: "shoes",
        size: "9",
        color: "white",
        rating: 4.6,
        reviews: 567,
        stockCount: 25,
        features: ["Breathable Mesh", "Cushioned Sole", "Lightweight", "Athletic"],
        specifications: {
            "Material": "Mesh Upper",
            "Sole": "EVA Foam",
            "Heel": "Low",
            "Type": "Running Shoes"
        }
    },
    {
        id: 9,
        name: "High Heel Pumps",
        brand: "Elegance",
        price: 78,
        originalPrice: 95,
        image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400&h=400&fit=crop&crop=center",
        category: "shoes",
        size: "7",
        color: "red",
        rating: 4.5,
        reviews: 234,
        stockCount: 14,
        features: ["Patent Leather", "3-inch Heel", "Pointed Toe", "Elegant"],
        specifications: {
            "Material": "Patent Leather",
            "Heel": "3 inches",
            "Toe": "Pointed",
            "Style": "Pumps"
        }
    },

    // Accessories
    {
        id: 10,
        name: "Leather Handbag",
        brand: "Luxury Bags",
        price: 165,
        originalPrice: 200,
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop&crop=center",
        category: "accessories",
        size: "One Size",
        color: "black",
        rating: 4.8,
        reviews: 189,
        stockCount: 8,
        features: ["Genuine Leather", "Multiple Compartments", "Adjustable Strap", "Timeless Design"],
        specifications: {
            "Material": "Genuine Leather",
            "Dimensions": '12" x 8" x 4"',
            "Closure": "Zipper",
            "Strap": "Adjustable"
        }
    },
    {
        id: 11,
        name: "Gold Watch",
        brand: "TimeMaster",
        price: 285,
        originalPrice: 350,
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop&crop=center",
        category: "accessories",
        size: "One Size",
        color: "gold",
        rating: 4.9,
        reviews: 156,
        stockCount: 5,
        features: ["Stainless Steel", "Water Resistant", "Chronograph", "Luxury"],
        specifications: {
            "Material": "Stainless Steel",
            "Water Resistance": "50m",
            "Movement": "Quartz",
            "Crystal": "Sapphire"
        }
    },
    {
        id: 12,
        name: "Silk Scarf",
        brand: "Elegant Touch",
        price: 45,
        originalPrice: 60,
        image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400&h=400&fit=crop&crop=center",
        category: "accessories",
        size: "One Size",
        color: "pink",
        rating: 4.4,
        reviews: 98,
        stockCount: 22,
        features: ["100% Silk", "Hand Painted", "Versatile", "Luxury"],
        specifications: {
            "Material": "100% Silk",
            "Dimensions": '35" x 35"',
            "Care": "Dry Clean Only",
            "Pattern": "Hand Painted"
        }
    },

    // Kids' Fashion
    {
        id: 13,
        name: "Kids' T-Shirt Set",
        brand: "Little Stars",
        price: 25,
        originalPrice: 35,
        image: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=400&h=400&fit=crop&crop=center",
        category: "kids",
        size: "S",
        color: "green",
        rating: 4.6,
        reviews: 145,
        stockCount: 30,
        features: ["100% Cotton", "Machine Washable", "Fun Prints", "Comfortable"],
        specifications: {
            "Material": "100% Cotton",
            "Care": "Machine Wash",
            "Age Range": "4-6 years",
            "Set": "2 Pack"
        }
    },
    {
        id: 14,
        name: "Children's Sneakers",
        brand: "Kids Comfort",
        price: 45,
        originalPrice: 60,
        image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop&crop=center",
        category: "kids",
        size: "12",
        color: "blue",
        rating: 4.5,
        reviews: 203,
        stockCount: 18,
        features: ["Velcro Closure", "Non-Slip Sole", "Breathable", "Easy to Wear"],
        specifications: {
            "Material": "Canvas Upper",
            "Sole": "Rubber",
            "Closure": "Velcro",
            "Age Range": "6-8 years"
        }
    },

    // Sportswear
    {
        id: 15,
        name: "Yoga Leggings",
        brand: "ActiveWear",
        price: 55,
        originalPrice: 70,
        image: "https://images.unsplash.com/photo-1506629905607-3a4b4b4b4b4b?w=400&h=400&fit=crop&crop=center",
        category: "sports",
        size: "M",
        color: "black",
        rating: 4.7,
        reviews: 312,
        stockCount: 20,
        features: ["High Waist", "Stretch Fabric", "Moisture Wicking", "Comfortable"],
        specifications: {
            "Material": "88% Polyester, 12% Elastane",
            "Care": "Machine Wash Cold",
            "Fit": "High Waist",
            "Activity": "Yoga/Workout"
        }
    },
    {
        id: 16,
        name: "Running Shorts",
        brand: "SportMax",
        price: 35,
        originalPrice: 45,
        image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=400&fit=crop&crop=center",
        category: "sports",
        size: "L",
        color: "blue",
        rating: 4.5,
        reviews: 189,
        stockCount: 25,
        features: ["Lightweight", "Quick Dry", "Elastic Waist", "Athletic"],
        specifications: {
            "Material": "100% Polyester",
            "Care": "Machine Wash",
            "Fit": "Regular Fit",
            "Activity": "Running/Athletics"
        }
    },
    
    // Additional Women's Fashion
    {
        id: 13,
        name: "Floral Maxi Dress",
        brand: "Boho Chic",
        price: 95,
        originalPrice: 125,
        image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400&h=400&fit=crop&crop=center",
        category: "women",
        size: "L",
        color: "floral",
        rating: 4.6,
        reviews: 178,
        stockCount: 7,
        features: ["Floral Print", "Maxi Length", "Flowy Silhouette", "Boho Style"],
        specifications: {
            "Material": "100% Viscose",
            "Care": "Hand Wash",
            "Fit": "Relaxed Fit",
            "Length": "Maxi"
        }
    },
    {
        id: 14,
        name: "Leather Jacket",
        brand: "Rebel Style",
        price: 180,
        originalPrice: 220,
        image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=400&fit=crop&crop=center",
        category: "women",
        size: "M",
        color: "black",
        rating: 4.8,
        reviews: 89,
        stockCount: 4,
        features: ["Genuine Leather", "Zipper Closure", "Asymmetric Design", "Edgy Look"],
        specifications: {
            "Material": "100% Genuine Leather",
            "Care": "Professional Clean",
            "Fit": "Slim Fit",
            "Closure": "Zipper"
        }
    },
    {
        id: 15,
        name: "Cashmere Sweater",
        brand: "Luxury Knits",
        price: 120,
        originalPrice: 150,
        image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=400&h=400&fit=crop&crop=center",
        category: "women",
        size: "S",
        color: "cream",
        rating: 4.9,
        reviews: 156,
        stockCount: 6,
        features: ["100% Cashmere", "Oversized Fit", "Ribbed Details", "Luxury Feel"],
        specifications: {
            "Material": "100% Cashmere",
            "Care": "Hand Wash Cold",
            "Fit": "Oversized",
            "Style": "Pullover"
        }
    },
    
    // Additional Men's Fashion
    {
        id: 16,
        name: "Denim Jacket",
        brand: "Classic Denim",
        price: 85,
        originalPrice: 110,
        image: "https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=400&h=400&fit=crop&crop=center",
        category: "men",
        size: "L",
        color: "blue",
        rating: 4.5,
        reviews: 234,
        stockCount: 12,
        features: ["Classic Denim", "Button Closure", "Chest Pockets", "Timeless Style"],
        specifications: {
            "Material": "100% Cotton Denim",
            "Care": "Machine Wash",
            "Fit": "Regular Fit",
            "Closure": "Button"
        }
    },
    {
        id: 17,
        name: "Wool Blazer",
        brand: "Executive Style",
        price: 150,
        originalPrice: 200,
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=center",
        category: "men",
        size: "M",
        color: "navy",
        rating: 4.7,
        reviews: 98,
        stockCount: 8,
        features: ["Wool Blend", "Single Breasted", "Notched Lapel", "Professional"],
        specifications: {
            "Material": "70% Wool, 30% Polyester",
            "Care": "Dry Clean Only",
            "Fit": "Slim Fit",
            "Style": "Single Breasted"
        }
    },
    {
        id: 18,
        name: "Hoodie",
        brand: "Street Style",
        price: 45,
        originalPrice: 60,
        image: "https://images.unsplash.com/photo-1556821840-3a63f95609a4?w=400&h=400&fit=crop&crop=center",
        category: "men",
        size: "XL",
        color: "gray",
        rating: 4.4,
        reviews: 312,
        stockCount: 18,
        features: ["Cotton Blend", "Kangaroo Pocket", "Drawstring Hood", "Casual Comfort"],
        specifications: {
            "Material": "80% Cotton, 20% Polyester",
            "Care": "Machine Wash",
            "Fit": "Relaxed Fit",
            "Style": "Pullover"
        }
    },
    
    // Additional Shoes
    {
        id: 19,
        name: "High Heels",
        brand: "Elegant Steps",
        price: 75,
        originalPrice: 95,
        image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400&h=400&fit=crop&crop=center",
        category: "shoes",
        size: "8",
        color: "black",
        rating: 4.6,
        reviews: 145,
        stockCount: 9,
        features: ["Leather Upper", "4-inch Heel", "Pointed Toe", "Evening Wear"],
        specifications: {
            "Material": "Genuine Leather",
            "Heel Height": "4 inches",
            "Toe Style": "Pointed",
            "Occasion": "Evening"
        }
    },
    {
        id: 20,
        name: "Sneakers",
        brand: "Athletic Pro",
        price: 90,
        originalPrice: 120,
        image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop&crop=center",
        category: "shoes",
        size: "10",
        color: "white",
        rating: 4.8,
        reviews: 267,
        stockCount: 15,
        features: ["Breathable Mesh", "Cushioned Sole", "Lace Closure", "Athletic Style"],
        specifications: {
            "Material": "Mesh Upper",
            "Sole": "Rubber",
            "Closure": "Lace-up",
            "Style": "Athletic"
        }
    },
    
    // Additional Accessories
    {
        id: 21,
        name: "Designer Handbag",
        brand: "Luxury Bags",
        price: 200,
        originalPrice: 280,
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop&crop=center",
        category: "accessories",
        size: "One Size",
        color: "brown",
        rating: 4.9,
        reviews: 78,
        stockCount: 5,
        features: ["Genuine Leather", "Gold Hardware", "Multiple Compartments", "Designer Brand"],
        specifications: {
            "Material": "Genuine Leather",
            "Hardware": "Gold-tone",
            "Compartments": "Multiple",
            "Style": "Tote"
        }
    },
    {
        id: 22,
        name: "Silk Scarf",
        brand: "Elegant Touch",
        price: 35,
        originalPrice: 50,
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop&crop=center",
        category: "accessories",
        size: "One Size",
        color: "multicolor",
        rating: 4.7,
        reviews: 123,
        stockCount: 22,
        features: ["100% Silk", "Floral Print", "Square Shape", "Versatile Styling"],
        specifications: {
            "Material": "100% Silk",
            "Shape": "Square",
            "Print": "Floral",
            "Size": "90x90cm"
        }
    },
    
    // Additional Kids' Fashion
    {
        id: 23,
        name: "Princess Dress",
        brand: "Fairy Tale",
        price: 25,
        originalPrice: 35,
        image: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=400&h=400&fit=crop&crop=center",
        category: "kids",
        size: "4T",
        color: "pink",
        rating: 4.8,
        reviews: 89,
        stockCount: 14,
        features: ["Tulle Skirt", "Sparkly Details", "Elastic Waist", "Play Dress"],
        specifications: {
            "Material": "Polyester Tulle",
            "Care": "Hand Wash",
            "Fit": "Loose Fit",
            "Style": "Princess"
        }
    },
    {
        id: 24,
        name: "Boys' T-Shirt",
        brand: "Little Man",
        price: 15,
        originalPrice: 20,
        image: "https://images.unsplash.com/photo-1506629905607-3a4b4b4b4b4b?w=400&h=400&fit=crop&crop=center",
        category: "kids",
        size: "6",
        color: "blue",
        rating: 4.5,
        reviews: 156,
        stockCount: 25,
        features: ["100% Cotton", "Graphic Print", "Short Sleeves", "Comfortable Fit"],
        specifications: {
            "Material": "100% Cotton",
            "Care": "Machine Wash",
            "Fit": "Regular Fit",
            "Style": "Graphic Tee"
        }
    }
];

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
    displayProducts(fashionProducts);
    setupEventListeners();
    
    // Initialize fashion carousel
    initializeFashionCarousel();
    
    // Pause carousel on hover
    const carousel = document.querySelector('.carousel-container');
    if (carousel) {
        carousel.addEventListener('mouseenter', stopFashionAutoSlide);
        carousel.addEventListener('mouseleave', startFashionAutoSlide);
    }
});

// Setup event listeners
function setupEventListeners() {
    // Search functionality
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', handleSearch);
    }
    
    // Filter functionality
    const categoryFilter = document.getElementById('categoryFilter');
    if (categoryFilter) {
        categoryFilter.addEventListener('change', handleFilter);
    }
    
    const sizeFilter = document.getElementById('sizeFilter');
    if (sizeFilter) {
        sizeFilter.addEventListener('change', handleFilter);
    }
    
    const priceFilter = document.getElementById('priceFilter');
    if (priceFilter) {
        priceFilter.addEventListener('change', handleFilter);
    }
    
    const colorFilter = document.getElementById('colorFilter');
    if (colorFilter) {
        colorFilter.addEventListener('change', handleFilter);
    }
}

// Display products
function displayProducts(products) {
    const productsGrid = document.getElementById('productsGrid');
    
    if (!productsGrid) {
        console.error('Products grid element not found!');
        return;
    }
    
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
    card.className = `product-card fashion-product ${currentView === 'list' ? 'list-view' : ''}`;
    
    const discount = product.originalPrice ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100) : 0;
    
    card.innerHTML = `
        <div class="product-image">
            <img src="${product.image}" alt="${product.name}" loading="lazy" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
            <div class="product-image-fallback" style="display: none; font-size: 3rem; align-items: center; justify-content: center; height: 100%; background: #f3f4f6;">👗</div>
            <div class="product-overlay">
                <button class="quick-view-btn" onclick="event.stopPropagation(); showProductDetails(${product.id})">
                    <i class="fas fa-eye"></i> Quick View
                </button>
            </div>
            ${discount > 0 ? `<span class="discount-badge fashion-discount">-${discount}%</span>` : ''}
            ${product.stockCount < 5 ? `<span class="stock-badge fashion-stock">Only ${product.stockCount} left</span>` : ''}
        </div>
        <div class="product-info">
            <div class="product-brand fashion-brand">${product.brand}</div>
            <h3 class="product-name">${product.name}</h3>
            <div class="product-details fashion-details">
                <span class="product-size">Size: ${product.size}</span>
                <span class="product-color">Color: ${product.color}</span>
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
                ${product.features.slice(0, 2).map(feature => `<span class="feature-tag fashion-feature">${feature}</span>`).join('')}
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
    const filteredProducts = fashionProducts.filter(product => 
        product.name.toLowerCase().includes(searchTerm) ||
        product.brand.toLowerCase().includes(searchTerm) ||
        product.category.toLowerCase().includes(searchTerm)
    );
    displayProducts(filteredProducts);
}

// Handle filters
function handleFilter() {
    const category = document.getElementById('categoryFilter').value;
    const size = document.getElementById('sizeFilter').value;
    const priceRange = document.getElementById('priceFilter').value;
    const color = document.getElementById('colorFilter').value;
    
    let filteredProducts = fashionProducts;
    
    // Filter by category
    if (category) {
        filteredProducts = filteredProducts.filter(product => product.category === category);
    }
    
    // Filter by size
    if (size) {
        filteredProducts = filteredProducts.filter(product => product.size === size);
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
    
    // Filter by color
    if (color) {
        filteredProducts = filteredProducts.filter(product => product.color === color);
    }
    
    displayProducts(filteredProducts);
}

// Filter by category
function filterByCategory(category) {
    currentCategory = category;
    const filteredProducts = fashionProducts.filter(product => product.category === category);
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
    document.getElementById('sizeFilter').value = '';
    document.getElementById('priceFilter').value = '';
    document.getElementById('colorFilter').value = '';
    document.getElementById('searchInput').value = '';
    currentCategory = 'all';
    
    document.querySelectorAll('.category-card').forEach(card => {
        card.classList.remove('active');
    });
    
    displayProducts(fashionProducts);
}

// Add to cart - using shared cart utilities
function addToCart(productId) {
    const product = fashionProducts.find(p => p.id === productId);
    if (product) {
        // Use the shared cart utility
        window.addToCart(productId, product);
    }
}

// Cart functions - handled by cart-utils.js

// Show product details
function showProductDetails(productId) {
    const product = fashionProducts.find(p => p.id === productId);
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
                        <p><strong>Size:</strong> ${product.size}</p>
                        <p><strong>Color:</strong> ${product.color}</p>
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

// Fashion Carousel Functionality
let currentFashionSlideIndex = 0;
let fashionCarouselInterval;

// Initialize fashion carousel
function initializeFashionCarousel() {
    const slides = document.querySelectorAll('#fashionCarouselSlides .carousel-slide');
    const indicators = document.querySelectorAll('.carousel-indicators .indicator');
    
    if (slides.length === 0) return;
    
    // Set initial slide
    showFashionSlide(0);
    
    // Start auto-slide
    startFashionAutoSlide();
    
    // Add event listeners for indicators
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => currentFashionSlide(index + 1));
    });
}

// Show specific slide
function showFashionSlide(index) {
    const slides = document.querySelectorAll('#fashionCarouselSlides .carousel-slide');
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
    
    currentFashionSlideIndex = index;
}

// Change slide (next/previous)
function changeFashionSlide(direction) {
    const slides = document.querySelectorAll('#fashionCarouselSlides .carousel-slide');
    if (slides.length === 0) return;
    
    let newIndex = currentFashionSlideIndex + direction;
    
    if (newIndex >= slides.length) {
        newIndex = 0;
    } else if (newIndex < 0) {
        newIndex = slides.length - 1;
    }
    
    showFashionSlide(newIndex);
}

// Go to specific slide
function currentFashionSlide(slideNumber) {
    showFashionSlide(slideNumber - 1);
}

// Start auto-slide
function startFashionAutoSlide() {
    stopFashionAutoSlide();
    fashionCarouselInterval = setInterval(() => {
        changeFashionSlide(1);
    }, 5000);
}

// Stop auto-slide
function stopFashionAutoSlide() {
    if (fashionCarouselInterval) {
        clearInterval(fashionCarouselInterval);
    }
}


// Keyboard navigation
document.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowLeft') {
        changeFashionSlide(-1);
    } else if (event.key === 'ArrowRight') {
        changeFashionSlide(1);
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
    handleFashionSwipe();
});

function handleFashionSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartX - touchEndX;
    
    if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
            // Swipe left - next slide
            changeFashionSlide(1);
        } else {
            // Swipe right - previous slide
            changeFashionSlide(-1);
        }
    }
}
