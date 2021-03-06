import styled from "styled-components";
import React from "react";


// 이미지 컴포넌트
/**
 * 
 * @param {*} props 
 * - shape 이미지를 동그랗게 보여줄 지, 네모로 보여줄 지 모양을 결정합니다.
 * - src 이미지 경로
 * - size 이미지 사이즈
 * @returns 
 */
const Image = (props) => {
  const { shape, src, size, margin } = props;

  const styles = {
    src: src,
    size: size,
    margin: margin,
  };

  if (shape === "circle") {
    return <ImageCircle {...styles}></ImageCircle>;
  }

  if (shape === "rectangle") {
    return (
      <AspectOutter>
        <AspectInner {...styles}></AspectInner>
      </AspectOutter>
    );
  }

  if (shape === "post") {
    return (
      <PostAspectOutter>
        <PostAspectInner {...styles}></PostAspectInner>
      </PostAspectOutter>
    );
  }

  return (
    <React.Fragment>
      <ImageDefault {...styles}></ImageDefault>
    </React.Fragment>
  );
};

Image.defaultProps = {
  shape: "circle",
  src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRurZzNoggB7tdWUUMNNWLXMH4pdOmMNRTu9g&usqp=CAU",
  size: 36,
  margin: false,
};

const ImageDefault = styled.div`
  --size: ${(props) => props.size}px;
  width: var(--size);
  height: var(--size);
  background-image: url("${(props) => props.src}");
  background-size: cover;
`;

const AspectOutter = styled.div`
  width: 100%;
  min-width: 250px;
`;

const AspectInner = styled.div`
  position: relative;
  padding-top: 100%;
  overflow: hidden;
  background-image: url("${(props) => props.src}");
  background-size: cover;
  background-position: center;
  background-color: #e3e3e3;
`;

const PostAspectOutter = styled.div`
  width: 100%;
  min-width: 550px;
`;

const PostAspectInner = styled.div`
  position: relative;
  padding-top: 100%;
  overflow: hidden;
  background-image: url("${(props) => props.src}");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

const ImageCircle = styled.div`
  --size: ${(props) => props.size}px;
  width: var(--size);
  height: var(--size);
  border-radius: var(--size);

  background-image: url("${(props) => props.src}");
  background-size: cover;
  margin: ${(props) => props.margin};
`;

export default Image;
