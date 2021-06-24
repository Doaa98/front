let slides = decoument.querySelectorAll('.slide-container');
let index = 0;

function next() {
        slides[index].classList.remove('active');
        index = (index + 1) % slides.length;
        slides[index].classList.add('active');

        console.log('index' + index);
        console.log('slides' + slides);
}

function prev() {
slides[index].classList.remove('active');
index = (index - 1 + slides.length) % slides.length;
slides[index].classList.add('active');
}