import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';

import './App.css';
import { constants } from './config/constants';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import MediumMainContainer from './pages/MediumMain/MediumMainContainer';
import PostPageContainer from './pages/PostPage/PostPageContainer';
import TopicPageContainer from './pages/TopicPage/TopicPageContainer';
import AllTopicsPageContainer from './pages/AllTopicsPage/AllTopicsPageContainer';
import OurStoryPageContainer from './pages/OurStoryPage/OurStoryPageContainer';
import Store from './redux/redux';

const App = () => {
  return (
    <Provider store={Store}>
      <ChakraProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path={constants.urls.medium} component={MediumMainContainer} />
            <Route exact path={constants.urls.ourStory} component={OurStoryPageContainer} />
            <Route exact path={constants.urls.profile} component={TopicPageContainer} />
            <Route exact path={constants.urls.post} component={PostPageContainer} />
            <Route exact path={constants.urls.topic} component={TopicPageContainer} />
            <Route exact path={constants.urls.topics} component={AllTopicsPageContainer} />
            <Route exact path={constants.urls.redirect} render={() => <Redirect to={constants.urls.medium} />}/>
            <Route path={constants.urls.error} component={ErrorPage}/>
          </Switch>
        </BrowserRouter>
      </ChakraProvider>
    </Provider>
  );
}

export default App;
