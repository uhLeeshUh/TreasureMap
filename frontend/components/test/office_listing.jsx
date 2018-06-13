import React from 'react';

const OfficeListing = (props) => {
  let { state, address, manager } = props;

  return (
    <section>
      <h3>{state} Office</h3>
      <label>Address
        <br></br>
        <span>{address}</span>
      </label>
      <label>Manager
          <br></br>
        <p>{manager}</p>
      </label>
    </section>
  );
};

export default OfficeListing;
