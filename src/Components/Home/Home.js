import React, { useEffect, useState } from 'react';
import { Button, Carousel } from 'react-bootstrap';
import './Home.css';


const Home = () => {
    const [courses, setCourse] = useState([]);

    useEffect(() => {
        fetch("./custom-data.json")
            .then(res => res.json())
            .then(data => setCourse(data))
    }, []);
    return (

        <div className="container-fluid">
            <div className="home-section">
                <div>
                    <Carousel>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://hbu-files.wpmucdn.com/uploads/sites/83/2021/05/Great-Texts-major.jpg"
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <h2 className="">Enroll Today On Our Academic Programs.</h2>
                                <p>Learn From Our Special And Award Winning Teachers Around The World. </p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://www.sfu.ca/content/sfu/grc/research/publications/2020/jcr:content/main_content/textimage/image.img.640.medium.jpg/1593050509560.jpg"
                                alt="Second slide"
                            />

                            <Carousel.Caption>
                                <h2 className="">Enroll Today On Our Computer Programs.</h2>
                                <p className="">Learn From Our Special And Award Winning Teachers Around The World. </p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://i2.wp.com/www.bookstoprisoners.net/wp-content/uploads/2018/02/science-fiction.png?fit=1200%2C400&ssl=1"
                                alt="Third slide"
                            />

                            <Carousel.Caption>
                                <h2 className="">Enroll Today On Our Language Programs.</h2>
                                <p className="">Learn From Our Special And Award Winning Teachers Around The World. </p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>

            </div>
            <h1 className="my-5 fw-bold text-primary">Our Popular Courses</h1>
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
// return (


// );
// };

export default Home;