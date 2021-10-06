import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import './courses.css'

const Courses = (props) => {
    const [courses, setCourse] = useState([]);

    useEffect(() => {
        fetch("./custom-data.json")
            .then(res => res.json())
            .then(data => setCourse(data))
    }, []);
    return (
        <div className="container-fluid">
            <div className="row">
                {
                    courses.map((course) => (<div className="col-md-4">
                        <div className="card-style">
                            <div className="logo-image">
                                <img className="w-25 my-3" src={course.img} alt="" />
                            </div>
                            <h3> <strong>Course: </strong>{course.course}</h3>
                            <h4 className="fw-bold">Price : ${course.price}</h4>
                            <h5>Lecturer : {course.Contact}</h5>
                            <Button className="btn-warning px-5"> <strong>Enroll</strong> </Button>
                        </div>
                    </div>))
                }
            </div>
        </div>
    );
};

export default Courses;