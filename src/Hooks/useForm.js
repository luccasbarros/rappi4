import { useState } from "react";
/* Um hook, que recebe um estado inicial e contem a função de
alteração nos campos de input, e ao final os retorna
 */

const useForm = (inicialState) => {
  const [form, setForm] = useState(inicialState);

  const handleInput = (event) => {
    const { value, name } = event.target;
    /* copia o estado do form, e altera apenas a propriedade name do input
    deve-se colocar a propriedade name em cada input 
    */
    setForm({ ...form, [name]: value });
  };

  return [form, handleInput];
};

export default useForm;
