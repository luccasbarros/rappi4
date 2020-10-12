import React, { useState } from "react";

// Import Material
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import { createMuiTheme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

// Hooks
import { useForm } from "../../services/useForm";
import {
  Container,
  CardBox,
  BoxImg,
  ContainerInfos,
  ProductName,
  ProductTitle,
  ProductPrice,
  CounterProduct,
  ButtonProduct,
  ModalContainer,
  ModalTitle,
  ButtonDelete
} from "./styles";

// function posicionamento modal material
function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

// styles em classe pro material
const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 250,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    outline: "none",
    fontWeight: "regular",
  },

  root: {
    width: 250,
  },

  margin: {
    marginTop: 20,
  },
}));

function ProductDetail(props) {
  // states
  const [open, setOpen] = useState(false);
  const [counter, setCounter] = useState(0);

  // ====== MODAL ======

  // edit material-ui
  const classes = useStyles();

  // modal style
  const [modalStyle] = useState(getModalStyle);

  // color theme to select
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: "#e86e5a",
      },
    },
  });

  // open/close modal functions
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // form hook
  const { form, onChange, resetState } = useForm({
    quantidade: 0,
  });

  // handleSubmit pra não atualizar a page.
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  // onChange select.
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    onChange(name, value);
  };

 

  // Remover item do carrinho
  const removeItem = (id) => {
    const cartAtt = [...props.carrinho]

    const removeProduct = cartAtt.filter((produto) => {
      return id !== produto.id
    })

    props.setCarrinho(removeProduct)
    setCounter(0)
  }

  // modal body
  const body = (
    // Container Modal
    <ModalContainer style={modalStyle} className={classes.paper}>
      {/* Title Modal */}
      <ModalTitle>Selecione a quantidade desejada</ModalTitle>

      {/* Select Modal */}
      <ThemeProvider theme={theme}>
        <FormControl onSubmit={handleSubmit} variant="outlined" color="primary">
          <InputLabel htmlFor="outlined-age-native-simple">
            Quantidade
          </InputLabel>
          <Select
            native
            value={form.quantidade}
            className={classes.root}
            label="Quantidade"
            name="quantidade"
            onChange={handleInputChange}
            required
          >
            {/* Options */}
            <option value=""></option>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
            <option value={6}>6</option>
            <option value={7}>7</option>
            <option value={8}>8</option>
            <option value={9}>9</option>
            <option value={10}>10</option>
          </Select>
          <Button
            type="submit"
            color="primary"
            className={classes.margin}
            onClick={() => props.onClickCarrinho(props.id, props.products, resetState, form.quantidade, setCounter)}
          >
            adicionar ao carrinho
          </Button>
        </FormControl>
      </ThemeProvider>
    </ModalContainer>
  );


  return (
    <Container>
      {/* Container Produto */}
      <CardBox>
        <BoxImg src={props.photo} />

        {/* Container Informações Gerais */}
        <ContainerInfos>
          {/* Infos */}
          {counter > 0 && <CounterProduct>{counter}</CounterProduct>}
          <ProductName>{props.name}</ProductName>
          <ProductTitle>{props.description}</ProductTitle>
          <ProductPrice>R${props.price}</ProductPrice>
          {counter > 0 ? <ButtonDelete onClick={() => removeItem(props.id)}>Remover</ButtonDelete> : <ButtonProduct type="button" onClick={handleOpen}>
            Adicionar
          </ButtonProduct>}
          <Modal open={open} onClose={handleClose}>
            {body}
          </Modal>
        </ContainerInfos>
      </CardBox>
    </Container>
  );
}

export default ProductDetail;
