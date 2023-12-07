import instance from "../instance";

const getProducts = () =>
  instance({
    method: "GET",
    url: "/products",
  });

const getProductById = (id) =>
  instance({
    method: "GET",
    url: `/products/${id}`,
  });

export { getProductById, getProducts };
