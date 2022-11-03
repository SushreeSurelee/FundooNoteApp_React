import React from 'react';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Header from './components/header/Header';
import Takenote1 from './components/takeNote1/takeNote1';
import Takenote2 from './components/takeNote2/takeNote2';
import Takenote3 from './components/takeNote3/takeNote3';

function App() {
  return (
    <div>
      {/* <Login /> */}
      {/* <Register /> */}
      <Header/>
      <Takenote1/>
      {/* <Takenote2/> */}
      <Takenote3/>
    </div>
  );
}

export default App;
