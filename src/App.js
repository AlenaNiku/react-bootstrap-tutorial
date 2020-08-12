import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


// import Button from 'react-bootstrap/Button';

import { Button, Alert, Breadcrumb, BreadcrumbItem, Card } from 'react-bootstrap'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Card className="mb-3" style={{ color: "#000" }}>
          <Card.Img src="https://picsum.photos/id/237/200/200" />
          <Card.Body>
            <Card.Title>My card</Card.Title>
            <Card.Text>Welcome to my personal card</Card.Text>
          </Card.Body>
        </Card>
        <Breadcrumb>
          <BreadcrumbItem active>Aloha!</BreadcrumbItem>
          <BreadcrumbItem>Bonjour!</BreadcrumbItem>
          <BreadcrumbItem>Hola!</BreadcrumbItem>
        </Breadcrumb>

        <Alert variant="primary">Hello World!</Alert>
        <Button>Button</Button>
      </header>
    </div>
  );
}

export default App;
