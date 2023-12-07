import { createBrowserRouter, RouterProvider } from "react-router-dom";

//Components
import { Checkout, LoginFrom, Product, SignInFrom } from "./component";
import { AuthLayout, HomeLayout, ShopLayout, MainLayout } from "./layout";
import { ROUTES } from "./utils/constants";
import Cart from "./component/cart";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: ROUTES.WILD,
      element: <AuthLayout />,
      children: [
        { path: ROUTES.WILD, element: <LoginFrom /> },
        {
          path: ROUTES.SIGN_UP,
          element: <SignInFrom />,
        },
      ],
    },
    {
      path: ROUTES.HOME,
      element: <MainLayout />,
      children: [
        { path: `${ROUTES.HOME}${ROUTES.WILD}`, element: <HomeLayout /> },
        {
          path: `${ROUTES.HOME}${ROUTES.PRODUCT}/:productId`,
          element: <Product />,
        },
        {
          path: `${ROUTES.HOME}${ROUTES.SHOP}/:category`,
          element: <ShopLayout />,
        },
        { path: `${ROUTES.HOME}${ROUTES.CART}`, element: <Cart /> },
        { path: `${ROUTES.HOME}${ROUTES.CHECKOUT}`, element: <Checkout /> },

        { path: `${ROUTES.HOME}${ROUTES.CONTACT}`, element: <></> },
        { path: `${ROUTES.HOME}${ROUTES.ABOUT}`, element: <></> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default Router;
