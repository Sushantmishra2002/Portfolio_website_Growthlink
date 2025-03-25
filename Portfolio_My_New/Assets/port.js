   // Previous scripts remain the same

         // Smooth scrolling
         document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });

        // Enhanced typing effect
        const title = document.querySelector('.title');
        const roles = [
            "Web Developer",
            "Web Designer",
            "MERN Stack Developer",
            "Engineering Student",
            "Learner"
        ];
        let roleIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        let typingSpeed = 100;
        let deletingSpeed = 50;

        function typeWriter() {
            const currentRole = roles[roleIndex];
            
            if (isDeleting) {
                title.textContent = currentRole.substring(0, charIndex - 1);
                charIndex--;
                typingSpeed = deletingSpeed;
            } else {
                title.textContent = currentRole.substring(0, charIndex + 1);
                charIndex++;
                typingSpeed = 100;
            }

            if (!isDeleting && charIndex === currentRole.length) {
                isDeleting = true;
                typingSpeed = 1000;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                roleIndex = (roleIndex + 1) % roles.length;
                typingSpeed = 200;
            }

            setTimeout(typeWriter, typingSpeed);
        }

        typeWriter();

        // Skills animation
        function animateSkills() {
            const progressBars = document.querySelectorAll('.progress');
            progressBars.forEach(progress => {
                const width = progress.getAttribute('data-width');
                progress.style.width = width + '%';
            });
        }

        // Trigger skills animation when section is in view
        const skillsSection = document.querySelector('.skills-section');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateSkills();
                }
            });
        });
        observer.observe(skillsSection);

        // Certificate modal
        const modal = document.querySelector('.modal');
        const modalImage = document.querySelector('.modal-image');
        const closeModal = document.querySelector('.close-modal');
        const certificateCards = document.querySelectorAll('.certificate-card');

        certificateCards.forEach(card => {
            card.addEventListener('click', () => {
                const imgSrc = card.querySelector('.certificate-image').src;
                modalImage.src = imgSrc;
                modal.style.display = 'block';
            });
        });

        closeModal.addEventListener('click', () => {
            modal.style.display = 'none';
        });

        window.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });
        // Add this to your existing port.js file
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    hamburger.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!navLinks.contains(event.target) && !hamburger.contains(event.target)) {
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
        }
    });
    
    // Close menu when clicking a link
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });
});