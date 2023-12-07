import instance from "../instance";

const getCartProductsByUserId = () =>
  instance({
    method: "GET",
    url: "/cart/products",
  });

export { getCartProductsByUserId };
