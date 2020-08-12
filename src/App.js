import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


// import Button from 'react-bootstrap/Button';

import { Button, Alert, Breadcrumb, BreadcrumbItem, Card, Form } from 'react-bootstrap'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Form className="mb-2">
          <Form.Group controlId="formEmail">
            <Form.Label>Email Adress</Form.Label>
            <Form.Control type="email" placeholder="example@gmail.com" />
            <Form.Text className="text-muted">
              Make sure to use the right e-mail!
            </Form.Text>
          </Form.Group>
          <Form.Group controlId="formPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="cutedoggo1234" />
          </Form.Group>
          <Button variant="secondary" type="submit">
            Login
          </Button>
        </Form>

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
        <Button variant="primary">Button</Button>
      </header>
    </div>
  );
}

export default App;
