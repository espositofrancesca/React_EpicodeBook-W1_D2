import { Jumbotron, Button, Container } from "react-bootstrap";

function Welcome() {
  return (
    <Container>
      <Jumbotron className="jumbotrone">
        <h1>Hello, world!</h1>
        <p>
          This is a simple hero unit, a simple jumbotron-style component for
          calling extra attention to featured content or information.
        </p>
        <p>
          <Button bsStyle="primary">Learn more</Button>
        </p>
      </Jumbotron>{" "}
    </Container>
  );
}

export default Welcome;
