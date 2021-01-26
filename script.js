const current = document.querySelector('#current');
const imgs = document.querySelectorAll('.imgs img');
const opacity = 0.4;

// set first image opacity
imgs[0].style.opacity = opacity;

function imgClick(e) {
    // Reset the opacity 
    imgs.forEach(img => (img.style.opacity = 1));
    
    // change source
    current.src = e.target.src

    // add fade-in class
    current.classList.add('fade-in');

    // Remove fade in class after .5 seconds
    setTimeout(() => current.classList.remove('fade-in'), 500);

    // change opacity to var
    e.target.style.opacity = opacity;

}

// add event listener to images

imgs.forEach((image) => {
    image.addEventListener('click', imgClick);
})