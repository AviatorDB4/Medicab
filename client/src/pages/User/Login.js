import React from "react";
import Container from "../../components/Container";
import Row from "../../components/Row";
import Col from "../../components/Col";
const Login = () => (
    <Container style={{ marginTop: 30 }}>
        <Row>
            <Col>
                <form>
                    <label>
                        Username
                        <input type="text" name="name" />
                    </label>
                    <input type="submit" value="sumbit" />
                </form>
            </Col>
        </Row>
    </Container>
);

export default Login;