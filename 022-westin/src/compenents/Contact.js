import React from 'react';
import ContactForm from './ContactForm';
import ContactItem from './ContactItem' ;
import SectionTitle from './SectionTitle';

const Contact = () => {
    return (
        <section id="contact" className="contact-02 py-6 bg-grey">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <SectionTitle desc="Get in touch " title="contact"/>
                        
                    </div>
                </div>
                <div className="row contact-info mt-4">
                    
                    <div className="col-md-4 ">
                        <ContactItem img="assets/img/message.svg" title="Mail Me" desc="[email&#160;protected]" />
                        
                    </div>
                    
                    <div className="col-md-4 ">
                    <ContactItem img="assets/img/phone-call.svg " title="Call Us On" desc="+123 456 7890" />
                        
                    </div>
                   
                    <div className="col-md-4 ">
                    <ContactItem img=" assets/img/location.svg" title="Visit office" desc="24 Street, New York, United State." />
                        
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12 mt-5">
                        <ContactForm />
                        
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
