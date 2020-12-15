import React from "react";
import gif from "../assets/gif.gif";




function HomePage(props) {
    return (
        
<div>
    <div className= 'row'>
        <div className = 'col-md-12'>
        <p  className ='home-p'>
             We keep the left brain vibes chill by bringing  <font color = '#ff6633'>creativity</font> to <font color ='#cc9966'>analytical</font>, <font color = '#ff6699'>mathematical</font> learning.
        </p>
        </div>
        <div className ='row'>
        <div className = 'col-md-6'>
            <a href="/courses" className ="button2">Let's Start!</a>
            </div>

           
            <div className = 'col-md-6'>
                <img src={gif} alt = "left brain vibes pic" className = 'home-gif text-right' ></img>
            </div>

            
            
            

        </div>
                 
        </div>
</div>
       
    );
}

export default HomePage;