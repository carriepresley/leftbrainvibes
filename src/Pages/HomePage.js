import React from "react";
import gif from "../assets/gif.gif";




function HomePage(props) {
    return (
        <div className= "home-hero">
         <img id ='home-gif' src={gif} alt = "left brain vibes pic"></img>
        <p id ='home-p-text'>
            We keep the left brain vibes chill by bringing <font color = '#ff6633'>creativity</font> to <font color ='#cc9966'>analytical</font>, <font color = '#ff6699'>mathematical</font> learning.
        </p>
        
        <div className= 'd-flex justify-content-center'>
       
        <a href="/courses" id ="button2">Let's Start!</a>
        </div>
        </div>
    );
}

export default HomePage;