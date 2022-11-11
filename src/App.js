import React from 'react';
import { Provider } from 'react-redux';
// import Login from './pages/Login/Login';
// import Register from './pages/Register/Register';
import Dashbaord from './pages/dashboard/dashboard';
import store from './components/redux/store'

function App() {
  return (
    <div>
      
      {/* <Login /> */}
      {/* <Register /> */}
      <Provider store={store}>
       <Dashbaord />
      </Provider>
    </div>
  );
}

export default App;
