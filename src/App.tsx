import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import './App.css';
import ErrorPage from './pages/ErrorPage/ErrorPage'

const gg = () => <div>ggg</div>
const gg1 = () => <div>ourStory</div>
const gg2 = () => <div>post</div>
const gg3 = () => <div>topic</div>
const gg4 = () => <div>topics</div>


const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={'/medium'} component={gg} />
        <Route exact path={'/ourStory'} component={gg1} />
        <Route exact path={'/post/:namePost/:id'} component={gg2} />
        <Route exact path={'/topic/:nameTopic'} component={gg3} />
        <Route exact path={'/topics'} component={gg4} />
        <Route exact path='/' render={() => <Redirect to={'/medium'} />}/>
        <Route path='*' component={ErrorPage}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
