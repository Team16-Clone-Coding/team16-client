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
  background-image: url("https://cdn.discordapp.com/attachments/865553698898051122/865751365622824980/instagram_logo.png");
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
  z-index: 10;
`;

export default Header;