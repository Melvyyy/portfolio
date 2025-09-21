# Professional Portfolio Website

A modern, responsive portfolio website built with HTML, CSS, and JavaScript featuring a clean design, smooth animations, and dark/light mode functionality.

## 🎨 Design Features

### Color Scheme
- **Light Mode**: Pure white (#FFFFFF) background with deep navy (#1a1a2e) accents
- **Dark Mode**: Charcoal (#0f0f23) background with light gray (#e8e8e8) text
- **Accent Color**: Electric blue (#00d4ff) for highlights and interactive elements
- **Typography**: Inter font family for modern, clean readability

### Design Philosophy
- **Minimalist**: Clean, uncluttered layout with plenty of white space
- **Professional**: Elegant typography and subtle shadows
- **Responsive**: Mobile-first design that works on all devices
- **Accessible**: High contrast ratios and keyboard navigation support

## ✨ Features

### Core Functionality
- **Dark/Light Mode Toggle**: Persistent theme switching with smooth transitions
- **Responsive Design**: Mobile-first approach with breakpoints for all screen sizes
- **Smooth Animations**: CSS transitions and JavaScript-powered scroll animations
- **Interactive Elements**: Hover effects, form validation, and smooth scrolling
- **Performance Optimized**: Throttled scroll events and efficient animations

### Sections
1. **Hero Section**: Eye-catching introduction with animated elements
2. **About Section**: Personal information with animated statistics
3. **Skills Section**: Animated progress bars for technical skills
4. **Projects Section**: Showcase of featured work with hover effects
5. **Contact Section**: Working contact form with validation

## 🚀 Getting Started

### Prerequisites
- A modern web browser
- A local web server (optional, for development)

### Installation
1. Download all files to your project directory
2. Open `index.html` in your web browser
3. Customize the content in `index.html` with your information

### File Structure
```
portfolio/
├── index.html          # Main HTML structure
├── styles.css          # Complete CSS styling
├── script.js           # JavaScript functionality
└── README.md          # This file
```

## 🎯 Customization Guide

### Personal Information
Update the following in `index.html`:
- Name and title in the hero section
- About section content
- Skills and technologies
- Project information
- Contact details

### Color Scheme
Modify CSS custom properties in `styles.css`:
```css
:root {
    --primary-bg: #ffffff;        /* Main background */
    --text-primary: #1a1a2e;     /* Main text color */
    --accent-color: #00d4ff;     /* Accent color */
    /* ... other variables */
}
```

### Typography
Change the font family in `styles.css`:
```css
:root {
    --font-family: 'Your-Font', sans-serif;
}
```

### Animations
Adjust animation timing in `styles.css`:
```css
:root {
    --transition-fast: 0.2s ease;
    --transition-normal: 0.3s ease;
    --transition-slow: 0.5s ease;
}
```

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🛠️ Technical Features

### CSS Features
- CSS Grid and Flexbox for layouts
- CSS Custom Properties for theming
- Smooth transitions and animations
- Custom scrollbar styling
- Mobile-first responsive design

### JavaScript Features
- Theme persistence with localStorage
- Intersection Observer for scroll animations
- Form validation and submission
- Mobile menu functionality
- Performance-optimized scroll events

### Browser Support
- Chrome 60+
- Firefox 60+
- Safari 12+
- Edge 79+

## 🎨 Animation Details

### Scroll Animations
- Fade-in effects for sections
- Staggered animations for cards
- Progress bar animations for skills

### Hover Effects
- Button lift effects
- Card shadow changes
- Smooth color transitions

### Page Load
- Staggered hero section animations
- Typing effect for main title
- Floating animation for hero image

## 📝 Form Functionality

The contact form includes:
- Client-side validation
- Email format checking
- Success/error notifications
- Smooth submission feedback

## 🔧 Development Tips

### Adding New Sections
1. Add HTML structure
2. Style with CSS using existing patterns
3. Add scroll animation with `fade-in` class
4. Update navigation if needed

### Customizing Animations
- Modify keyframes in CSS
- Adjust timing in JavaScript
- Use `IntersectionObserver` for scroll-triggered animations

### Performance Optimization
- Images are placeholder elements (replace with actual images)
- CSS and JavaScript are minified-ready
- Scroll events are throttled for performance

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio. If you make improvements, consider sharing them back with the community!

---

**Built with ❤️ using modern web technologies**


