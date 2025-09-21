// Cart Page JavaScript
let cart = [];
let cartCount = 0;

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
    loadCartFromStorage();
    displayCartItems();
    updateCartSummary();
    loadRecommendedProducts();
    setupEventListeners();
});

// Load cart from localStorage
function loadCartFromStorage() {
    const savedCart = localStorage.getItem('techmart_cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
        cartCount = cart.reduce((total, item) => total + item.quantity, 0);
    }
}

// Save cart to localStorage
function saveCartToStorage() {
    localStorage.setItem('techmart_cart', JSON.stringify(cart));
}

// Display cart items
function displayCartItems() {
    const cartItemsList = document.getElementById('cartItemsList');
    const emptyCart = document.getElementById('emptyCart');
    
    if (!cartItemsList || !emptyCart) return;

    if (cart.length === 0) {
        cartItemsList.style.display = 'none';
        emptyCart.style.display = 'block';
        return;
    }

    cartItemsList.style.display = 'block';
    emptyCart.style.display = 'none';
    cartItemsList.innerHTML = '';

    cart.forEach(item => {
        const cartItem = createCartItemElement(item);
        cartItemsList.appendChild(cartItem);
    });
}

// Create cart item element
function createCartItemElement(item) {
    const cartItem = document.createElement('div');
    cartItem.className = 'cart-item';
    cartItem.setAttribute('data-item-id', item.id);

    const discount = item.originalPrice ? Math.round(((item.originalPrice - item.price) / item.originalPrice) * 100) : 0;

    cartItem.innerHTML = `
        <div class="cart-item-image">
            <img src="${item.image}" alt="${item.name}" loading="lazy" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
            <div class="product-image-fallback" style="display: none; font-size: 2rem; align-items: center; justify-content: center; height: 100%; background: #f3f4f6;">📦</div>
        </div>
        <div class="cart-item-details">
            <h3 class="cart-item-name">${item.name}</h3>
            <p class="cart-item-brand">${item.brand}</p>
            <div class="cart-item-features">
                ${item.features ? item.features.slice(0, 3).map(feature => `<span class="feature-tag">${feature}</span>`).join('') : ''}
            </div>
            <div class="cart-item-price">$${(item.price * item.quantity).toFixed(2)}</div>
        </div>
        <div class="cart-item-actions">
            <div class="quantity-controls">
                <button class="quantity-btn" onclick="updateQuantity(${item.id}, -1)" ${item.quantity <= 1 ? 'disabled' : ''}>
                    <i class="fas fa-minus"></i>
                </button>
                <input type="number" class="quantity-input" value="${item.quantity}" min="1" max="99" onchange="setQuantity(${item.id}, this.value)">
                <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1)" ${item.quantity >= 99 ? 'disabled' : ''}>
                    <i class="fas fa-plus"></i>
                </button>
            </div>
            <button class="remove-item-btn" onclick="removeFromCart(${item.id})">
                <i class="fas fa-trash"></i> Remove
            </button>
        </div>
    `;

    return cartItem;
}

// Update quantity
function updateQuantity(itemId, change) {
    const item = cart.find(item => item.id === itemId);
    if (!item) return;

    const newQuantity = item.quantity + change;
    if (newQuantity < 1 || newQuantity > 99) return;

    item.quantity = newQuantity;
    cartCount += change;
    
    saveCartToStorage();
    displayCartItems();
    updateCartSummary();
    updateCartCount();
}

// Set quantity directly
function setQuantity(itemId, quantity) {
    const item = cart.find(item => item.id === itemId);
    if (!item) return;

    const newQuantity = parseInt(quantity);
    if (newQuantity < 1 || newQuantity > 99) return;

    const change = newQuantity - item.quantity;
    item.quantity = newQuantity;
    cartCount += change;
    
    saveCartToStorage();
    displayCartItems();
    updateCartSummary();
    updateCartCount();
}

// Remove from cart
function removeFromCart(itemId) {
    const itemIndex = cart.findIndex(item => item.id === itemId);
    if (itemIndex === -1) return;

    const item = cart[itemIndex];
    cartCount -= item.quantity;
    cart.splice(itemIndex, 1);
    
    saveCartToStorage();
    displayCartItems();
    updateCartSummary();
    updateCartCount();
}

// Clear cart
function clearCart() {
    if (cart.length === 0) return;
    
    if (confirm('Are you sure you want to clear your cart?')) {
        cart = [];
        cartCount = 0;
        
        saveCartToStorage();
        displayCartItems();
        updateCartSummary();
        updateCartCount();
    }
}

// Update cart summary
function updateCartSummary() {
    const subtotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    const shipping = subtotal > 100 ? 0 : 10; // Free shipping over $100
    const tax = subtotal * 0.1; // 10% tax
    const total = subtotal + shipping + tax;

    // Update subtotal
    const subtotalElement = document.getElementById('subtotal');
    if (subtotalElement) {
        subtotalElement.textContent = `$${subtotal.toFixed(2)}`;
    }

    // Update shipping
    const shippingElement = document.getElementById('shipping');
    if (shippingElement) {
        shippingElement.textContent = shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`;
    }

    // Update tax
    const taxElement = document.getElementById('tax');
    if (taxElement) {
        taxElement.textContent = `$${tax.toFixed(2)}`;
    }

    // Update total
    const totalElement = document.getElementById('total');
    if (totalElement) {
        totalElement.textContent = `$${total.toFixed(2)}`;
    }

    // Enable/disable checkout button
    const checkoutBtn = document.getElementById('checkoutBtn');
    if (checkoutBtn) {
        checkoutBtn.disabled = cart.length === 0;
    }
}

// Update cart count in header
function updateCartCount() {
    const cartCountElement = document.getElementById('cartCount');
    if (cartCountElement) {
        cartCountElement.textContent = cartCount;
    }
}

// Apply coupon
function applyCoupon() {
    const couponCode = document.getElementById('couponCode').value.trim();
    const couponMessage = document.getElementById('couponMessage');
    
    if (!couponCode) {
        showCouponMessage('Please enter a coupon code.', 'error');
        return;
    }

    // Simulate coupon validation
    const validCoupons = {
        'SAVE10': { discount: 0.1, type: 'percentage' },
        'SAVE20': { discount: 0.2, type: 'percentage' },
        'FREESHIP': { discount: 10, type: 'fixed' },
        'WELCOME': { discount: 0.15, type: 'percentage' }
    };

    if (validCoupons[couponCode.toUpperCase()]) {
        const coupon = validCoupons[couponCode.toUpperCase()];
        applyCouponDiscount(coupon);
        showCouponMessage(`Coupon applied! ${coupon.type === 'percentage' ? (coupon.discount * 100) + '%' : '$' + coupon.discount} discount.`, 'success');
    } else {
        showCouponMessage('Invalid coupon code. Please try again.', 'error');
    }
}

// Apply coupon discount
function applyCouponDiscount(coupon) {
    // This would be implemented based on your discount logic
    console.log('Coupon applied:', coupon);
}

// Show coupon message
function showCouponMessage(message, type) {
    const couponMessage = document.getElementById('couponMessage');
    if (couponMessage) {
        couponMessage.textContent = message;
        couponMessage.className = `coupon-message ${type}`;
        
        setTimeout(() => {
            couponMessage.textContent = '';
            couponMessage.className = 'coupon-message';
        }, 5000);
    }
}

// Proceed to checkout
function proceedToCheckout() {
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }

    // Save cart data for payment page
    localStorage.setItem('techmart_checkout_cart', JSON.stringify(cart));
    
    // Redirect to payment page
    window.location.href = 'payment.html';
}

// Load recommended products
function loadRecommendedProducts() {
    const recommendedProducts = document.getElementById('recommendedProducts');
    if (!recommendedProducts) return;

    // Sample recommended products
    const products = [
        {
            id: 1,
            name: "Wireless Headphones",
            brand: "TechBrand",
            price: 99.99,
            image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=150&h=150&fit=crop&crop=center"
        },
        {
            id: 2,
            name: "Smart Watch",
            brand: "TechBrand",
            price: 199.99,
            image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=150&h=150&fit=crop&crop=center"
        },
        {
            id: 3,
            name: "Bluetooth Speaker",
            brand: "TechBrand",
            price: 79.99,
            image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=150&h=150&fit=crop&crop=center"
        }
    ];

    recommendedProducts.innerHTML = '';

    products.forEach(product => {
        const recommendedItem = document.createElement('div');
        recommendedItem.className = 'recommended-item';
        recommendedItem.onclick = () => addToCart(product.id);

        recommendedItem.innerHTML = `
            <div class="recommended-item-image">
                <img src="${product.image}" alt="${product.name}" loading="lazy">
            </div>
            <div class="recommended-item-details">
                <div class="recommended-item-name">${product.name}</div>
                <div class="recommended-item-price">$${product.price}</div>
            </div>
        `;

        recommendedProducts.appendChild(recommendedItem);
    });
}

// Add to cart (for recommended products)
function addToCart(productId) {
    // This would typically fetch product details from an API
    // For now, we'll use sample data
    const product = {
        id: productId,
        name: "Sample Product",
        brand: "Sample Brand",
        price: 99.99,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=150&h=150&fit=crop&crop=center",
        features: ["Feature 1", "Feature 2"]
    };

    const existingItem = cart.find(item => item.id === productId);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    cartCount += 1;
    
    saveCartToStorage();
    displayCartItems();
    updateCartSummary();
    updateCartCount();
    
    showCartNotification();
}

// Show cart notification
function showCartNotification() {
    const notification = document.createElement('div');
    notification.className = 'cart-notification';
    notification.innerHTML = '<i class="fas fa-check"></i> Added to cart!';
    document.body.appendChild(notification);

    setTimeout(() => notification.classList.add('show'), 100);

    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 300);
    }, 2000);
}

// Toggle cart (for header cart icon)
function toggleCart() {
    // This would toggle the cart sidebar if it exists
    console.log('Toggle cart');
}

// Setup event listeners
function setupEventListeners() {
    // Coupon input enter key
    const couponInput = document.getElementById('couponCode');
    if (couponInput) {
        couponInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                applyCoupon();
            }
        });
    }

    // Quantity input validation
    document.addEventListener('input', function(e) {
        if (e.target.classList.contains('quantity-input')) {
            const value = parseInt(e.target.value);
            if (value < 1) e.target.value = 1;
            if (value > 99) e.target.value = 99;
        }
    });
}

// Add cart notification styles
const cartNotificationStyles = `
    .cart-notification {
        position: fixed;
        top: 20px;
        right: 20px;
        background: var(--confirmation-success);
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        z-index: 1000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        font-weight: 600;
    }
    
    .cart-notification.show {
        transform: translateX(0);
    }
`;

// Add styles to head
const styleSheet = document.createElement('style');
styleSheet.textContent = cartNotificationStyles;
document.head.appendChild(styleSheet);


