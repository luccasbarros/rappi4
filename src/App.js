import React, {useState,} from "react";
import Router from "./router/Router";



function App() {

  // onClick carrinho passado por props até product details, para renderizá-los no cartPage.

  const [carrinho, setCarrinho] = useState([]);
  const [restaurant, setRestaurant] = useState({});


  // ===== CLICK CARRINHO passado por props =====
  let soma = 0;

  const onClickCarrinho = (id, products, resetState, quantidade, setCounter) => {
    let newCart = [...carrinho];

    // adicionando o item selecionado a um array.
    if(quantidade > 0) {
      const addProduct = products.map((produto) => {
        if (id === produto.id) {
          newCart.push({
            id: produto.id,
            name: produto.name,
            price: produto.price,
            description: produto.description,
            quantidade: Number(quantidade),
            image: produto.photoUrl,
            shipping: produto.shipping
          });
        }
        return false;
      });
    } else {
      alert('Insira um valor válido.')
    }
    



    // filtrando os itens do carrinho por quantidade e setando o contador.
    newCart.filter((item) => {
      if(id === item.id)
      return setCounter(Number(soma += item.quantidade))
    })

    setCarrinho(newCart);
    resetState()
  };


  return (
    <div>
      <Router 
      setRestaurant={setRestaurant}
      restaurant={restaurant}
      setCarrinho={setCarrinho}
      carrinho={carrinho}
      onClickCarrinho={onClickCarrinho}
      />
      
    </div>
  );
}

export default App;
