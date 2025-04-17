document.addEventListener('DOMContentLoaded', () => {
    const galleryContainer = document.querySelector('.swiper-wrapper');
    const galleryImages = [
        { src: 'img/Imagem1.jpg', alt: 'Imagem-1-Backup' },
        { src: 'img/Imagem2.jpg', alt: 'Imagem-2-Bares' },
        { src: 'img/Imagem3.jpg', alt: 'Imagem-3-CashBack' },
        { src: 'img/Imagem4.jpg', alt: 'Imagem-4-e-Commerce' },
        { src: 'img/Imagem5.jpg', alt: 'Imagem-5-Marketplace' },
        { src: 'img/Imagem6.jpg', alt: 'Imagem-6-Extintor' },
        { src: 'img/Imagem7.jpg', alt: 'Imagem-7-Marketplace' },
        { src: 'img/Imagem8.jpg', alt: 'Imagem-8-Mat_Construção' },
        { src: 'img/Imagem9.jpg', alt: 'Imagem-9-Oficina' },
        { src: 'img/Imagem10.jpg', alt: 'Imagem-10-Pix' },
        { src: 'img/Imagem11.jpg', alt: 'Imagem-11-Prof_Saude' },
        { src: 'img/Imagem12.jpg', alt: 'Imagem-12-SPic2' },
        { src: 'img/Imagem13.jpg', alt: 'Imagem-13-Tablet_Mesa' },
        { src: 'img/Imagem14.jpg', alt: 'Imagem-14-Rotas_Mob' },
        { src: 'img/Imagem15.jpg', alt: 'Imagem-15-Sacoleiras' },
        { src: 'img/Imagem16.jpg', alt: 'Imagem-16-Transportadora' },
        { src: 'img/Imagem17.jpg', alt: 'Imagem-17-Youtube' },
        { src: 'img/Imagem18.jpg', alt: 'Imagem-18-Tef' },
    ];

    if (galleryContainer) {
        galleryImages.forEach((image) => {
            const slideDiv = document.createElement('div');
            slideDiv.className = 'swiper-slide tranding-slide';

            const imgDiv = document.createElement('div');
            imgDiv.className = 'tranding-slide-img';

            const imgElement = document.createElement('img');
            imgElement.src = image.src;
            imgElement.alt = image.alt;

            imgDiv.appendChild(imgElement);
            slideDiv.appendChild(imgDiv);
            galleryContainer.appendChild(slideDiv);
        });
    } else {
        console.error('Erro: Elemento .swiper-wrapper não encontrado no DOM.');
    }
});
var TrandingSlider = new Swiper('.tranding-slider', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    slidesPerView: 'auto',
    coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2.5,
    },
    pagination: {
    el: '.swiper-pagination',
    clickable: true,
    },
    navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    }
});
