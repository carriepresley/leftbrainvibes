import React from "react";




function HomePage(props) {
    return (
        <div>
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