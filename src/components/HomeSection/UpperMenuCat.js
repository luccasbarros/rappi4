import React from "react";
import PropTypes from "prop-types";

import {
  ExtDivCarousel,
  DivItem,
  InsideDiv,
  InsideDivScroll,
  ParagrafCat,
  ContainerCat,
} from "./styles";

const UpperMenuCat = ({ categories, setInputCategories }) => {
  // renderizar menu
    
  const renderCategories = () => 
    
    categories.map((item) => {
      return (
        
        <ParagrafCat

          key={item}
          onClick={() => {
            setInputCategories(item);
            console.log(item)
          }}
        >
          {item}
        </ParagrafCat>
       
      );
    });

  return (
    // menu renderizado em carrosel
    <ExtDivCarousel>
      <DivItem className="item">
        <InsideDiv>
          {" "}
          <ContainerCat>{renderCategories()}</ContainerCat>
        </InsideDiv>
        <InsideDivScroll />
      </DivItem>
    </ExtDivCarousel>
  );
};

export default UpperMenuCat;

UpperMenuCat.propTypes = {
  categories: PropTypes.array,
  setInputCategories: PropTypes.func,
};
