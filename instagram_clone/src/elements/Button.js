import React from "react";
import styled from "styled-components";


const Button = (props) => {
  const { _onClick, is_float, children, margin, width, height, padding, bg, borderradius, fontweight, color, whitespace, border,} = props;

  //   is_float가 true면 플로팅 버튼을 반환합니다.
  // return 이후의 구문은 읽지 않으니, else는 굳이 쓰지 않아도 괜찮아요!
  if (is_float) {
    return (
      <React.Fragment>
        <FloatButton onClick={_onClick}>{children}</FloatButton>
      </React.Fragment>
    );
  }

  //   스타일드 컴포넌트에 보낼 내용만 따로 묶어주면 return에 들어갈 코드가 좀 더 깔끔해집니다!
  const styles = {
    margin: margin,
    width: width,
    height: height,
    padding: padding,
    bg: bg,
    borderradius: borderradius,
    fontweight:fontweight,
    color: color,
    whitespace: whitespace,
    border: border,
  };

  return (
    <React.Fragment>
      <ElButton {...styles} onClick={_onClick}>
        {children}
      </ElButton>
    </React.Fragment>
  );
};

// props가 넘어오지 않아도 화면이 잘 그려지도록 기본 값 넣어주기
Button.defaultProps = {
  children: null,
  _onClick: () => {},
  is_float: false,
  margin: false,
  width: "100%",
  height: "",
  padding: "12px 0px",
  bg: false,
  borderradius: false,
  fontweight: false,
  whitespace: false,
};

const ElButton = styled.button`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  color: #ffffff;
  font-weight: ${(props) => props.fontweight};
  cursor: pointer;
  padding: ${(props) => props.padding};
  box-sizing: border-box;
  border: none;
  color: ${(props) => props.color};
  white-space: ${(props) => props.whitespace};
  background-color: ${(props) => props.bg};
  border-radius: ${(props) => props.borderradius};
  ${(props) => (props.margin ? `margin: ${props.margin};` : "")}
  ${(props) => (props.border ? `border: ${props.border};` : "")}
`;

const FloatButton = styled.button`
  width: 50px;
  height: 50px;
  background-color: #212121;
  color: #ffffff;
  box-sizing: border-box;
  font-size: 36px;
  font-weight: 400;
  position: fixed;
  bottom: 50px;
  right: 20%;
  text-align: center;
  vertical-align: middle;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s;

  &:hover{
    transform: scale(1.1);
  }
`;

export default Button;
