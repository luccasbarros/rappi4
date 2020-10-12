import styled from "styled-components";

export const ContainerTitle = styled.div`
  display: flex;
  border-bottom: 1px solid rgba(0, 0, 0, 0.25);
  width: 100vw;
  justify-content: space-around;
  align-items: center;
`;

export const Title = styled.p`
  color: black;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  text-align: center;
  font-weight: 600;
  margin-right: 6rem;
`;

export const ContainerImg = styled.div`
  width: 90vw;
  height: 120px;
  margin-top: 1rem;
`;

export const RestaurantImg = styled.img`
  width: 100%;
  height: 120px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;

export const ContainerAll = styled.div`
  display: flex;
  height: auto;
  flex-direction: column;
  align-items: center;
  width: 100vw;
`;

export const RestaurantName = styled.p`
  font-size: 1rem;
  color: #e86e5a;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  width: 90vw;
  display: flex;
  justify-content: flex-start;
  margin: 0;
  margin-top: 9px;
`;

export const GrayTitle = styled(RestaurantName)`
  color: #b8b8b8;
`;

export const ContainerInfos = styled.div`
  display: flex;
  width: 90vw;
  justify-content: space-between;
`;

export const Principal = styled.div`
  width: 90vw;
  border-bottom: 1px solid black;
`;

export const TextPrincipal = styled(Title)`
  text-align: start;
`;

export const ContainerProduct = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
`;
