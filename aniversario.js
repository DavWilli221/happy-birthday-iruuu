function openSurprise() {
    document.getElementById('lobby').classList.remove('active');
    document.getElementById('menu-screen').classList.add('active');
    
    setTimeout(() => {
        const wrapper = document.getElementById('envelopeWrapper');
        if (wrapper) {
            wrapper.classList.add('open');
        }
    }, 400); 
}

function navigateTo(screenId) {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    document.getElementById(screenId).classList.add('active');
}

function createPetal() {
    const petal = document.createElement('div');
    petal.classList.add('petal');
    
    const size = Math.random() * 15 + 10;
    petal.style.width = `${size}px`;
    petal.style.height = `${size}px`;
    petal.style.left = Math.random() * window.innerWidth + 'px';
    
    const colors = ['#ffcbd5', '#ffb7c5', '#fff0f5', '#ffe4e1'];
    petal.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    
    const duration = Math.random() * 5 + 5;
    petal.style.animationDuration = `${duration}s`;
    
    document.body.appendChild(petal);
    
    setTimeout(() => {
        petal.remove();
    }, duration * 1000);
}

setInterval(createPetal, 300);
