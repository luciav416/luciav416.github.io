let photos = document.querySelectorAll('.photo');

let brokenPhotos = 0;

window.onscroll = () => {
    if (brokenPhotos >= photos.length) return;
    const randomIndex = Math.floor(Math.random() * photos.length);
    const photo = photos[randomIndex];

    if (photo.classList.contains('broken')) return;

    const img = photo.querySelector('img');
    img.classList.add('split-top');
    img.classList.add('split-bottom');
    photo.classList.add('broken'); 
    brokenPhotos++;
};
