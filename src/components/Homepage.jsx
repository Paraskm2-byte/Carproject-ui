import React from 'react'
import FeaturedCars from "./FeaturedCars";
import Brands from "./Brands";
import WhyChooseUs from "./WhyChooseUs";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Navbar'
import {
  FaCar,
  FaArrowRight,
  FaStar,
  FaUsers,
  FaAward,
} from "react-icons/fa";
import Hero from './Hero';
import Testimonials from './Testinomials';
import Footer from './Footer';
const Homepage = () => {
  return (
    <div >
      <Navbar />
      <Hero />
      <FeaturedCars />
      <Brands />
      <WhyChooseUs />
      <Testimonials />
      <Footer />

    </div>
  )
}

export default Homepage;
