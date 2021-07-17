import React from "react";
import styled from "styled-components";


const Grid = (props) => {
  const {
    is_flex,
    display,
    alignitems,
    justifycontent,
    flexdirection,
    width,
    height,
    margin,
    padding,
    bg,
    border,
    children,
    center,
    is_flex_column,
    _onClick,
    max,
    topline,
    container,
  } = props;

  //   스타일드 컴포넌트에 보낼 내용만 따로 묶어주면 return에 들어갈 코드가 좀 더 깔끔해집니다!
  const styles = {
    is_flex: is_flex,
    display: display,
    alignitems: alignitems,
    justifycontent: justifycontent,
    flexdirection: flexdirection,
    width: width,
    height: height,
    margin: margin,
    padding: padding,
    bg: bg,
    border: border,
    center: center,
    is_flex_column: is_flex_column,
    max: max,
    topline: topline,
    container:container,
  };

  return (
    <React.Fragment>
      <GridBox {...styles} onClick={_onClick}>
        {children}
      </GridBox>
    </React.Fragment>
  );
};

// props가 넘어오지 않아도 화면이 잘 그려지도록 기본 값 넣어주기
Grid.defaultProps = {
  chidren: null,
  is_flex: false,
  flexdirection: false,
  alignitems: false,
  justifycontent: false,
  width: "100%",
  padding: false,
  margin: false,
  bg: false,
  border: false,
  center: false,
  is_flex_column: false,
  container: false,
  _onClick: () => {},
};

const GridBox = styled.div`
  display: ${(props) => props.display};
  flex-direction: ${(props) => props.flexdirection};
  align-items: ${(props) => props.alignitems};
  justify-content: ${(props) => props.justifycontent};
  max-width: ${(props) => props.max};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  border: ${(props) => props.border};
  box-sizing: border-box;
  ${(props) => (props.bg ? `background-color: ${props.bg};` : "")}
  ${(props) =>
    props.is_flex
      ? `display: flex; align-items: center; justify-content: space-between; `
      : ""}
  ${(props) => (props.center ? `text-align: center;` : "")}
  ${(props) =>
    props.is_flex_column
      ? `display: flex; align-items: center; justify-content: center; flex-direction: column`
      : ""}
  ${(props) => (props.topline ? `border-top: 1px solid rgba(var(--ce3,239,239,239),1);` : "")} 
  ${(props) => (props.bg ? `background-color: ${props.bg};` : "")} 
`;

export default Grid;
