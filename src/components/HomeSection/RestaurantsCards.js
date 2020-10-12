import React from "react";
import { goToRestaurant } from "../../router/goToPages";
import {
  BoxCard,
  BoxInside,
  ImgBox,
  RestaurantName,
  ContainerInfos,
  InfoText,
} from "./styles";
import { useHistory } from "react-router-dom";

export default function RestaurantsCards({ item }) {
  const history = useHistory();
  const {
    id,
    name,
    description,
    deliveryTime,
    logoUrl,
    address,
    shipping,
  } = item;
  return (
    <BoxCard key={id} onClick={() => goToRestaurant(history, id)}>
      <BoxInside>
        <ImgBox src={logoUrl} />
        <RestaurantName>{name}</RestaurantName>
        <ContainerInfos>
          <InfoText>{deliveryTime}min</InfoText>
          <InfoText>Frete R${shipping},00</InfoText>
        </ContainerInfos>
      </BoxInside>
    </BoxCard>
  );
}
