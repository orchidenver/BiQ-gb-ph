export function getCartLocalStorage() {
  let cart = localStorage.getItem("cart");

  if (cart) {
    return JSON.parse(localStorage.getItem("cart")!);
  } else {
    return {
      bottles: {
        name: "Bottle",
        capacity: "1.0",
        quantity: 0,
        price: 2.0,
        totalSum: 0,
      },
      boxes: {
        name: "Box",
        capacity: "1.0",
        quantity: 0,
        price: 18.0,
        totalSum: 0,
      },
    };
  }
}

export function responseHandler(success: boolean, error: boolean): string {
  if (!success && !error) {
    return "Send";
  }

  if (success && !error) {
    return "Your message has been sent";
  }

  if (!success && error) {
    return "Failed to send";
  }

  return "";
}
