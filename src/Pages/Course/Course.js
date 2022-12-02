import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import LeftSideNav from '../Shared/LeftSideNav/LeftSideNav';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaFilePowerpoint } from "react-icons/fa";


const Course = () => {
    const courses = useLoaderData();

    return (
        <div>
            <Container>
                <Row>
                    <Col lg="2">
                        <LeftSideNav></LeftSideNav>
                    </Col>
                    <Col lg="10">
                        <div className='d-flex justify-content-center align-self-center'>
                            <h2 className='text-center text-muted text-decoration-underline mb-5 pe-3 me-2'>Courses</h2>
                            <h2 className='mb-5'><Button><FaFilePowerpoint></FaFilePowerpoint></Button></h2>
                        </div>
                        <div className='row row-cols-xl-4 row-cols-md-3 row-cols-1 gap-3 d-flex justify-content-center align-items-center mb-5'>
                            {
                                courses.map(course => <div
                                    key={course._id}
                                    className='d-flex justify-content-center'>
                                    <Card style={{ width: '18rem', height: '25.4rem' }}>
                                        <Card.Img style={{ height: '300px' }} variant="top" src={course.image_url} />
                                        <Card.Body>
                                            <Card.Title>{course.title}</Card.Title>
                                            <Card.Text>
                                                {course.details.slice(0, 100)}
                                            </Card.Text>
                                            <div className='text-center'>

                                                <Link course={course} to={`/course-details/${course._id}`}>
                                                    <Button variant="primary"> View Details</Button>
                                                </Link>

                                            </div>
                                        </Card.Body>
                                    </Card>
                                </div>)
                            }
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Course;