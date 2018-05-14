import React from 'react';

const PreviewImage = (props) => {
  debugger
  return (
    <button onClick={props.removePreview(props.key)}>
      <img src={props.imageUrl}></img>
    </button>
  );
};

export default PreviewImage;
