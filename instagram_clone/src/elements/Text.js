import React from "react";
import styled from "styled-components";

// 텍스트 컴포넌트
/**
 * 
 * @param {*} props 
 * - children : 열림 태그와 닫힘 태그 사이에 들어가는 자식 노드 / ex) <>여기에 들어가는 게 자식 노드!</>
 * - bold : 텍스트를 굵게 보여줄 지 말지 여부 boolean
 * - color : 폰트 컬러 (#을 포함한 string)
 * - margin : margin 값 (px 등 단위를 포함한 string)
 * - size : 폰트 크기 값 (px 등 단위를 포함한 string)
 * @returns 
 */
const Text = (props) => {
  const { bold, color, size, children, margin, padding, wordbreak, } = props;

  const styles = { bold: bold, color: color, size: size, margin, padding: padding, wordbreak:wordbreak };
  return <P {...styles}>{children}</P>;
};

Text.defaultProps = {
  children: null,
  bold: false,
  color: "#222831",
  size: "14px",
  wordbreak: false,
  margin: false,
};

const P = styled.p`
  color: ${(props) => props.color};
  padding: ${(props) => props.padding};
  font-size: ${(props) => props.size};
  font-weight: ${(props) => (props.bold ? "600" : "400")};
  word-break: ${(props) => props.wordbreak};
  ${(props) => (props.margin ? `margin: ${props.margin};` : "")}
`;

export default Text;
