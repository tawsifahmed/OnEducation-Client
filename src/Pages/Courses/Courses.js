import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import LeftSideNav from '../Shared/LeftSideNav/LeftSideNav';

const Courses = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col lg="3">
                        <LeftSideNav></LeftSideNav>
                    </Col>
                    <Col lg="9"></Col>
                </Row>
            </Container>
        </div>
    );
};

export default Courses;