import React from 'react';
import {Container} from 'react-bootstrap';
import twitter from '../assets/twitter2.png';
import instagram from '../assets/instagram2.png';
import tiktok from '../assets/tiktok.png';
import facebook from '../assets/facebook.png'




function Socials(props){
    return(
    <Container fluid ={true}>
            <a href="https://twitter.com/leftbrainvibes" target="_blank" rel="noopener noreferrer">
            <img src= {twitter} alt= "left brain vibes twitter link" />
            </a>
            &nbsp;
            &nbsp;
            &nbsp;
            <a href="https://www.facebook.com/Left-Brain-Vibes-105615131419796" target="_blank" rel="noopener noreferrer">
            <img src= {facebook} alt= "left brain vibes facebook link"/>
            </a>
            &nbsp;
            &nbsp;
            &nbsp;
            <a href="https://www.instagram.com/leftbrainvibes/" target="_blank" rel="noopener noreferrer">
            <img src= {instagram} alt= "instagram-link"/>
            </a>
            &nbsp;
            &nbsp;
            &nbsp;
            <a href="https://www.tiktok.com/@carriepresley?lang=en" target="_blank" rel="noopener noreferrer">
            <img src= {tiktok} alt= "tiktok-link"/>
            </a>
    </Container>
    );
}


export default Socials;