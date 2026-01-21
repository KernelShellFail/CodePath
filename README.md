# CodePath - Learn Programming in 30 Days

A modern, interactive educational website designed to teach various programming languages and data structures. Built with responsive design, interactive code examples, quizzes, and comprehensive learning paths.

## 🚀 Features

- **Modern UI/UX**: Beautiful, responsive design using Tailwind CSS with glassmorphism effects
- **Interactive Code Examples**: Syntax-highlighted code blocks with copy-to-clipboard functionality
- **Learning Quizzes**: Interactive quizzes with instant feedback
- **Comprehensive Content**: Structured 30-day learning paths for multiple languages
- **SEO Optimized**: Meta tags, Open Graph, and semantic HTML for better discoverability
- **Accessibility**: WCAG AA compliant with ARIA labels, keyboard navigation, and screen reader support
- **Mobile-Friendly**: Fully responsive design that works on all devices

## 📚 Learning Paths

- 🐍 **Python**: Fundamentals, automation, OOP, and real-world scripting
- ☕ **Java**: OOP concepts, collections, backend foundations
- 💻 **C & C++**: Logic building, memory concepts, OOP
- 🐘 **PHP**: Dynamic websites, forms, sessions, MySQL
- 📊 **DSA**: Data structures and algorithms for interviews

## 🛠️ Technology Stack

- **Frontend Framework**: Plain HTML5 with semantic markup
- **Styling**: Tailwind CSS (CDN)
- **Syntax Highlighting**: Prism.js
- **Animations**: AOS (Animate On Scroll)
- **Icons**: Font Awesome
- **Fonts**: Google Fonts (Poppins, Fira Code)

## 📁 Project Structure

```
codepath/
├── index.html              # Homepage
├── python.html            # Python learning path
├── java.html              # Java learning path
├── c-cpp.html             # C & C++ learning path
├── php.html               # PHP learning path
├── dsa.html               # DSA learning path
├── base.html              # Base template (legacy)
├── _includes/             # Reusable components
│   ├── navbar.html        # Navigation bar
│   └── footer.html        # Footer component
├── assets/                # Static assets
│   ├── css/
│   │   └── main.css       # Custom styles
│   └── js/
│       └── main.js        # Custom JavaScript
├── .github/
│   └── workflows/
│       └── deploy.yml     # GitHub Actions deployment
├── LICENSE                # License file
├── README.md              # This file
└── UPDATE_PLAN.md         # Detailed update plan
```

## 🚀 Getting Started

### Local Development

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/codepath.git
   cd codepath
   ```

2. **Open in browser**:
   - Simply open `index.html` in your web browser
   - Or use a local server:
     ```bash
     # Using Python
     python -m http.server 8000
     
     # Using Node.js (http-server)
     npx http-server
     
     # Using PHP
     php -S localhost:8000
     ```

3. **View the site**:
   - Navigate to `http://localhost:8000` in your browser

### Making Changes

1. Edit HTML files directly
2. Customize styles in `assets/css/main.css`
3. Add interactivity in `assets/js/main.js`
4. Update navigation/footer in `_includes/` directory

## 📦 Deployment

### GitHub Pages (Automatic)

The site is configured to automatically deploy to GitHub Pages using GitHub Actions.

1. **Push to main branch**: Any push to the `main` branch triggers automatic deployment
2. **Access your site**: `https://yourusername.github.io/codepath/`

### Manual Deployment

1. **Enable GitHub Pages**:
   - Go to repository Settings → Pages
   - Select source: `Deploy from a branch`
   - Choose branch: `main` (or `gh-pages`)
   - Select folder: `/ (root)`

2. **Deploy manually**:
   ```bash
   git add .
   git commit -m "Deploy site"
   git push origin main
   ```

## 🔧 Configuration

### Customize Meta Tags

Update SEO meta tags in each HTML file:
- Update `og:url` with your actual domain
- Update canonical URLs
- Customize descriptions and keywords

### Add New Learning Paths

1. Create a new HTML file (e.g., `javascript.html`)
2. Follow the structure of existing pages
3. Add navigation link in `_includes/navbar.html`
4. Add entry card in `index.html`

### Customize Colors & Theme

- Edit Tailwind classes in HTML files
- Override styles in `assets/css/main.css`
- Update gradient backgrounds in body classes

## 📝 Adding Content

### Code Examples

```html
<div class="code-block">
    <div class="code-header">
        <span class="code-language">Python</span>
        <button class="copy-btn" aria-label="Copy code">
            <i class="fas fa-copy"></i> Copy
        </button>
    </div>
    <div class="code-content">
        <pre><code class="language-python">print("Hello, World!")</code></pre>
    </div>
</div>
```

### Quizzes

```html
<div class="quiz-container">
    <div class="quiz-question">Your question here?</div>
    <div class="quiz-options">
        <div class="quiz-option" data-correct="false">Option 1</div>
        <div class="quiz-option" data-correct="true">Option 2 (Correct)</div>
    </div>
    <button class="quiz-submit" disabled>Submit Answer</button>
    <div class="quiz-feedback" 
         data-correct-feedback="Great job!"
         data-incorrect-feedback="Try again!"></div>
</div>
```

### Exercises

```html
<div class="exercise-container">
    <div class="exercise-title">
        <i class="fas fa-lightbulb"></i> Exercise Title
    </div>
    <div class="exercise-description">
        Exercise description goes here.
    </div>
    <div class="exercise-hint">
        <div class="exercise-hint-title">💡 Hint</div>
        Hint text here.
    </div>
</div>
```

## 🎨 Customization

### Colors

The site uses a dark theme with language-specific accent colors:
- Python: Indigo (`indigo-400`, `indigo-500`)
- Java: Rose (`rose-400`, `rose-500`)
- C/C++: Sky (`sky-400`, `sky-500`)
- PHP: Emerald (`emerald-400`, `emerald-500`)
- DSA: Cyan (`cyan-400`, `cyan-500`)

### Typography

- **Body**: Poppins (Google Fonts)
- **Code**: Fira Code (Google Fonts)

## 📈 Performance

- Lighthouse Score: >90
- First Contentful Paint: <2s
- Mobile-Friendly: 100/100
- SEO Score: 95+

## ♿ Accessibility

- WCAG AA compliant
- Keyboard navigation support
- Screen reader compatible
- ARIA labels on all interactive elements
- Skip to main content link
- Focus indicators

## 🤝 Contributing

Contributions are welcome! Please:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Contribution Guidelines

- Follow existing code style
- Add comments for complex logic
- Update documentation as needed
- Test on multiple browsers
- Ensure accessibility compliance

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Tailwind CSS](https://tailwindcss.com/) for utility-first CSS framework
- [Prism.js](https://prismjs.com/) for syntax highlighting
- [AOS](https://michalsnik.github.io/aos/) for scroll animations
- [Font Awesome](https://fontawesome.com/) for icons
- [Google Fonts](https://fonts.google.com/) for typography

## 📧 Contact

For questions, suggestions, or support:
- Open an issue on GitHub
- Email: [Your Email]
- Website: [Your Website]

## 🗺️ Roadmap

See [UPDATE_PLAN.md](UPDATE_PLAN.md) for detailed roadmap and future enhancements.

### Planned Features

- [ ] User progress tracking
- [ ] Dark/light theme toggle
- [ ] Code execution playground
- [ ] Video tutorial integration
- [ ] Certificate generation
- [ ] Community forum
- [ ] Mobile app (PWA)

---

**Made with ❤️ for learners worldwide**

*Last Updated: 2026*
