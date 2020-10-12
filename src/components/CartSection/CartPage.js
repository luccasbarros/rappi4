import React, { useState, useEffect } from "react";
import axios from "axios";
import { theme } from "../../constants/themes";
import { makeStyles } from "@material-ui/core/styles";
// Material
import { ThemeProvider } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import PersonOutlineOutlinedIcon from "@material-ui/icons/PersonOutlineOutlined";
import LinearProgress from "@material-ui/core/LinearProgress";
import FormControl from "@material-ui/core/FormControl";
import AccessTimeIcon from "@material-ui/icons/AccessTime";

// Styled
import {
  BaseFlex,
  TitleBlack,
  BoxInfo,
  GrayTitle,
  InfoAddress,
  RestaurantName,
  TaxBox,
  FreteText,
  SubTotal,
  SubTotalText,
  TotalText,
  Payment,
  CheckBoxContainer,
  LabelCheckBox,
  Button,
  EmptyCart,
  BaseFlexNav,
  ContainerProductCard,
  CardBox,
  BoxImg,
  ContainerInfos,
  ProductName,
  ProductTitle,
  ProductPrice,
  CounterProduct,
  ButtonDelete,
  InputCheck,
  PaymentMethod,
  OrderContainer,
  OrderContainerInfo,
  OrderProgress,
  OrderRestaurantTitle,
  OrderSubTotal,
} from "./styles";
import { goToCart, goToFeed, goToProfile } from "../../router/goToPages";
import { useHistory } from "react-router-dom";
import { useForm } from "../../services/useForm";

function CartPage(props) {
  // Estado
  const [value, setValue] = useState("cart");
  const [address, setAddress] = useState(null);
  const [orderContainer, setOrderContainer] = useState(false);
  const [order, setOrder] = useState(null);

  // constantes
  // Desestruturando o carrinho
  let cart = [...props.carrinho];

  const { form, onChange, resetState } = useForm({
    pagamento: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    onChange(name, value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const history = useHistory();

  // Edição NavBar
  const useStyles = makeStyles({
    root: {
      width: 350,
      position: "fixed",
      bottom: 0,
    },
  });

  const classes = useStyles();

  // Pegar endereço do cliente

  const getAddress = () => {
    const request = axios.get(
      "https://us-central1-missao-newton.cloudfunctions.net/rappi4A/profile/address",
      {
        headers: {
          auth: localStorage.getItem("token"),
        },
      }
    );

    request
      .then((response) => {
        setAddress(response.data.address);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    if (localStorage.getItem("token") === null) {
      history.push("/");
    }

    getAddress();
  }, []);

  // ==== Bloco pra gerar a requisição de pedido ====

  // Criando um array pra passar pro body
  const productsArray = cart.map((item) => {
    return {
      id: item.id,
      quantity: item.quantidade,
    };
  });

  // Requisição de pedido
  const placeOrder = () => {
    const body = {
      products: productsArray,
      paymentMethod: form.pagamento,
    };

    const request = axios.post(
      `https://us-central1-missao-newton.cloudfunctions.net/rappi4A/restaurants/${props.restaurant.id}/order`,
      body,
      {
        headers: {
          auth: localStorage.getItem("token"),
        },
      }
    );

    request
      .then((response) => {
       console.log(response.data)
       setOrderContainer(true);
       setOrder(response.data.order)
        
      })
        
      .catch((err) => {
        console.log(err);
      });
  };


  // Remove item do carrinho
  const removeItemOnCart = (id) => {
    const cart = [...props.carrinho];

    const cartWithoutItem = cart.filter((item) => {
      return id !== item.id;
    });

    props.setCarrinho(cartWithoutItem);
  };

  // somando o preço dos produtos
  const totalPrice = cart.reduce((total, item) => {
    return total + item.price * item.quantidade;
  }, 0);

  console.log(props.carrinho)
  console.log(form.pagamento)
  console.log(order)
  console.log(orderContainer)

  return (
    <BaseFlex>
      {/* Intro */}
      <TitleBlack>Meu Carrinho</TitleBlack>

      {/* Endereço de Entrega */}

      {address === null && (
        <p>
          <LinearProgress color="secondary" />
        </p>
      )}
      {address !== null && (
        <BoxInfo>
          <GrayTitle>Endereço de entrega</GrayTitle>
          <InfoAddress>
            {address.street}, {address.number}, Cidade: {address.city} -{" "}
            {address.state}, <br />
            {address.neighbourhood}
          </InfoAddress>
        </BoxInfo>
      )}

      {/* Infos do Restaurante */}
      {props.carrinho.length > 0 && (
        <div>
          <RestaurantName>{props.restaurant.name}</RestaurantName>
          <GrayTitle>{props.restaurant.address}</GrayTitle>
          <GrayTitle>{props.restaurant.deliveryTime}min</GrayTitle>
        </div>
      )}

      {/* Produtos */}

      {/* Se não tiver produtos. */}
      {props.carrinho.length === 0 && (
        <EmptyCart>Seu carrinho está vazio!</EmptyCart>
      )}
      {props.carrinho.length > 0 &&
        props.carrinho.map((item) => {
          return (
            <ContainerProductCard>
              {/* Container Produto */}
              <CardBox>
                <BoxImg src={item.image} />

                {/* Container Informações Gerais */}
                <ContainerInfos>
                  {/* Infos */}

                  <CounterProduct>{item.quantidade}</CounterProduct>
                  <ProductName>{item.name}</ProductName>
                  <ProductTitle>{item.description}</ProductTitle>
                  <ProductPrice>R${item.price}</ProductPrice>
                  <ButtonDelete onClick={() => removeItemOnCart(item.id)}>
                    Remover
                  </ButtonDelete>
                </ContainerInfos>
              </CardBox>
            </ContainerProductCard>
          );
        })}

      {/* Pagamento */}

      {props.carrinho.length > 0 && (
        <div>
          <FreteText>FRETE R${props.restaurant.shipping}</FreteText>
          <SubTotal>
            <SubTotalText>SUBTOTAL</SubTotalText>
            <TotalText>R${totalPrice}</TotalText>
          </SubTotal>
        </div>
      )}

      <Payment>
        <PaymentMethod>Forma de Pagamento</PaymentMethod>
      </Payment>

      {/* Checkbox */}
      <FormControl onSubmit={handleSubmit}>
        <CheckBoxContainer>
          <InputCheck
            type="radio"
            onChange={handleInputChange}
            name="pagamento"
            value="money"
          />
          <LabelCheckBox>Dinheiro</LabelCheckBox> <br />
          <br />
          <InputCheck
            type="radio"
            onChange={handleInputChange}
            name="pagamento"
            value="creditcard"
          />
          <LabelCheckBox>Cartão de crédito</LabelCheckBox>
          {/* Button */}
          <Button type="submit" onClick={placeOrder}>
            Confirmar
          </Button>
        </CheckBoxContainer>
      </FormControl>

      {/* Botton Nav */}
      <BaseFlexNav>
        {orderContainer && (
          <OrderContainer>
            <AccessTimeIcon fontSize="large" />

            <OrderContainerInfo>
              <OrderProgress>Pedido em andamento</OrderProgress>
              <OrderRestaurantTitle>{props.restaurant.name}</OrderRestaurantTitle>
              <OrderSubTotal>sub total r${totalPrice}</OrderSubTotal>
            </OrderContainerInfo>
          </OrderContainer>
        )}

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
              value="cart"
              icon={
                <ShoppingCartOutlinedIcon
                  fontSize="large"
                  onClick={() => goToCart(history)}
                />
              }
            />
            <BottomNavigationAction
              value="profile"
              icon={
                <PersonOutlineOutlinedIcon
                  fontSize="large"
                  onClick={() => goToProfile(history)}
                />
              }
            />
          </BottomNavigation>
        </ThemeProvider>
      </BaseFlexNav>
    </BaseFlex>
  );
}

export default CartPage;
