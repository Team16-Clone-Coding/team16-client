import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as postActions } from "../redux/modules/post";
import { Grid , Button, Input, Image } from "../elements";
import styled from "styled-components";
import PostHeader from "./PostHeader";

const PostWirte = (props) => {

  const dispatch = useDispatch();
  
  const {open,close} = props;

  const [contents, setContents] = React.useState("");

  const changeContents = (e) => {
    setContents(e.target.value);
  };

  const purl = "https://i.pinimg.com/474x/a8/e7/60/a8e760bcdf6af796ebf9745ae28b7eae.jpg";

  const addPost = () => {
    dispatch(postActions.addPostDB(purl, contents));
  }
  
  return (
    <React.Fragment>
      {open ? (<ModalBg onClick={close}></ModalBg>) : null}
      {open ? (
        <ModalBox>
          <WriteCard>
            <PostHeader></PostHeader>
            <Image shape="rectangle"></Image>
            <Input value={contents} _onChange={changeContents} label="게시글 내용" placeholder="게시글 작성" multiLine></Input>
          </WriteCard>
          <Button _onClick={addPost}></Button>
        </ModalBox>
        
      ) : null
      }
    </React.Fragment>
  );

  
}

const ModalBox = styled.div`
  width: 100%;
  height: 100vh;
  max-width: 550px;
  margin: 0 auto;
  position: fixed;
  top: 10%;
  z-index: 100;
`;

const WriteCard = styled.div`
  width: 100%;
  margin-top: 50px;
  border: 1px solid rgba(var(--ce3,239,239,239),1);
  background: #fff;
  z-index: 101;
`;

const ModalBg = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.7);
  z-index: 5;
`;

export default PostWirte;
