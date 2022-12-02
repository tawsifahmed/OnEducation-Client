import React from 'react';
import { Button, Card, Container } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import { FaFilePowerpoint } from "react-icons/fa";
import Pdf from "react-to-pdf";


const CourseDetail = () => {
    const courseDetail = useLoaderData();
    const ref = React.createRef();

    return (
        <div>
            <div className='d-flex justify-content-center'>
                <Pdf targetRef={ref} filename="course-detail.pdf" >
                    {({ toPdf }) => <Button> <FaFilePowerpoint onClick={toPdf}></FaFilePowerpoint></Button>}
                </Pdf>
            </div>
            <div ref={ref}>
                <h1 className='text-center text-decoration-underline mb-4 text-muted pe-4'>Checkout Section</h1>
                <div className='text-center'></div>
                <Container className='text-center d-flex justify-content-center'>
                    <Card style={{ width: '35rem' }}>
                        <Card.Img variant="top" src={courseDetail.image_url} />
                        <Card.Body>
                            <Card.Title>{courseDetail.title}</Card.Title>
                            <Card.Text>
                                {courseDetail.details}
                            </Card.Text>
                            <h5>Price: ${courseDetail.price}</h5>
                            <Link to={`/checkout/${courseDetail._id}`}>
                                <Button variant="primary">Get Premium Access</Button>
                            </Link>
                        </Card.Body>
                    </Card>
                </Container>
            </div>
        </div>
    );
};

export default CourseDetail;