import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// import Button from 'react-bootstrap/Button';

import { Button, Alert } from 'react-bootstrap'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Alert>This is a button</Alert>
        <Button>Test Button</Button>
      </header>
    </div>
  );
}

export default App;
