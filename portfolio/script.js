// Wait for the entire page to load


// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', () => {
    const toggleIcon = document.getElementById('toggle-icon');
    const navbar = document.getElementById('navbar');

    // Add click event listener to the toggle icon
    toggleIcon.addEventListener('click', () => {
        navbar.classList.toggle('active');
        toggleIcon.innerHTML = navbar.classList.contains('active') 
            ? "<i class='bx bx-x'></i>" 
            : "<i class='bx bx-menu'></i>";
    });

    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.navbar a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault(); 
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
});
