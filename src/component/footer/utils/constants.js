import { APP_NAME, headerMiddleList } from "../../../utils/constants";
import styles from "./styles";

const helpOptions = [
  {
    name: "Payment Options",
  },
  { name: "returns" },
  { name: "Privacy Policies" },
];

const FooterList = [
  {
    name: APP_NAME,
    props: {
      sx: styles.appName,
    },
    menu: [
      {
        name: "400 University Drive Suite 200 Coral Gables,FL 33134 USA",
        props: {
          sx: styles.title,
        },
      },
    ],
  },
  {
    name: "Links",
    props: {
      sx: styles.title,
    },
    menu: headerMiddleList,
  },
  {
    name: "Help",
    props: {
      sx: {
        color: styles.title,
      },
    },

    menu: helpOptions,
  },
];

export { FooterList };
