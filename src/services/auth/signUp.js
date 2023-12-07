import instance from "../instance";

const signUp = (data) =>
  instance({
    method: "POST",
    url: "auth/signup",
    data: data,
  });

export default signUp;
