// Main JavaScript for CodePath Website

// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            const isExpanded = mobileMenuBtn.getAttribute('aria-expanded') === 'true';
            mobileMenu.classList.toggle('hidden');
            mobileMenuBtn.setAttribute('aria-expanded', !isExpanded);
        });
    }

    // Highlight active nav link
    highlightActiveNavLink();
});

// Highlight active navigation link
function highlightActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link, #mobile-menu a');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('text-white', 'font-semibold');
            link.classList.remove('text-gray-300');
        }
    });
}

// Copy to Clipboard Functionality
function initCopyButtons() {
    const copyButtons = document.querySelectorAll('.copy-btn');
    
    copyButtons.forEach(btn => {
        btn.addEventListener('click', async function() {
            const codeBlock = this.closest('.code-block');
            const codeElement = codeBlock?.querySelector('pre code, .code-content pre');
            
            if (codeElement) {
                const code = codeElement.textContent;
                
                try {
                    await navigator.clipboard.writeText(code);
                    
                    // Visual feedback
                    const originalText = this.innerHTML;
                    this.innerHTML = '<span>✓ Copied!</span>';
                    this.classList.add('copied');
                    
                    setTimeout(() => {
                        this.innerHTML = originalText;
                        this.classList.remove('copied');
                    }, 2000);
                } catch (err) {
                    console.error('Failed to copy:', err);
                    // Fallback for older browsers
                    const textArea = document.createElement('textarea');
                    textArea.value = code;
                    document.body.appendChild(textArea);
                    textArea.select();
                    document.execCommand('copy');
                    document.body.removeChild(textArea);
                    
                    this.innerHTML = '<span>✓ Copied!</span>';
                    setTimeout(() => {
                        this.innerHTML = '<span>Copy</span>';
                    }, 2000);
                }
            }
        });
    });
}

// Initialize copy buttons when DOM is ready
document.addEventListener('DOMContentLoaded', initCopyButtons);

// Quiz Functionality
function initQuiz() {
    const quizContainers = document.querySelectorAll('.quiz-container');
    
    quizContainers.forEach(container => {
        const options = container.querySelectorAll('.quiz-option');
        const submitBtn = container.querySelector('.quiz-submit');
        const feedback = container.querySelector('.quiz-feedback');
        let selectedOption = null;
        
        options.forEach(option => {
            option.addEventListener('click', function() {
                if (this.classList.contains('selected')) {
                    // Deselect
                    this.classList.remove('selected');
                    selectedOption = null;
                } else {
                    // Remove selection from others
                    options.forEach(opt => opt.classList.remove('selected'));
                    // Select this one
                    this.classList.add('selected');
                    selectedOption = this;
                }
                
                // Update submit button state
                if (submitBtn) {
                    submitBtn.disabled = !selectedOption;
                }
            });
        });
        
        if (submitBtn) {
            submitBtn.addEventListener('click', function() {
                if (!selectedOption) return;
                
                const isCorrect = selectedOption.dataset.correct === 'true';
                
                // Show feedback
                if (feedback) {
                    feedback.classList.add('show');
                    feedback.classList.remove('correct', 'incorrect');
                    feedback.classList.add(isCorrect ? 'correct' : 'incorrect');
                    feedback.textContent = isCorrect 
                        ? '✓ Correct! ' + (feedback.dataset.correctFeedback || 'Well done!')
                        : '✗ Incorrect. ' + (feedback.dataset.incorrectFeedback || 'Try again!');
                }
                
                // Mark options
                options.forEach(opt => {
                    opt.style.pointerEvents = 'none';
                    if (opt.dataset.correct === 'true') {
                        opt.classList.add('correct');
                    } else if (opt === selectedOption && !isCorrect) {
                        opt.classList.add('incorrect');
                    }
                });
                
                // Disable submit button
                submitBtn.disabled = true;
            });
        }
    });
}

// Initialize quizzes when DOM is ready
document.addEventListener('DOMContentLoaded', initQuiz);

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#') return;
        
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Lazy load images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    observer.unobserve(img);
                }
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// Add fade-in animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Apply to elements with fade-in class
document.querySelectorAll('.fade-in').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    fadeObserver.observe(el);
});
