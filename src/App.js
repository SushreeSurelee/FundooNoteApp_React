import React from 'react';
import { Provider } from 'react-redux';
// import Login from './pages/Login/Login';
// import Register from './pages/Register/Register';
//import Dashbaord from './pages/dashboard/dashboard';
import store from './components/redux/store'
import Routerone from './pages/router/router';

function App() {
  return (
    <div>
      
      {/* <Login /> */}
      {/* <Register /> */}
      <Provider store={store}>
       {/* <Dashbaord /> */}
       <Routerone/>
      </Provider>
    </div>
  );
}

export default App;
