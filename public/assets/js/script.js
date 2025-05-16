document.addEventListener('DOMContentLoaded', () => {
    const galleryContainer = document.querySelector('.swiper-wrapper');
    const getLogo = document.getElementById('client-logos');
    //Galeria de imagens 
    const galleryImages = [
        { src: './assets/img/Imagem.jpg', alt: 'Imagem-1-Backup' },
        { src: './assets/img/Imagem.jpg', alt: 'Imagem-2-Bares' },
        { src: './assets/img/Imagem.jpg', alt: 'Imagem-3-CashBack' },
        { src: './assets/img/Imagem.jpg', alt: 'Imagem-4-e-Commerce' },
        { src: './assets/img/Imagem.jpg', alt: 'Imagem-5-Marketplace' },
        { src: './assets/img/Imagem.jpg', alt: 'Imagem-6-Extintor' },
        { src: './assets/img/Imagem.jpg', alt: 'Imagem-7-Marketplace' },
        { src: './assets/img/Imagem.jpg', alt: 'Imagem-8-Mat_Construção' },
        { src: './assets/img/Imagem.jpg', alt: 'Imagem-9-Oficina' },
        { src: './assets/img/Imagem.jpg', alt: 'Imagem-10-Pix' },
        { src: './assets/img/Imagem.jpg', alt: 'Imagem-11-Prof_Saude' },
        { src: './assets/img/Imagem.jpg', alt: 'Imagem-12-SPic2' },
        { src: './assets/img/Imagem.jpg', alt: 'Imagem-13-Tablet_Mesa' },
        { src: './assets/img/Imagem.jpg', alt: 'Imagem-14-Rotas_Mob' },
        { src: './assets/img/Imagem.jpg', alt: 'Imagem-15-Sacoleiras' },
        { src: './assets/img/Imagem.jpg', alt: 'Imagem-16-Transportadora' },
        { src: './assets/img/Imagem.jpg', alt: 'Imagem-17-Youtube' },
        { src: './assets/img/Imagem.jpg', alt: 'Imagem-18-Tef' },
        { src: './assets/img/Imagem.jpg', alt: 'Imagem-19-Distribuição' },
        { src: './assets/img/Imagem.jpg', alt: 'Imagem-20-Checklist' },
        { src: './assets/img/Imagem.jpg', alt: 'Imagem-21-Auto-Pesagem' },
        { src: './assets/img/Imagem.jpg', alt: 'Imagem-22-Ass_Ténica' },
        { src: './assets/img/Imagem.jpg', alt: 'Imagem-23-Comercio-Geral' },
    ];
    //Logo clientes
    const galleryLogos = [
      { src: './assets/img/Logo1.webp', alt: 'Construutil', href: 'https://redeconstruutil.com.br/' },
      { src: './assets/img/Logo2.webp', alt: 'Qdelicia', href: 'https://www.qdeliciasorvetes.com.br/' },
      { src: './assets/img/Logo3.webp', alt: 'Eduane', href: 'https://www.instagram.com/eduaneequipamentos/' },
      { src: './assets/img/Logo4.webp', alt: 'Zc', href: 'https://www.zcmateriais.com/' },
      { src: './assets/img/Logo5.webp', alt: 'Viamedi', href: 'https://www.viamedi.com.br/' },
      { src: './assets/img/Logo6.webp', alt: 'Protec', href: 'https://protecrs.com/' },
      { src: './assets/img/Logo7.webp', alt: 'Azzolini', href: 'https://azzolinidistribuidora.com.br/' },
      { src: './assets/img/Logo8.webp', alt: 'TheBoweler', href: 'https://www.instagram.com/thebowlerpf/' },
      { src: './assets/img/Logo9.webp', alt: 'Decarli', href: 'https://dcmg.com.br/' },
      { src: './assets/img/Logo10.webp', alt: 'Construmil', href: 'https://www.grupoconstrumil.com/' },
      { src: './assets/img/Logo11.webp', alt: 'Sushiadao', href: 'https://www.instagram.com/sushidoadao/' },
      { src: './assets/img/Logo12.webp', alt: 'Kenji', href: 'https://www.instagram.com/kenji.tapejara/' },
      { src: './assets/img/Logo13.webp', alt: 'HamburguerDani', href: 'https://www.instagram.com/hamburguerdodani/' },
    ]
    //Logo client
if (getLogo) {
  galleryLogos.forEach((image) => {
    const slide = document.createElement('div');
    slide.className = 'swiper-slide';
    const slideLink = document.createElement('a')
    slideLink.href = image.href;
    slideLink.className = 'logo-link';
    slideLink.target = '_blank'; // Abre o link em uma nova aba
    slideLink.rel = 'noopener noreferrer'; // Melhora a segurança ao abrir links em nova aba
  
    const imgElement = document.createElement('img');
    imgElement.src = image.src;
    imgElement.alt = image.alt;
    imgElement.className = 'logo';
    
    const altText = document.createElement('div');
    altText.className = 'alt-text';
    altText.textContent = image.alt;

    slide.appendChild(slideLink);
    slideLink.appendChild(imgElement);
    slideLink.appendChild(altText); 
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
    `<button class="${i === index ? 'active' : ''} pagination-buttons" onclick="goToTestimonial(${i})"></button>`
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

document.querySelector("form").addEventListener("submit", function (e) {
  const response = grecaptcha.getResponse();
  if (!response) {
    e.preventDefault();
    
  }
});

document.querySelector("form").addEventListener("submit", function (e) {
  const nome = document.querySelector('[name="nome"]').value.trim();
  const email = document.querySelector('[name="email"]').value.trim();
  const telefone = document.querySelector('[name="telefone"]').value.trim();
  const mensagem = document.querySelector('[name="mensagem"]').value.trim();
  const recaptcha = grecaptcha.getResponse();

  if (!nome || !email || !telefone || !mensagem) {
    e.preventDefault();
    alert("Por favor, preencha todos os campos.");
    return;
  }

  if (!recaptcha) {
    e.preventDefault();
    
  }
});

const form = document.getElementById("form-contato");
const mensagem = document.getElementById("mensagem-retorno");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const recaptcha = grecaptcha.getResponse();

  if (!recaptcha) {
    mensagem.textContent = "⚠️ Confirme que você não é um robô.";
    mensagem.style.color = "red";
    return;
  }

  const dados = new URLSearchParams(new FormData(form));
  dados.append("g-recaptcha-response", recaptcha);

  try {
    const resposta = await fetch("/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: dados,
    });

    const texto = await resposta.text();

    if (resposta.ok) {
      mensagem.textContent = "✅ Formulário enviado com sucesso!";
      mensagem.style.color = "green";
      form.reset();
      grecaptcha.reset();
    } else {
      mensagem.textContent = texto || "❌ Erro ao enviar.";
      mensagem.style.color = "red";
    }
  } catch (error) {
    mensagem.textContent = "❌ Erro de conexão.";
    mensagem.style.color = "red";
  }
});
