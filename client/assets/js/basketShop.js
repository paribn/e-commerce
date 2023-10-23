let btn = document.querySelector("#drawer_btn");
let myDrawer = document.querySelector(".my_drawer");
let closeBtn = document.querySelector(".my_drawer .close");
let shopProducts = document.querySelector(".shop_products");
let productLi = document.getElementsByClassName("product_li");
let productLis = document.getElementsByClassName("product_li a");
let basketList = document.querySelector(".basket_list");
let decrementBtn = document.getElementsByClassName("decrement");
let incrementBtn = document.getElementsByClassName("increment");
let basketTotalAmount = document.querySelector(".basket-total-amount");
let basketTotalCount = document.querySelector(".basket-total-count");

let products = [
  {
    id: 1,
    img: "./assets/img/section2/meat1.jpg.webp",
    title: "Crab Pool Security",
    price: { amount: 35, currency: "USD" },
    stok: 10,
  },
  {
    id: 2,
    img: "./assets/img/section2/banana2.jpg.webp",
    title: "Crab Pool Security",
    price: { amount: 30, currency: "USD" },
    stok: 5,
  },
  {
    id: 3,
    img: "./assets/img/section2/feature-3.jpg.webp",
    title: "Crab Pool Security",
    price: { amount: 15, currency: "USD" },
    stok: 14,
  },
  {
    id: 4,
    img: "./assets/img/section2/feature-4.jpg.webp",
    title: "Crab Pool Security",
    price: { amount: 50, currency: "USD" },
    stok: 100,
  },
  {
    id: 5,
    img: "./assets/img/section2/feature-5.jpg.webp",
    title: "Crab Pool Security",
    price: { amount: 11, currency: "USD" },
    stok: 15,
  },
  {
    id: 6,
    img: "./assets/img/section2/feature-6.jpg.webp",
    title: "Crab Pool Security",
    price: { amount: 30, currency: "USD" },
    stok: 13,
  },
  {
    id: 7,
    img: "./assets/img/section2/feature-7.jpg.webp",
    title: "Crab Pool Security",
    price: { amount: 30, currency: "USD" },
    stok: 41,
  },
  {
    id: 8,
    img: "./assets/img/section2/feature-8.jpg.webp",
    title: "Crab Pool Security",
    price: { amount: 70, currency: "USD" },
    stok: 10,
  },
  {
    id: 9,
    img: "./assets/img/section2/product-9.jpg.webp",
    title: "Crab Pool Security",
    price: { amount: 22, currency: "USD" },
    stok: 10,
  },
  {
    id: 10,
    img: "./assets/img/section2/product-10.jpg.webp",
    title: "Crab Pool Security",
    price: { amount: 30, currency: "USD" },
    stok: 24,
  },
  {
    id: 11,
    img: "./assets/img/section2/product-11.jpg.webp",
    title: "Crab Pool Security",
    price: { amount: 30, currency: "USD" },
    stok: 26,
  },
  {
    id: 12,
    img: "./assets/img/section2/product-12.jpg.webp",
    title: "Crab Pool Security",
    price: { amount: 100, currency: "USD" },
    stok: 27,
  },
];

let basketArr = JSON.parse(localStorage.getItem("basket")) || [];

btn.addEventListener("click", ToggleDrawer);
closeBtn.addEventListener("click", CloseDrawer);

function ToggleDrawer(e) {
  e.stopPropagation();
  myDrawer.classList.toggle("show");
}

function CloseDrawer() {
  myDrawer.classList.remove("show");
}

myDrawer.addEventListener("click", function (e) {
  e.stopPropagation();
});

document.addEventListener("click", CloseDrawer);

function ListProducts() {
  shopProducts.innerHTML = "";

  products.forEach((products) => {
    let hasElementInBasket = basketArr.some((x) => x.id === products.id);
    shopProducts.innerHTML += ` <article>
                  <div class="shop_products_item">
                    <img src="${products.img}" alt="" />
                    <ul class="shop_products_item_icon">
                      <li>
                        <a href="#">
                          <i class="fa-solid fa-heart"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#"><i class="fa-solid fa-retweet"></i></a>
                      </li>
                      <li class="product_li"${
                        hasElementInBasket ? "disabled" : ""
                      }" data-id="${products.id}">
                        <a href="#" >
                          <i class="fa-solid fa-cart-shopping"></i>
                        </a>
                      </li>
                    </ul>
                    <div class="featured_item_text">
                      <h6><a href="#">${products.title}</a></h6>
                      <h5>${products.price.amount} ${
      products.price.currency
    }</h5>
                    </div>
                  </div>
                </article>`;
  });
  AddLiEvents();
}

function ListBasket() {
  basketList.innerHTML = "";
  basketArr.forEach((products) => {
    basketList.innerHTML += `  <div class="basket_item">
                <h5>${products.title} <span class="amount">${
      products.count * products.price.amount
    }USD</span></h5>
                <div class="basket_actions">
                  <button data-id="${
                    products.id
                  }" class="btn btn-light decrement">-</button>
                  <span class="count">${products.count}</span>
                  <button data-id="${
                    products.id
                  }" class="btn btn-light increment">+</button>
                </div>
              </div>`;
  });
  AddBasketBtnEvents();
  UpdateTotalAmounts();
}

function UpdateTotalAmounts() {
  let totalCount = basketArr.reduce(function (prevValue, currentValue) {
    return (prevValue += currentValue.count);
  }, 0);

  let totalAmount = basketArr.reduce(function (prevValue, currentValue) {
    return (prevValue += currentValue.count * currentValue.price.amount);
  }, 0);

  basketTotalCount.textContent = totalCount;
  basketTotalAmount.textContent = totalAmount;
  console.log(totalCount);
}

function AddLiEvents() {
  for (const btn of productLi) {
    btn.addEventListener("click", AddToBasket);
  }
}

function AddBasketBtnEvents() {
  for (const btn of incrementBtn) {
    btn.addEventListener("click", Increment);
  }
  for (const btn of decrementBtn) {
    btn.addEventListener("click", Decrement);
  }
}

function Increment(e) {
  let id = Number(e.target.dataset.id);
  let index = basketArr.findIndex((el) => el.id === id);
  if (basketArr[index].count < basketArr[index].stok) {
    basketArr[index].count += 1;
    localStorage.setItem("basket", JSON.stringify(basketArr));
    ListBasket();
  }
}

function Decrement(e) {
  let id = Number(e.target.dataset.id);
  let index = basketArr.findIndex((el) => el.id === id);

  basketArr[index].count -= 1;
  if (basketArr[index].count <= 0) {
    basketArr = basketArr.filter((x) => x.id !== id);
    ListProducts();
  }
  localStorage.setItem("basket", JSON.stringify(basketArr));

  ListBasket();
}

function AddToBasket(e) {
  console.log(e.target.dataset.id);
  let id = Number(e.target.dataset.id);
  let { id: prId, title, price, stok } = products.find((p) => p.id === id);
  let basketObj = {
    id: prId,
    title: title,
    price: price,
    stok: stok,
    count: 1,
  };
  basketArr.push(basketObj);
  localStorage.setItem("basket", JSON.stringify(basketArr));

  e.target.removeEventListener("click", AddToBasket);
  ListBasket();
}

document.addEventListener("DOMContentLoaded", () => {
  ListProducts();
  ListBasket();
  AddLiEvents();

  AddBasketBtnEvents();
});
