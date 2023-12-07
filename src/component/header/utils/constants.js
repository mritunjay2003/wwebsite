import { faHeart, faUser } from "@fortawesome/free-regular-svg-icons";
import {
  faArrowRightFromBracket,
  faCartShopping,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

const headerRightList = [
  {
    name: "user",
    icon: faUser,
  },
  {
    name: "search",
    icon: faMagnifyingGlass,
  },
  {
    name: "cart",
    icon: faCartShopping,
  },
  {
    name: "like",
    icon: faHeart,
  },
  {
    name: "logout",
    icon: faArrowRightFromBracket,
  },
];
export { headerRightList };
