// Wait for the page to load
document.addEventListener('DOMContentLoaded', function() {
    
    // Get all navigation links
    const navLinks = document.querySelectorAll('nav ul li a');
    const pages = document.querySelectorAll('.page');
    
    // Function to switch between pages
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
        
        localStorage.setItem('lastPage', pageId);
    }
    
    // Add click event to navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const pageId = this.getAttribute('data-page');
            if (pageId) {
                switchPage(pageId);
            }
        });
    });
    
    // Start journey button
    const startBtn = document.getElementById('startJourneyBtn');
    if (startBtn) {
        startBtn.addEventListener('click', function() {
            switchPage('bigbang');
        });
    }
    
    // Random facts
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
        const randomFact = facts[Math.floor(Math.random() * facts.length)];
        factElement.textContent = randomFact;
    }
    
    // Restore last page
    const lastPage = localStorage.getItem('lastPage');
    if (lastPage && document.getElementById(lastPage)) {
        switchPage(lastPage);
    }
    
    // Cookie consent
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
    
    // ========== UNIVERSE ANIMATION ==========
    function createUniverseAnimation() {
        const container = document.getElementById('universeAnimation');
        if (!container) return;
        
        const h3 = container.querySelector('h3');
        container.innerHTML = '';
        if (h3) container.appendChild(h3);
        
        // Create 200 stars
        for (let i = 0; i < 200; i++) {
            const star = document.createElement('div');
            star.classList.add('star');
            const size = Math.random() * 3 + 1;
            star.style.width = size + 'px';
            star.style.height = size + 'px';
            star.style.left = Math.random() * 100 + '%';
            star.style.top = Math.random() * 100 + '%';
            star.style.animationDelay = Math.random() * 5 + 's';
            star.style.animationDuration = (Math.random() * 2 + 2) + 's';
            container.appendChild(star);
        }
        
        // Create 5 shooting stars
        for (let i = 0; i < 5; i++) {
            const shootingStar = document.createElement('div');
            shootingStar.classList.add('shooting-star');
            shootingStar.style.left = Math.random() * 80 + 20 + '%';
            shootingStar.style.top = Math.random() * 30 + '%';
            shootingStar.style.animationDelay = Math.random() * 10 + 's';
            shootingStar.style.animationDuration = (Math.random() * 3 + 3) + 's';
            container.appendChild(shootingStar);
        }
        
        // Create 50 floating particles
        for (let i = 0; i < 50; i++) {
            const particle = document.createElement('div');
            particle.classList.add('particle');
            const size = Math.random() * 4 + 1;
            particle.style.width = size + 'px';
            particle.style.height = size + 'px';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.top = Math.random() * 100 + '%';
            particle.style.animationDelay = Math.random() * 20 + 's';
            particle.style.animationDuration = (Math.random() * 15 + 10) + 's';
            container.appendChild(particle);
        }
        
        // Add nebula glows
        const nebulaPositions = [
            { top: '20%', left: '10%', width: '300px', height: '300px' },
            { top: '50%', right: '5%', width: '400px', height: '400px' },
            { bottom: '10%', left: '30%', width: '250px', height: '250px' },
            { top: '60%', right: '20%', width: '200px', height: '200px' }
        ];
        
        nebulaPositions.forEach(pos => {
            const nebula = document.createElement('div');
            nebula.classList.add('nebula-glow');
            if (pos.top) nebula.style.top = pos.top;
            if (pos.left) nebula.style.left = pos.left;
            if (pos.right) nebula.style.right = pos.right;
            if (pos.bottom) nebula.style.bottom = pos.bottom;
            nebula.style.width = pos.width;
            nebula.style.height = pos.height;
            container.appendChild(nebula);
        });
    }
    
    createUniverseAnimation();
    
    console.log('Website loaded — navigation and animation working!');
});
