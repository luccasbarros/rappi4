import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../constants/urls";

const useRequestData = (initialData, endpoint) => {
  const [data, setData] = useState(initialData);

  useEffect(() => {
    axios
      .get(`${BASE_URL}${endpoint}`, {
        headers: {
          auth: localStorage.getItem("token")
        },
      })
      .then((response) => {
      
        setData(response.data.restaurants);
      })
      .catch((error) => {


        console.log(error.data);
        alert("Ocorreu um erro, tente novamente");

      });
  }, [endpoint]);

  return data;
};

export default useRequestData;
