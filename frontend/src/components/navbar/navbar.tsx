import React, { Component } from "react";
import { BrowserRouter, Link } from 'react-router-dom';
import AboutUs from "../robogals/about-us";

type NavbarProps = {
  //
};

class Navbar extends Component<NavbarProps, any> {
  public render() {
    return (
      <div>
        <h1>DA NAVBAR</h1>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            
            <li>
              About Us
              <ul>
                <li><Link to="/about-us">About Us</Link></li>
                <li><Link to="/about-us/our-mission">Our Mission</Link></li>
              </ul>
            </li>
            
            <li>
              For Volunteers
              <ul>
                <li><Link to="/volunteers">Getting Involved</Link></li>
                <li><Link to="/volunteers/upcoming-events">Upcoming Events</Link></li>
              </ul>
            </li>
            
            <li>
              For Schools
              <ul>
                <li><Link to="/schools">Our Workshops</Link></li>
                <li><Link to="/schools/upcoming-events">Upcoming Events</Link></li>
              </ul>
            </li>
            
            <li>
              For Partners
              <ul>
                <li><Link to="/partners">Our Partners</Link></li>
                <li><Link to="/partners/upcoming-events">Upcoming Events</Link></li>
              </ul>
            </li>

            <li><Link to="/contact-us">Contact Us</Link></li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Navbar;
