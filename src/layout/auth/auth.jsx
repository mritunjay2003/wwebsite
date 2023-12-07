import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";

//Components
import { Box, CardMedia, Paper } from "@mui/material";

//Assets
import { loginImage, siginInImage } from "../../assets";

//Styles
import { styles } from "./utils";

//Helpers
import { getItem } from "../../utils/localStorage";
import { ROUTES } from "../../utils/constants";

const Auth = () => {
  //States
  const { pathname } = useLocation();


  //Helpers
  const navigation = useNavigate();

  //Callback
  useEffect(() => {
    const token = getItem("token");
    if (token) {
      navigation(`${ROUTES.HOME}`)
    }
  }, []);
  
  return (
    <Box id="auth" sx={styles.auth}>
      <Paper sx={styles.paper} elevation={8}>
        <Box sx={styles.left} id="left">
          <CardMedia
            sx={styles.loginImage}
            image={pathname === "/signup" ? siginInImage : loginImage}
          />
        </Box>
        <Box sx={styles.right} id="right">
          <Outlet />
        </Box>
      </Paper>
    </Box>
  );
};

export default Auth;
