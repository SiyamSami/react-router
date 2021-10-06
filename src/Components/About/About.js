import React from 'react';
import './About.css'

const About = () => {
    return (
        <div className="container-fluid my-5">
            <div className="about-section row">
                <div className="d-flex px-5">
                    <div className="col-md-6 mt-4">
                        <h1 className="fw-bolder">About Us</h1>
                        <p className="fw-bold my-5">Coursera was founded by Daphne Koller and Andrew Ng in 2012 with a vision of providing life-transforming learning experiences to learners around the world. Today, Coursera is a global online learning platform that offers anyone, anywhere, access to online courses and degrees from leading universities and companies. Coursera received B Corp certification in February 2021, which means that we have a legal duty not only to our shareholders, but to also make a positive impact on society more broadly, as we continue our efforts to reduce barriers to world-class education for all.</p>
                    </div>
                    <div className="col-md-6 mt-4 px-5">
                        <h1 className="fw-bolder">About Our Partners</h1>
                        <p className="fw-bold my-5">Coursera partners with more than 200 leading universities and companies to bring flexible, affordable, job-relevant online learning to individuals and organizations worldwide. We offer a range of learning opportunities—from hands-on projects and courses to job-ready certificates and degree programs.</p>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default About;