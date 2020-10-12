import styled from "styled-components";

export const BaseFlex = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: auto;
  position: relative;
`;

export const BaseFlexNav = styled(BaseFlex)`
  align-items: center;
  position: relative;
`;

export const BoxInfo = styled.div`
  width: 100vw;
  background-color: #eeeeee;
  height: auto;
`;

export const TitleBlack = styled.p`
  font-size: 1rem;
  text-align: center;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  margin-bottom: 20px;
`;

export const GrayTitle = styled(TitleBlack)`
  color: #b8b8b8;
  text-align: start;
  margin-left: 1rem;
  margin-bottom: 0;
`;

export const InfoAddress = styled(GrayTitle)`
  color: black;
  margin-bottom: 1rem;
`;

export const RestaurantName = styled(InfoAddress)`
  color: #e86e5a;
  margin-bottom: 0;
`;

export const TaxBox = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 90vw;
  margin-left: 1rem;
`;

export const SubTotal = styled.div`
  width: 89vw;
  display: flex;
  justify-content: space-between;
  margin-left: 20px;
`;

export const FreteText = styled.p`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 1rem;
  font-weight: 600;
  text-align: end;
  margin-right: 3rem;
`;

export const TotalText = styled(FreteText)`
  font-size: 18px;
  color: #e86e5a;
  margin-right: 2rem;
`;

export const SubTotalText = styled(FreteText)`
  font-weight: normal;
`;

export const PaymentMethod = styled(SubTotalText)`
text-align: start;
margin-right:0;


`

export const Payment = styled.div`
  width: 90vw;
  border-bottom: 1px solid black;
  margin-left: 18px;
`;

export const CheckBoxContainer = styled.div`
  margin-top: 1rem;
  height: 30vh;
`;

export const LabelCheckBox = styled.label`
  font-weight: normal;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 1rem;
  margin-left: 10px;
`;

export const Button = styled.button`
  width: 90vw;
  height: 42px;
  border-radius: 2px;
  background-color: #e86e5a;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 16px;
  letter-spacing: -0.39px;
  text-align: center;
  margin-left: 1.5rem;
  margin-top: 1.5rem;
  border: 0;
`;

export const EmptyCart = styled.p`
  text-align: center;
  color: black;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;

export const InputCheck = styled.input`
margin-left: 1rem;
`


// CARD PRODUTO


export const ContainerProductCard = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  margin-bottom: 8px;
  margin-top: 1rem;
`;

export const CardBox = styled.div`
  width: 90vw;
  border-radius: 8px;
  border: solid 1px #b8b8b8;
  display: flex;
  height: 112px;
`;

export const BoxImg = styled.img`
  width: 97px;
  height: 113px;
`;

export const ContainerInfos = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1rem;
  padding-top: 12px;
  position: relative;
  width: 100vw;
`;

export const ProductName = styled.p`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  color: #e86e5a;
  margin: 0 0 6px 0;
  font-size: 1rem;
  width: 50vw;
`;

export const ProductTitle = styled.p`
  color: #b8b8b8;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;

  font-size: 0.875rem;
  margin: 0 0 6px 0;
`;

export const ProductPrice = styled(ProductName)`
  color: black;
  margin-bottom: 15px;
`;

export const CounterProduct = styled.div`
  width: 33px;
  height: 33px;
  border-bottom-left-radius: 8px;
  border-top-right-radius: 8px;
  border: solid 1px #e86e5a;
  display: flex;
  justify-content: center;
  align-items: center;
  color: red;
  position: absolute;
  top: 0;
  right: 0;
`;

export const ButtonProduct = styled.button`
  padding: 5px;
  width: 25vw;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border: solid 1px black;
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  background: none;
  position: absolute;
  bottom: 0;
  right: 0;

  &:focus {
    outline: none;
  }
`;

export const ButtonDelete = styled.button`
  padding: 5px;
  width: 25vw;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border: solid 1px #e86e5a;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #e86e5a;
  background: none;
  position: absolute;
  bottom: 0;
  right: 0;

  &:focus {
    outline: none;
  }
`;


// ==== CONTAINER ORDER ====
export const OrderContainer = styled.div`
width: 100vw;
background-color: #e86e5a;
display: flex;
padding: 1rem 0;
height: 13vh;
align-items: center;
justify-content: center;
position: fixed;
bottom: 55.6px;


`
export const OrderContainerInfo = styled.div`
display: flex;
flex-direction: column;
justify-content: space-evenly;
width: 60vw;
align-items: center;
`

export const OrderProgress = styled.p`
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
color: white;
letter-spacing: -0.39px;
font-size: 1rem;
margin: 0;
width: 45vw;
`

export const OrderRestaurantTitle = styled(OrderProgress)`
color: black;
`

export const OrderSubTotal = styled(OrderRestaurantTitle)`
font-weight: bold;
text-transform: uppercase;
`