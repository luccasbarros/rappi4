import axios from "axios";
import { goToProfile } from "../router/goToPages";
import { BASE_URL } from "../constants/urls";

//edição de usuário
export const editUser = (body, history) => {
  axios
    .put(`${BASE_URL}profile`, body, {
      headers: {
        auth: localStorage.getItem("token"),
      },
    })
    .then((response) => {
      console.log(response, "response editeprofile");
      goToProfile(history);
    })
    .catch((error) => {
      alert("Perfil não atualizado, por favor tente novamente");
      console.log(error);
    });
};
