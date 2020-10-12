import React, {useState} from "react";
import axios from 'axios'
import { useHistory, useParams } from "react-router-dom";


// Router
import { BrowserRouter, Switch, Route } from "react-router-dom";

// Pages
import CartPage from "../components/CartSection/CartPage";
import Feed from "../components/HomeSection/Feed";
import LoginPage from "../components/LoginSection/LoginPage";
import SignUpPage from "../components/LoginSection/SignUpPage";
import AddAddressPage from "../components/AddressSection/AddAddressPage";
import ProfilePage from "../components/ProfileSection/ProfilePage";
import EditProfile from "../components/ProfileSection/EditProfile";
import EditAddress from "../components/ProfileSection/EditAddress";
import RestaurantPage from "../components/RestaurantSection/RestaurantPage";
import SplashScreen from "../components/SplashScreen/SplashScreen";

function Router(props) {
  
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <SplashScreen />
        </Route>

        <Route exact path="/Login">
          <LoginPage />
        </Route>

        <Route exact path="/signup">
          <SignUpPage />
        </Route>

        <Route exact path="/feed">
          <Feed />
        </Route>

        <Route exact path="/cart">
          <CartPage 
          setCarrinho={props.setCarrinho}
          carrinho={props.carrinho}
          setRestaurant={props.setRestaurant}
          restaurant={props.restaurant}
          />
          
        </Route>

        <Route exact path="/addaddress">
          <AddAddressPage />
        </Route>

        <Route exact path="/profile">
          <ProfilePage />
        </Route>

        <Route exact path="/editProfile">
          <EditProfile />
        </Route>

        <Route exact path="/editaddress">
          <EditAddress />
        </Route>

        <Route exact path="/restaurant/:id">
          <RestaurantPage 
          setRestaurant={props.setRestaurant}
          restaurant={props.restaurant}
          carrinho={props.carrinho}
          setCarrinho={props.setCarrinho}
          onClickCarrinho={props.onClickCarrinho}
          />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
