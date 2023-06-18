function getCartLocalStorage() {
  let cart = localStorage.getItem("cart");

  if (cart) {
    return JSON.parse(localStorage.getItem("cart")!);
  } else {
    return {
      bottles: {
        name: "Bottle",
        capacity: "1.0",
        quantity: 0,
        price: 1.6,
        totalSum: 0,
      },
      boxes: {
        name: "Box",
        capacity: "1.0",
        quantity: 0,
        price: 9.6,
        totalSum: 0,
      },
    };
  }
}

export default getCartLocalStorage;
