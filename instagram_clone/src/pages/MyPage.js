import React from "react";
import { history } from "../redux/configStore";
import Header from "../components/Header";

const MyPage = (props) => {
  return(
    <React.Fragment>
      <Header></Header>
      마이페이지
    </React.Fragment>
  );
}

export default MyPage;