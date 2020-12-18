import React from "react";
import AddIntegers from '../assets/addintegers.png';

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
                    title: 'ADDING INTEGERS',
                    subTitle: 'Check out some of my projects on GitHub!',
                    imgSrc: AddIntegers,
                    link: "https://www.youtube.com/watch?v=XXWpJ__Ab_g&ab_channel=CarriePresley",
                    selected: false
                },
                {   id:1,
                    title: 'INSTRUCTIONAL DESIGN',
                    subTitle: 'Public portfolio linked soon!',
                    imgSrc: AddIntegers,
                    link:'https://www.youtube.com/watch?v=ejqLa48h0pc&ab_channel=CarriePresley',
                    selected: false

                },
                {   id:2,
                    title: 'INSTRUCTIONAL DESIGN',
                    subTitle: 'Public portfolio linked soon!',
                    imgSrc: AddIntegers,
                    link:'https://www.youtube.com/watch?v=ejqLa48h0pc&ab_channel=CarriePresley',
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