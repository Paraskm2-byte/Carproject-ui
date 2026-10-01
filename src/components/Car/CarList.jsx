import { useState } from "react";
import { motion } from "framer-motion";
import CarCard from "./CarCard";

import bmw from "../../assets/bmw.jpg";
import audi from "../../assets/audi.jpg";
import mercedes from "../../assets/mercedes.jpg";
import tesla from "../../assets/tesla.jpg";
import lamborghini from "../../assets/lamborghini.jpg";
import porsche from "../../assets/porchse.jpg";

const cars = [
  {
    id: 1,
    name: "BMW M4 Competition",
    brand: "BMW",
    image: bmw,
    price: 85000,
    rating: 4.9,
    year: 2025,
    fuel: "Petrol",
    transmission: "Automatic",
  },
  {
    id: 2,
    name: "Audi RS7",
    brand: "Audi",
    image: audi,
    price: 92000,
    rating: 4.8,
    year: 2024,
    fuel: "Petrol",
    transmission: "Automatic",
  },
  {
    id: 3,
    name: "Mercedes AMG GT",
    brand: "Mercedes",
    image: mercedes,
    price: 99000,
    rating: 5.0,
    year: 2025,
    fuel: "Petrol",
    transmission: "Automatic",
  },
  {
    id: 4,
    name: "Tesla Model S Plaid",
    brand: "Tesla",
    image: tesla,
    price: 95000,
    rating: 4.9,
    year: 2025,
    fuel: "Electric",
    transmission: "Automatic",
  },
  {
    id: 5,
    name: "Lamborghini Huracan",
    brand: "Lamborghini",
    image: lamborghini,
    price: 215000,
    rating: 5.0,
    year: 2025,
    fuel: "Petrol",
    transmission: "Automatic",
  },
  {
    id: 6,
    name: "Porsche 911 Turbo S",
    brand: "Porsche",
    image: porsche,
    price: 185000,
    rating: 4.9,
    year: 2025,
    fuel: "Petrol",
    transmission: "Automatic",
  },
];

const CarList = () => {
  const [search, setSearch] = useState("");

  const filteredCars = cars.filter(
    (car) =>
      car.name.toLowerCase().includes(search.toLowerCase()) ||
      car.brand.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="min-h-screen bg-slate-950 py-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
          className="mb-14 text-center"
        >
          <span className="font-semibold uppercase tracking-[6px] text-blue-500">
            Premium Collection
          </span>

          <h1 className="mt-4 text-5xl font-bold text-white">
            Explore Luxury Cars
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-slate-400">
            Browse our premium collection of sports cars, luxury sedans,
            electric vehicles and supercars from the world's best brands.
          </p>
        </motion.div>

        {/* Search */}
        <div className="mx-auto mb-14 max-w-xl">
          <input
            type="text"
            placeholder="Search BMW, Audi, Tesla..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="input input-bordered w-full rounded-full border-white/10 bg-white/5 text-white backdrop-blur-xl focus:border-blue-500"
          />
        </div>

        {/* Grid */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {filteredCars.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>

        {filteredCars.length === 0 && (
          <div className="mt-20 text-center">
            <h2 className="text-3xl font-bold text-white">
              No Cars Found
            </h2>

            <p className="mt-3 text-slate-400">
              Try searching with another brand.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default CarList;