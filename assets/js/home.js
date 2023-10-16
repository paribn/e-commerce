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
    autoplay: true,
    // dots: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1008,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 500,
        settings: "unslick",
      },
    ],
  });

  $(".slick-carousel").on("swipe", function (event, slick, direction) {
    console.log(direction);
  });
});
