import { Component } from "react";
import { Container, Image} from "react-bootstrap";
import fantasy from "../data/fantasy.json";
import history from "../data/history.json";
import horror from "../data/horror.json";
import romance from "../data/romance.json";
import scifi from "../data/scifi.json";

import Carousel from "better-react-carousel";

class LatestRelise extends Component {
  render() {
    return (
      <Container>
        
        <h2>Fantasy</h2>
        <Carousel cols={5} rows={1} gap={10} loop autoplay={3000}>
          {fantasy.map((book) => {
            return (
              <Carousel.Item key={book.asin}>
                <Image src={book.img} rounded />
              </Carousel.Item>
            );
          })}
        </Carousel>

        <h2>History</h2>
        <Carousel cols={5} rows={1} gap={10} loop autoplay={4000}>
          {history.map((book) => {
            return (
              <Carousel.Item key={book.asin}>
                <Image src={book.img} rounded />
              </Carousel.Item>
            );
          })}
        </Carousel>

        <h2>Horror</h2>
        <Carousel cols={5} rows={1} gap={10} loop autoplay={3000}>
          {horror.map((book) => {
            return (
              <Carousel.Item key={book.asin}>
                <Image src={book.img} rounded />
              </Carousel.Item>
            );
          })}
        </Carousel>

        <h2>Romance</h2>
        <Carousel cols={5} rows={1} gap={10} loop autoplay={4000}>
          {romance.map((book) => {
            return (
              <Carousel.Item key={book.asin}>
                <Image src={book.img} rounded />
              </Carousel.Item>
            );
          })}
        </Carousel>

        <h2>Scifi</h2>
        <Carousel cols={5} rows={1} gap={10} loop autoplay={3000}>
          {scifi.map((book) => {
            return (
              <Carousel.Item key={book.asin}>
                <Image src={book.img} rounded />
              </Carousel.Item>
            );
          })}
        </Carousel>
        
      </Container>
    );
  }
}

export default LatestRelise;
