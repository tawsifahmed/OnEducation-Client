import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Container } from 'react-bootstrap';


const Checkout = () => {
    const courseCheck = useLoaderData()
    return (
        <div>
            <h1 className='text-center text-decoration-underline mb-4 text-muted'>Checkout Section</h1>
            <Container className='text-center d-flex justify-content-center'>
                <Card style={{ width: '35rem' }}>
                    <Card.Img variant="top" src={courseCheck.image_url} />
                    <Card.Body>
                        <Card.Title>{courseCheck.title}</Card.Title>
                        <Card.Text>
                            {courseCheck.details}
                        </Card.Text>
                        <h5>Price: ${courseCheck.price}</h5>
                        <Button variant="primary">Purchase now</Button>
                    </Card.Body>
                </Card>
            </Container>

        </div>
    );
};

export default Checkout;