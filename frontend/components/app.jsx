import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { NavBar } from './navbar';
// import Footer from ''
// import all other components!
import SignupFormContainer from './signup_form_container';
import LoginFormContainer from './login_form_container';
import ArticleContainer from './article_container';
import CreateArticleContainer from './create_article_container';
import EditArticleContainer from './edit_article_container';

const App = () => {
  // <NavBar /> //has no route, so it will render on every page. Put dropdowns and search here
  // //routes, which will change the content in MainPage
  // <Footer />
  return (
    <div className="root-container">
      <Route path="/" component={NavBar} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <AuthRoute exact path="/signin" component={LoginFormContainer} />
      <Switch>
        <ProtectedRoute exact path="/articles/new" component={CreateArticleContainer}/>
        <Route exact path="/articles/:articleId" component={ArticleContainer}/>
      </Switch>
      <ProtectedRoute exact path="/articles/:articleId/edit" component={EditArticleContainer}/>
    </div>
  );
};

export default App;
