import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import './App.css';
import { constants } from './config/constants';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import MediumMainContainer from './pages/MediumMain/MediumMainContainer';
import PostPageContainer from './pages/PostPage/PostPageContainer';
import TopicPageContainer from './pages/TopicPage/TopicPageContainer';
import AllTopicsPageContainer from './pages/AllTopicsPage/AllTopicsPageContainer';
import OurStoryPage from './pages/OurStoryPage/OurStoryPage';

const gg1 = () => <div>Profile</div>

const App = () => {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path={constants.urls.medium} component={MediumMainContainer} />
          <Route exact path={constants.urls.ourStory} component={OurStoryPage} />
          <Route exact path={constants.urls.profile} component={gg1} />
          <Route exact path={constants.urls.post} component={PostPageContainer} />
          <Route exact path={constants.urls.topic} component={TopicPageContainer} />
          <Route exact path={constants.urls.topics} component={AllTopicsPageContainer} />
          <Route exact path={constants.urls.redirect} render={() => <Redirect to={constants.urls.medium} />}/>
          <Route path={constants.urls.error} component={ErrorPage}/>
        </Switch>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
