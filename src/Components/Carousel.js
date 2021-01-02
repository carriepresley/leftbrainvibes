import React from "react";
import AddIntegers from '../assets/addintegers.png';
import MDIntegers from "../assets/MultDivIntegers.png"

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
                    title: 'ADD INTEGERS',
                    subTitle: 'Link coming soon!',
                    imgSrc: AddIntegers,
                    link: "",
                    selected: false
                },
                {   id:1,
                    title: 'MULTIPLY & DIVIDE INTEGERS',
                    subTitle: 'Link coming soon!',
                    imgSrc: MDIntegers,
                    link:'',
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