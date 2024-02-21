import { Container, Row, Col } from "react-bootstrap";
import Content from "../../components/Content/Content";
import "./Permissions.css";

import InvestigationIcon from '../../assets/icons/shoe-prints.svg';

const MainPage = () => {
    return (
        <Container fluid>
            <Row>
                <Col
                    sm={2}
                    className="p-0 nav-color"
                    style={{ minHeight: "100vh" }}
                >
                    <div className="py-5 px-3 m-0 nav-color nav-text">
                        FinNest
                    </div>
                    <div>
                        <div>
                            <img className="icon-styles" src={InvestigationIcon} alt="" />
                            <span className="mx-2">Investigations</span>
                        </div>
                        <div>
                            <img src="" alt="" />
                            <span>Operations</span>
                        </div>
                        <div>
                            <img src="" alt="" />
                            <span>Reporting</span>
                        </div>
                    </div>
                    <div>
                        <div>
                            <img src="" alt="" />
                            <span>Add Group</span>
                        </div>
                        <div>
                            <img src="" alt="" />
                            <span>Settings</span>
                        </div>
                    </div>
                </Col>

                <Col sm={10} className="p-0 content-bg">
                    <Content />
                </Col>
            </Row>
        </Container>
    );
};

export default MainPage;
