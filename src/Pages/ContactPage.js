import React from 'react';
import ContactForm from "../Components/ContactForm";
import Hero from '../Components/Hero';
import Content from "../Components/Content";


function ContactPage(props) {
    return (
        <div>
            <Hero title={props.title} subTitle={props.subTitle}/>
            <Content>
            <p className = 'contact-me-text'>
            </p>
            </Content>
            <ContactForm/>
        </div>
    );
}

export default ContactPage;