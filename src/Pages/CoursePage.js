import React from "react";
import Hero from "../Components/Hero";
import Carousel from "../Components/Carousel";
import { Container } from "react-bootstrap";
import {Row} from "react-bootstrap";



function CoursePage(props) {
    return (
        <div>
        <Hero title={props.title} subTitle ={props.subTitle} text = {props.text}/>
        
        {/* SEARCH BAR 
        
        <Container fluid={true}>
         <Row className='justify-content-center py-0'>
        
         <input type='text' placeholder= 'What do you want to learn?' className= "search-bar"></input>
         </Row>
         </Container>*/}

        <Carousel/>
        </div>
    );
}

export default CoursePage;