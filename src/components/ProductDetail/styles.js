import styled from "styled-components";

export const Container = styled.div`
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

export const BaseModalContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const ModalContainer = styled.div`
  width: 80vw;
  height: 50vw;
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
`;



export const ModalTitle = styled.p`
  text-align: center;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  color: black;
  font-size: 1rem;
  margin-bottom: 2rem;
`;
