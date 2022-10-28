import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Checkout = () => {
    const course = useLoaderData();
    return (
        <div>
            <h2>check it outs {course.title}</h2>
        </div>
    );
};

export default Checkout;