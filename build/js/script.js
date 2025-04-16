const galleryContainer = document.querySelector('.gallery-container');
const galleryControlsContainer = document.querySelector('.gallery-controls')
const galleryControls = ['previous', 'next'];
const galleryImages = [
    { src: 'img/Imagem1.jpg', alt: 'Imagem-1-Backup' },
    { src: 'img/Imagem2.jpg', alt: 'Imagem-2-Bares' },
    { src: 'img/Imagem3.jpg', alt: 'Imagem-3-CashBack' },
    { src: 'img/Imagem4.jpg', alt: 'Imagem-4-e-Commerce' },
    { src: 'img/Imagem5.jpg', alt: 'Imagem-5-Marketplace' }
];

if (galleryContainer) {
    galleryImages.forEach((image, index) => {
        const imgElement = document.createElement('img');
        imgElement.className = `gallery-item gallery-item-${index + 1}`;
        imgElement.src = image.src;
        imgElement.alt = image.alt;
        imgElement.dataset.index = index + 1;
        galleryContainer.appendChild(imgElement);
    });
}

const galleryItems = document.querySelectorAll('.gallery-item'); // Atualiza a seleção após adicionar dinamicamente

console.log(galleryContainer)
console.log(galleryControlsContainer)
console.log(galleryControls)
console.log(galleryItems)

if (galleryContainer && galleryControlsContainer && galleryItems.length > 0) {
    class Carousel {
        constructor(container, items, controls){
            this.carouselContainer = container;
            this.carouselControls = controls;
            this.carouselArray = [...items];
        }
    
        updateGallery(){
            this.carouselArray.forEach(el => {
                el.classList.remove('gallery-item-1');
                el.classList.remove('gallery-item-2');
                el.classList.remove('gallery-item-3');
                el.classList.remove('gallery-item-4');
                el.classList.remove('gallery-item-5');
            });
    
            this.carouselArray.slice(0,5).forEach((el, i) => {(
                el.classList.add(`gallery-item-${i+1}`))
            });
        }
    
        setCurrentState(direction){
            if (direction.className == 'gallery-controls-previous'){
                this.carouselArray.unshift(this.carouselArray.pop())
            }else{
                this.carouselArray.push(this.carouselArray.shift());
            }
            this.updateGallery();
        }
    
        setControls(){
            this.carouselControls.forEach(control => {
                galleryControlsContainer.appendChild(document.createElement('button')).className = `gallery-controls-${control}`;
                document.querySelector(`.gallery-controls-${control}`).innerText = control;
            });
        }
    
        useControls(){
            const triggers = [...galleryControlsContainer.childNodes];
            triggers.forEach(control => {
                control.addEventListener('click', e => {
                    e.preventDefault();
                    this.setCurrentState(control);
                });
            });
        }
    
        autoPlay(interval = 3000) {
            setInterval(() => {
                this.carouselArray.push(this.carouselArray.shift()); // Move para o próximo item
                this.updateGallery();
            }, interval);
        }
    }
    
    const exampleCarousel = new Carousel(galleryContainer, galleryItems, galleryControls);
    exampleCarousel.setControls();
    exampleCarousel.useControls();
    exampleCarousel.autoPlay(3000); // Define o autoplay com intervalo de 3 segundos
}else{
    console.error('Erro: Elementos necessários para o carrossel não foram encontrados no DOM.');
}