import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
var BOB = {
  background: "rgba(245, 245, 245, 0)",
  border: "0px"
}

const About = () => (
  <div>
    <Hero backgroundImage="https://d1pra95f92lrn3.cloudfront.net/media/thumb/2057_fit512.jpg">
      <h1 className="BOB"style={ BOB }>MediCab!</h1>
      <h2> Keeping Track of Medication Made Easy!</h2>
    </Hero>
    <Container style={{ marginTop: 30 }}>
      <Row>
        <Col size="md-12">
        </Col>
      </Row>
      <Row>
        <Col size="md-12">

        </Col>
      </Row>
    </Container>
  </div>
);

export default About;
