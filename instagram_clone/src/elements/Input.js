import React from "react";
import styled from "styled-components";

import { Text, Grid } from "./index";


const Input = (props) => {
  const {
    label,
    placeholder,
    _onChange,
    type,
    multiLine,
    value,
    is_submit,
    onSubmit,
    width,
    margin,
    padding,
    bg,
    borderradius,
  } = props;

  if (multiLine) {
    return (
      <Grid>
        {label && <Text margin="0px">{label}</Text>}
        <ElTextarea
          rows={10}
          value={value}
          placeholder={placeholder}
          onChange={_onChange}
        ></ElTextarea>
      </Grid>
    );
  }

  const styles = {
    margin: margin,
    width: width,
    padding: padding,
    bg: bg,
    borderradius: borderradius,
  };

  return (
    <React.Fragment>
      <Grid>
        {label && <Text margin="0px">{label}</Text>}
        {is_submit ? (
          <ElInput
            {...styles}
            type={type}
            placeholder={placeholder}
            onChange={_onChange}
            value={value}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                onSubmit(e);
              }
            }}
          />
        ) : (
          <ElInput type={type} placeholder={placeholder} onChange={_onChange} />
        )}
      </Grid>
    </React.Fragment>
  );
};

Input.defaultProps = {
  multiLine: false,
  label: false,
  placeholder: "텍스트를 입력해주세요.",
  type: "text",
  value: "",
  is_submit: false,
  width: false,
  height: false,
  margin: false,
  padding: false,
  bg: false,
  borderradius: false,
  onSubmit: () => {},
  _onChange: () => {},
};

const ElTextarea = styled.textarea`
  border: 1px solid #dbdbdb;
  width: 100%;
  padding: 15px 10px;
  box-sizing: border-box;
`;

const ElInput = styled.input`
  box-sizing: border-box;
  border: 1px solid #dbdbdb;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};
  background-color: ${(props) => props.bg};
  border-radius: ${(props) => props.raduis}; 
  ${(props) => (props.width ? `width: ${props.width};` : "width: 100%;")}
  ${(props) => (props.height ? `height: ${props.height};` : "height: 36px;")}
  ${(props) => (props.padding ? `padding: ${props.padding};` : "padding: 9px 8px;")}
  ${(props) => (props.margin ? `margin: ${props.margin};` : "")}
  ${(props) => (props.borderradius ? `border-radius: ${props.borderradius};` : "border-radius: 3px;")}
`;

export default Input;
