import styled from "styled-components";
import React from "react";



const ContainerGrid = () => {
  return (
    <React.Fragment>
      <ContainerBox></ContainerBox>
    </React.Fragment>

  );

}


const ContainerBox = styled.div`
  width: 100%;
  max-width: 550px;
  background: #ccc;
  margin: 0 auto;
  height: 100vh;
`;

export default ContainerGrid;
