import instance from "../instance";

const login = (data) =>
  instance({
    method: "POST",
    url: "auth/login",
    data: data,
  });

export default login;
