import { useNavigate } from "react-router-dom";

//Components
import { Box, Button, TextField, Typography } from "@mui/material";

//Constants
import { FooterList, styles } from "./utils";
import { APP_NAME } from "../../utils/constants";

const FooterELement = (item, index) => {
  const navigate = useNavigate();

  const handleClick = (path) => {
    path && navigate(path);
  };
  return (
    <Box key={index} sx={styles.columns}>
      <Typography {...item.props}>{item.name}</Typography>
      {item.menu.map((menuItem, index) => (
        <Typography
          variant="subtitle2"
          key={index}
          sx={{
            ...menuItem.props?.sx,
            ...styles.item,
          }}
          onClick={() => handleClick(menuItem.path)}
        >
          {menuItem.name}
        </Typography>
      ))}
    </Box>
  );
};

const Footer = () => {
  return (
    <div className="footer">
      <Box sx={styles.main}>
        <Box sx={styles.box}>
          {FooterList.map(FooterELement)}
          <Box key={"News letters"} sx={styles.columns}>
            <Typography sx={styles.title}>{"News letters"}</Typography>
            <div
              className="action"
              style={styles.action}
            >
              <TextField
                placeholder="Enter Your Email Address"
                variant="standard"
              />
              <Button variant="text">SUBSCRIBE</Button>
            </div>
          </Box>
        </Box>
        <Typography
          variant="caption"
          sx={{ paddingTop: "10px" }}
        >{`2023 ${APP_NAME}. All rights reversed`}</Typography>
      </Box>
    </div>
  );
};

export default Footer;
