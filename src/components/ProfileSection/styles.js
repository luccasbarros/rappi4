import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100vw;
  border-bottom: 1px solid #eeeeee;
`;

export const Title = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 16px;
  letter-spacing: -0.39px;
  text-align: center;
  margin-top: 3vw;
  margin-bottom: 3vw;
  margin-left: 7rem;
`;

export const DataProfile = styled.div`
  span {
    display: flex;
    flex-direction: column;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    font-size: 16px;
    letter-spacing: -0.39px;
    margin-left: 16px;
    margin-top: 6px;
  }
`;

export const ContainerIcon = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-right: 60px;
  margin-top: 16px;
  width: 90vw;
`;

export const ContainerAddress = styled.div`
  width: 360px;
  height: auto;
  margin-top: 16px;
  background-color: #eeeeee;
  display: flex;
  flex-direction: column;
  padding-bottom: 6px;
`;

export const TitleAddress = styled.p`
  font-size: 1rem;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  color: #b8b8b8;
  margin: 0;
  padding-top: 16px;
  margin-left: 1rem;
`;

export const ContainerIconAddres = styled(ContainerIcon)`
  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const Address = styled.div`
  margin-left: 1em;
  font-size: 16px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;

export const Historico = styled.div`
  font-size: 16px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  margin-left: 1rem;
  margin-top: 16px;
  border-bottom: 1px solid;
  width: 328px;
  padding-bottom: 8px;
`;

export const HistoricoP = styled.p`
  margin: 0;
`;

export const Messagem = styled.div`
  font-size: 1rem;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  text-align: center;
  margin-top: 28px;
  margin-bottom: 8px;
`;

/* Container de historico de produtos */
export const CardBox = styled.div`
  width: 90vw;
  border-radius: 8px;
  border: solid 1px #b8b8b8;
  height: 112px;
  margin-left: 1rem;
  margin-bottom: 10px;
  margin-top: 8px;
`;

export const ContainerInfos = styled.div`
  margin-left: 1rem;
`;

export const ProductName = styled.p`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  color: #e86e5a;
  margin: 10px 0 6px 0;
  font-size: 1rem;
`;

export const ProductTitle = styled.p`
  color: #000;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;

  font-size: 0.875rem;
`;

export const ProductPrice = styled(ProductName)`
  color: black;
  margin-bottom: 15px;
  font-weight: bold;
`;

/* footer */
export const ContainerFooter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin-top: 10vh;
`;

export const BaseFlex = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  position: relative;
  align-items: center;
`;

export const ContainerTitle = styled.div`
  display: flex;
  border-bottom: 1px solid rgba(0, 0, 0, 0.25);
  width: 100vw;
  justify-content: space-around;
  align-items: center;
`;

export const TitleRestaurant = styled.p`
  color: black;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  text-align: center;
  font-weight: 600;
  margin-right: 7rem;
`;
