document.addEventListener('DOMContentLoaded', function() {
    const thumbnails = document.querySelectorAll('.thumbnail');
    const displayDiv = document.getElementById('display');

    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('mouseenter', function() {
            displayDiv.innerHTML = `<img src="${this.src}" alt="${this.alt}" style="max-width: 100%; display: block;"><p>${this.alt}</p>`;
        });

        thumbnail.addEventListener('mouseleave', function() {
            displayDiv.innerHTML = 'Hover over an image below to display the image and the alt text.';
        });
    });
});
