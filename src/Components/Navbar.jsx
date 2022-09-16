import Button from 'react-bootstrap/esm/Button';
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Nav from "react-bootstrap/Nav"
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import hoglogo from '../Assets/hogwarts.png'

function NavScrollExample() {
  return (
    <Navbar id='nav' bg="dark" variant='dark' expand="lg">
      <Container fluid>
        <Navbar.Brand href="#"> <img src={hoglogo} height={60} alt="" /> </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Quizzes</Nav.Link>
            <Nav.Link href="#action2">Puzzles</Nav.Link>
            <NavDropdown title="PARTS" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Harry Potter And The Sorcerer's Stone (2001)</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
              Harry Potter And The Chamber Of Secrets (2002)
              </NavDropdown.Item>
              <NavDropdown.Item href="#action5">
              Harry Potter And The Prisoner Of Azkaban (2004)
              </NavDropdown.Item>
              <NavDropdown.Item href="#action6">
              Harry Potter And The Goblet Of Fire (2005)
              </NavDropdown.Item>
              <NavDropdown.Item href="#action7">
              Harry Potter And The Order Of The Phoenix (2007)
              </NavDropdown.Item>
              <NavDropdown.Item href="#action8">
              Harry Potter And The Half-Blood Prince (2009)
              </NavDropdown.Item>
              <NavDropdown.Item href="#action9">
              Harry Potter And The Deathly Hallows: Part 1 (2010)
              </NavDropdown.Item>
              <NavDropdown.Item href="#action10">
              Harry Potter And The Deathly Hallows: Part 2 (2011)
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
              Avada Kedavra
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
            Muggles
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Spell Here"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="success">Magic</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;