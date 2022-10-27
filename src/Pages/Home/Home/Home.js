import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Home = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col lg="8">
                        <h1 className='align-items-center'>Welcome to OnEducation</h1>
                    </Col>
                    <Col lg="4">
                        <h2 className='mt-4'>Learn Your skills here.</h2>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Home;