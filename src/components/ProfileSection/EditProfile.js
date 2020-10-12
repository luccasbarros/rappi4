import React, {useEffect} from "react";
import { useHistory } from "react-router-dom";
import { TextField, Button, ThemeProvider } from "@material-ui/core";
import useForm from "../../Hooks/useForm";
import { editUser } from "../../services/PutProfile";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import {goToProfile} from "../../router/goToPages"

import { theme } from "../../constants/themes";
import styled from "styled-components";
import {ContainerTitle, TitleRestaurant} from "./styles"

const AddressContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  justify-content: center;

  form {
    display: flex;
    flex-direction: column;
    width: 80vw;
    max-width: 450px;
  }

  Button {
    margin-top: 16px;
  }
`;


function EditProfile() {
  const history = useHistory();

  const [form, handleInput] = useForm({
    name: "",
    email: "",
    cpf: "",
  });

  const EditUser = (event) => {
    event.preventDefault();

    const element = document.getElementById("addres_form");
    const isValid = element.checkValidity();
    element.reportValidity();

    if (isValid) {
      //requisição api,o body é a resposta do formulario
      editUser(form, history);
    }
    console.log(form, "form do adrres aqui");
  };

  useEffect(() => {
    if(localStorage.getItem("token") === null) {
      history.push("/")
    }
  }, [])  

  return (
    <ThemeProvider theme={theme}>
      <AddressContainer>
      <ContainerTitle>
        <ArrowBackIosIcon onClick={() => goToProfile(history)} />
        <TitleRestaurant>Editar</TitleRestaurant>
      </ContainerTitle>
        <form id={"addres_form"}>
          <TextField
            value={form.name}
            name={"name"}
            onChange={handleInput}
            label="Nome"
            placeholder="Nome"
            type={"text"}
            variant={"outlined"}
            margin={"normal"}
            fullWidth
            required
            autoFocus
          />
          <TextField
            value={form.email}
            name={"email"}
            onChange={handleInput}
            label="Email"
            placeholder="Email"
            type={"text"}
            variant={"outlined"}
            margin={"normal"}
            fullWidth
            required
          />

          <TextField
            value={form.cpf}
            name={"cpf"}
            onChange={handleInput}
            label="CPF"
            placeholder="Cpf"
            type={"number"}
            variant={"outlined"}
            margin={"normal"}
            fullWidth
            required
          />

          <Button
            variant={"contained"}
            color={"primary"}
            type={"submit"}
            onClick={EditUser}
          >
            Salvar
          </Button>
        </form>
      </AddressContainer>
    </ThemeProvider>
  );
}

export default EditProfile;
