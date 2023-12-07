import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

//Components
import { Box, Button, Divider, Rating, Typography } from "@mui/material";
import { ImageList } from "./components";
import NumberTextField from "../digitTextfield/digitTextfield.jsx";

//Styles
import styles from "./utils/styles.js";
import { addToCart } from "../../reducers/cart/cartSlice";
import { setSnackBar } from "../../reducers/snackBar/snackBar";

//Reducers
import { getProductByIdReducer } from "../../reducers/singleProduct/singleProductSlice";

const Product = () => {
  //States
  const product = useSelector((state) => state.singleProduct.data);
  const [quantity, setQuantity] = useState(1);

  //Helpers
  const dispatch = useDispatch();
  const { productId } = useParams();

  //Callback
  useEffect(() => {
    if (productId) {
      dispatch(getProductByIdReducer(productId));
    }
  }, [productId]);

  return (
    <Box className="container" sx={styles.container}>
      <ImageList imageList={Array(5).fill(product.image)} />
      <Box className="contentBox" sx={styles.contentBox}>
        <Box className="content" sx={styles.content}>
          <Typography variant="h4" sx={styles.title}>
            {product.title}
          </Typography>

          <Typography
            variant="p"
            sx={styles.price}
          >{`Rs: ${product.price}`}</Typography>

          <Box sx={styles.rating}>
            <Rating
              size={"small"}
              value={Number(product.rating)}
              precision={0.5}
              readOnly
            />
            <Typography
              variant="p"
              className="rating-text"
            >{`Customer Review: ${product.rating}`}</Typography>
          </Box>

          <Typography variant="p">{product.description}</Typography>

          <Typography color={"#9F9F9F"} variant="p">
            Size : {product.size}
          </Typography>

          <Box className="size" sx={styles.box}>
            {["l", "xl", "xxl"].map((value) => {
              return (
                <Button key={value} variant="text" sx={styles.sizeBtn}>
                  {value}
                </Button>
              );
            })}
          </Box>

          <Typography color={"#9F9F9F"} variant="p">
            Colors
          </Typography>
          <Box className="color" sx={styles.box}>
            {["#816DFA", "#000", "#B88E2F"].map((value) => {
              return (
                <Box
                  key={value}
                  sx={{
                    backgroundColor: value,
                    width: 20,
                    height: 20,
                    marginRight: 3,
                    borderRadius: "50%",
                  }}
                ></Box>
              );
            })}
          </Box>

          <Box className="action" sx={styles.buttonBox}>
            <NumberTextField
              value={quantity}
              sx={styles.numberBtn}
              handleChange={(value) => setQuantity(value)}
            />
            <Button
              variant="outlined"
              sx={styles.button}
              onClick={() => {
                dispatch(addToCart({ ...product, count: quantity }));
                dispatch(
                  setSnackBar({ message: "Product added successfully" })
                );
              }}
            >
              Add to Cart
            </Button>
            <Button variant="outlined" sx={styles.button}>
              Compare
            </Button>
          </Box>
        </Box>
        <Divider />
        <Box className="subContent" sx={styles.subContent}>
          <Typography color={"#9F9F9F"} variant="p">
            Category : {product.category}
          </Typography>
          <Typography color={"#9F9F9F"} variant="p">
            id : {product.id}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Product;
