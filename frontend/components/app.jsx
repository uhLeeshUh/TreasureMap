import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { NavBar } from './navbar';
import Footer from './anchors/footer';
import SignupFormContainer from './signup_form_container';
import LoginFormContainer from './login_form_container';
import ArticleContainer from './article_container';
import CreateArticleContainer from './create_article_container';
import EditArticleContainer from './edit_article_container';
import CityDetailContainer from './city_show/city_detail';
import CountryDetailContainer from './country_show/country_detail';
import FeaturedArticleContainer from './featured_article';
import UserShowContainer from './user_profile/user_show';

const App = () => {

  return (
    <div className="root-container">
      <Route path="/" component={NavBar} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <AuthRoute exact path="/signin" component={LoginFormContainer} />
      <Route exact path="/" component={FeaturedArticleContainer}/>
      <Switch>
        <ProtectedRoute exact path="/articles/new" component={CreateArticleContainer}/>
        <Route exact path="/articles/:articleId" component={ArticleContainer}/>
      </Switch>
      <ProtectedRoute exact path="/articles/:articleId/edit" component={EditArticleContainer}/>
      <ProtectedRoute exact path="/users/:userId" component={UserShowContainer} />
      <Route exact path="/cities/:cityId" component={CityDetailContainer}/>
      <Route exact path="/countries/:countryId" component={CountryDetailContainer}/>
      <Route path="/" component={Footer}/>
    </div>
  );
};

export default App;
