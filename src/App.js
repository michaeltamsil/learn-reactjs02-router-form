import React from 'react';
import { Container } from 'react-bootstrap';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import DataWanderlink from './components/DataWanderlink';
import Home from './components/Home';
import NavBar from './components/NavBar';
import TodoApp from './components/TodoApp';


function App() {
  return (
    <Router>
      <Container>
        <NavBar/>
        <Switch>
          <Route path="/todoapp/">
            <TodoApp/>
          </Route>
          
          

          <Route path="/data_wanderlink">
            <DataWanderlink/>
          </Route>
          
          <Route path="/" exact>
            <Home/>
          </Route>
          <Route path="/">
            <h1 style={{color: "red"}}>maaf, halaman tidak ditemukan</h1>
          </Route>

        </Switch>
        <footer>ini kaki</footer>
      </Container>
    </Router>

  );
}

export default App;
