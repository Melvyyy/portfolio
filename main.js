class Dashboard {
    constructor() {
        this.currentTheme = localStorage.getItem('theme') || 'light';
        this.init();
    }

    init() {
        this.setupTheme();
        this.setupEventListeners();
        this.setupAnimations();
        this.loadData();
    }

    setupTheme() {
        document.documentElement.setAttribute('data-theme', this.currentTheme);
        this.updateThemeIcon();
    }

    updateThemeIcon() {
        const themeToggle = document.getElementById('themeToggle');
        const icon = themeToggle.querySelector('i');
        
        if (this.currentTheme === 'dark') {
            icon.className = 'fas fa-sun';
        } else {
            icon.className = 'fas fa-moon';
        }
    }

    toggleTheme() {
        this.currentTheme = this.currentTheme === 'light' ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', this.currentTheme);
        localStorage.setItem('theme', this.currentTheme);
        this.updateThemeIcon();
        
        // Add smooth transition effect
        document.body.style.transition = 'all 0.3s ease';
        setTimeout(() => {
            document.body.style.transition = '';
        }, 300);
    }

    setupEventListeners() {
        // Theme toggle
        const themeToggle = document.getElementById('themeToggle');
        themeToggle.addEventListener('click', () => this.toggleTheme());

        // Navigation
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => this.handleNavigation(e));
        });

        // Mobile sidebar toggle
        this.setupMobileNavigation();

        // Action buttons
        const actionBtns = document.querySelectorAll('.action-btn');
        actionBtns.forEach(btn => {
            btn.addEventListener('click', (e) => this.handleAction(e));
        });

        // Window resize handler
        window.addEventListener('resize', () => this.handleResize());
    }

    setupMobileNavigation() {
        // Add mobile menu toggle button
        if (window.innerWidth <= 768) {
            this.createMobileMenuToggle();
        }
    }

    createMobileMenuToggle() {
        const navbar = document.querySelector('.navbar');
        const existingToggle = document.querySelector('.mobile-menu-toggle');
        
        if (!existingToggle) {
            const mobileToggle = document.createElement('button');
            mobileToggle.className = 'mobile-menu-toggle';
            mobileToggle.innerHTML = '<i class="fas fa-bars"></i>';
            mobileToggle.style.cssText = `
                background: rgba(255, 255, 255, 0.1);
                border: none;
                color: white;
                width: 40px;
                height: 40px;
                border-radius: 8px;
                cursor: pointer;
                display: flex;
                align-items: center;
                justify-content: center;
                margin-right: 1rem;
            `;
            
            navbar.insertBefore(mobileToggle, navbar.firstChild.nextSibling);
            
            mobileToggle.addEventListener('click', () => {
                const sidebar = document.getElementById('sidebar');
                sidebar.classList.toggle('open');
            });
        }
    }

    handleNavigation(e) {
        e.preventDefault();
        
        // Remove active class from all nav items
        document.querySelectorAll('.nav-item').forEach(item => {
            item.classList.remove('active');
        });
        
        // Add active class to clicked item
        e.target.closest('.nav-item').classList.add('active');
        
        // Get page data
        const page = e.target.closest('.nav-link').dataset.page;
        this.loadPage(page);
        
        // Close mobile sidebar if open
        if (window.innerWidth <= 768) {
            document.getElementById('sidebar').classList.remove('open');
        }
    }

    loadPage(page) {
        const mainContent = document.querySelector('.main-content');
        
        // Add loading state
        mainContent.style.opacity = '0.6';
        
        // Simulate page load
        setTimeout(() => {
            this.updatePageContent(page);
            mainContent.style.opacity = '1';
        }, 300);
    }

    updatePageContent(page) {
        const contentHeader = document.querySelector('.content-header');
        const pageTitle = contentHeader.querySelector('.page-title');
        const pageSubtitle = contentHeader.querySelector('.page-subtitle');
        
        const pageData = {
            dashboard: {
                title: 'Dashboard Overview',
                subtitle: "Welcome back! Here's what's happening with your projects."
            },
            analytics: {
                title: 'Analytics',
                subtitle: 'Detailed insights and performance metrics for your business.'
            },
            projects: {
                title: 'Projects',
                subtitle: 'Manage and track all your active projects in one place.'
            },
            team: {
                title: 'Team Management',
                subtitle: 'Collaborate with your team members and manage permissions.'
            },
            settings: {
                title: 'Settings',
                subtitle: 'Configure your account preferences and application settings.'
            }
        };
        
        if (pageData[page]) {
            pageTitle.textContent = pageData[page].title;
            pageSubtitle.textContent = pageData[page].subtitle;
        }
    }

    handleAction(e) {
        const button = e.currentTarget;
        const action = button.querySelector('span').textContent;
        
        // Add click animation
        button.style.transform = 'scale(0.95)';
        setTimeout(() => {
            button.style.transform = '';
        }, 150);
        
        // Handle different actions
        switch(action) {
            case 'New Project':
                this.showNotification('Creating new project...', 'info');
                break;
            case 'Invite Team':
                this.showNotification('Opening invite dialog...', 'info');
                break;
            case 'Export Data':
                this.showNotification('Preparing data export...', 'success');
                break;
            case 'Settings':
                this.loadPage('settings');
                break;
        }
    }

    showNotification(message, type = 'info') {
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.textContent = message;
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: ${type === 'success' ? '#22c55e' : type === 'error' ? '#ef4444' : '#4f46e5'};
            color: white;
            padding: 1rem 1.5rem;
            border-radius: 8px;
                        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
            z-index: 10000;
            transform: translateX(100%);
            transition: transform 0.3s ease;
            max-width: 300px;
            font-weight: 500;
        `;
        
        document.body.appendChild(notification);
        
        // Animate in
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);
        
        // Remove after 3 seconds
        setTimeout(() => {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }, 3000);
    }

    setupAnimations() {
        // Intersection Observer for scroll animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animationPlayState = 'running';
                }
            });
        }, observerOptions);

        // Observe animated elements
        document.querySelectorAll('.stat-card, .content-card').forEach(el => {
            observer.observe(el);
        });

        // Add hover effects to interactive elements
        this.setupHoverEffects();
    }

    setupHoverEffects() {
        // Enhanced hover effects for cards
        const cards = document.querySelectorAll('.stat-card, .content-card');
        cards.forEach(card => {
            card.addEventListener('mouseenter', (e) => {
                e.target.style.transform = 'translateY(-4px) scale(1.02)';
            });
            
            card.addEventListener('mouseleave', (e) => {
                e.target.style.transform = '';
            });
        });

        // Ripple effect for buttons
        const buttons = document.querySelectorAll('.action-btn, .btn-secondary');
        buttons.forEach(button => {
            button.addEventListener('click', (e) => {
                this.createRippleEffect(e);
            });
        });
    }

    createRippleEffect(e) {
        const button = e.currentTarget;
        const rect = button.getBoundingClientRect();
        const ripple = document.createElement('span');
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            left: ${x}px;
            top: ${y}px;
            background: rgba(255, 255, 255, 0.3);
            border-radius: 50%;
            transform: scale(0);
            animation: ripple 0.6s ease-out;
            pointer-events: none;
        `;
        
        // Add ripple animation keyframes if not exists
        if (!document.querySelector('#ripple-styles')) {
            const style = document.createElement('style');
            style.id = 'ripple-styles';
            style.textContent = `
                @keyframes ripple {
                    to {
                        transform: scale(2);
                        opacity: 0;
                    }
                }
            `;
            document.head.appendChild(style);
        }
        
        button.style.position = 'relative';
        button.style.overflow = 'hidden';
        button.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    }

    loadData() {
        // Simulate API calls with loading states
        this.loadStats();
        this.loadActivities();
        this.setupRealTimeUpdates();
    }

    loadStats() {
        const statNumbers = document.querySelectorAll('.stat-number');
        
        statNumbers.forEach((stat, index) => {
            const finalValue = stat.textContent;
            stat.textContent = '0';
            
            setTimeout(() => {
                this.animateNumber(stat, finalValue);
            }, index * 200);
        });
    }

    animateNumber(element, finalValue) {
        const isPercentage = finalValue.includes('%');
        const isCurrency = finalValue.includes('$');
        const numericValue = parseFloat(finalValue.replace(/[^0-9.]/g, ''));
        
        let current = 0;
        const increment = numericValue / 50;
        const timer = setInterval(() => {
            current += increment;
            
            if (current >= numericValue) {
                current = numericValue;
                clearInterval(timer);
            }
            
            let displayValue = Math.floor(current).toLocaleString();
            
            if (isCurrency) {
                displayValue = '$' + displayValue;
            } else if (isPercentage) {
                displayValue = current.toFixed(1) + '%';
            }
            
            element.textContent = displayValue;
        }, 20);
    }

    loadActivities() {
        // Simulate loading activities with stagger effect
        const activities = document.querySelectorAll('.activity-item');
        activities.forEach((activity, index) => {
            activity.style.opacity = '0';
            activity.style.transform = 'translateX(-20px)';
            
            setTimeout(() => {
                activity.style.transition = 'all 0.3s ease';
                activity.style.opacity = '1';
                activity.style.transform = 'translateX(0)';
            }, index * 100);
        });
    }

    setupRealTimeUpdates() {
        // Simulate real-time updates
        setInterval(() => {
            this.updateRandomStat();
        }, 10000); // Update every 10 seconds
    }

    updateRandomStat() {
        const statCards = document.querySelectorAll('.stat-card');
        const randomCard = statCards[Math.floor(Math.random() * statCards.length)];
        const statNumber = randomCard.querySelector('.stat-number');
        const statChange = randomCard.querySelector('.stat-change');
        
        // Add pulse animation
        randomCard.style.animation = 'pulse 0.5s ease';
        
        setTimeout(() => {
            randomCard.style.animation = '';
        }, 500);
        
        // Update change indicator
        const isPositive = Math.random() > 0.5;
        const changeValue = (Math.random() * 10).toFixed(1);
        
        statChange.textContent = `${isPositive ? '+' : '-'}${changeValue}%`;
        statChange.className = `stat-change ${isPositive ? 'positive' : 'negative'}`;
    }

    handleResize() {
        if (window.innerWidth <= 768) {
            this.createMobileMenuToggle();
        } else {
            const mobileToggle = document.querySelector('.mobile-menu-toggle');
            if (mobileToggle) {
                mobileToggle.remove();
            }
            
            // Close sidebar if open
            document.getElementById('sidebar').classList.remove('open');
        }
    }

    // Utility methods
    formatNumber(num) {
        if (num >= 1000000) {
            return (num / 1000000).toFixed(1) + 'M';
        } else if (num >= 1000) {
            return (num / 1000).toFixed(1) + 'K';
        }
        return num.toString();
    }

    formatCurrency(amount) {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(amount);
    }

    formatDate(date) {
        return new Intl.DateTimeFormat('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        }).format(new Date(date));
    }
}

// Advanced Features
class AdvancedFeatures {
    constructor(dashboard) {
        this.dashboard = dashboard;
        this.init();
    }

    init() {
        this.setupKeyboardShortcuts();
        this.setupSearchFunctionality();
        this.setupDataVisualization();
        this.setupProgressiveWebApp();
    }

    setupKeyboardShortcuts() {
        document.addEventListener('keydown', (e) => {
            // Ctrl/Cmd + K for search
            if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
                e.preventDefault();
                this.openSearch();
            }
            
            // Ctrl/Cmd + D for theme toggle
            if ((e.ctrlKey || e.metaKey) && e.key === 'd') {
                e.preventDefault();
                this.dashboard.toggleTheme();
            }
            
            // Number keys for navigation
            if (e.key >= '1' && e.key <= '5' && (e.ctrlKey || e.metaKey)) {
                e.preventDefault();
                const navLinks = document.querySelectorAll('.nav-link');
                const index = parseInt(e.key) - 1;
                if (navLinks[index]) {
                    navLinks[index].click();
                }
            }
        });
    }

    openSearch() {
        // Create search modal
        const searchModal = document.createElement('div');
        searchModal.className = 'search-modal';
        searchModal.innerHTML = `
            <div class="search-overlay"></div>
            <div class="search-container">
                <div class="search-input-container">
                    <i class="fas fa-search"></i>
                    <input type="text" placeholder="Search..." class="search-input" autofocus>
                    <button class="search-close">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
                <div class="search-results"></div>
            </div>
        `;
        
        // Add styles
        searchModal.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            z-index: 10000;
            display: flex;
            align-items: flex-start;
            justify-content: center;
            padding-top: 10vh;
        `;
        
        document.body.appendChild(searchModal);
        
        // Setup search functionality
        this.setupSearchEvents(searchModal);
    }

    setupSearchEvents(modal) {
        const overlay = modal.querySelector('.search-overlay');
        const closeBtn = modal.querySelector('.search-close');
        const input = modal.querySelector('.search-input');
        
        // Close events
        [overlay, closeBtn].forEach(el => {
            el.addEventListener('click', () => {
                modal.remove();
            });
        });
        
        // Search input
        input.addEventListener('input', (e) => {
            this.performSearch(e.target.value, modal);
        });
        
        // Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                modal.remove();
            }
        });
    }

    performSearch(query, modal) {
        const results = modal.querySelector('.search-results');
        
        if (query.length < 2) {
            results.innerHTML = '';
            return;
        }
        
        // Mock search results
        const mockResults = [
            { title: 'Dashboard Overview', type: 'page', icon: 'fas fa-home' },
            { title: 'User Analytics', type: 'page', icon: 'fas fa-chart-line' },
            { title: 'Project Settings', type: 'action', icon: 'fas fa-cog' },
            { title: 'Team Members', type: 'page', icon: 'fas fa-users' },
            { title: 'Export Data', type: 'action', icon: 'fas fa-download' }
        ].filter(item => 
            item.title.toLowerCase().includes(query.toLowerCase())
        );
        
        results.innerHTML = mockResults.map(result => `
            <div class="search-result-item">
                <i class="${result.icon}"></i>
                <span>${result.title}</span>
                <span class="result-type">${result.type}</span>
            </div>
        `).join('');
    }

    setupSearchFunctionality() {
        // Add search styles to head
        const searchStyles = document.createElement('style');
        searchStyles.textContent = `
            .search-overlay {
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background: rgba(0, 0, 0, 0.5);
                backdrop-filter: blur(4px);
            }
            
            .search-container {
                background: var(--background-tertiary);
                border-radius: 12px;
                box-shadow: var(--shadow-large);
                width: 90%;
                max-width: 600px;
                max-height: 70vh;
                overflow: hidden;
                position: relative;
                z-index: 1;
            }
            
            .search-input-container {
                display: flex;
                align-items: center;
                padding: 1rem;
                border-bottom: 1px solid var(--border-color);
                gap: 1rem;
            }
            
            .search-input {
                flex: 1;
                border: none;
                background: transparent;
                font-size: 1.1rem;
                color: var(--text-primary);
                outline: none;
            }
            
            .search-close {
                background: none;
                border: none;
                color: var(--text-secondary);
                cursor: pointer;
                padding: 0.5rem;
                border-radius: 4px;
            }
            
            .search-results {
                max-height: 400px;
                overflow-y: auto;
            }
            
            .search-result-item {
                display: flex;
                align-items: center;
                gap: 1rem;
                padding: 1rem;
                cursor: pointer;
                transition: background-color 0.2s ease;
            }
            
            .search-result-item:hover {
                background: var(--background-secondary);
            }
            
            .result-type {
                margin-left: auto;
                font-size: 0.875rem;
                color: var(--text-muted);
                text-transform: uppercase;
            }
        `;
        document.head.appendChild(searchStyles);
    }

    setupDataVisualization() {
        // Add simple chart functionality
        this.createMiniCharts();
    }

    createMiniCharts() {
        const chartData = [65, 78, 82, 85, 92, 88, 95];
        const statCards = document.querySelectorAll('.stat-card');
        
        statCards.forEach((card, index) => {
            const miniChart = document.createElement('div');
            miniChart.className = 'mini-chart';
            miniChart.style.cssText = `
                position: absolute;
                top: 10px;
                right: 10px;
                width: 60px;
                height: 30px;
                opacity: 0.3;
            `;
            
            // Create simple line chart
            const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
            svg.setAttribute('width', '60');
            svg.setAttribute('height', '30');
            svg.setAttribute('viewBox', '0 0 60 30');
            
            const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
            const points = chartData.map((value, i) => 
                `${i * 10},${30 - (value / 100) * 30}`
            ).join(' L');
            
            path.setAttribute('d', `M${points}`);
            path.setAttribute('stroke', 'var(--primary-color)');
            path.setAttribute('stroke-width', '2');
            path.setAttribute('fill', 'none');
            
            svg.appendChild(path);
            miniChart.appendChild(svg);
            
            card.style.position = 'relative';
            card.appendChild(miniChart);
        });
    }

    setupProgressiveWebApp() {
        // Add PWA functionality
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.register('/sw.js')
                .then(registration => {
                    console.log('SW registered: ', registration);
                })
                .catch(registrationError => {
                    console.log('SW registration failed: ', registrationError);
                });
        }
    }
}

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
    const dashboard = new Dashboard();
    const advancedFeatures = new AdvancedFeatures(dashboard);
    
    // Add pulse animation keyframes
    const pulseStyles = document.createElement('style');
    pulseStyles.textContent = `
        @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.05); }
            100% { transform: scale(1); }
        }
    `;
    document.head.appendChild(pulseStyles);
    
    // Add loading screen
    const loadingScreen = document.createElement('div');
    loadingScreen.id = 'loading-screen';
    loadingScreen.innerHTML = `
        <div class="loading-spinner">
            <div class="spinner"></div>
            <p>Loading Dashboard...</p>
        </div>
    `;
    loadingScreen.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: var(--background-primary);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10000;
        transition: opacity 0.5s ease;
    `;
    
    document.body.appendChild(loadingScreen);
    
    // Remove loading screen after initialization
    setTimeout(() => {
        loadingScreen.style.opacity = '0';
        setTimeout(() => {
            loadingScreen.remove();
        }, 500);
    }, 1000);
});

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { Dashboard, AdvancedFeatures };
}
