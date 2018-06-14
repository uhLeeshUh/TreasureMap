import React from 'react';

const UserShow = props => {
  return (
    <main>
      <section>
        <img>user avatar</img>
        <h3>username goes here</h3>
      </section>
      <section>
        <h3>user stats</h3>
        <ul>
          <li># articles written</li>
          <li># articles edited</li>
        </ul>
      </section>
      <section>
        <h3>Articles written</h3>
        <ul>
          <li>Title of each article...</li>
          <li>Title of each article...</li>
          <li>Title of each article...</li>
        </ul>
      </section>
    </main>
  );
};

// ImageIndex:
// render() { return <ul>{images}</ul>}
export default UserShow;
