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
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1008,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
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

  $(".latest_product_slider").slick({
    dots: false,
    infinite: true,
    speed: 2000,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});

const heroItemBackround = document.querySelector(".hero_item");

heroItemBackround.style.backgroundImage =
  "url('./assets/img/banner/logo.png.webp')";
heroItemBackround.style.backgorundSize = "contain";
heroItemBackround.style.backgroundRepeat = "no-repeat";

heroItemBackround.style.width = "100%";
heroItemBackround.style.height = "400px";

//bashliqda olan category hissesi

$(".hero_all_categories").on("click", function () {
  $(".hero_categories ul").slideToggle(400);
});
