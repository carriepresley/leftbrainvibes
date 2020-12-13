import React from "react";
import HomePage_1 from '../assets/HomePage_1.jpg';
import HomePage_2 from '../assets/HomePage_2.jpg';
import HomePage_3 from '../assets/HomePage_3.jpg';
import Card from "../Components/Card";
import { Container } from "react-bootstrap";
import {Row} from "react-bootstrap";




class Carousel extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            items: [
                {
                    id:0,
                    title: 'SOFTWARE DEVELOPMENT',
                    subTitle: 'Check out some of my projects on GitHub!',
                    imgSrc: HomePage_1,
                    link: 'https://github.com/carriepresley',
                    selected: false
                },
                {   id:1,
                    title: 'INSTRUCTIONAL DESIGN',
                    subTitle: 'Public portfolio linked soon!',
                    imgSrc: HomePage_2,
                    link: '',
                    selected: false

                },
                {
                    id:2,
                    title: 'EDUCATION',
                    subTitle: 'Check out my YouTube channel!',
                    imgSrc: HomePage_3,
                    link: 'https://www.youtube.com/carriepresley',
                    selected: false


                },
                {
                    id:3,
                    title: 'EDUCATION',
                    subTitle: 'Check out my YouTube channel!',
                    imgSrc: HomePage_3,
                    link: 'https://www.youtube.com/carriepresley',
                    selected: false


                },
                {
                    id:4,
                    title: 'EDUCATION',
                    subTitle: 'Check out my YouTube channel!',
                    imgSrc: HomePage_3,
                    link: 'https://www.youtube.com/carriepresley',
                    selected: false


                },
                {
                    id:5,
                    title: 'EDUCATION',
                    subTitle: 'Check out my YouTube channel!',
                    imgSrc: HomePage_3,
                    link: 'https://www.youtube.com/carriepresley',
                    selected: false


                },
                
            ]

        }

    }

    handleCardClick = (id, card)=> {
        console.log(id);
        
        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !==id){
                item.selected = false;
            }
        });
        
        this.setState({
            items
        });
    }
    
    makeItems =(items)=> {
        return items.map(item => {
            return<Card item = {item} click={(e =>this.handleCardClick(item.id, e))} key = {item.id}/>
        })
    }

    render () {
        return (
            <Container fluid ={true}>
            <Row className ='justify-content-around'>
            {this.makeItems(this.state.items)}

            </Row>

            </Container>
        );
    }
}

export default Carousel;