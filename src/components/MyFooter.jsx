import { Navbar, Container } from "react-bootstrap";

function MyFooter() {
  return (
    <Navbar fixed="bottom" bg="dark" variant="dark" className="footer" >
      <Container className="justify-content-center">
        <Navbar.Brand href="#home" >
          <p >© 2022 Copyright: Epicode Books!</p>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default MyFooter;
