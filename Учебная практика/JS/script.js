const productImages = document.querySelectorAll('.product-image img');

productImages[0].classList.add('active');

const switchImage = (e) => {
    productImages.forEach(img => img.classList.remove('active'));

    e.target.classList.add('active');
};

productImages.forEach(img => img.addEventListener('click', switchImage));