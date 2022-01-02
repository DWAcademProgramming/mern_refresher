import { Fragment } from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import Login from './auth/Login';
import Register from './auth/Register';
//Redux
import { Provider } from 'react-redux';
import store from './store'; 

function App() {
  return (
    <Provider store={store}>
      <Fragment>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="register" element={<Register />} />
            <Route path="login" element={<Login />} />
          </Routes>
        </Router>
      </Fragment>
    </Provider>
  );
}

export default App;
