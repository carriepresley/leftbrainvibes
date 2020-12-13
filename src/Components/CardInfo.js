import React from 'react';
import {useSpring, animated} from 'react-spring';

function CardInfo (props) {

    const style =useSpring({opacity: 0.80, from: {opacity: 0}})

    return(
        <div>
        <animated.div className ='cp-card-info' style={style}>
            <p className='cp-card-title'>{props.title}</p>
            <p className='cp-card-sub-title'>{props.subTitle}</p>
            <a href={props.link} target="_blank" rel="noopener noreferrer">View</a>
        </animated.div>
        </div>
    )

}

export default CardInfo;