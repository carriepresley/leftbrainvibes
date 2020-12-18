import React from 'react';
import ContactForm from "../Components/ContactForm";
import Hero from '../Components/Hero';
import Socials from "../Components/Socials";


function ContactPage(props) {
    return (
        <div>
        <Hero title={props.title} subTitle={props.subTitle}/>
        <div className='row text-center'>
            <div className = 'col-lg-12 d-flex justify-content-center'>
        <Socials/>
        </div>
        </div>
        <div className='row text-center'>
            <div className = 'col-lg-12 d-flex justify-content-center'>
            <p className = "contact-me">
            Questions, ideas, or requests? 
            <br></br>
            Holla anytime!
            </p>
            </div>
            </div>
           
            <ContactForm/>
        </div>
    );
}

export default ContactPage;