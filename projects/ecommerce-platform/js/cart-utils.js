// Shared Cart Utilities
// This file provides cart synchronization across all pages

// Cart storage key
const CART_STORAGE_KEY = 'techmart_cart';

// Cart event listeners
const cartEventListeners = [];

// Initialize cart utilities
function initCartUtils() {
    // Load cart from storage
    loadCartFromStorage();
    
    // Update cart count in header
    updateCartCount();
    
    // Listen for storage changes (for cross-tab synchronization)
    window.addEventListener('storage', handleStorageChange);
    
    // Listen for cart updates
    window.addEventListener('cartUpdated', handleCartUpdate);
}

// Load cart from localStorage
function loadCartFromStorage() {
    const savedCart = localStorage.getItem(CART_STORAGE_KEY);
    if (savedCart) {
        window.cart = JSON.parse(savedCart);
    } else {
        window.cart = [];
    }
}

// Save cart to localStorage
function saveCartToStorage() {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(window.cart));
    
    // Dispatch cart updated event
    window.dispatchEvent(new CustomEvent('cartUpdated', {
        detail: { cart: window.cart }
    }));
}

// Add item to cart
function addToCart(productId, productData = null) {
    // If productData is provided, use it; otherwise, find the product
    let product = productData;
    
    if (!product) {
        // Try to find product in current page's products array
        if (typeof products !== 'undefined' && products.length > 0) {
            product = products.find(p => p.id === productId);
        }
    }
    
    if (!product) {
        console.error('Product not found:', productId);
        return false;
    }
    
    // Check if item already exists in cart
    const existingItem = window.cart.find(item => item.id === productId);
    
    if (existingItem) {
        // Increase quantity
        existingItem.quantity += 1;
    } else {
        // Add new item to cart
        window.cart.push({
            id: product.id,
            name: product.name,
            brand: product.brand || 'Unknown Brand',
            price: product.price,
            originalPrice: product.originalPrice || product.price,
            image: product.image,
            features: product.features || [],
            quantity: 1
        });
    }
    
    // Save to storage
    saveCartToStorage();
    
    // Update cart count
    updateCartCount();
    
    // Show notification
    showCartNotification('Added to cart!');
    
    return true;
}

// Remove item from cart
function removeFromCart(productId) {
    const itemIndex = window.cart.findIndex(item => item.id === productId);
    if (itemIndex === -1) return false;
    
    window.cart.splice(itemIndex, 1);
    saveCartToStorage();
    updateCartCount();
    
    return true;
}

// Update item quantity in cart
function updateCartQuantity(productId, quantity) {
    const item = window.cart.find(item => item.id === productId);
    if (!item) return false;
    
    if (quantity <= 0) {
        return removeFromCart(productId);
    }
    
    item.quantity = quantity;
    saveCartToStorage();
    updateCartCount();
    
    return true;
}

// Clear cart
function clearCart() {
    window.cart = [];
    saveCartToStorage();
    updateCartCount();
}

// Get cart count
function getCartCount() {
    return window.cart.reduce((total, item) => total + item.quantity, 0);
}

// Get cart total
function getCartTotal() {
    return window.cart.reduce((total, item) => total + (item.price * item.quantity), 0);
}

// Update cart count in header
function updateCartCount() {
    const cartCountElements = document.querySelectorAll('.cart-count');
    const count = getCartCount();
    
    cartCountElements.forEach(element => {
        element.textContent = count;
    });
}

// Handle storage changes (cross-tab synchronization)
function handleStorageChange(e) {
    if (e.key === CART_STORAGE_KEY) {
        loadCartFromStorage();
        updateCartCount();
        
        // Notify other components
        window.dispatchEvent(new CustomEvent('cartUpdated', {
            detail: { cart: window.cart }
        }));
    }
}

// Handle cart updates
function handleCartUpdate(e) {
    // Update cart count
    updateCartCount();
    
    // Notify registered listeners
    cartEventListeners.forEach(callback => {
        callback(e.detail.cart);
    });
}

// Register cart event listener
function onCartUpdate(callback) {
    cartEventListeners.push(callback);
}

// Show cart notification
function showCartNotification(message) {
    // Remove existing notification
    const existingNotification = document.querySelector('.cart-notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create new notification
    const notification = document.createElement('div');
    notification.className = 'cart-notification';
    notification.innerHTML = `
        <i class="fas fa-check"></i>
        <span>${message}</span>
    `;
    
    // Add to page
    document.body.appendChild(notification);
    
    // Show notification
    setTimeout(() => notification.classList.add('show'), 100);
    
    // Hide notification
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 300);
    }, 2000);
}

// Toggle cart (redirect to cart page)
function toggleCart() {
    window.location.href = 'cart.html';
}

// Proceed to checkout
function proceedToCheckout() {
    if (window.cart.length === 0) {
        showCartNotification('Your cart is empty!');
        return;
    }
    
    // Save cart data for checkout
    localStorage.setItem('techmart_checkout_cart', JSON.stringify(window.cart));
    
    // Redirect to cart page
    window.location.href = 'cart.html';
}

// Add cart notification styles
function addCartNotificationStyles() {
    if (document.getElementById('cart-notification-styles')) return;
    
    const style = document.createElement('style');
    style.id = 'cart-notification-styles';
    style.textContent = `
        .cart-notification {
            position: fixed;
            top: 20px;
            right: 20px;
            background: #059669;
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
            font-size: 0.875rem;
        }
        
        .cart-notification.show {
            transform: translateX(0);
        }
        
        .cart-notification i {
            font-size: 1rem;
        }
    `;
    
    document.head.appendChild(style);
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initCartUtils();
    addCartNotificationStyles();
});

// Make functions globally available
window.addToCart = addToCart;
window.removeFromCart = removeFromCart;
window.updateCartQuantity = updateCartQuantity;
window.clearCart = clearCart;
window.getCartCount = getCartCount;
window.getCartTotal = getCartTotal;
window.toggleCart = toggleCart;
window.proceedToCheckout = proceedToCheckout;
window.onCartUpdate = onCartUpdate;
