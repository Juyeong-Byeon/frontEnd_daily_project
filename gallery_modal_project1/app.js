const modal = document.querySelector('.modal');
const previews = document.querySelectorAll('.gallery img');
const original = document.querySelector('.full-image');
const caption = document.querySelector('.caption');



previews.forEach(preview => {
    preview.addEventListener('click', (e) => {
        modal.classList.add('open');
        original.classList.add('open');
        //text와 이미지 변화

        const originalSrc = preview.getAttribute("data-original");
        original.src = `./assets/images/full/${originalSrc}.jpg`;
        caption.textContent = preview.alt;

    })
})

modal.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal')) {
        modal.classList.remove("open");
        original.classList.remove('open');
    }
})