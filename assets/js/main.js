/**
 * Julia Jonsson Website - Main JavaScript
 * Pure vanilla JS - no dependencies
 */

(function() {
    'use strict';

    // ================================
    // Mobile Menu Toggle
    // ================================
    const mobileToggle = document.querySelector('.mobile-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (mobileToggle && navMenu) {
        mobileToggle.addEventListener('click', function() {
            this.classList.toggle('active');
            navMenu.classList.toggle('active');
            
            // Update ARIA attribute
            const isExpanded = this.classList.contains('active');
            this.setAttribute('aria-expanded', isExpanded);
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            const isClickInsideNav = navMenu.contains(event.target);
            const isClickOnToggle = mobileToggle.contains(event.target);
            
            if (!isClickInsideNav && !isClickOnToggle && navMenu.classList.contains('active')) {
                mobileToggle.classList.remove('active');
                navMenu.classList.remove('active');
                mobileToggle.setAttribute('aria-expanded', 'false');
            }
        });

        // Close menu when clicking on a link
        const navLinks = navMenu.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                if (navMenu.classList.contains('active')) {
                    mobileToggle.classList.remove('active');
                    navMenu.classList.remove('active');
                    mobileToggle.setAttribute('aria-expanded', 'false');
                }
            });
        });
    }

    // ================================
    // Gallery Filter
    // ================================
    const filterButtons = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');

    if (filterButtons.length > 0 && galleryItems.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                const filter = this.getAttribute('data-filter');
                
                // Update active button
                filterButtons.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');
                
                // Filter gallery items
                galleryItems.forEach(item => {
                    if (filter === 'all') {
                        item.classList.remove('hidden');
                        // Fade in animation
                        item.style.animation = 'fadeIn 0.5s ease';
                    } else {
                        const categories = item.getAttribute('data-category');
                        if (categories && categories.includes(filter)) {
                            item.classList.remove('hidden');
                            item.style.animation = 'fadeIn 0.5s ease';
                        } else {
                            item.classList.add('hidden');
                        }
                    }
                });
            });
        });
    }

    // ================================
    // Language Toggle
    // ================================
    const langToggle = document.getElementById('langToggle');
    let currentLang = 'pt'; // Default language (Portuguese)

    // Get saved language preference
    const savedLang = localStorage.getItem('preferredLanguage');
    if (savedLang) {
        currentLang = savedLang;
        setLanguage(currentLang);
    }

    if (langToggle) {
        langToggle.addEventListener('click', function() {
            // Cycle through PT -> SV -> EN -> PT
            if (currentLang === 'pt') {
                currentLang = 'sv';
            } else if (currentLang === 'sv') {
                currentLang = 'en';
            } else {
                currentLang = 'pt';
            }
            setLanguage(currentLang);
            localStorage.setItem('preferredLanguage', currentLang);
        });
    }

    function setLanguage(lang) {
        // Update all elements with data-lang attributes
        const ptElements = document.querySelectorAll('[data-lang-pt]');
        const svElements = document.querySelectorAll('[data-lang-sv]');
        const enElements = document.querySelectorAll('[data-lang-en]');

        // Hide all language elements first
        ptElements.forEach(el => el.style.display = 'none');
        svElements.forEach(el => el.style.display = 'none');
        enElements.forEach(el => el.style.display = 'none');

        // Show only the selected language
        if (lang === 'pt') {
            ptElements.forEach(el => el.style.display = '');
        } else if (lang === 'sv') {
            svElements.forEach(el => el.style.display = '');
        } else if (lang === 'en') {
            enElements.forEach(el => el.style.display = '');
        }

        // Update language toggle button
        const ptSpans = langToggle?.querySelectorAll('[data-lang="pt"]');
        const svSpans = langToggle?.querySelectorAll('[data-lang="sv"]');
        const enSpans = langToggle?.querySelectorAll('[data-lang="en"]');
        
        if (ptSpans && svSpans && enSpans) {
            ptSpans.forEach(span => span.style.display = 'none');
            svSpans.forEach(span => span.style.display = 'none');
            enSpans.forEach(span => span.style.display = 'none');
            
            if (lang === 'pt') {
                ptSpans.forEach(span => span.style.display = '');
            } else if (lang === 'sv') {
                svSpans.forEach(span => span.style.display = '');
            } else if (lang === 'en') {
                enSpans.forEach(span => span.style.display = '');
            }
        }

        // Update HTML lang attribute
        document.documentElement.setAttribute('lang', lang);
    }

    // ================================
    // Smooth Scroll for Anchor Links
    // ================================
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Only handle internal anchors (not just #)
            if (href !== '#' && href.length > 1) {
                const target = document.querySelector(href);
                
                if (target) {
                    e.preventDefault();
                    const navHeight = document.querySelector('.navbar')?.offsetHeight || 0;
                    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // ================================
    // Contact Form Handler with Resend
    // ================================
    const contactForm = document.getElementById('contactForm');
    const submitBtn = document.getElementById('submitBtn');
    const formSuccess = document.getElementById('formSuccess');
    const formError = document.getElementById('formError');
    const errorText = document.getElementById('errorText');
    
    if (contactForm) {
        contactForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            // Get form data
            const name = document.getElementById('name');
            const email = document.getElementById('email');
            const subject = document.getElementById('subject');
            const message = document.getElementById('message');
            
            // Hide previous messages
            if (formSuccess) formSuccess.style.display = 'none';
            if (formError) formError.style.display = 'none';
            
            // Clear previous error states
            [name, email, subject, message].forEach(field => {
                if (field) {
                    field.style.borderColor = '';
                }
            });
            
            // Validate required fields
            let isValid = true;
            
            if (!name?.value.trim()) {
                name.style.borderColor = '#dc3545';
                isValid = false;
            }
            
            if (!email?.value.trim() || !isValidEmail(email.value)) {
                email.style.borderColor = '#dc3545';
                isValid = false;
            }
            
            if (!subject?.value) {
                subject.style.borderColor = '#dc3545';
                isValid = false;
            }
            
            if (!message?.value.trim()) {
                message.style.borderColor = '#dc3545';
                isValid = false;
            }
            
            if (!isValid) {
                if (formError && errorText) {
                    errorText.textContent = 'Por favor, preencha todos os campos obrigatórios corretamente.';
                    formError.style.display = 'block';
                }
                return;
            }
            
            // Disable submit button and show loading state
            if (submitBtn) {
                submitBtn.disabled = true;
                submitBtn.textContent = 'Enviando...';
            }
            
            try {
                // Send form data to API
                const response = await fetch('/api/contact', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        name: name.value.trim(),
                        email: email.value.trim(),
                        subject: subject.value,
                        message: message.value.trim(),
                    }),
                });
                
                const data = await response.json();
                
                if (response.ok) {
                    // Success!
                    if (formSuccess) {
                        formSuccess.style.display = 'block';
                        formSuccess.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                    }
                    
                    // Reset form
                    contactForm.reset();
                    
                    // Re-enable button after 3 seconds
                    setTimeout(() => {
                        if (submitBtn) {
                            submitBtn.disabled = false;
                            submitBtn.textContent = 'Enviar Mensagem';
                        }
                        if (formSuccess) {
                            formSuccess.style.display = 'none';
                        }
                    }, 5000);
                    
                } else {
                    // Error from server
                    throw new Error(data.error || 'Erro ao enviar mensagem');
                }
                
            } catch (error) {
                console.error('Form submission error:', error);
                
                if (formError && errorText) {
                    errorText.textContent = error.message || 'Algo deu errado. Por favor, tente novamente.';
                    formError.style.display = 'block';
                    formError.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                }
                
                // Re-enable button
                if (submitBtn) {
                    submitBtn.disabled = false;
                    submitBtn.textContent = 'Enviar Mensagem';
                }
            }
        });
    }
    
    function isValidEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    // ================================
    // Add Animation on Scroll
    // ================================
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for fade-in animation
    const animateElements = document.querySelectorAll('.stat-card, .achievement-card, .benefit-card, .highlight-card, .gallery-item');
    
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // ================================
    // Active Navigation Link Highlighting
    // ================================
    function setActiveNavLink() {
        const currentPath = window.location.pathname;
        const navLinks = document.querySelectorAll('.nav-link');
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            const href = link.getAttribute('href');
            
            // Check if current path matches link href
            if (currentPath === href || 
                (currentPath === '/' && href === '/') ||
                (currentPath.includes(href) && href !== '/')) {
                link.classList.add('active');
            }
        });
    }
    
    setActiveNavLink();

    // ================================
    // Image Loading Optimization
    // ================================
    // Add loading="lazy" to images that don't have it
    const images = document.querySelectorAll('img:not([loading])');
    images.forEach(img => {
        if (!img.closest('.hero-image')) {
            img.setAttribute('loading', 'lazy');
        }
    });

    // ================================
    // Preload Critical Resources
    // ================================
    // Preload hero image if present
    const heroImage = document.querySelector('.hero-image img');
    if (heroImage) {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = heroImage.src;
        document.head.appendChild(link);
    }

    // ================================
    // Keyboard Navigation Enhancement
    // ================================
    // Allow Enter key to trigger gallery filter buttons
    filterButtons.forEach(button => {
        button.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                this.click();
            }
        });
    });

    // ================================
    // Gallery Item Click Handler
    // ================================
    galleryItems.forEach(item => {
        item.addEventListener('click', function() {
            const img = this.querySelector('img');
            if (img) {
                // You could implement a lightbox here
                // For now, just make it clear it's clickable
                this.style.cursor = 'pointer';
            }
        });
    });

    // ================================
    // Performance: Debounce Scroll Events
    // ================================
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    // Add scroll-based effects with debouncing
    const handleScroll = debounce(function() {
        // Add subtle shadow to navbar on scroll
        const navbar = document.querySelector('.navbar');
        if (navbar) {
            if (window.scrollY > 50) {
                navbar.style.boxShadow = 'var(--shadow-md)';
            } else {
                navbar.style.boxShadow = 'var(--shadow-sm)';
            }
        }
    }, 100);

    window.addEventListener('scroll', handleScroll);

    // ================================
    // Add CSS Animation Keyframes Dynamically
    // ================================
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeIn {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
    `;
    document.head.appendChild(style);

    // ================================
    // Console Welcome Message
    // ================================
    console.log('%c👋 Olá! Welcome to Julia Jonsson\'s website!', 'font-size: 16px; font-weight: bold; color: #0066cc;');
    console.log('%cInterested in partnerships? Contact: oi@johan.com.br', 'font-size: 12px; color: #666;');

})();

