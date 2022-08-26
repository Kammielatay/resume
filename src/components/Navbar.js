import * as React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav'

export default function Navbar() { 
  return (
    <Container>
      <Row >
        <Col>Kameshia Latay</Col>
        <Col>Place social media icons here</Col>
      </Row>
      <br></br>
      <Nav className="justify-content-center" activeKey="/home">
        <Nav.Item>
          <Nav.Link href="/home">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">About Me</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">Projects</Nav.Link>
        </Nav.Item>
      </Nav>
    </Container>
    
  )

}

