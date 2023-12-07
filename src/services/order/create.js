import instance from "../instance";

const createOrder = (body) =>
  instance({
    method: "POST",
    url: "/order",
    data: body,
  });

export { createOrder };
