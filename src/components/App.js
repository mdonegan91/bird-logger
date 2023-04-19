import React from "react";
import Header from "./Header";
import BirdControl from "./BirdControl";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';

function App(){
  return (
    <React.Fragment>
      <Container>
      <Header />
      <Row>
        <Col><BirdControl /></Col>
        </Row>
      </Container>
    </React.Fragment>
  );
}

export default App;