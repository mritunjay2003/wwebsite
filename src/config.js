import { getItem } from "./utils/localStorage";

const config = {
  // eslint-disable-next-line no-undef
  URL: "http://localhost:3000",
  token: getItem("token"),
};

export default config;
