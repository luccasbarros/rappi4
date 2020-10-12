import styled from "styled-components";

// ====== CARROSEL MENU + HEADER ======
// Div Externa
export const ExtDivCarousel = styled.div`
  width: 90vw;
`;

export const ContainerCat = styled.div`
  display: flex;
`;
export const ParagrafCat = styled.p`
  margin: 5px;
  padding: 3px;
  font-weight: 500;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  :hover {
    color: #ed1212;
    cursor: pointer;
  }
`;

// Div interna que chama a rollagem com scroll
export const DivItem = styled.div`
  display: flex;
  overflow-x: auto;
  height: 10vh;
  scroll-snap-type: x mandatory;
  --webkit-overflow-scrolling: touch;
  scroll-behavior: smooth;
  ::-webkit-scrollbar-track {
    background-color: #f4f4f4;
  }
  ::-webkit-scrollbar {
    width: 4px;
    background: none;
    height: 1px;
  }

  ::-webkit-scrollbar-thumb {
    background: none;
  }
`;

export const MediumTitle = styled.h2`
  color: white;
  font-size: 1.5rem;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-weight: lighter;
`;

// Espaço interno para ajustar o title e o content
export const InsideDiv = styled.div`
  flex: none;
  background-color: white;
  width: 100%;
  scroll-snap-align: start;
  pointer-events: all;
  padding-left: 1rem;
  padding-top: 0.875rem;
`;

export const InsideDivScroll = styled.div`
  flex: none;
  width: 10%;
  scroll-snap-align: start;
  pointer-events: none;
  padding-left: 6rem;
  padding-top: 4rem;
`;

// Body que ajuda o carrosel
export const Body = styled.div`
  display: grid;
  justify-items: center;
  height: auto;
`;

// Div para ajustar conteúdos
export const DivContent = styled.div`
  display: flex;
  flex-direction: column;
`;

// ====== CARD RESTAURANTES ======

export const BoxCard = styled.div`
  width: 90vw;
  border: 1px solid #b8b8b8;
  border-radius: 8px;
  margin-bottom: 0.875rem;
  height: 188px;
`;

export const BoxInside = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ImgBox = styled.img`
  width: 100%;
  height: 120px;
`;

export const RestaurantName = styled.p`
  width: 80vw;
  display: flex;
  justify-content: flex-start;
  padding-top: 8px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  color: #e86e5a;
  font-size: 1rem;
  margin: 0;
`;

export const ContainerInfos = styled.div`
  width: 80vw;
  display: flex;
  justify-content: space-between;
`;

export const InfoText = styled.p`
  font-size: 1rem;
  color: #b8b8b8;
  margin: 5px 0 0 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;

export const AllContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  padding-bottom: 3rem;
  position: relative;
`;
