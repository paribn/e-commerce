// navbar

const toggleButton = document.querySelector(".toggle_button");
const navbarList = document.querySelector(".nav_area");

toggleButton.addEventListener("click", () => {
  navbarList.classList.toggle("active");
});


$(document).ready(function () {
  $(".slick-carousel").slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    // autoplay:true,
    // dots: true,
    arrows: true,
  });

  $(".slick-carousel").on("swipe", function (event, slick, direction) {
    console.log(direction);
  });
});
