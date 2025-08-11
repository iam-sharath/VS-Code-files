import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Items from '../classProducts/items';

function DisplayProducts() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#logo">RAO.COM</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#men" title='Men'>MEN</Nav.Link>
            <Nav.Link href="#women" title='Women'>WOMEN</Nav.Link>
            <Nav.Link href="#kids" title='Kids'>KIDS</Nav.Link>

            <Form inline>
        <Row>
          <Col xs="auto">
            <Form.Control
              type="text"
              placeholder="Search"
              className=" mr-sm-2"/>
          </Col>
          {/* <Col xs="auto">
            <Button type="submit">Submit</Button>
          </Col> */}
        </Row>
      </Form>

          </Nav>
        </Container>
      </Navbar>
    <Items/>
      </>
  )}
     

export default DisplayProducts;