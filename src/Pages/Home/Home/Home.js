import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Home = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col lg="8">
                        <h1 className=''>Welcome to On<span className='text-primary'>Education</span>.</h1>
                        <p>The Best Online Learning Sites and Education Courses for 2022. The world is constantly changing and growing, and so are all the wonderful things to learn in it. From changing perspectives on history and studies of people to the world of deep AI and computer science, there’s more to know than ever before.

                            When you’re out of school, however, it can be hard to find places to learn new things, create new skills, and expand your horizons. The Internet is helping to solve this by making courses and training easier to find than ever before. Online classes are the perfect way for most to continue their education and we’ve put together a list of courses to help you find the best fit for you.

                        </p>
                    </Col>
                    <Col lg="4">
                        <div className='m-4'>
                            <div className='mt-5 p-2'>
                                <div className='mt-5'>
                                    <div className='mt-5'>
                                        <h2 className='mt-4'>Learn Your skills here.</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Home;