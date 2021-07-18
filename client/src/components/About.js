import React from 'react';

function About(props) {
    return (
        <div id="about">
            <div className="about-image">
                <img src={props.image} alt="about img"/>
            </div>
            <div className="about-text">
                <h2> {props.title} </h2>
                <br/>
                <p>By tracking and analyzing all of your applications, Job Tracker is able to provide you 
                    with information and resources that will improve your resume and interview performance.
                </p>
                <br/>
                <a href="/register" className="cv-btn">Start Today</a>
            </div>
        </div>
    )
}

export default About;