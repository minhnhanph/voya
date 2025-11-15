// Handle form submission
document.getElementById('signupForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    
    // Basic email validation
    if (email && email.includes('@')) {
        // Here you would typically send the email to your backend
        console.log('Email submitted:', email);
        
        // Show success message (you can customize this)
        alert('Thanks for signing up! We\'ll be in touch soon.');
        
        // Reset form
        document.getElementById('email').value = '';
    } else {
        alert('Please enter a valid email address.');
    }
});

// Handle launch form submission
// document.getElementById('launchSignupForm').addEventListener('submit', function(e) {
//     e.preventDefault();
    
//     const email = document.getElementById('launchEmail').value;
    
//     // Basic email validation
//     if (email && email.includes('@')) {
//         // Here you would typically send the email to your backend
//         console.log('Launch email submitted:', email);
        
//         // Show success message (you can customize this)
//         alert('Thanks for signing up! We\'ll be in touch soon.');
        
//         // Reset form
//         document.getElementById('launchEmail').value = '';
//     } else {
//         alert('Please enter a valid email address.');
//     }
// });

// Optional: Add smooth scroll behavior
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

