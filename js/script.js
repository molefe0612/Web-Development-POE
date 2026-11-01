document.addEventListener('DOMContentLoaded', () => {

    
    //  Highlight Active Navigation Link Automatically
    const currentPath = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('.links a');

    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href');
        if (linkPath === currentPath) {
            link.style.fontWeight = 'bold';
            link.style.borderBottom = '2px solid #A36B5E';
        }
    });

    
    //  Real-time Menu Search Filter (products.html)
   
    const searchInput = document.getElementById('menu-search');
    if (searchInput) {
        searchInput.addEventListener('keyup', (e) => {
            const searchTerm = e.target.value.toLowerCase();
            const productCards = document.querySelectorAll('.product-card');

            productCards.forEach(card => {
                const cardText = card.textContent.toLowerCase();
                if (cardText.includes(searchTerm)) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    }

    
    // Order Form Validation & Interception (enquiry.html)
   
    const orderForm = document.getElementById('order-form');
    if (orderForm) {
        orderForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Stops instant page refresh

            const name = document.getElementById('name').value.trim();
            const phone = document.getElementById('phone').value.trim();
            const product = document.getElementById('product').value;

            // Simple Phone Validation (South Africa standard: 10 digits starting with 0)
            const phoneRegex = /^0\d{9}$/;
            const cleanPhone = phone.replace(/\s+/g, '');

            if (name === '') {
                alert('Please enter your full name.');
                return;
            }

            if (!phoneRegex.test(cleanPhone)) {
                alert('Please enter a valid 10-digit South African phone number (e.g., 0712345678).');
                return;
            }

            // Success feedback to user
            alert(`Thank you, ${name}! Your custom enquiry for "${product}" has been received. We will contact you at ${phone} shortly.`);
            
            // Reset form fields
            orderForm.reset();
        });
    }

    
    // Interactive Hover Effects on Product Cards
    
    const cards = document.querySelectorAll('.product-card');
    cards.forEach(card => {
        card.style.transition = 'transform 0.2s ease, box-shadow 0.2s ease';
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-5px)';
            card.style.boxShadow = '0 6px 16px rgba(74, 46, 43, 0.15)';
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
            card.style.boxShadow = '0 4px 12px rgba(74, 46, 43, 0.05)';
        });
    });

});
