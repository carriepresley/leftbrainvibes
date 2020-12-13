import React from "react";
import Hero from "../Components/Hero";
import Carousel from "../Components/Carousel";




function CoursePage(props) {
    return (
        <div>
        <Hero title={props.title} subTitle ={props.subTitle} text = {props.text}/>
        <Carousel/>
        </div>
    );
}

export default CoursePage;