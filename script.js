let activeFilter = 'all';

function typewriterEffect() {
    const text = 'ALMOTASEM';
    const nameElement = document.getElementById('typewriter-name');
    let i = 0;
    
    nameElement.classList.add('typewriter');
    
    function type() {
        if (i < text.length) {
            nameElement.textContent += text.charAt(i);
            i++;
            setTimeout(type, 150);
        } else {
            setTimeout(() => {
                nameElement.classList.remove('typewriter');
            }, 1000);
        }
    }
    
    setTimeout(type, 500);
}

document.addEventListener('DOMContentLoaded', function() {
    typewriterEffect();
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('#projects-container [data-category]');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            projectCards.forEach(card => {
                if (filter === 'all' || card.getAttribute('data-category') === filter) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
    
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        if (name && email && message) {
            alert('Thank you for your message! I will get back to you soon.');
            
            contactForm.reset();
        } else {
            alert('Please fill in all fields.');
        }
    });
    
    function handleScrollAnimations() {
        const animationClasses = ['.fade-in', '.slide-in-left', '.slide-in-right', '.zoom-in', '.rotate-in'];
        
        animationClasses.forEach(className => {
            const elements = document.querySelectorAll(className);
            elements.forEach(element => {
                const elementTop = element.getBoundingClientRect().top;
                const elementVisible = 150;
                
                if (elementTop < window.innerHeight - elementVisible) {
                    element.classList.add('visible');
                }
            });
        });
    }
    
    handleScrollAnimations();
    
    window.addEventListener('scroll', handleScrollAnimations);
    
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.98)';
            navbar.style.transform = 'translateY(0)';
        } else {
            navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
        }
    });
    
    const animatedProjectCards = document.querySelectorAll('.project-card');
    animatedProjectCards.forEach((card, index) => {
        card.style.transitionDelay = `${index * 0.1}s`;
    });
    
    const skillCategories = document.querySelectorAll('.skill-category');
    skillCategories.forEach((skill, index) => {
        skill.style.transitionDelay = `${index * 0.05}s`;
    });
    
    const techTags = document.querySelectorAll('.tech-tag');
    techTags.forEach(tag => {
        tag.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
            this.style.transition = 'all 0.2s ease';
            this.style.backgroundColor = '#e9ecef';
        });
        
        tag.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
            this.style.backgroundColor = '#f8f9fa';
        });
    });
});

function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

function addParallaxEffect() {
    let ticking = false;
    
    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(() => {
                const scrolled = window.pageYOffset;
                const parallax = document.querySelector('.hero-section');
                const speed = scrolled * 0.3;
                parallax.style.transform = `translateY(${speed}px)`;
                ticking = false;
            });
            ticking = true;
        }
    });
}

addParallaxEffect();
