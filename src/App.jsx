import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Homepage from './components/Homepage'
import Login from "./components/User/Login";
import Register from "./components/User/Register";
import Profile from "./components/User/Profile";
import { Routes, Route } from "react-router-dom";
import CarList from "./components/Car/CarList";
import CarDetails from "./components/Car/CarDetails";
import BookTestDrive from "./components/Booking/BookTestDrive";
import MyBookings from "./components/Booking/MyBookings";
import Dashboard from "./components/Admin/Dashboard";
import AddCar from "./components/Admin/AddCar";
import UpdateCar from "./components/Admin/UpdateCar";
import CarTable from "./components/Admin/CarTable";
// New Pages
import Users from "./components/Admin/Users";
import Settings from "./components/Admin/Settings";
import BrandsPage from "./components/BrandsPage";

import About from "./components/About";
import Contact from "./components/Contact";
import ServicesPage from './components/ServicesPage'
import AdminLayout from './components/Admin/AdminLayout'
function App() {


  return (
  <>
    <Routes>

      <Route path="/" element={<Homepage />} />
      <Route path="/brands" element={<BrandsPage />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/cars" element={<CarList />} />
      <Route path="/cars/:id" element={<CarDetails />} />

      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/book-test-drive/:id" element={<BookTestDrive />} />
      <Route path="/my-bookings" element={<MyBookings />} />

      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="add-car" element={<AddCar />} />
        <Route path="update-car/:id" element={<UpdateCar />} />
        <Route path="car-table" element={<CarTable />} />
        <Route path="users" element={<Users />} />
        <Route path="settings" element={<Settings />} />
      </Route>

    </Routes>
  </>
);
}

export default App;

