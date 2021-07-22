import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { actionCreators as postActions } from "./post";
import { storage } from "../../shared/firebase";
import instance from "../../shared/instance";


const UPLOADING = "UPLOADING";
const IMAGE_UPLOAD = "IMAGE_UPLOAD";

const uploading = createAction(UPLOADING, (uploading) => ({ uploading }));
const imageUpload = createAction(IMAGE_UPLOAD, (image_url) => ({ image_url }));

const initialState = {
  uploading: false,
  preview: null,
  image_url: "",
}

const imageUploadFB = (image, contents) => {
  return function (dispatch, getState, { history }) {
    dispatch(uploading(true));
    const _upload = storage.ref(`images/${image.name}`).put(image);

    _upload.then((snapshot) => {
      snapshot.ref.getDownloadURL().then((url) => {
        dispatch(imageUpload(url));
        dispatch(postActions.addPostDB(url, contents));
      });
    });
  };
};

const profileUploadFB = (image) => {
  return function (dispatch, getState, { history }) {
    const _upload = storage.ref(`images/${image.name}`).put(image);

    _upload.then((snapshot) => {
      snapshot.ref.getDownloadURL().then((userImage) => {
        
        instance.post("/user/image", {userImage}).then((res)=> {
          console.log(userImage);
          console.log(res);
          dispatch(postActions.getInfoDB());
          history.goBack();
        }).catch((err) => {
          console.log(userImage);
          console.log(err);
        });

        
      });
    });
  };
};

export default handleActions(
  {
    [IMAGE_UPLOAD]: (state, action) =>
      produce(state, (draft) => {
        draft.image_url = action.payload.image_url;
        draft.uploading = false;
      }),
    [UPLOADING]: (state, action) =>
      produce(state, (draft) => {
        draft.uploading = action.payload.uploading;
      }),
  },
  initialState
);

const actionCreators = {
  imageUpload,
  uploading,
  imageUploadFB,
  profileUploadFB,
};

export { actionCreators };