import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import LeftSideNav from '../Shared/LeftSideNav/LeftSideNav';

const Course = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col lg="3">
                        <LeftSideNav></LeftSideNav>
                    </Col>
                    <Col lg="9">
                        This is course info
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Course;