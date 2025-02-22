document.addEventListener("DOMContentLoaded", function () {
    let currentSlide = 0;
    const slides = document.querySelectorAll(".slide");
    const totalSlides = slides.length;
    const nextBtn = document.querySelector(".next");
    const prevBtn = document.querySelector(".prev");

    // Function to show the current slide
    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.display = i === index ? "block" : "none";
        });
    }

    // Show the first slide initially
    showSlide(currentSlide);

    // Next Button Click Event
    nextBtn.addEventListener("click", function () {
        currentSlide = (currentSlide + 1) % totalSlides;
        showSlide(currentSlide);
    });

    // Previous Button Click Event
    prevBtn.addEventListener("click", function () {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        showSlide(currentSlide);
    });
});
