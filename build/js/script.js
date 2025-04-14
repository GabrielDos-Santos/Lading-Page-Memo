document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.carousel-3d');
    const container = document.querySelector('.carousel-container');
    const slides = document.querySelectorAll('.carousel-slide');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    const indicatorsContainer = document.querySelector('.carousel-3d-indicators');
    
    let currentIndex = 0;
    const slideCount = slides.length;
    let isAnimating = false;
    let intervalId;
    const intervalTime = 5000;
    
    // Criar indicadores dinamicamente
    slides.forEach((_, index) => {
        const indicator = document.createElement('button');
        indicator.setAttribute('aria-label', `Ir para slide ${index + 1}`);
        if (index === 0) indicator.classList.add('active');
        indicator.addEventListener('click', () => goToSlide(index));
        indicatorsContainer.appendChild(indicator);
    });
    
    const indicators = document.querySelectorAll('.carousel-3d-indicators button');
    
    // Função para atualizar posições 3D
    function updatePositions() {
        slides.forEach((slide, index) => {
            let pos = (index - currentIndex + slideCount) % slideCount;
            
            // Ajustar posições para criar o efeito circular
            if (pos > Math.floor(slideCount / 2)) {
                pos = pos - slideCount;
            }
            
            slide.setAttribute('data-pos', pos);
            
            // Atualizar classe active
            slide.classList.toggle('active', pos === 0);
        });
        
        // Atualizar indicadores
        indicators.forEach((indicator, index) => {
            indicator.classList.toggle('active', index === currentIndex);
        });
    }
    
    // Função para navegar para um slide específico
    function goToSlide(index) {
        if (isAnimating || index === currentIndex) return;
        
        isAnimating = true;
        currentIndex = (index + slideCount) % slideCount;
        
        updatePositions();
        
        // Resetar intervalo
        resetInterval();
        
        // Permitir nova animação após o término
        setTimeout(() => {
            isAnimating = false;
        }, 1000);
    }
    
    // Navegação
    function nextSlide() {
        goToSlide(currentIndex + 1);
    }
    
    function prevSlide() {
        goToSlide(currentIndex - 1);
    }
    
    // Event listeners
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);
    
    // Autoplay
    function startInterval() {
        intervalId = setInterval(nextSlide, intervalTime);
    }
    
    function resetInterval() {
        clearInterval(intervalId);
        startInterval();
    }
    
    // Iniciar autoplay
    startInterval();
    
    // Pausar no hover
    carousel.addEventListener('mouseenter', () => {
        clearInterval(intervalId);
    });
    
    carousel.addEventListener('mouseleave', startInterval);
    
    // Suporte para touch/swipe
    let touchStartX = 0;
    let touchEndX = 0;
    
    carousel.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].clientX;
        clearInterval(intervalId);
    }, {passive: true});
    
    carousel.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].clientX;
        handleSwipe();
        startInterval();
    }, {passive: true});
    
    function handleSwipe() {
        const difference = touchStartX - touchEndX;
        if (difference > 50) { // Swipe para a esquerda
            nextSlide();
        } else if (difference < -50) { // Swipe para a direita
            prevSlide();
        }
    }
    
    // Inicializar posições
    updatePositions();
});