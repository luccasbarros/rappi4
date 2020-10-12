import React, { useState, useEffect } from "react";
import useRequestData from "../../services/useRequestData";
import RestaurantsCards from "./RestaurantsCards";
import { makeStyles } from "@material-ui/core/styles";
import {TextField, ThemeProvider} from "@material-ui/core";
import InputAdornment from "@material-ui/core/InputAdornment";
import Search from "@material-ui/icons/Search";
import UpperMenuCat from "./UpperMenuCat";
import NavBottom from "./NavBottom";
import { AllContainer } from "./styles";
import { theme } from "../../constants/themes";
import {goToLoginPage} from "../../router/goToPages"

import styled from "styled-components";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "80vw",
    },
  },
}));

const TitleCompany = styled.p`
  color: black;
  font-size: 1rem;
  text-align: center;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;

const BoxTitle = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.25);
  width: 100vw;
  margin-bottom: 1rem;
`;

const BaseFlex = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: auto;
`;

const Feed = () => {
  const getRestaurant = useRequestData([], "restaurants");
  const classes = useStyles();
  const history = useHistory()

  const [inputRestaurant, setInputRestaurant] = useState("");
  const [inputCategories, setInputCategories] = useState("");
  const [categories, setCategories] = useState([]);
  const [showMenu, setShowMenu] = useState(true);
  const [showSearch, setShowSearch] = useState(false);
  const [showRender, setShowRender] = useState(true);
  const [restaurants, setRestaurants] = useState();

  const menu = () => {
    setShowMenu(false);
    setShowSearch(true);
    setShowRender(false);
    setInputRestaurant("");
  
  };

  const offMenu = () => {
    setShowMenu(true);
    setShowSearch(false);
    setInputCategories("")
    setShowRender(true)
  };

  const handleInput = (e) => {
    setInputRestaurant(e.target.value.toLowerCase());
    setShowRender(true);
  };

  const getCategories = () => {
    getRestaurant.map((item) => {
      let hasCat = false;
      categories.map((cat) => {
        if (cat === item.category) {
          hasCat = true;
        }
      });
      if (hasCat === false) {
        let categoriesArray = [...categories, item.category];
        setCategories(categoriesArray);
        setRestaurants(categoriesArray)
      }
    });
  };

  getCategories();

  const filterRestaurant = (item) => {
    const restaurantFilter = getRestaurant
      .filter((item) => {
        return item.category.indexOf(inputCategories) >= 0;
      })
      .filter((item) => {
        return item.name.toLowerCase().indexOf(inputRestaurant) >= 0;
      })
      setRestaurants(restaurantFilter)
  }
  useEffect(() => {
    filterRestaurant()
    
  },[inputRestaurant])

  const renderCards = () => {
      const restaurantFilter = getRestaurant
      .filter((item) => {
        return item.category.indexOf(inputCategories) >= 0;
      })
      .filter((item) => {
        return item.name.toLowerCase().indexOf(inputRestaurant) >= 0;
      })
      
      return(
      restaurantFilter
      .map((item) => {
        return <RestaurantsCards key={item.id} item={item} />;

      }))
    
  }

      
    
  useEffect(() => {
    if(localStorage.getItem("token") === null) {
      history.push("/")
    }
  }, [history])  


  return (
    <ThemeProvider theme={theme}>

    <AllContainer >
      <BoxTitle>
        <TitleCompany onClick={() => goToLoginPage(history)}>Rappi4</TitleCompany>
      </BoxTitle>
      <BaseFlex>
        <form className={classes.root} noValidate autoComplete="off">
          <TextField
            
            id="outlined-basic"
            label="Restaurantes"
            variant="outlined"
            onChange={handleInput}
            onFocus={() => menu()}
            onBlur={() => offMenu()}
            type="text"
            color="secondary"
            margin="dense"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search style={{ color: "gray" }} />
                </InputAdornment>
              ),
            }}
          />
        </form>

        
        {showSearch && <>
          {restaurants.length ? <></> : <p>Restaurante não encontrado :/</p>}
          <p>Busque por nome do Restaurante</p>
          </>
        }
        {showMenu && (
          <UpperMenuCat
            
            setInputCategories={setInputCategories}
            categories={categories}
          />
        )}

        {showRender && renderCards()}

        <NavBottom />
      </BaseFlex>
    </AllContainer>
    </ThemeProvider>
  );
};

export default Feed;
