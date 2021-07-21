import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { history } from "../redux/configureStore";
import {Grid , Button, Image, Text} from "../elements";
import { actionCreators as postActions } from "../redux/modules/post";
import { actionCreators as imageActions } from "../redux/modules/post";

import styled from "styled-components";

const EditInfo = (props) => {

  const dispatch = useDispatch();

  const imageInput = React.useRef();

  const is_uploading = useSelector((state) => state.post.uploading);

  const [preview, setPreview] = React.useState(null);

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

    dispatch(imageActions.imageUploadFB(image));
  }

  const my_Image = useSelector((state) => state.post.my_info.user?.userImage);
  const my_Email = useSelector((state) => state.post.my_info.user?.userEmail);
  const my_Name = useSelector((state) => state.post.my_info.user?.userName);

  React.useEffect(() => {
    dispatch(postActions.getInfoDB());
  },[]);

  return(
    <React.Fragment>
        
      <Grid height="100vh" max="550px" margin="0 auto;">
        
        <PostCard>
          <Grid width="80%" margin="40px auto">
            <Grid height="42px" margin="0 auto" display="flex" alignitems="center">
              <Image size="38" shape="circle"></Image>
              <Grid height="50px">
                <Text padding="0 0 0 20px" size="20px">{my_Email}</Text>
                <Text size="14px">프로필 사진 바꾸기</Text>
              </Grid>
            </Grid>
            
            {/* <input type="file" id="file" ref={imageInput} onChange={uploadFile} disabled={is_uploading}></input> */}
            {/* <Button margin="30px 0" _onClick={uploadFB}>수정</Button> */}
          </Grid>
          </PostCard>
          
      </Grid>
      
      
    </React.Fragment>
  );
}

const PostCard = styled.div`
  width: 100%;
  height: 600px;
  margin-top: 80px;
  border: 1px solid rgba(var(--ce3,239,239,239),1);
  background: #fff;
  
`;

export default EditInfo;