import { motion } from "framer-motion";
import {
  FaEdit,
  FaTrash,
  FaEye,
  FaCar,
} from "react-icons/fa";

const cars = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=400",
    name: "BMW M4",
    brand: "BMW",
    price: "₹95,00,000",
    status: "Available",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=400",
    name: "Audi A6",
    brand: "Audi",
    price: "₹72,00,000",
    status: "Booked",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=400",
    name: "Mercedes C-Class",
    brand: "Mercedes",
    price: "₹68,00,000",
    status: "Available",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=400",
    name: "Tesla Model 3",
    brand: "Tesla",
    price: "₹61,00,000",
    status: "Sold",
  },
];

const LatestCars = () => {
  return (
    <section className="mt-8">

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="rounded-3xl border border-slate-800 bg-slate-900 shadow-xl"
      >

        {/* Header */}

        <div className="flex items-center justify-between border-b border-slate-800 p-6">

          <div>

            <h2 className="flex items-center gap-3 text-3xl font-bold text-white">
              <FaCar className="text-blue-500" />
              Latest Cars
            </h2>

            <p className="mt-2 text-gray-400">
              Recently added vehicles
            </p>

          </div>

          <button className="btn btn-primary rounded-xl">
            View All
          </button>

        </div>

        {/* Table */}

        <div className="overflow-x-auto">

          <table className="table">

            <thead>

              <tr className="text-gray-300">

                <th>Image</th>
                <th>Car</th>
                <th>Brand</th>
                <th>Price</th>
                <th>Status</th>
                <th className="text-center">Actions</th>

              </tr>

            </thead>

            <tbody>

              {cars.map((car) => (

                <motion.tr
                  key={car.id}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.4 }}
                  viewport={{ once: true }}
                  className="hover:bg-slate-800 transition"
                >

                  <td>

                    <img
                      src={car.image}
                      alt={car.name}
                      className="h-16 w-24 rounded-xl object-cover"
                    />

                  </td>

                  <td className="font-semibold text-white">
                    {car.name}
                  </td>

                  <td>{car.brand}</td>

                  <td className="text-green-400 font-semibold">
                    {car.price}
                  </td>

                  <td>

                    <span
                      className={`badge ${
                        car.status === "Available"
                          ? "badge-success"
                          : car.status === "Booked"
                          ? "badge-warning"
                          : "badge-error"
                      }`}
                    >
                      {car.status}
                    </span>

                  </td>

                  <td>

                    <div className="flex justify-center gap-2">

                      <button className="btn btn-sm btn-info">
                        <FaEye />
                      </button>

                      <button className="btn btn-sm btn-warning">
                        <FaEdit />
                      </button>

                      <button className="btn btn-sm btn-error">
                        <FaTrash />
                      </button>

                    </div>

                  </td>

                </motion.tr>

              ))}

            </tbody>

          </table>

        </div>

      </motion.div>

    </section>
  );
};

export default LatestCars;