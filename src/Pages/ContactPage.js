import React from 'react';
import ContactForm from "../Components/ContactForm";
import Hero from '../Components/Hero';


function ContactPage(props) {
    return (
        <div>
        <Hero title={props.title} subTitle={props.subTitle}/>

     <div className='row text-center'>
            <div className = 'col-lg-12 d-flex justify-content-center'>
            <p>
            What topics should I cover next? 
            <br></br>Did I mess up? Probs.
            <br></br> Holla at me. 
            </p>
            </div>
            </div>
           
            <ContactForm/>
        </div>
    );
}

export default ContactPage;