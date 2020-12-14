import React from "react";
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';


function Footer(){
    return (
        <div>
            <footer className="mt-5">
            <Container fluid = {true}>
                <Col className ='container text-center p-10 navbar-text col-md-12 col-sm-12 col-xs-12' id = 'footer-words'>
                &#169;2020 Left Brain Vibes, LLC  &#160; &#160; Made with &hearts; in TX.
                </Col>
            </Container>
            </footer>
        </div>
    );
}

export default Footer;