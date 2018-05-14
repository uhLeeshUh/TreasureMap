import React from 'react';

const PreviewImage = (props) => {
  return (
    <button onClick={props.removePreview(props.idx)}>
      <img src={props.imageUrl}></img>
    </button>
  );
};

export default PreviewImage;
