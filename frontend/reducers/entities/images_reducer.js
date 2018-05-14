import { RECEIVE_IMAGE, RECEIVE_IMAGES } from '../../actions/image_actions';
import { merge } from 'lodash';

const imagesReducer = (state = {} , action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_IMAGES:
      let newState = merge({}, state, action.images);
      return newState;
    case RECEIVE_IMAGE:
      newState = merge({}, state, {[action.image.id]: action.image});
      return newState;
    default:
      return state;
  }
};

export default imagesReducer;
