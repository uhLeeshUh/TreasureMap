import React from 'react';
import { Route } from 'react-router-dom';
// import NavBar from ''
// import Footer from ''
// import all other components!
import SignupFormContainer from './signup_form_container';
import LoginFormContainer from './login_form_container';

const App = () => {
  // <NavBar /> //has no route, so it will render on every page. Put dropdowns and search here
  // //routes, which will change the content in MainPage
  // <Footer />
  return (
    <div>
      Hellow werld
      <Route path="/signup" component={SignupFormContainer} />
      <Route path="/login" component={LoginFormContainer} />
    </div>
  );
};

export default App;
