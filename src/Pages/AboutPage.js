import React from "react";
import Hero from '../Components/Hero';
import About from "../assets/HomePage_2.png"

function AboutPage(props) {
    return (
        <div>
            <Hero title={props.title}/>
            
            <div className='row text-center'>
            
            <div className = 'col-lg-6 d-flex justify-content-center'>
             <p className = 'about-me'>Hey, what's up? 
             <br></br>
             <br></br>
             I'm Carrie Presley, the tech-discovering, mistake-making, always-learning creator behind Left Brain Vibes.
             <br></br>
             <br></br>
            While teaching high school math, I realized how boring learning analytical, logical, left brain-ish ideas can be.
            One day, I decided to take my wild & rebellous ways of teaching to the interwebs and created Left Brain Vibes. 
            <br></br>
            <br></br>
            To the classroom troublemakers, the "Non-Math People", the rebels to traditional education, the artists, to anyone and everyone... YOU are welcome here. 
            <br></br>
            <br></br>
            Good vibes your way!
             </p>
            </div>
            <div className = "col-lg-6 justify-content-center">
            <img src= {About} alt = 'Carrie Presley smiling with some books' />
            </div>

            </div>
        </div>
    );
}

export default AboutPage;