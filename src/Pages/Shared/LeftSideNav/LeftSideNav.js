import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSideNav = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('http://localhost:9000/site-courses')
            .then(res => res.json())
            .then(data => setCourses(data));
    }, [])

    return (
        <div>
            <h3>All Courses: {courses.length}</h3>
            <div>
                {
                    courses.map(course => <p key={course.id}>
                        <Link to={`/course/${course.id}`}>{course.name}</Link>
                    </p>)
                }
            </div>
        </div>
    );
};

export default LeftSideNav;