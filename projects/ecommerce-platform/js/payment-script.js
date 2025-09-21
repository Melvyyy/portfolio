// Payment Page JavaScript
let cart = [];
let orderData = {};

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
    loadCartFromStorage();
    displayOrderItems();
    updateOrderSummary();
    setupEventListeners();
    generateBankReference();
});

// Load cart from localStorage
function loadCartFromStorage() {
    const savedCart = localStorage.getItem('techmart_checkout_cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
    }
}

// Display order items
function displayOrderItems() {
    const orderItems = document.getElementById('orderItems');
    if (!orderItems) return;

    orderItems.innerHTML = '';

    cart.forEach(item => {
        const orderItem = document.createElement('div');
        orderItem.className = 'order-item';

        orderItem.innerHTML = `
            <div class="order-item-image">
                <img src="${item.image}" alt="${item.name}" loading="lazy" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                <div class="product-image-fallback" style="display: none; font-size: 1.5rem; align-items: center; justify-content: center; height: 100%; background: #f3f4f6;">📦</div>
            </div>
            <div class="order-item-details">
                <div class="order-item-name">${item.name}</div>
                <div class="order-item-brand">${item.brand}</div>
            </div>
            <div class="order-item-price">$${(item.price * item.quantity).toFixed(2)}</div>
        `;

        orderItems.appendChild(orderItem);
    });
}

// Update order summary
function updateOrderSummary() {
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
}

// Generate bank reference
function generateBankReference() {
    const reference = 'TECH-' + Date.now().toString().slice(-6);
    const bankReference = document.getElementById('bankReference');
    if (bankReference) {
        bankReference.textContent = reference;
    }
}

// Setup event listeners
function setupEventListeners() {
    // Payment method change
    const paymentMethods = document.querySelectorAll('input[name="paymentMethod"]');
    paymentMethods.forEach(method => {
        method.addEventListener('change', handlePaymentMethodChange);
    });

    // Form validation
    const form = document.getElementById('paymentForm');
    if (form) {
        form.addEventListener('submit', handleFormSubmit);
    }

    // Card number formatting
    const cardNumber = document.getElementById('cardNumber');
    if (cardNumber) {
        cardNumber.addEventListener('input', formatCardNumber);
    }

    // Expiry date formatting
    const expiryDate = document.getElementById('expiryDate');
    if (expiryDate) {
        expiryDate.addEventListener('input', formatExpiryDate);
    }

    // CVV formatting
    const cvv = document.getElementById('cvv');
    if (cvv) {
        cvv.addEventListener('input', formatCVV);
    }

    // Phone number formatting
    const phone = document.getElementById('phone');
    if (phone) {
        phone.addEventListener('input', formatPhoneNumber);
    }
}

// Handle payment method change
function handlePaymentMethodChange(e) {
    const method = e.target.value;
    
    // Hide all payment details
    document.getElementById('creditCardDetails').style.display = 'none';
    document.getElementById('mobileMoneyDetails').style.display = 'none';
    document.getElementById('bankTransferDetails').style.display = 'none';
    
    // Show selected payment details
    switch (method) {
        case 'creditCard':
            document.getElementById('creditCardDetails').style.display = 'block';
            break;
        case 'mobileMoney':
            document.getElementById('mobileMoneyDetails').style.display = 'block';
            break;
        case 'bankTransfer':
            document.getElementById('bankTransferDetails').style.display = 'block';
            break;
    }
}

// Format card number
function formatCardNumber(e) {
    let value = e.target.value.replace(/\s/g, '').replace(/[^0-9]/gi, '');
    let formattedValue = value.match(/.{1,4}/g)?.join(' ') || value;
    e.target.value = formattedValue;
}

// Format expiry date
function formatExpiryDate(e) {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length >= 2) {
        value = value.substring(0, 2) + '/' + value.substring(2, 4);
    }
    e.target.value = value;
}

// Format CVV
function formatCVV(e) {
    e.target.value = e.target.value.replace(/\D/g, '').substring(0, 4);
}

// Format phone number
function formatPhoneNumber(e) {
    let value = e.target.value.replace(/\D/g, '');
    if (value.startsWith('0')) {
        value = '+233' + value.substring(1);
    } else if (!value.startsWith('+233')) {
        value = '+233' + value;
    }
    e.target.value = value;
}

// Handle form submission
function handleFormSubmit(e) {
    e.preventDefault();
    
    if (!validateForm()) {
        return;
    }

    // Show loading state
    const submitBtn = document.querySelector('.place-order-btn');
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Processing...';
    submitBtn.disabled = true;

    // Simulate payment processing
    setTimeout(() => {
        processPayment();
    }, 2000);
}

// Validate form
function validateForm() {
    let isValid = true;
    const form = document.getElementById('paymentForm');
    const requiredFields = form.querySelectorAll('[required]');
    
    // Clear previous error states
    clearErrors();

    // Validate required fields
    requiredFields.forEach(field => {
        if (!field.value.trim()) {
            showFieldError(field, 'This field is required');
            isValid = false;
        }
    });

    // Validate email
    const email = document.getElementById('email');
    if (email.value && !isValidEmail(email.value)) {
        showFieldError(email, 'Please enter a valid email address');
        isValid = false;
    }

    // Validate phone
    const phone = document.getElementById('phone');
    if (phone.value && !isValidPhone(phone.value)) {
        showFieldError(phone, 'Please enter a valid phone number');
        isValid = false;
    }

    // Validate credit card if selected
    const paymentMethod = document.querySelector('input[name="paymentMethod"]:checked').value;
    if (paymentMethod === 'creditCard') {
        if (!validateCreditCard()) {
            isValid = false;
        }
    }

    // Validate mobile money if selected
    if (paymentMethod === 'mobileMoney') {
        if (!validateMobileMoney()) {
            isValid = false;
        }
    }

    return isValid;
}

// Validate email
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Validate phone
function isValidPhone(phone) {
    const phoneRegex = /^\+233[0-9]{9}$/;
    return phoneRegex.test(phone);
}

// Validate credit card
function validateCreditCard() {
    let isValid = true;
    
    const cardNumber = document.getElementById('cardNumber');
    const expiryDate = document.getElementById('expiryDate');
    const cvv = document.getElementById('cvv');
    const cardName = document.getElementById('cardName');

    // Validate card number
    if (!cardNumber.value || cardNumber.value.replace(/\s/g, '').length < 16) {
        showFieldError(cardNumber, 'Please enter a valid card number');
        isValid = false;
    }

    // Validate expiry date
    if (!expiryDate.value || !isValidExpiryDate(expiryDate.value)) {
        showFieldError(expiryDate, 'Please enter a valid expiry date (MM/YY)');
        isValid = false;
    }

    // Validate CVV
    if (!cvv.value || cvv.value.length < 3) {
        showFieldError(cvv, 'Please enter a valid CVV');
        isValid = false;
    }

    // Validate card name
    if (!cardName.value.trim()) {
        showFieldError(cardName, 'Please enter the name on card');
        isValid = false;
    }

    return isValid;
}

// Validate expiry date
function isValidExpiryDate(date) {
    const [month, year] = date.split('/');
    const now = new Date();
    const currentYear = now.getFullYear() % 100;
    const currentMonth = now.getMonth() + 1;
    
    const expMonth = parseInt(month);
    const expYear = parseInt(year);
    
    if (expMonth < 1 || expMonth > 12) return false;
    if (expYear < currentYear) return false;
    if (expYear === currentYear && expMonth < currentMonth) return false;
    
    return true;
}

// Validate mobile money
function validateMobileMoney() {
    let isValid = true;
    
    const mobileProvider = document.getElementById('mobileProvider');
    const mobileNumber = document.getElementById('mobileNumber');

    if (!mobileProvider.value) {
        showFieldError(mobileProvider, 'Please select a mobile money provider');
        isValid = false;
    }

    if (!mobileNumber.value || !isValidPhone(mobileNumber.value)) {
        showFieldError(mobileNumber, 'Please enter a valid mobile number');
        isValid = false;
    }

    return isValid;
}

// Show field error
function showFieldError(field, message) {
    field.classList.add('error');
    
    let errorElement = field.parentNode.querySelector('.error-message');
    if (!errorElement) {
        errorElement = document.createElement('div');
        errorElement.className = 'error-message';
        field.parentNode.appendChild(errorElement);
    }
    
    errorElement.textContent = message;
}

// Clear errors
function clearErrors() {
    const errorFields = document.querySelectorAll('.error');
    errorFields.forEach(field => {
        field.classList.remove('error');
    });
    
    const errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach(message => {
        message.remove();
    });
}

// Process payment
function processPayment() {
    // Collect form data
    const formData = new FormData(document.getElementById('paymentForm'));
    orderData = {
        shipping: {
            firstName: formData.get('firstName'),
            lastName: formData.get('lastName'),
            email: formData.get('email'),
            phone: formData.get('phone'),
            address: formData.get('address'),
            city: formData.get('city'),
            state: formData.get('state'),
            zipCode: formData.get('zipCode'),
            country: formData.get('country')
        },
        payment: {
            method: formData.get('paymentMethod'),
            cardNumber: formData.get('cardNumber'),
            expiryDate: formData.get('expiryDate'),
            cvv: formData.get('cvv'),
            cardName: formData.get('cardName'),
            mobileProvider: formData.get('mobileProvider'),
            mobileNumber: formData.get('mobileNumber')
        },
        order: {
            items: cart,
            subtotal: cart.reduce((total, item) => total + (item.price * item.quantity), 0),
            shipping: cart.reduce((total, item) => total + (item.price * item.quantity), 0) > 100 ? 0 : 10,
            tax: cart.reduce((total, item) => total + (item.price * item.quantity), 0) * 0.1,
            total: cart.reduce((total, item) => total + (item.price * item.quantity), 0) + (cart.reduce((total, item) => total + (item.price * item.quantity), 0) > 100 ? 0 : 10) + (cart.reduce((total, item) => total + (item.price * item.quantity), 0) * 0.1),
            orderNumber: 'TECH-' + Date.now().toString().slice(-6),
            orderDate: new Date().toLocaleDateString(),
            notes: formData.get('orderNotes')
        }
    };

    // Save order data
    localStorage.setItem('techmart_order', JSON.stringify(orderData));
    
    // Clear cart
    localStorage.removeItem('techmart_cart');
    localStorage.removeItem('techmart_checkout_cart');
    
    // Redirect to confirmation page
    window.location.href = 'confirmation.html';
}

// Toggle cart (for header cart icon)
function toggleCart() {
    console.log('Toggle cart');
}


