$(document).ready(function(){
    let currentIndex = 0;
    const slides = $('.slider-box');
    const totalSlides = slides.length;

    // Инициализация: показываем первый слайд
    function showSlide(index) {
        slides.removeClass('active');
        slides.eq(index).addClass('active');
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % totalSlides;
        showSlide(currentIndex);
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        showSlide(currentIndex);
    }

    // Кнопки навигации
    $('#right-arrow').click(function(){
        nextSlide();
    });

    $('#left-arrow').click(function(){
        prevSlide();
    });

    // Инициализация слайдера
    showSlide(currentIndex);
});
