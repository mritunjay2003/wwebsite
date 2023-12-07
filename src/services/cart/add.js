import instance from "../instance";

const addTCart = (productId) =>
  instance({
    method: "PUT",
    url: "/cart/addProductToCart",
    data: { productId },
  });

const updateCountOfCartProduct = (data) =>
  instance({
    method: "PUT",
    url: "/cart/updateByCount",
    data: data,
  });

export { addTCart, updateCountOfCartProduct };
