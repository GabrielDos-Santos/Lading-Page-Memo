document.addEventListener('DOMContentLoaded', () => {
    const galleryContainer = document.querySelector('.swiper-wrapper');
    const galleryImages = [
        { src: '../public/assets/img/Imagem1.jpg', alt: 'Imagem-1-Backup' },
        { src: '../public/assets/img/Imagem2.jpg', alt: 'Imagem-2-Bares' },
        { src: '../public/assets/img/Imagem3.jpg', alt: 'Imagem-3-CashBack' },
        { src: '../public/assets/img/Imagem4.jpg', alt: 'Imagem-4-e-Commerce' },
        { src: '../public/assets/img/Imagem5.jpg', alt: 'Imagem-5-Marketplace' },
        { src: '../public/assets/img/Imagem6.jpg', alt: 'Imagem-6-Extintor' },
        { src: '../public/assets/img/Imagem7.jpg', alt: 'Imagem-7-Marketplace' },
        { src: '../public/assets/img/Imagem8.jpg', alt: 'Imagem-8-Mat_Construção' },
        { src: '../public/assets/img/Imagem9.jpg', alt: 'Imagem-9-Oficina' },
        { src: '../public/assets/img/Imagem10.jpg', alt: 'Imagem-10-Pix' },
        { src: '../public/assets/img/Imagem11.jpg', alt: 'Imagem-11-Prof_Saude' },
        { src: '../public/assets/img/Imagem12.jpg', alt: 'Imagem-12-SPic2' },
        { src: '../public/assets/img/Imagem13.jpg', alt: 'Imagem-13-Tablet_Mesa' },
        { src: '../public/assets/img/Imagem14.jpg', alt: 'Imagem-14-Rotas_Mob' },
        { src: '../public/assets/img/Imagem15.jpg', alt: 'Imagem-15-Sacoleiras' },
        { src: '../public/assets/img/Imagem16.jpg', alt: 'Imagem-16-Transportadora' },
        { src: '../public/assets/img/Imagem17.jpg', alt: 'Imagem-17-Youtube' },
        { src: '../public/assets/img/Imagem18.jpg', alt: 'Imagem-18-Tef' },
        { src: '../public/assets/img/Imagem19.jpg', alt: 'Imagem-19-Distribuição' },
        { src: '../public/assets/img/Imagem20.jpg', alt: 'Imagem-20-Checklist' },
        { src: '../public/assets/img/Imagem21.jpg', alt: 'Imagem-21-Auto-Pesagem' },
        { src: '../public/assets/img/Imagem22.jpg', alt: 'Imagem-22-Ass_Ténica' },
        { src: '../public/assets/img/Imagem23.jpg', alt: 'Imagem-23-Comercio-Geral' },
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
    } else {
        console.error('Erro: Elemento .swiper-wrapper não encontrado no DOM.');
    }
});
