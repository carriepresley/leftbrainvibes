import React from 'react';
import './App.css';
import logo from './assets/Webpage.jpg';
import Socials from "./Components/Socials";



import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";
import {Container} from "react-bootstrap";
import {Navbar} from 'react-bootstrap';
import {NavbarBrand} from 'react-bootstrap';
import {Nav} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import Footer from './Components/Footer';
import HomePage from './Pages/HomePage';
import CoursePage from './Pages/CoursePage';
import AboutPage from './Pages/AboutPage';
import ContactPage from './Pages/ContactPage';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      title: "Left Brain Vibes",
      headerLinks: [
        {title: 'Home', path: '/'},
        {title: 'Courses', path: '/'},
        {title: 'About', path: '/about'},
        {title: 'Contact', path: "/contact"}
      ],

      home: {
        title: "Left Brain Vibes",
        subTitle: "We keep the left brain vibes chill.",
        text: ""
      },

       course: {
        title: "Course Catalog",
        subTitle: "What are you hoping to learn?",
        text: ""

      },

      about: {
        title: "About Me",
      },

      contact: {
        title: "Contact Me"
      }
    }
  }
  
  render(){
    return (
      <Router>
        <Container className="p-0" fluid = {true}>
        <Navbar className = "border-bottom" bg='transparent' expand='lg'>
          <NavbarBrand>
            <a href="/">
            <img src= {logo} style={{width:275, marginTop: -5}} alt = 'cp-logo'/>
            </a>
          </NavbarBrand>
          <Navbar.Toggle className ='border-0' aria controls ='navbar-toggle'></Navbar.Toggle>
          <Navbar.Collapse id = 'navbar-toggle'>
          <Nav className ='ml-auto dropdown-menu-right text-right'>
          
          <Link className ='nav-link'to ='/'>Home</Link>
          <Link className ='nav-link'to ='/courses'>Courses</Link>
          <Link className ='nav-link'to ='/about'>About</Link>
          <Link className ='nav-link'to ='/contact'>Contact</Link>
          <Socials/>
          </Nav>
          </Navbar.Collapse>
        </Navbar>

        <Route path="/" exact render={() => 
        <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text} />} />

        <Route path="/courses" render={() => <CoursePage title={this.state.course.title} />} />
          <Route path="/about" render={() => <AboutPage title={this.state.about.title} />} />
          <Route path="/contact" render={() => <ContactPage title={this.state.contact.title} />} />
        <Footer/>
      </Container>
      </Router>
      
    )
    
  }
  
}

export default App;

