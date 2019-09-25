import React, { Fragment, useContext } from 'react';
import { Switch, Route } from 'react-router-dom';

import { GlobalContext } from './contexts/GlobalContextProvider';

import WrappedLogin from './components/pages/Login';
import PrivateRoute from './components/common/PrivateRoute';
import DefaultLayout from './components/layout/DefaultLayout';
import WrappedRegistration from './components/pages/Registration';

const App = () => {

  const { authContext } = useContext(GlobalContext);

  return (
    <Fragment>
      <Switch>
        <Route exact path="/login" component={WrappedLogin} />
        <Route exact path="/registration" component={WrappedRegistration} />
        <PrivateRoute isLogin={authContext.isLogin} path="/" component={DefaultLayout} />
      </Switch>
    </Fragment>
  );
}

export default App;
