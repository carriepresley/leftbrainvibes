import React from "react";
import Hero from '../Components/Hero';
import Content from "../Components/Content";
import About from "../assets/about.jpg"

function AboutPage(props) {
    return (
        <div>
            <Hero title={props.title}/>
                
            
            <Content>
            <img src= {About} alt = 'Carrie with a longboard and moscow mule' />
            <div className = 'left-text'>
             <p>Hey, what's up? I'm Carrie. 
             <br></br>
             <br></br>
            I'm striking a balance between analytical, structured problem solving and rebellous, wild creativity! 
            <br></br>
            <br></br>
            Through a unique journey of professional experiences, I'm finally weaving together a tapestry of all my strengths and designing engaging education for all ages. 
            <br></br>
            <br></br>
            As a self-taught software developer, I'm no longer bound to the tools and apps available, I can create (almost) anything I can dream up to inspire and educate.
            <br></br>
            <br></br>
            I'm Carrie Presley on YouTube, social media platforms, and... in real life.  Let's connect!
             </p>
            </div>
            </Content> 
        </div>
    );
}

export default AboutPage;