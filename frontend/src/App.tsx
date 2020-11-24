import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import { LoginDialog } from './components/login/loginPopup'
import { Button } from '@material-ui/core'
import './App.css'; 
import { close, open } from './app/redux/actions/loginDialogSlice'
import { useSelector, useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch();
  const openLogin = () => {
    dispatch(open());
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Button onClick={openLogin}>Login</Button>
        <LoginDialog />

        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <span>
          <span>Learn </span>
          <a
            className="App-link"
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux-toolkit.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux Toolkit
          </a>
          ,<span> and </span>
          <a
            className="App-link"
            href="https://react-redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Redux
          </a>
        </span>
      </header>
    </div>
  );
}

export default App;
