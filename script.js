// Wait for the page to load
document.addEventListener('DOMContentLoaded', function() {
    
    // Get all navigation links
    const navLinks = document.querySelectorAll('nav ul li a');
    const pages = document.querySelectorAll('.page');
    
    // Function to switch between pages
    function switchPage(pageId) {
        // Hide all pages
        pages.forEach(page => {
            page.classList.remove('active-page');
        });
        
        // Show the selected page
        const activePage = document.getElementById(pageId);
        if (activePage) {
            activePage.classList.add('active-page');
        }
        
        // Update active class on navigation links
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('data-page') === pageId) {
                link.classList.add('active');
            }
        });
        
        // Save to localStorage
        localStorage.setItem('lastPage', pageId);
    }
    
    // Add click event to each navigation link
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Stop page from refreshing
            const pageId = this.getAttribute('data-page');
            if (pageId) {
                switchPage(pageId);
            }
        });
    });
    
    // Make the "Start the Journey" button work
    const startBtn = document.getElementById('startJourneyBtn');
    if (startBtn) {
        startBtn.addEventListener('click', function() {
            switchPage('bigbang');
        });
    }
    
    // Random facts for the "Did You Know?" section
    const facts = [
        "The universe is 13.8 billion years old — that's 3x older than Earth!",
        "There are more stars in the universe than grains of sand on all beaches on Earth.",
        "A single supernova (exploding star) can outshine an entire galaxy for weeks.",
        "Humans share 60% of their DNA with bananas — and 99% with chimpanzees.",
        "The asteroid that killed the dinosaurs was 10 km wide — the crater is in Mexico.",
        "If the universe's history was compressed into 1 year, humans appeared 23 minutes ago.",
        "The sound of a black hole is the lowest note in the universe — 57 octaves below middle C.",
        "Light from the Big Bang is still traveling — we can see it as microwave static."
    ];
    
    // Display a random fact
    const factElement = document.getElementById('randomFact');
    if (factElement) {
        const randomFact = facts[Math.floor(Math.random() * facts.length)];
        factElement.textContent = randomFact;
    }
    
    // Restore last visited page (optional)
    const lastPage = localStorage.getItem('lastPage');
    if (lastPage && document.getElementById(lastPage)) {
        switchPage(lastPage);
    }
    
    // Cookie consent logic
    const cookieConsent = document.getElementById('cookieConsent');
    const cookieChoice = localStorage.getItem('cookieConsent');
    
    if (!cookieChoice && cookieConsent) {
        setTimeout(() => {
            cookieConsent.classList.add('show');
        }, 500);
    }
    
    const acceptBtn = document.getElementById('acceptCookies');
    if (acceptBtn) {
        acceptBtn.addEventListener('click', function() {
            localStorage.setItem('cookieConsent', 'accepted');
            if (cookieConsent) cookieConsent.classList.remove('show');
        });
    }
    
    const declineBtn = document.getElementById('declineCookies');
    if (declineBtn) {
        declineBtn.addEventListener('click', function() {
            localStorage.setItem('cookieConsent', 'declined');
            if (cookieConsent) cookieConsent.classList.remove('show');
        });
    }
    
    console.log('Website loaded — navigation should work now!');
});
