import { Box, CardMedia, Typography } from "@mui/material";
import { useSelector } from "react-redux";

//Components
import CarouselComponent from "../../component/carousel/carousel";
import CardComponent from "../../component/card";

//Constants
import { SHOP_RANGE, SHOP_RANGE_SUBTITLE } from "./utils/constants";

//Styles
import { styles } from "./utils";

//Assets
import { men, girl, kid } from "../../assets";
import { ROUTES } from "../../utils/constants";
import { useNavigate } from "react-router-dom";

const Home = () => {
  //States
  const products = useSelector((state) => state.products);

  //Helpers
  const image = [
    { title: "Men", image: men, path: ROUTES.MENS },
    { title: "Girl", image: girl, path: ROUTES.WOMEN },
    { title: "Kid", image: kid, path: ROUTES.KIDS },
  ];
  const navigation = useNavigate();
  return (
    <Box id="home">
      <CarouselComponent />
      <Box id="shop-options" sx={styles.shopOptions}>
        <Typography align="center" variant="h4">
          {SHOP_RANGE}
        </Typography>
        <Typography align="center" variant="subtitle1">
          {SHOP_RANGE_SUBTITLE}
        </Typography>
        <Box sx={styles.imageOption}>
          {image.map((item, index) => (
            <Box key={index}>
              <CardMedia
                sx={styles.imageOptionElement}
                image={item.image}
                onClick={() => {
                  navigation(`.${ROUTES.SHOP}${item.path}`);
                }}
              />
              <Typography
                textAlign={"center"}
                variant="subtitle1"
                sx={{ padding: "10px", fontWeight: 700 }}
              >
                {" "}
                {item.title}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
      <Box id="product">
        <Typography variant="h2" textAlign={"center"} sx={{ padding: 2 }}>
          Products
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            padding: "40px",
            flexWrap: "wrap",
          }}
        >
          {products.slice(0, 8).map((item) => (
            <CardComponent
              key={item._id}
              id={item._id}
              title={item.title}
              image={item.image}
              price={item.price}
              subTitle={item.subTitle}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
