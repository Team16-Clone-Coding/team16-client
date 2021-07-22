import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as postActions } from "../redux/modules/post";
import { actionCreators as imageActions } from "../redux/modules/image";
import { Grid , Button, Input, Image } from "../elements";
import styled from "styled-components";
import PostHeader from "./PostHeader";
import { history } from "../redux/configureStore";
import { actionCreators } from "../redux/modules/user";

const PostWirte = (props) => {

  const dispatch = useDispatch();
  
  const {open,close} = props;

  const [contents, setContents] = React.useState("");

  const imageInput = React.useRef();

  const [preview, setPreview] = React.useState(null);
  const [done, setDone] = React.useState(false);

  const is_uploading = useSelector((state) => state.post.uploading);
  
  const uploadFile = (e) => {
    const reader = new FileReader();
    const selectedFile = imageInput.current.files[0];

    reader.readAsDataURL(selectedFile);

    reader.onloadend = () => {
      setPreview(reader.result);
    };
  };

  const uploadFB = () => {
    let image = imageInput.current.files[0];
    if(!image) {
      return;
    }

    dispatch(imageActions.imageUploadFB(image, contents));
    setTimeout(() => setDone(true), 500);
    setTimeout(() => setDone(false), 3000);
    close();
  }

  const changeContents = (e) => {
    setContents(e.target.value);
  };

  
  
  return (
    <React.Fragment>
      {open ? (<ModalBg onClick={close}></ModalBg>) : null}
      {open ? (
        <ModalBox>
          <WriteCard>
            <PostHeader></PostHeader>
            <Image shape="rectangle" src={preview ? preview : "https://шпаковскаярб.рф/images/no_photo.png"}></Image>
            <Grid padding="15px 10px">
              <input type="file" ref={imageInput} onChange={uploadFile} disabled={is_uploading} style={{width: "100%"}}/>
            </Grid>
            
            <Input value={contents} _onChange={changeContents}placeholder="게시글 작성" multiLine/>
            <ButtonGroup><Button _onClick={uploadFB} borderradius="5px" bg="#0095f6" fontweight="bold">업로드</Button></ButtonGroup>
          </WriteCard>
          
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
  top: 5%;
  z-index: 100;
`;

const WriteCard = styled.div`
  width: 100%;
  margin-top: 50px;
  // border: 1px solid rgba(var(--ce3,239,239,239),1);
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
const ButtonGroup = styled.div`
  padding: 15px;
`;

export default PostWirte;
