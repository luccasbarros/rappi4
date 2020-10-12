import axios from "axios";
import { goToProfile } from "../router/goToPages";
import { BASE_URL } from "../constants/urls";

//Bate na api de editar endereço
export const editAddresProfile = (body, history) => {
  axios
    .put(`${BASE_URL}address`, body, {
      headers: {
        auth: localStorage.getItem("token"),
      },
    })
    .then((response) => {
      goToProfile(history);
    })
    .catch((error) => {
      alert("Endereço não adicionado, por favor tente novamente");
      console.log(error);
    });
};
