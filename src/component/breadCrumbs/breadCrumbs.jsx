import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

//Components
import { Breadcrumbs, CardMedia, Box, Typography } from "@mui/material";

//Assets
import { breadCrumbsImage } from "../../assets";
import { ROUTES, routesNameByPath } from "../../utils/constants";
import { Link, useLocation } from "react-router-dom";
import { styles } from "./utils";

const GetBreadcrumbs = ({ separator }) => {
  const { pathname } = useLocation();

  //States
  const product = useSelector((state) => state.singleProduct.data);
  const [segment, setSegment] = useState([]);

  //Callback
  useEffect(() => {
    const pathSegments = pathname
      .split("/")
      .filter((segment) => segment !== "");

    if (`/${pathSegments[1]}` === ROUTES.PRODUCT) {
      pathSegments[2] = product.title;
    }

    setSegment(pathSegments);
  }, [product, pathname]);

  return (
    <Breadcrumbs separator={separator || "/"} aria-label="breadcrumb">
      {segment.map((path, index) => (
        <Link key={index} to={`/home`} style={styles.item}>
          {routesNameByPath[`/${path}`] ? routesNameByPath[`/${path}`] : path}
        </Link>
      ))}
    </Breadcrumbs>
  );
};

const BreadCrumbs = () => {
  const { pathname } = useLocation();
  if (pathname === ROUTES.HOME) {
    return <></>;
  }
  if (pathname === `${ROUTES.HOME}${ROUTES.PRODUCT}`) {
    return (
      <Box m={4}>
        <GetBreadcrumbs separator={">"} />
      </Box>
    );
  }
  const pathSegments = pathname.split("/").filter((segment) => segment !== "");
  return (
    <div className="bread-crumbs" style={styles.main}>
      <CardMedia sx={styles.image} image={breadCrumbsImage} />
      <Box sx={styles.content}>
        <Typography variant="h3">
          {routesNameByPath[`/${pathSegments[pathSegments.length - 1]}`]}
        </Typography>
        <GetBreadcrumbs />
      </Box>
    </div>
  );
};
export default BreadCrumbs;
