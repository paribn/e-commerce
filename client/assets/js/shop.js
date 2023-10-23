const rangeInput = document.querySelectorAll(".ragne-input input");
const progress = document.querySelector(".slider .progress");

const departmentsCategory = document.querySelector(".departments_category");

let priceGap = 1000;

rangeInput.forEach((input) => {
  input.addEventListener("input", () => {
    let minVal = parseInt(rangeInput[0].value),
      maxVal = parseInt(rangeInput[1].value);

    progress.style.left = (minVal / rangeInput[0].max) * 100 + "%";
    progress.style.left = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
  });
});

const radioInputs = document.querySelectorAll(
  'input[type="radio"][name="color"]'
);

radioInputs.forEach((input) => {
  input.addEventListener("click", () => {
    const selectedColorCode = input.value;

    document.body.style.backgroundColor = selectedColorCode;
  });
});

const tomatoBackround = document.querySelector("#tomato");

tomatoBackround.style.backgroundImage =
  "url('./assets/img/shop_header/breadcrumb.jpg')";
tomatoBackround.style.backgorundSize = "contain";
tomatoBackround.style.backgroundRepeat = "no-repeat";

tomatoBackround.style.width = "100%";
tomatoBackround.style.height = "150px";

// $(".hero_all_categories").on("click", function () {
//   $(".hero_categories ul").slideToggle(400);
//   $(".hero_categories ul").css("z-index", 999);
// });

$(".hero_all_shop_categories").on("click", function () {
  $(".hero_shop_categories ul").slideToggle(400);
});

$(".product_discount_slider").slick({
  dots: true,
  infinite: true,
  autoplay: true,
  slidesToShow: 3,
  slidesToScroll: 4,
  arrows: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
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
