document.addEventListener('DOMContentLoaded', () => {
    // Contact Us elements
    const contactUsBtn = document.getElementById('contactUsBtn');
    const contactIcon = document.getElementById('contactIcon');
    const contactPopup = document.getElementById('contactPopup');
    const closePopup = document.querySelector('#contactPopup .close-popup'); // Specifically target the close button inside the contact popup

    // Quote popup elements
    const quotePopup = document.getElementById('quotePopup');
    const closeQuotePopup = document.querySelector('#quotePopup .close-quote-popup');
    const quoteProductName = document.getElementById('quote-product-name');
    const quoteProductImage = document.getElementById('quote-product-image'); // Add this line to get the image element

    // Open contact popup
    contactUsBtn.addEventListener('click', function (e) {
        e.preventDefault();
        contactPopup.style.display = 'flex';
    });

    contactIcon.addEventListener('click', function () {
        contactPopup.style.display = 'flex';
    });

    // Close contact popup
    closePopup.addEventListener('click', function () {
        contactPopup.style.display = 'none';
    });

    // Close contact popup by clicking outside or pressing Esc
    window.addEventListener('click', function (e) {
        if (e.target === contactPopup) {
            contactPopup.style.display = 'none';
        }
    });

    window.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && contactPopup.style.display === 'flex') {
            contactPopup.style.display = 'none';
        }
    });

    // Handle product quote popup
    const productItems = document.querySelectorAll('.product-item');

    productItems.forEach(item => {
        const quoteBtn = item.querySelector('.get-quote-btn');

        quoteBtn.addEventListener('click', function (e) {
            e.preventDefault();
            const productName = item.getAttribute('data-product-name'); // Get product name from data attribute
            const productImage = item.querySelector('img').src; // Get product image source
            quoteProductName.value = productName; // Set the product name in the quote popup
            quoteProductImage.src = productImage; // Set the product image in the quote popup
            quotePopup.style.display = 'flex'; // Show the quote popup
        });
    });

    // Close quote popup
    closeQuotePopup.addEventListener('click', function () {
        quotePopup.style.display = 'none';
    });

    // Close quote popup by clicking outside or pressing Esc
    window.addEventListener('click', function (e) {
        if (e.target === quotePopup) {
            quotePopup.style.display = 'none';
        }
    });

    window.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && quotePopup.style.display === 'flex') {
            quotePopup.style.display = 'none';
        }
    });

    // Smooth scrolling with offset for fixed navbar
    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            const headerOffset = 100; // Adjust this value based on your navbar height
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition - headerOffset;

            window.scrollBy({
                top: offsetPosition,
                behavior: 'smooth'
            });
        });
    });
});
