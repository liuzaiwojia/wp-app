import React from 'react';
import 'antd/dist/antd.css'; 
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import AppSkeleton from './pages/AppSkeleton'
import ErrorPage from './pages/ErrorPage'

function App() {
  return (
    <ErrorPage>
      <Router>
        <Switch>
          <Route path="/login">
          </Route>
          <Route path="/">
            <AppSkeleton></AppSkeleton>
          </Route>
        </Switch>
      </Router>
    </ErrorPage>
  );
}

export default App;
