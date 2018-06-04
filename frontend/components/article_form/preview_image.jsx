import React from 'react';

const PreviewImage = (props) => {
  debugger
  return (
    <button onClick={props.removePreview(props.idx)}>
      <img className="preview-image" src={props.imageUrl}></img>
    </button>
  );
};

export default PreviewImage;
