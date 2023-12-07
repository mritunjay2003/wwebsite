import { Outlet, useNavigate } from "react-router-dom";

//Components
import { BreadCrumbs, Footer, Header, CommitFooter } from "../../component";
import { useEffect } from "react";
import { getItem } from "../../utils/localStorage";
import { useDispatch, useSelector } from "react-redux";
import { getProductsReducer } from "../../reducers/productDetails/productDetailsSlice";

const Main = () => {
  //States
  const products = useSelector((state) => state.products);

  //Helpers
  const navigation = useNavigate();
  const dispatch = useDispatch();

  //Callback
  useEffect(() => {
    const token = getItem("token");
    if (!token) {
      navigation("/");
    }
  }, []);

  useEffect(() => {
    if (products.length === 0) {
      dispatch(getProductsReducer());
    }
  }, [products]);
  
  return (
    <div className="main">
      <Header />
      <BreadCrumbs />
      <Outlet />
      <CommitFooter />
      <Footer />
    </div>
  );
};
export default Main;
