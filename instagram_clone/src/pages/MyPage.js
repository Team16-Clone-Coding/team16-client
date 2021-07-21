import React from "react";
import { history } from "../redux/configureStore";
import styled from "styled-components";
import { Grid, Image, Button } from "../elements"


const MyPage = (props) => {
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
            <Image shape="circle" src={props.src} size="150" margin="0 auto" alt=""/>
          </ColLeft>
          <ColRight>
            <TxtName>유저이메일</TxtName>
            <TztPosting>게시물 <strong>(게시물 수)</strong></TztPosting>
            <TztPosting><strong>유저네임</strong></TztPosting>
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
              <PostItem>
                <Link href="#">
                  <Image shape="rectangle" src={props.src} alt=""/>
                  <PostInfo>
                    <span>♥</span>
                    <span>좋아요 개수</span>
                  </PostInfo>
                </Link>
              </PostItem>
              <PostItem>
                <Link href="#">
                  <Image shape="rectangle" src={props.src} alt=""/>
                  <PostInfo>
                    <span>♥</span>
                    <span>좋아요 개수</span>
                  </PostInfo>
                </Link>
              </PostItem>
              <PostItem>
                <Link href="#">
                  <Image shape="rectangle" src={props.src} alt=""/>
                  <PostInfo>
                    <span>♥</span>
                    <span>좋아요 개수</span>
                  </PostInfo>
                </Link>
              </PostItem>
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
      &:first-child {
        font-size: 28px;
      }
      &:last-child {
        font-size: 16px;
        margin-top: 3px;
        margin-left: 5px;
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
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export default MyPage;