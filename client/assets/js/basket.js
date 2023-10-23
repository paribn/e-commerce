const products = document.querySelector(".products.featured_products");

document.addEventListener("DOMContentLoaded", () => {
  ListProducts();
});

async function ListProducts() {
  let res = await fetch("http://localhost:4000/products");
  let data = await res.json();

  console.log(res);
  if (!res.ok) {
    throw new Error("no product");
  }
  if (Array.isArray(data) && data) {
    products.innerHTML = "";
    data.forEach((product) => {
      products.innerHTML += `<div class="col-lg-3 col-md-4 col-6">
            <div class="featured_item">
              <img src="${product.img}" alt="" />
              <ul class="featured_item_icon">
                <li>
                  <a href="#">
                    <i class="fa-solid fa-heart"></i>
                  </a>
                </li>
                <li>
                  <a href="#"><i class="fa-solid fa-retweet"></i></a>
                </li>
                <li>
                  <a href="#">
                    <i class="fa-solid fa-cart-shopping"></i>
                  </a>
                </li>
              </ul>
              <div class="featured_item_text">
                <h6><a href="#">${product.title}</a></h6>
                <h5>$${product.price.amount}.00</h5>
              </div>
            </div>
          </div>`;
    });
  }
}
