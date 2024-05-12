import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

function App() {
  function submit () {
    confirmAlert({
      title: 'Confirm to submit',
      message: 'Are you sure to do this.',
      buttons: [
        {
          label: 'Yes',
          onClick: () => alert('Click Yes')
        },
        {
          label: 'No',
          onClick: () => alert('Click No')
        }
      ]
    });
  };
  
  return (
    <div className="App">
      <header className="App-header">
      <Navbar>
        <Button onClick={submit()} as="a" variant="primary">Kliknij mnie</Button>
        <Button as="a" variant="secondary">Kliknij mnie</Button>
        <Button as="a" variant="primary">Kliknij mnie</Button>
      </Navbar>
      <div>
        <Popup trigger=
            {<Button as="a" variant="danger"> Click to open popup </Button>}
            position="right center">
            <div>Congratulations! Pop-up opened! Here's a cowboy for ya: 🤠</div>
            <Button as="a" variant="info">Click here</Button>
        </Popup>
      </div>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Created with React.js
        </p>
      </header>
    </div>
  );
}

export default App;
