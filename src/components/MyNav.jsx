import { Navbar, Container, Nav } from "react-bootstrap";

function MyNav() {
  return (
    <Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark" className="mb-5">
      <Container>
        <Navbar.Brand href="#home">Epicode Books! </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          className="justify-content-end"
          id="responsive-navbar-nav"
        >
          <Nav>
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">About</Nav.Link>
            <Nav.Link href="#">Browse</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNav;
