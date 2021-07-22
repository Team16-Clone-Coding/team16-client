import React from "react";
import { history } from "../redux/configureStore";
import styled from "styled-components";
import { Grid, Image, Button } from "../elements"
import { actionCreators as postActions } from "../redux/modules/post";
import { useDispatch, useSelector } from "react-redux";
import ModeCommentIcon from '@material-ui/icons/ModeComment';
import FavoriteIcon from '@material-ui/icons/Favorite';


const MyPage = (props) => {

  const dispatch = useDispatch();

  const my_Image = useSelector((state) => state.post.my_info.user?.userImage);
  const my_Email = useSelector((state) => state.post.my_info.user?.userEmail);
  const my_Name = useSelector((state) => state.post.my_info.user?.userName);

  const my_Post = useSelector((state) => state.post.my_info.postList?.length);
  const my_Post_List = useSelector((state) => state.post.my_info?.postList);
  console.log(my_Post_List);

  React.useEffect(() => {
    dispatch(postActions.getInfoDB());
  },[]);
  
  // const ReversedList = [...my_Post_List]?.reverse();

  const add = (e) => {
    document.body.classList.add('change-header-container');
  }
  add()


  return(
    <React.Fragment>
      {/* == 프로필 */}
      <Grid width="975px" padding="80px 20px" margin="0 auto">
        <Col>
          <ColLeft>
            <Image src={my_Image} shape="circle" size="150" margin="0 auto" alt=""/>
          </ColLeft>
          <ColRight>
            <Grid display="flex"  height="40px">
              <TxtName>{my_Email}</TxtName>
              <Button _onClick={()=>{history.push('/edit')}} borderradius="5px" padding="5px 9px" width="100px" border="1px solid #dbdbdb" margin="0 0 0 20px" fontweight="600" bg="#fafafa" color="#262626">프로필 편집</Button>
            </Grid>
            <TztPosting>게시물 <strong>{my_Post}</strong></TztPosting>
            <TztPosting><strong>{my_Name}</strong></TztPosting>
          </ColRight>
        </Col>

        <HR/>
      
        {/* == 게시물 (사진이미지) */}
        <Grid>
          <Grid display="flex" alignitems="center" justifycontent="center">
            <PostLink className="active">게시물</PostLink>
            <PostLink>IGTV</PostLink>
            <PostLink>저장됨</PostLink>
            <PostLink>태그됨</PostLink>
          </Grid>
          <PostImage>
            <PostRow>
              {my_Post_List?.map((a, idx) => {
                return (
                  <PostItem key={idx}>
                    <Link onClick={()=>{history.push('/main')}}>
                      <Image shape="rectangle" src={a.postImage} alt=""/>
                      <PostInfo>
                        <span><FavoriteIcon fontSize="small"></FavoriteIcon></span>
                        <span>{a.likes.howManyLike}</span>
                        <span><ModeCommentIcon fontSize="small"></ModeCommentIcon></span>
                        <span>{a.commentList.length}</span>
                      </PostInfo>
                    </Link>
              </PostItem>
                );
              })}
                  
               
            </PostRow>
          </PostImage>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
const Col = styled.div`
  display: flex;
  align-items: center;
`;
const ColLeft = styled.div`
  width: 290px;
  text-align: center;
  margin-right: 30px;
`;
const ColRight = styled.div`

`;
const TxtName = styled.h2`
  font-size: 28px;
  font-weight: 300;
  margin-top: 0;
  marign-bottom: 30px;
`;
const TztPosting  = styled.p`
  font-size:  16px;
  font-weight: 400;
`;
const HR = styled.hr`
  width: 100%;
  height: 1px;
  background: #dbdbdb;
  border: 0;
  margin: 20px 0 0;
`;
const PostImage = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  align-items: stretch;
  padding-bottom: 0px;
  padding-top: 0px;
`;
const PostRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  flex-shrink: 0;
`;
const PostItem = styled.div`
width: 100%;
height: 100%;
  -webkit-box-flex: 1;
  -webkit-flex: 1 0 0%;
  -ms-flex: 1 0 0%;
  flex: 1 0 0%;
  margin-right: 28px;

  &:last-child {
    margin-right: 0;
  }
`;
const Link = styled.a`
  position: relative;
  display:block;
  width: 100%;
  height: 100%;
  color: #ffffff;
  font-size: 40px;
  text-decoration: none;
  cursor: pointer;
  span {
    display: none;
  }

  &:hover {
    display: block;

    &:before {
      content:'';
      display: block;
      position: absolute;
      z-index: 1;
      width: 100%;
      height: 100%;
      background-color: rgba(0,0,0,.25);
    }

    span {
      display: inline-block;
      vertical-align: middle;
      
      &:nth-child(3) {
        margin-left: 30px;
      }

      &:nth-child(even) {
        font-size: 16px;
        margin-left: 10px;
        margin-top: 13px;
      }
    }
  }
`;
const PostLink = styled.div`
  font-size: 12px;
  padding: 20px 30px;

  &.active {
    font-weight: 600;
  }
`;

const PostInfo = styled.div`
  position: absolute;
  z-index: 2;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export default MyPage;