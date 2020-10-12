import React, {useState, useEffect} from "react";
import { TextField, ThemeProvider, InputAdornment, Button } from '@material-ui/core'
import {theme} from "../../constants/themes";
import LogoRappi4 from "./logo-future-eats-invert.png"
import { Container, FormContainer, LogoRappi, Text } from "./styled-LoginPage";
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import VisibilityIcon from '@material-ui/icons/Visibility';
import axios from 'axios'
import { BASE_URL } from "../../constants/urls";
import { useHistory } from "react-router-dom";

function SignUpPage() {

  /* lida com input */
  const useInput = (initialValue) => {
    const [data, setData] = useState(initialValue)
    
    const handleInput = (e) => {
        setData(e.target.value)
    }

    return [data, handleInput]    
  }

  /* Todas as constantes */ 
  const history = useHistory()
  const [nome, setNome] = useInput("")
  const [Email, setEmail] = useInput("")
  const [CPF, setCPF] = useInput("")
  const [Senha, setSenha] = useInput("")
  const [ConfirmarSenha, setConfirmarSenha] = useInput("")
  const [showPassword, setShowPassword] = useState(false)
  const patt = /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/

  /* protege a pagina */
  useEffect(() => {
    if(localStorage.getItem("token") !== null) {
      history.push("/feed")
    }
  }, [])

  /* mostra ou esconde o icone da senha */
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword)
  }

  
  /* requisição para fazer cadastro */
  const Cadastro = async () => {
  
    const body = {
      name: nome,
      email: Email,
      cpf: CPF,
      password: Senha
    }

    try {
      const request = await axios.post(`${BASE_URL}signup`, body)

      localStorage.setItem("token", request.data.token)

      history.push("/addaddress")
    } catch (error) {
      alert("Cadastro falhou :(, tente novamente!")
      console.error(error)
    }

  }

  /* Verifica se as senhas são diferentes */ 
  /* Verifica o tamanho do cpf */

  const fazerCadastro = (e) => {
    e.preventDefault()

    if(patt.test(CPF) && Senha === ConfirmarSenha){
      Cadastro()
    } else {
      alert("CPF ou senha inválidos")
      return
    }
  }


  return(
    <ThemeProvider theme={theme}>
      <Container>
        <LogoRappi src={LogoRappi4} />      
        <Text>Cadastrar</Text>
        <FormContainer onSubmit={fazerCadastro}>
          <TextField 
            value={nome}
            onChange={setNome}
            label="Nome"
            placeholcer="Nome"
            type="text"
            variant="outlined"
            margin="dense"
            required
            autoFocus={true}
            color="secondary"
          />
          <TextField 
            value={Email}
            onChange={setEmail}
            placeholder="email@email.com"
            label="Email"
            type="email"
            variant="outlined"
            margin="dense"
            required
            color="secondary"
          />
          <TextField 
            value={CPF}
            onChange={setCPF}
            label="CPF"
            type="text"
            placeholder="000.000.000-00"
            variant="outlined"
            margin="dense"
            required
            color="secondary"
          />
          <TextField 
            value={Senha}
            onChange={setSenha}
            label="Senha"
            placeholder="Mínimo 6 caracteres"
            type={showPassword ? "text" : "password" }
            variant="outlined"
            margin="dense"
            required
            color="secondary"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                 {showPassword ? <VisibilityIcon onClick={handleClickShowPassword}/> : <VisibilityOffIcon onClick={handleClickShowPassword}/>}
                </InputAdornment>
              ),
            }}         
          />
          <TextField 
            value={ConfirmarSenha}
            onChange={setConfirmarSenha}
            label="Confirmar senha"
            placeholder="Confirmar senha"
            type={showPassword ? "text" : "password" }
            variant="outlined"
            margin="dense"
            required
            color="secondary"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                 {showPassword ? <VisibilityIcon onClick={handleClickShowPassword}/> : <VisibilityOffIcon onClick={handleClickShowPassword}/>}
                </InputAdornment>
              ),
            }}     
          />

        <Button type="submit" color="secondary" variant="contained">Criar</Button>
        </FormContainer>
      </Container>
    </ThemeProvider>
  ) 

}

export default SignUpPage;
