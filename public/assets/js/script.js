document.addEventListener('DOMContentLoaded', () => {
    const galleryContainer = document.querySelector('.swiper-wrapper');
    const getLogo = document.getElementById('client-logos');
    //Galeria de imagens 
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
    //Logo clientes
    const galleryLogos = [
      { src: '../public/assets/img/Logo1.webp', alt: 'Logo-1' },
      { src: '../public/assets/img/Logo2.webp', alt: 'Logo-2' },
      { src: '../public/assets/img/Logo3.webp', alt: 'Logo-3' },
      { src: '../public/assets/img/Logo4.webp', alt: 'Logo-4' },
      { src: '../public/assets/img/Logo5.webp', alt: 'Logo-5' },
      { src: '../public/assets/img/Logo6.webp', alt: 'Logo-6' },
      { src: '../public/assets/img/Logo7.webp', alt: 'Logo-7' },
      { src: '../public/assets/img/Logo8.webp', alt: 'Logo-8' },
      { src: '../public/assets/img/Logo9.webp', alt: 'Logo-9' },
      { src: '../public/assets/img/Logo10.webp', alt: 'Logo-10' },
      { src: '../public/assets/img/Logo11.webp', alt: 'Logo-11' },
      { src: '../public/assets/img/Logo12.webp', alt: 'Logo-12' },
      { src: '../public/assets/img/Logo13.webp', alt: 'Logo-13' },
    ]
if (getLogo) {
  galleryLogos.forEach((image) => {
    const slide = document.createElement('div');
    slide.className = 'swiper-slide';
  
    const imgElement = document.createElement('img');
    imgElement.src = image.src;
    imgElement.alt = image.alt;
    imgElement.className = 'logo';
  
    slide.appendChild(imgElement);
    getLogo.appendChild(slide);
  });
}

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
            },
            autoplay:{
              delay: 2500,
              disableOnInteraction: false,
            }
          });
          new Swiper('.client-logo-slider', {
            loop: true,
            speed: 3000,
            autoplay: {
              delay: 0,
              disableOnInteraction: false
            },
            slidesPerView: 'auto',
            spaceBetween: 30,
            allowTouchMove: false
          });
    } else {
        console.error('Erro: Elemento .swiper-wrapper não encontrado no DOM.');
    }
});

const testimonials = [
  {
    quote: "Estamos totalmente satisfeitos com os processos e atendimentos de suporte, sempre aptos e dispostos resolvendo tudo prontamente. Indicamos a Memória sempre!",
    author: "Viamedi Card​",
    position: "Financeiro",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    quote: "Realmente o pessoal da Memória é muito eficiente e atencioso, sempre que preciso chamo e sou atendido na hora!",
    author: "Clonei Lorenzetti",
    position: "Proprietário e Gerente LACASA",
    avatar: "https://randomuser.me/api/portraits/men/35.jpg"
  }
];

let currentIndex = 0;
const contentEl = document.getElementById("testimonial-content");
const dotsEl = document.getElementById("pagination-dots");

function renderTestimonial(index) {
  contentEl.classList.remove("show");
  contentEl.classList.add("fade");
  setTimeout(() => {
    const t = testimonials[index];
    contentEl.innerHTML = `
    <p class="quote">"${t.quote}"</p>
    <div class="author-info">
      <img class="avatar" src="${t.avatar}" alt="${t.author}">
      <div class="author-details">
        <strong class="author">${t.author}</strong><br/>
        <small class="position">${t.position}</small>
      </div>
    </div>
  `;
    contentEl.classList.remove("fade");
    contentEl.classList.add("show");
    updateDots(index);
  }, 200);
}

function updateDots(index) {
  dotsEl.innerHTML = testimonials.map((_, i) =>
    `<button class="${i === index ? 'active' : ''}" onclick="goToTestimonial(${i})"></button>`
  ).join('');
}

function goToTestimonial(index) {
  currentIndex = index;
  renderTestimonial(currentIndex);
}

function prevTestimonial() {
  currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
  renderTestimonial(currentIndex);
}

function nextTestimonial() {
  currentIndex = (currentIndex + 1) % testimonials.length;
  renderTestimonial(currentIndex);
}

document.getElementById("prev-btn").onclick = prevTestimonial;
document.getElementById("next-btn").onclick = nextTestimonial;

setInterval(() => {
  nextTestimonial();
}, 8000);

renderTestimonial(currentIndex);

document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.menu-toggle');
  const menu = document.querySelector('.menu');

  menuToggle.addEventListener('click', () => {
      menu.classList.toggle('active'); // Alterna a classe 'active'
  });
});