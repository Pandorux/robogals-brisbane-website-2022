import React, { Component } from "react";
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import ContactUs from "../contact-us/contact-us";
import Footer from "../footer";
import Navbar from "../navbar/navbar";
import OurPartners from "../partners/our-partners/our-partners";
import PartnerEvents from "../partners/partner-events";
import AboutUs from "../robogals/about-us/about-us";
import OurMission from "../robogals/our-mission/our-mission";
import OurWorkshops from "../schools/our-workshops/our-workshops";
import UpcomingWorkshops from "../schools/upcoming-workshops/upcoming-workshops";
import GettingInvolved from "../volunteers/getting-involved/getting-involved";
import VolunteerEvents from "../volunteers/volunteer-events/volunteer-events";
const axios = require('axios');

type RouterProps = {
  
};

class Router extends Component<RouterProps, any> {
  
  async testDeliveryTypeRoute() {
    const res = await axios.get("http://localhost:3000/delivery-type/get/", { id: 2 });
    console.log('Res', res);
  }

  public render() {
    return (
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Outlet />}>
            <Route index element={<AboutUs />} />

            <Route path="about-us">
              <Route index element={<AboutUs />} />
              <Route path="our-mission" element={<OurMission />} />
            </Route>

            <Route path="volunteers">
              <Route index element={<GettingInvolved />} />
              <Route path="upcoming-events" element={<VolunteerEvents />} />
            </Route>

            <Route path="schools">
              <Route index element={<OurWorkshops />} />
              <Route path="upcoming-events" element={<UpcomingWorkshops />} />
            </Route>
            
            <Route path="partners">
              <Route index element={<OurPartners />} />
              <Route path="upcoming-events" element={<PartnerEvents />} />
            </Route>
            
            <Route path="contact-us" element={<ContactUs />} />
          </Route>
        </Routes>

        <div>
          <div className="d-grid gap-2">
            <button type="button" className="btn btn-primary" onClick={() => this.testDeliveryTypeRoute()}>DB Test</button>
          </div>
        </div>

        <Footer />
      </BrowserRouter>
    );
  }
}

export default Router;
