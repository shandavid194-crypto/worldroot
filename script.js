document.addEventListener('DOMContentLoaded', function() {
    
    const navLinks = document.querySelectorAll('nav ul li a');
    const pages = document.querySelectorAll('.page');
    
    function switchPage(pageId) {
        pages.forEach(page => page.classList.remove('active-page'));
        const activePage = document.getElementById(pageId);
        if (activePage) activePage.classList.add('active-page');
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('data-page') === pageId) link.classList.add('active');
        });
        localStorage.setItem('lastPage', pageId);
    }
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const pageId = this.getAttribute('data-page');
            if (pageId) switchPage(pageId);
        });
    });
    
    const startBtn = document.getElementById('startJourneyBtn');
    if (startBtn) {
        startBtn.addEventListener('click', () => switchPage('bigbang'));
    }
    
    const facts = [
        "The universe is 13.8 billion years old — that's 3x older than Earth!",
        "There are more stars in the universe than grains of sand on all beaches on Earth.",
        "A single supernova can outshine an entire galaxy for weeks.",
        "Humans share 60% of their DNA with bananas — and 99% with chimpanzees.",
        "The asteroid that killed the dinosaurs was 10 km wide.",
        "If the universe's history was compressed into 1 year, humans appeared 23 minutes ago.",
        "Light from the Big Bang is still visible as microwave static."
    ];
    
    const factElement = document.getElementById('randomFact');
    if (factElement) {
        factElement.textContent = facts[Math.floor(Math.random() * facts.length)];
    }
    
    const lastPage = localStorage.getItem('lastPage');
    if (lastPage && document.getElementById(lastPage)) switchPage(lastPage);
    
    const cookieConsent = document.getElementById('cookieConsent');
    if (!localStorage.getItem('cookieConsent') && cookieConsent) {
        setTimeout(() => cookieConsent.classList.add('show'), 500);
    }
    
    document.getElementById('acceptCookies')?.addEventListener('click', () => {
        localStorage.setItem('cookieConsent', 'accepted');
        cookieConsent.classList.remove('show');
    });
    
    document.getElementById('declineCookies')?.addEventListener('click', () => {
        localStorage.setItem('cookieConsent', 'declined');
        cookieConsent.classList.remove('show');
    });
    
    // Universe Animation
    function createUniverseAnimation() {
        const container = document.getElementById('universeAnimation');
        if (!container) return;
        
        const h3 = container.querySelector('h3');
        container.innerHTML = '';
        if (h3) container.appendChild(h3);
        
        for (let i = 0; i < 200; i++) {
            const star = document.createElement('div');
            star.classList.add('star');
            star.style.width = (Math.random() * 3 + 1) + 'px';
            star.style.height = star.style.width;
            star.style.left = Math.random() * 100 + '%';
            star.style.top = Math.random() * 100 + '%';
            star.style.animationDelay = Math.random() * 5 + 's';
            star.style.animationDuration = (Math.random() * 2 + 2) + 's';
            container.appendChild(star);
        }
        
        for (let i = 0; i < 5; i++) {
            const shootingStar = document.createElement('div');
            shootingStar.classList.add('shooting-star');
            shootingStar.style.left = Math.random() * 80 + 20 + '%';
            shootingStar.style.top = Math.random() * 30 + '%';
            shootingStar.style.animationDelay = Math.random() * 10 + 's';
            shootingStar.style.animationDuration = (Math.random() * 3 + 3) + 's';
            container.appendChild(shootingStar);
        }
        
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
        
        const nebulaPositions = [
            { top: '20%', left: '10%', width: '300px', height: '300px' },
            { top: '50%', right: '5%', width: '400px', height: '400px' },
            { bottom: '10%', left: '30%', width: '250px', height: '250px' }
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
    console.log('Website loaded!');
});
