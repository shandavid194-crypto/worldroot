// When the page loads
document.addEventListener('DOMContentLoaded', function() {
    console.log('Website loaded successfully!');
    
    // Button click handler
    const button = document.getElementById('clickMeBtn');
    
    if (button) {
        button.addEventListener('click', function() {
            alert('🎉 You built this! Your website is working perfectly.');
        });
    }
    
    // Dynamic hover effect on cards
    const cards = document.querySelectorAll('.card');
    
    cards.forEach((card, index) => {
        card.addEventListener('mouseenter', () => {
            console.log(`You hovered over card ${index + 1}`);
        });
    });
    
    // Add a small easter egg: click the logo
    const logo = document.querySelector('.logo');
    if (logo) {
        logo.addEventListener('click', () => {
            const colors = ['#667eea', '#764ba2', '#ff6b6b', '#4ecdc4'];
            const randomColor = colors[Math.floor(Math.random() * colors.length)];
            document.body.style.background = `linear-gradient(135deg, ${randomColor} 0%, #1a1a2e 100%)`;
        });
    }
});