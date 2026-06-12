// --- Mobile Responsive Navigation Menu Toggle ---
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// --- Backpage (Modal Overlay) Interactive UI Elements ---
const modalCards = document.querySelectorAll('[data-modal]');
const closeButtons = document.querySelectorAll('.close-btn');
const overlays = document.querySelectorAll('.modal-overlay');

// Handle open triggers on grid element selection
modalCards.forEach(card => {
    card.addEventListener('click', () => {
        const modalId = card.getAttribute('data-modal');
        const targetModal = document.getElementById(modalId);
        if (targetModal) {
            targetModal.classList.add('open');
            document.body.style.overflow = 'hidden'; // Prevents background body scrolling activity
        }
    });
});

// Close current panel via target action
closeButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const openModal = btn.closest('.modal-overlay');
        openModal.classList.remove('open');
        document.body.style.overflow = 'auto'; // Restores layout scroll actions
    });
});

// Close open view upon out-of-bounds container selection
overlays.forEach(overlay => {
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
            overlay.classList.remove('open');
            document.body.style.overflow = 'auto';
        }
    });
});

// --- Prevent Modal Closure When Clicking Inside Footer Links ---
const modalLinks = document.querySelectorAll('.modal-footer-links a');

modalLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        // This ensures clicking the link opens the URL instead of triggering parent modal events
        e.stopPropagation(); 
    });
});

// --- Contact Form Submission Handler Hook ---
const contactForm = document.querySelector('.contact-form');
contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you! Your message has been recorded.');
    contactForm.reset();
});