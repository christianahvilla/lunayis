// cart array
let cart = JSON.parse(localStorage.getItem("CART")) || [];

const cartCounter = document?.getElementById("cart-counter");
const quickCart = document?.getElementById("quick-cart-counter");

const renderCounter = () => {
  let total = 0;

  cart.forEach((element) => {
    total += element.quantity;
  });

  cartCounter.textContent = total;
  quickCart.textContent = total;
};

renderCounter();
