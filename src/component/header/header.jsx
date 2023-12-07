import { useState } from "react";

//Components
import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import CartDropDown from "../cartDropDown";

//Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

//Constants
import { APP_NAME, headerMiddleList } from "../../utils/constants";
import { headerRightList } from "./utils";

//Styles
import styles from "./utils/styles";
import { useNavigate } from "react-router-dom";
import { logout } from "../../reducers/logout/logoutSlice";
import { useDispatch } from "react-redux";

const Header = () => {
  //States
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [showCart, setShowCart] = useState(false);
  headerRightList[2].onClick = () => {
    setShowCart(!showCart);
  };

  //Helpers

  const dispatch = useDispatch();
  const navigate = useNavigate();

  headerRightList[4].onClick = () => {
    dispatch(logout());
    navigate("/");
  };
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      id="header"
      sx={{ backgroundColor: "#fff", color: "#000" }}
      position="sticky"
    >
      <Container maxWidth="xl">
        {showCart && <CartDropDown handleClose={() => setShowCart(false)} />}
        <Toolbar disableGutters>
          {/* <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} /> */}
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={styles.title}
          >
            {APP_NAME}
          </Typography>

          {/* mobile screen */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              sx={{ color: "#000" }}
            >
              <FontAwesomeIcon icon={faBars} />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {headerMiddleList.map((page) => (
                <MenuItem key={page.name}>
                  <Typography
                    textAlign="center"
                    sx={{ cursor: "pointer" }}
                    onClick={() => navigate(page.path)}
                  >
                    {page.name}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Big screen */}
          <Box
            sx={{
              flexGrow: 1,
              display: { md: "flex", xs: "none" },
              justifyContent: "center",
            }}
          >
            {headerMiddleList.map((page) => (
              <Button
                key={page.path}
                onClick={() => navigate(page.path)}
                // onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "#000", display: "block" }}
              >
                {page.name}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0, display: { md: "flex", xs: "none" } }}>
            {headerRightList.map(({ icon, name, onClick }) => (
              <FontAwesomeIcon
                style={{ margin: "0 10px", cursor: "pointer" }}
                key={name}
                icon={icon}
                onClick={onClick}
              />
            ))}
          </Box>

          {/* mobile view */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenUserMenu}
              color="inherit"
              sx={{ ml: "auto" }}
            >
              <FontAwesomeIcon icon={headerRightList[0].icon} />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {headerRightList.slice(1).map(({ name, icon }) => (
                <MenuItem key={name}>
                  <ListItemIcon>
                    <FontAwesomeIcon icon={icon} />
                  </ListItemIcon>
                  <ListItemText>{name}</ListItemText>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;
