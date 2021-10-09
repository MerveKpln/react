import React from 'react'

const TestimonalItem = (props) => {
    return (
        <div className="testimonial-item">
            <div className="testimonial-image">
                 <img src={props.img} alt="/"/>
            </div>
            <div className="testimonial-content">
                <p className="testimonial-comment">{props.msj}</p>
                <h6 className="testimonial-name">{props.name}, <span className="testimonial-job">{props.unvan}</span></h6>
            </div>
        </div>
    );
};

export default TestimonalItem;
