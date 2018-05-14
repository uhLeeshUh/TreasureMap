import * as ImageAPIUtil from '../util/image_api_util';

export const RECEIVE_IMAGE = "RECEIVE_IMAGE";
export const RECEIVE_IMAGES = "RECEIVE_IMAGES";
export const RECEIVE_IMAGE_ERRORS = "RECEIVE_IMAGE_ERRORS";
export const CLEAR_IMAGE_ERRORS = "CLEAR_IMAGE_ERRORS";

//synchronous action creators
export const recieveImage = (image) => {
  return {
    type: RECEIVE_IMAGE,
    image
  };
};

export const receiveImages = (images) => {
  return {
    type: RECEIVE_IMAGES,
    images
  };
};

export const receiveImageErrors = (errors) => {
  return {
    type: RECEIVE_IMAGE_ERRORS,
    errors
  };
};

export const clearImageErrors = () => {
  return {
    type: CLEAR_IMAGE_ERRORS
  };
};


//asynchronous action creators
export const createImage = (image) => {
  return (dispatch) => {
    return ImageAPIUtil.createImage(image).then(
      (image) => dispatch(receiveImage(image)),
      (errors) => dispatch(receiveImageErrors(errors))
    );
  };
};
