import React from 'react'

const ContactItem = (props) => {
    
    return (
        
    
    <div class="info-box">
        
        <div class="item-icon">
            <img src={props.img} alt="/" />
        </div>
        <div class="info-text">
            <h5 class=" mb-0">{props.title}</h5>
            
            <small>{props.desc}</small>
        </div>
    </div>
    );
};

export default ContactItem;
