document.addEventListener('DOMContentLoaded', function() {
    
    // Page navigation
    const navLinks = document.querySelectorAll('nav ul li a');
    const pages = document.querySelectorAll('.page');
    
    function switchPage(pageId) {
        pages.forEach(page => {
            page.classList.remove('active-page');
        });
        const activePage = document.getElementById(pageId);
        if (activePage) {
            activePage.classList.add('active-page');
        }
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('data-page') === pageId) {
                link.classList.add('active');
            }
        });
        
        // Save to localStorage so returning users see the same page
        localStorage.setItem('lastPage', pageId);
    }
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const pageId = this.getAttribute('data-page');
            if (pageId) switchPage(pageId);
        });
    });
    
    // Start button
    const startBtn = document.getElementById('startJourneyBtn');
    if (startBtn) {
        startBtn.addEventListener('click', function() {
            switchPage('bigbang');
        });
    }
    
    // Random facts array
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
    
    const factElement = document.getElementById('randomFact');
    if (factElement) {
        const randomFact = facts[Math.floor(Math.random() facts.length)];
        factElement.textContent = randomFact;
    }
    
    // Restore last visited page
    const lastPage = localStorage.getItem('lastPage');
    if (lastPage && document.getElementById(lastPage)) {
        switchPage(lastPage);
    }
    
    // Cookie consent
    const cookieConsent = document.getElementById('cookieConsent');
    const cookieChoice = localStorage.getItem('cookieConsent');
    
    if (!cookieChoice) {
        setTimeout(() => {
            if (cookieConsent) cookieConsent.classList.add('show');
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
    
    console.log('🌍 Universe History website loaded — ready for YouTube & TikTok!');
});
