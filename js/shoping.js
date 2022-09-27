// update cart
function updateCart() {
  // save cart to local storage
  localStorage.setItem("CART", JSON.stringify(cart));

  location.reload();
}

// ADD TO CART
const addToCart = (key, index) => {
  // check if prodcut already exist in cart
  const product = PRODUCTS[key][index];

  cart = [product, ...cart];

  updateCart();
  renderCounter();
};
