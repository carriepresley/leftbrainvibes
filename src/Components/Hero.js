import React from "react";
import {Jumbotron} from "react-bootstrap";
import { Container } from "react-bootstrap";
import {Row} from "react-bootstrap";



function Hero (props) {
    return(
<Jumbotron className='bg-transparent jumbotron-fluid p-0' >
<Container fluid={true}>
    <Row className='justify-content-center py-0'>
            {props.title && <h1 className='display-3'>{props.title}</h1>}
            {props.subTitle && <h2 className ='display-2 font-weight-light'>{props.subTitle}</h2>}
            {props.text && <h3 className= 'lead font-weight-light'>{props.text}</h3>}
    </Row>    
</Container>
</Jumbotron>
    );
}

export default Hero;