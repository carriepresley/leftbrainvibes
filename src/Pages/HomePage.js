import React from "react";
import gif from "../assets/gif.gif";
import {
    BrowserRouter as Router,
    Route,
    Link
  } from "react-router-dom";


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
        <Router>
        <Route>
            <Link to = '/courses' className ="button2">Let's Start!</Link>
            </Route>
            </Router>
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