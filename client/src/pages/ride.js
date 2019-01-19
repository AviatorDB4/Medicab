import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
const ride = () => (
    <Container style={{ marginTop: 30 }}>
        <Row>
            <Col size="md-12">
                <form>
                    <label>
                        First Name
                        <input type="text" name="name" />
                    </label>
                    <input type="submit" value="sumbit" />
                </form>
                <form>
                    <label>
                        Last Name
                        <input type="text" name="name" />
                    </label>
                    <input type="submit" value="sumbit" />
                </form>
                <form>
                    <label>
                        Pick-up Address
                        <input type="text" name="name" />
                    </label>
                    <input type="submit" value="sumbit" />
                </form>
                <form>
                    <label>
                        Destination Address
                        <input type="text" name="name" />
                    </label>
                    <input type="submit" value="sumbit" />
                </form>
            </Col>
        </Row>
    </Container>
);

export default ride;
