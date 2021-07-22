import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { history } from "../redux/configureStore";
import {Grid , Button, Image, Text, Input} from "../elements";
import { actionCreators as postActions } from "../redux/modules/post";
import { actionCreators as imageActions } from "../redux/modules/image";

import styled from "styled-components";

const EditInfo = (props) => {

  const dispatch = useDispatch();

  const imageInput = React.useRef();

  const is_uploading = useSelector((state) => state.post.uploading);

  const [preview, setPreview] = React.useState(null);

  const [editName, setEditName] = React.useState("");

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
    if(image) {
      dispatch(imageActions.profileUploadFB(image));
    }

    if(editName){
      dispatch(postActions.editNameDB(editName));
    }
    
  }

  const editDB = (e) => {
    setEditName(e.target.value);
  }

  

  const my_Email = useSelector((state) => state.post.my_info.user?.userEmail);
  const my_Name = useSelector((state) => state.post.my_info.user?.userName);
  const my_Profile = useSelector((state) => state.post.my_info.user?.userImage);

  React.useEffect(() => {
    dispatch(postActions.getInfoDB());
  },[]);

  return(
    <React.Fragment>
        
      <Grid height="100vh" max="550px" margin="0 auto;">
        
        <PostCard>
          <Grid width="80%" margin="40px auto">
            <Grid margin="0 auto" display="flex" alignitems="center" height="80px">
              <Grid width="10%">
                <Image src={my_Profile} size="38" shape="circle"></Image>
              </Grid>
              
              <Grid width="90%" display="flex" flexdirection="column" alignitems="center" height="100%">
                <Grid height="50%" is_flex padding="20px 0 5px 5px">
                  <Text size="20px">{my_Email}</Text>
                </Grid>
                <Grid height="50%" is_flex padding="5px 0 20px 5px">
                  <Text bold color="#0095f6" size="14px">프로필 사진 바꾸기</Text>
                  <input type="file" id="file" ref={imageInput} onChange={uploadFile} disabled={is_uploading}></input>
                </Grid>
              </Grid>
            </Grid>
            <Grid is_flex margin="50px 0 20px">
              <Grid width="30%">
                <Text bold size="16px">닉네임</Text>
              </Grid>
              <Grid width="100%" margin="23px 0 0 0">
                <Input _onChange={editDB} placeholder={my_Name}></Input>
                <Text padding="3px 10px" size="12px" margin="0">변경할 닉네임을 입력해주세요.</Text>
              </Grid>
            </Grid>

            <Grid width="100%" display="flex">
              <Button borderradius="5px" bg="#0095f6" fontweight="bold" width="15%" margin="50px auto" _onClick={uploadFB}>제출</Button>
            </Grid>
          </Grid>
          </PostCard>
          
      </Grid>
      
      
    </React.Fragment>
  );
}

const PostCard = styled.div`
  width: 100%;
  height: 400px;
  margin-top: 80px;
  border: 1px solid rgba(var(--ce3,239,239,239),1);
  background: #fff;
  display: flex;
`;


export default EditInfo;