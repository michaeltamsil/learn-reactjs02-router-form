import React from 'react';
import { Container } from 'react-bootstrap';

import ButtonSuccess from './components/ButtonSuccess';
import NavBar from './components/NavBar';
import TodoApp from './components/TodoApp';


function App() {
  return (
    <Container>
      <NavBar/>
      <div>saya mau belajar reactjs </div>
      <ButtonSuccess name="tombolSetuju" >Yes, i want to learn reactjs</ButtonSuccess>
      <TodoApp/>
    </Container>

  );
}

export default App;
