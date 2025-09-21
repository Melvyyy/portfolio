// Confirmation Page JavaScript
let orderData = {};

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
    loadOrderData();
    displayOrderDetails();
    displayOrderItems();
    setupEventListeners();
});

// Load order data from localStorage
function loadOrderData() {
    const savedOrder = localStorage.getItem('techmart_order');
    if (savedOrder) {
        orderData = JSON.parse(savedOrder);
    } else {
        // If no order data, redirect to home
        window.location.href = 'demo.html';
        return;
    }
}

// Display order details
function displayOrderDetails() {
    // Order number
    const orderNumber = document.getElementById('orderNumber');
    if (orderNumber) {
        orderNumber.textContent = orderData.order?.orderNumber || 'TECH-2024-001';
    }

    // Order date
    const orderDate = document.getElementById('orderDate');
    if (orderDate) {
        orderDate.textContent = orderData.order?.orderDate || new Date().toLocaleDateString();
    }

    // Payment method
    const paymentMethod = document.getElementById('paymentMethod');
    if (paymentMethod) {
        const method = orderData.payment?.method || 'creditCard';
        const methodText = getPaymentMethodText(method);
        paymentMethod.textContent = methodText;
    }

    // Total amount
    const totalAmount = document.getElementById('totalAmount');
    if (totalAmount) {
        totalAmount.textContent = `$${orderData.order?.total?.toFixed(2) || '0.00'}`;
    }

    // Delivery address
    const deliveryAddress = document.getElementById('deliveryAddress');
    if (deliveryAddress && orderData.shipping) {
        const address = orderData.shipping;
        deliveryAddress.innerHTML = `
            ${address.address}<br>
            ${address.city}, ${address.state} ${address.zipCode}<br>
            ${getCountryName(address.country)}
        `;
    }

    // Expected delivery
    const expectedDelivery = document.getElementById('expectedDelivery');
    if (expectedDelivery) {
        const deliveryDate = new Date();
        deliveryDate.setDate(deliveryDate.getDate() + 5); // 5 days from now
        expectedDelivery.textContent = deliveryDate.toLocaleDateString('en-US', {
            month: 'long',
            day: 'numeric',
            year: 'numeric'
        });
    }

    // Tracking number
    const trackingNumber = document.getElementById('trackingNumber');
    if (trackingNumber) {
        trackingNumber.textContent = 'TECH' + Math.random().toString(36).substr(2, 9).toUpperCase();
    }
}

// Get payment method text
function getPaymentMethodText(method) {
    const methods = {
        'creditCard': 'Credit Card ending in ' + (orderData.payment?.cardNumber?.slice(-4) || '1234'),
        'mobileMoney': 'Mobile Money (' + (orderData.payment?.mobileProvider || 'MTN') + ')',
        'bankTransfer': 'Bank Transfer'
    };
    return methods[method] || 'Credit Card';
}

// Get country name
function getCountryName(code) {
    const countries = {
        'GH': 'Ghana',
        'NG': 'Nigeria',
        'KE': 'Kenya',
        'ZA': 'South Africa',
        'US': 'United States',
        'UK': 'United Kingdom'
    };
    return countries[code] || 'Ghana';
}

// Display order items
function displayOrderItems() {
    const orderItemsList = document.getElementById('orderItemsList');
    if (!orderItemsList || !orderData.order?.items) return;

    orderItemsList.innerHTML = '';

    orderData.order.items.forEach(item => {
        const orderItem = document.createElement('div');
        orderItem.className = 'order-item';

        orderItem.innerHTML = `
            <div class="order-item-image">
                <img src="${item.image}" alt="${item.name}" loading="lazy" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                <div class="product-image-fallback" style="display: none; font-size: 2rem; align-items: center; justify-content: center; height: 100%; background: #f3f4f6;">📦</div>
            </div>
            <div class="order-item-details">
                <h3 class="order-item-name">${item.name}</h3>
                <p class="order-item-brand">${item.brand}</p>
                <div class="order-item-features">
                    ${item.features ? item.features.slice(0, 3).map(feature => `<span class="feature-tag">${feature}</span>`).join('') : ''}
                </div>
            </div>
            <div class="order-item-price">$${(item.price * item.quantity).toFixed(2)}</div>
        `;

        orderItemsList.appendChild(orderItem);
    });
}

// Print order
function printOrder() {
    // Create a new window for printing
    const printWindow = window.open('', '_blank');
    
    const printContent = `
        <!DOCTYPE html>
        <html>
        <head>
            <title>Order Receipt - ${orderData.order?.orderNumber}</title>
            <style>
                body { font-family: Arial, sans-serif; margin: 20px; }
                .header { text-align: center; margin-bottom: 30px; }
                .order-info { margin-bottom: 20px; }
                .order-items { margin-bottom: 20px; }
                .order-item { display: flex; justify-content: space-between; margin-bottom: 10px; padding: 10px; border: 1px solid #ddd; }
                .total { font-weight: bold; font-size: 18px; }
                .footer { margin-top: 30px; text-align: center; color: #666; }
            </style>
        </head>
        <body>
            <div class="header">
                <h1>TechMart</h1>
                <h2>Order Receipt</h2>
            </div>
            
            <div class="order-info">
                <p><strong>Order Number:</strong> ${orderData.order?.orderNumber}</p>
                <p><strong>Order Date:</strong> ${orderData.order?.orderDate}</p>
                <p><strong>Payment Method:</strong> ${getPaymentMethodText(orderData.payment?.method)}</p>
            </div>
            
            <div class="order-items">
                <h3>Order Items:</h3>
                ${orderData.order?.items?.map(item => `
                    <div class="order-item">
                        <span>${item.name} x${item.quantity}</span>
                        <span>$${(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                `).join('') || ''}
            </div>
            
            <div class="total">
                <p>Total: $${orderData.order?.total?.toFixed(2) || '0.00'}</p>
            </div>
            
            <div class="footer">
                <p>Thank you for your order!</p>
                <p>TechMart - Your trusted online store</p>
            </div>
        </body>
        </html>
    `;
    
    printWindow.document.write(printContent);
    printWindow.document.close();
    printWindow.print();
}

// Track order
function trackOrder() {
    const trackingNumber = document.getElementById('trackingNumber').textContent;
    alert(`Tracking your order: ${trackingNumber}\n\nStatus: Order Processing\nExpected Delivery: 5-7 business days\n\nYou will receive updates via email.`);
}

// Setup event listeners
function setupEventListeners() {
    // Add any additional event listeners here
    console.log('Confirmation page loaded');
}

// Toggle cart (for header cart icon)
function toggleCart() {
    console.log('Toggle cart');
}

// Add some additional functionality for order tracking
function updateOrderStatus() {
    // This would typically connect to a real order tracking system
    const statuses = [
        { status: 'Order Placed', time: 'Just now', completed: true },
        { status: 'Order Processing', time: 'Within 24 hours', completed: false },
        { status: 'Shipped', time: 'December 18, 2024', completed: false },
        { status: 'Delivered', time: 'December 20-22, 2024', completed: false }
    ];
    
    return statuses;
}

// Initialize order tracking timeline
function initializeOrderTracking() {
    const timelineSteps = document.querySelectorAll('.timeline-step');
    const statuses = updateOrderStatus();
    
    timelineSteps.forEach((step, index) => {
        if (statuses[index]) {
            const status = statuses[index];
            if (status.completed) {
                step.classList.add('completed');
                step.classList.remove('pending');
            } else {
                step.classList.add('pending');
                step.classList.remove('completed');
            }
        }
    });
}

// Call initialization
document.addEventListener('DOMContentLoaded', function() {
    initializeOrderTracking();
});


