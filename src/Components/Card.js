import React from 'react';
import CardInfo from '../Components/CardInfo'

function Card (props) {
    return(
        <div className ='d-inline-block cp-card ' onClick={(e)=> props.click(props.item)}>
            <img className="cp-card-image" src={props.item.imgSrc} alt ={props.item.imgSrc}/>
            {props.item.selected && <CardInfo title={props.item.title} subTitle={props.item.subTitle} link ={props.item.link}/>}
        </div>
    )

}
export default Card;