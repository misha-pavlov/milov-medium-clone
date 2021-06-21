import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import './App.css';
import { constants } from './config/constants';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import MediumMainContainer from './pages/MediumMain/MediumMainContainer';
import PostPageContainer from './pages/PostPage/PostPageContainer';

const gg1 = () => <div>ourStory</div>
const gg3 = () => <div>topic</div>
const gg4 = () => <div>topics</div>

const App = () => {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path={constants.urls.medium} component={MediumMainContainer} />
          <Route exact path={constants.urls.ourStory} component={gg1} />
          <Route exact path={constants.urls.post} component={PostPageContainer} />
          <Route exact path={constants.urls.topic} component={gg3} />
          <Route exact path={constants.urls.topics} component={gg4} />
          <Route exact path={constants.urls.redirect} render={() => <Redirect to={constants.urls.medium} />}/>
          <Route path={constants.urls.error} component={ErrorPage}/>
        </Switch>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
