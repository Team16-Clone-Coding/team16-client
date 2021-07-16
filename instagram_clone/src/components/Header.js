import React from "react";
import { history } from "../redux/configStore";
import { Grid, Image, Button } from "../elements"
import styled from "styled-components";

const Header = (props) => {
  return(
    <React.Fragment>
      <FixedHeader>
        <Grid is_flex height="50px" width="100%" max="550px" margin="0 auto" padding="10px">
          <Logo></Logo>
          <Button width="20%">아이콘</Button>
        </Grid>
      </FixedHeader>
    </React.Fragment>
  );
}


const Logo = styled.div`
  background-image: url("https://firebasestorage.googleapis.com/v0/b/lighthouse-8c323.appspot.com/o/instalogo.png?alt=media&token=a770b095-72c0-4657-83a6-fecf6b10f845");
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  width: 102px;
  height: 27px;
`;

const FixedHeader = styled.div`
  width: 100vw;
  max-width: 100%;
  height: 50px;
  border-bottom: 1px solid rgba(var(--b6a,219,219,219),1);
  background: #fff;
  position: fixed;
  top: 0;
  left: 0;
`;

export default Header;