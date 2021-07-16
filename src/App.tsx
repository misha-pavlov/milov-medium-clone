import React, { useEffect, useState } from 'react';
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
import CreatePostContainer from './pages/CreatePost/CreatePostContainer';

const App = () => {
  const [isAuth, setIsAuth] = useState(localStorage.getItem(constants.localStorage.user) !== null);

  useEffect(() => {
    setIsAuth(localStorage.getItem(constants.localStorage.user) !== null);
  }, [localStorage.getItem(constants.localStorage.user)]);

  const removeLocalStorageItem = () => {
    setIsAuth(false);
    localStorage.removeItem(constants.localStorage.user);
  };

  const addLocalStorageItem = (params: string) => {
    setIsAuth(true);
    localStorage.setItem(constants.localStorage.user, params);
  };

  return (
    <Provider store={Store}>
      <ChakraProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path={constants.urls.medium}>
              <MediumMainContainer
                isAuth={isAuth}
                removeLocalStorageItem={removeLocalStorageItem}
                addLocalStorageItem={addLocalStorageItem}
              />
            </Route>
            <Route exact path={constants.urls.ourStory}>
              <OurStoryPageContainer
                isAuth={isAuth}
                removeLocalStorageItem={removeLocalStorageItem}
                addLocalStorageItem={addLocalStorageItem}
              />
            </Route>
            <Route exact path={`${constants.urls.profile}/:postCreator`}>
              <TopicPageContainer
                isAuth={isAuth}
                removeLocalStorageItem={removeLocalStorageItem}
                addLocalStorageItem={addLocalStorageItem}
              />
            </Route>
            <Route exact path={constants.urls.post}>
              <PostPageContainer
                isAuth={isAuth}
                removeLocalStorageItem={removeLocalStorageItem}
                addLocalStorageItem={addLocalStorageItem}
              />
            </Route>
            <Route exact path={`${constants.urls.topic}/:name/:ukr`}>
              <TopicPageContainer
                isAuth={isAuth}
                removeLocalStorageItem={removeLocalStorageItem}
                addLocalStorageItem={addLocalStorageItem}
              />
            </Route>
            <Route exact path={constants.urls.topics}>
              <AllTopicsPageContainer
                isAuth={isAuth}
                removeLocalStorageItem={removeLocalStorageItem}
                addLocalStorageItem={addLocalStorageItem}
              />
            </Route>
            <Route exact path={constants.urls.createPost}>
              <CreatePostContainer
                isAuth={isAuth}
                removeLocalStorageItem={removeLocalStorageItem}
                addLocalStorageItem={addLocalStorageItem}
              />
            </Route>
            <Route exact path={constants.urls.redirect} render={() => <Redirect to={constants.urls.medium} />} />
            <Route exact path={constants.urls.error}>
              <ErrorPage />
            </Route>
          </Switch>
        </BrowserRouter>
      </ChakraProvider>
    </Provider>
  );
};

export default App;
