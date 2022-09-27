const cartItemsEl = document?.querySelector(".cart-items");

// change number of units for an item
const changeNumberOfUnits = (value, id) => {
  cart = cart.map((item) => {
    if (item.img == id) {
      item.quantity = value;
    }

    return item;
  });

  updateCart();
};

// change number of units for an item
const inputOnChange = (id) => {
  const input = document.getElementById(`${id}-input`);

  cart = cart.map((item) => {
    if (item.img !== id) {
      return item;
    }

    return {
      ...item,
      quantity: input.value,
    };
  });

  updateCart();
};

// remove item from cart
function removeItemFromCart(img) {
  cart = cart.filter((item) => item.img !== img);

  updateCart();
  renderCartItems();
}

// render cart items
function renderCartItems() {
  if (cartItemsEl === null) {
    return;
  }

  cartItemsEl.innerHTML = ""; // clear cart element
  cart.forEach((item) => {
    cartItemsEl.innerHTML += `
        <tr>
          <td class="cart__product__item">
            <img src="${item.img}.jpg" alt="">
            <div class="cart__product__item__title">
              <h6>${item.name}</h6>
            </div>
          </td>
          <td class="cart__quantity">
              <div id="${item.img}" class="pro-qty">
                <input id="${item.img}-input" oninput="inputOnChange('${item.img}')" type="text" value='${item.quantity}'>
              </div>
          </td>
          <td class="cart__close" onclick="removeItemFromCart('${item.img}')"><span class="icon_close"></span></td>
        </tr>
      `;
  });
}

renderCartItems();
