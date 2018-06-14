import React from "react";
import { connect } from "react-redux";
import ArticleIndex from "../articles/article_index";

const UserShow = props => {
  return (
    <main>
      <section>
        <img />
        <h3>{props.user.username}</h3>
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
        <ArticleIndex articles={props.articles} />
      </section>
    </main>
  );
};

const mapStateToProps = state => {
  const user = state.entities.users[state.session.id];
  //articles

  return {
    user
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserShow);
