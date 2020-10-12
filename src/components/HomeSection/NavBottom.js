import React, { useState } from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import PersonOutlineOutlinedIcon from "@material-ui/icons/PersonOutlineOutlined";
import { theme } from "./../../constants/themes";
import { makeStyles } from "@material-ui/core/styles";
import { goToCart, goToFeed, goToProfile } from "../../router/goToPages";
import { useHistory } from "react-router-dom";

const NavBottom = () => {
  const [value, setValue] = useState("home");
  const history = useHistory();
  const useStyles = makeStyles({
    root: {
      width: 350,
      position: "fixed",
      bottom: 0,
      marginTop: 40,
    },
  });

  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        showLabels
        className={classes.root}
      >
        <BottomNavigationAction
          value="home"
          icon={
            <HomeOutlinedIcon
              fontSize="large"
              onClick={() => goToFeed(history)}
            />
          }
        />
        <BottomNavigationAction
          icon={
            <ShoppingCartOutlinedIcon
              onClick={() => goToCart(history)}
              fontSize="large"
            />
          }
        />
        <BottomNavigationAction
          icon={
            <PersonOutlineOutlinedIcon
              onClick={() => goToProfile(history)}
              fontSize="large"
            />
          }
        />
      </BottomNavigation>
    </ThemeProvider>
  );
};

export default NavBottom;
