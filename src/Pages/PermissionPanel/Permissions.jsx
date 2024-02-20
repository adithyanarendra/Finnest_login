import { Container, Row, Col, Nav, Navbar, Button } from "react-bootstrap";
import Content from "../../components/Content/Content";

const MainPage = () => {
    return (
        <Container fluid>
            <Row>
                <Col sm={3} className="bg-light" style={{ minHeight: "100vh" }}>
                    <Navbar className="flex-column">
                        <Navbar.Brand href="#">FinNest</Navbar.Brand>
                        <Nav>
                            <Button />
                        </Nav>
                    </Navbar>
                </Col>

                <Col sm={9} className="p-3">
                    <Content />
                </Col>
            </Row>
        </Container>
    );
};

export default MainPage;
