import { useEffect } from "react";
import { useHistory } from "react-router-dom";

export const useProtect = () => {
  const history = useHistory();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token === null) {
      history.push("/");
    }
  }, [history]);
};
