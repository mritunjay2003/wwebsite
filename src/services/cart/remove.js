import instance from "../instance";

const removeFromCart = (productId) =>
  instance({
    method: "PUT",
    url: "/cart/removeProductFromCart",
    data: { productId },
  });

export { removeFromCart };
