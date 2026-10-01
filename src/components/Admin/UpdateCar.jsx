import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { motion } from "framer-motion";

import {
  FaArrowLeft,
  FaCar,
  FaMoneyBillWave,
  FaChair,
  FaPalette,
  FaBolt,
  FaTachometerAlt,
  FaSave,
  FaCheckCircle,
  FaTimesCircle,
} from "react-icons/fa";

const UpdateCar = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const initialState = {
    name: "",
    brand: "",
    model: "",
    price: "",
    fuelType: "",
    transmission: "",
    seats: "",
    horsepower: "",
    topSpeed: "",
    colour: "",
    description: "",
    featuers: "",
  };

  const [car, setCar] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const [snackbar, setSnackbar] = useState({
    show: false,
    message: "",
    type: "success",
  });

  // ================= LOAD CAR =================

  useEffect(() => {
    loadCar();
  }, [id]);

  const loadCar = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8081/car/get/${id}`
      );

      setCar(response.data);
    } catch (error) {
      console.error(error);

      setSnackbar({
        show: true,
        message: "Unable to load car!",
        type: "error",
      });

      setTimeout(() => {
        setSnackbar({
          show: false,
          message: "",
          type: "error",
        });
      }, 3000);
    }
  };

  // ================= HANDLE CHANGE =================

  const handleChange = (e) => {
    const { name, value } = e.target;

    setCar((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  // ================= VALIDATION =================

  const validate = () => {
    let temp = {};

    if (!car.name?.trim()) {
      temp.name = "Car Name is required";
    }

    if (!car.brand?.trim()) {
      temp.brand = "Brand is required";
    }

    if (!car.model) {
      temp.model = "Model is required";
    }

    if (!car.price) {
      temp.price = "Price is required";
    }

    if (!car.fuelType) {
      temp.fuelType = "Fuel Type is required";
    }

    if (!car.transmission) {
      temp.transmission = "Transmission is required";
    }

    if (!car.seats) {
      temp.seats = "Seats are required";
    }

    if (!car.horsepower) {
      temp.horsepower = "Horsepower is required";
    }

    if (!car.topSpeed?.trim()) {
      temp.topSpeed = "Top Speed is required";
    }

    if (!car.colour?.trim()) {
      temp.colour = "Colour is required";
    }

    if (!car.description?.trim()) {
      temp.description = "Description is required";
    }

    setErrors(temp);

    return Object.keys(temp).length === 0;
  };

  // ================= UPDATE CAR =================

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    try {
      setLoading(true);

      const updatedCar = {
        ...car,
        model: Number(car.model),
        price: Number(car.price),
        seats: Number(car.seats),
        horsepower: Number(car.horsepower),
      };

      await axios.put(
        `http://localhost:8081/admin/update/${id}`,
        updatedCar
      );

      // Show success snackbar
      setSnackbar({
        show: true,
        message: "Car updated successfully!",
        type: "success",
      });

      // Navigate AFTER snackbar appears
      setTimeout(() => {
        navigate("/admin/car-table");
      }, 1500);
    } catch (error) {
      console.error("Update error:", error);

      setSnackbar({
        show: true,
        message: "Failed to update car!",
        type: "error",
      });

      setTimeout(() => {
        setSnackbar({
          show: false,
          message: "",
          type: "error",
        });
      }, 3000);
    } finally {
      setLoading(false);
    }
  };

  // ================= RESET =================

  const handleReset = () => {
    setCar(initialState);
    setErrors({});

    setSnackbar({
      show: true,
      message: "Form reset successfully!",
      type: "success",
    });

    setTimeout(() => {
      setSnackbar({
        show: false,
        message: "",
        type: "success",
      });
    }, 2000);
  };

  // ================= UI =================

  return (
    <div className="relative min-h-screen">
      {/* ================= SNACKBAR ================= */}

      {snackbar.show && (
        <motion.div
          initial={{ opacity: 0, x: 100, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: 100 }}
          className="fixed right-5 top-5 z-[9999]"
        >
          <div
            className={`
              alert min-w-[320px] shadow-2xl
              ${
                snackbar.type === "success"
                  ? "alert-success"
                  : "alert-error"
              }
            `}
          >
            {snackbar.type === "success" ? (
              <FaCheckCircle className="text-lg" />
            ) : (
              <FaTimesCircle className="text-lg" />
            )}

            <span className="font-medium">
              {snackbar.message}
            </span>

            <button
              type="button"
              onClick={() =>
                setSnackbar({
                  show: false,
                  message: "",
                  type: "success",
                })
              }
              className="btn btn-sm btn-ghost"
            >
              ✕
            </button>
          </div>
        </motion.div>
      )}

      {/* ================= UPDATE CAR SECTION ================= */}

      <section className="min-h-screen bg-slate-950 py-16">
        <div className="mx-auto max-w-7xl px-6">

          {/* Header */}

          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-between"
          >
            <div>
              <h1 className="text-5xl font-bold text-white">
                Update Car
              </h1>

              <p className="mt-3 text-slate-400">
                Update your luxury car information
              </p>
            </div>

            <Link
              to="/admin/car-table"
              className="btn btn-outline btn-primary"
            >
              <FaArrowLeft />
              Back
            </Link>
          </motion.div>

          {/* Form */}

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-xl"
          >
            <div className="grid gap-8 md:grid-cols-2">

              <InputField
                icon={<FaCar />}
                label="Car Name"
                name="name"
                value={car.name}
                change={handleChange}
                error={errors.name}
              />

              <InputField
                label="Brand"
                name="brand"
                value={car.brand}
                change={handleChange}
                error={errors.brand}
              />

              <InputField
                label="Model"
                name="model"
                type="number"
                value={car.model}
                change={handleChange}
                error={errors.model}
              />

              <InputField
                icon={<FaMoneyBillWave />}
                label="Price"
                name="price"
                type="number"
                value={car.price}
                change={handleChange}
                error={errors.price}
              />

              <InputField
                icon={<FaChair />}
                label="Seats"
                name="seats"
                type="number"
                value={car.seats}
                change={handleChange}
                error={errors.seats}
              />

              <InputField
                icon={<FaBolt />}
                label="Horsepower"
                name="horsepower"
                type="number"
                value={car.horsepower}
                change={handleChange}
                error={errors.horsepower}
              />

              <InputField
                icon={<FaTachometerAlt />}
                label="Top Speed"
                name="topSpeed"
                value={car.topSpeed}
                change={handleChange}
                error={errors.topSpeed}
              />

              <InputField
                icon={<FaPalette />}
                label="Colour"
                name="colour"
                value={car.colour}
                change={handleChange}
                error={errors.colour}
              />
            </div>

            {/* Fuel Type */}

            <div className="mt-8">
              <label className="font-semibold text-white">
                Fuel Type
              </label>

              <select
                name="fuelType"
                value={car.fuelType}
                onChange={handleChange}
                className="mt-3 w-full rounded-xl bg-slate-900 p-4 text-white outline-none"
              >
                <option value="">Select Fuel</option>
                <option value="Petrol">Petrol</option>
                <option value="Diesel">Diesel</option>
                <option value="Hybrid">Hybrid</option>
                <option value="Electric">Electric</option>
              </select>

              {errors.fuelType && (
                <p className="mt-2 text-red-500">
                  {errors.fuelType}
                </p>
              )}
            </div>

            {/* Transmission */}

            <div className="mt-8">
              <label className="font-semibold text-white">
                Transmission
              </label>

              <select
                name="transmission"
                value={car.transmission}
                onChange={handleChange}
                className="mt-3 w-full rounded-xl bg-slate-900 p-4 text-white outline-none"
              >
                <option value="">
                  Select Transmission
                </option>

                <option value="Automatic">
                  Automatic
                </option>

                <option value="Manual">
                  Manual
                </option>
              </select>

              {errors.transmission && (
                <p className="mt-2 text-red-500">
                  {errors.transmission}
                </p>
              )}
            </div>

            {/* Features */}

            <div className="mt-8">
              <label className="font-semibold text-white">
                Features
              </label>

              <textarea
                name="featuers"
                value={car.featuers}
                onChange={handleChange}
                rows={4}
                placeholder="Sunroof, Leather Seats, Navigation..."
                className="mt-3 w-full rounded-xl border border-slate-700 bg-slate-900 p-4 text-white outline-none"
              />
            </div>

            {/* Description */}

            <div className="mt-8">
              <label className="font-semibold text-white">
                Description
              </label>

              <textarea
                name="description"
                value={car.description}
                onChange={handleChange}
                rows={6}
                placeholder="Enter car description..."
                className="mt-3 w-full rounded-xl border border-slate-700 bg-slate-900 p-4 text-white outline-none"
              />

              {errors.description && (
                <p className="mt-2 text-red-500">
                  {errors.description}
                </p>
              )}
            </div>

            {/* Buttons */}

            <div className="mt-10 flex gap-5">

              <button
                type="submit"
                disabled={loading}
                className="flex flex-1 items-center justify-center rounded-xl bg-blue-600 py-4 font-bold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
              >
                <FaSave className="mr-2" />

                {loading
                  ? "Updating..."
                  : "Update Car"}
              </button>

              <button
                type="button"
                onClick={handleReset}
                className="flex-1 rounded-xl border border-slate-600 py-4 font-bold text-white transition hover:bg-slate-800"
              >
                Reset
              </button>

            </div>
          </motion.form>
        </div>
      </section>
    </div>
  );
};

// ================= INPUT FIELD =================

const InputField = ({
  icon,
  label,
  name,
  value,
  change,
  error,
  type = "text",
}) => {
  return (
    <div>
      <label className="font-semibold text-white">
        {label}
      </label>

      <div
        className={`
          mt-3 flex items-center gap-3 rounded-xl
          border bg-slate-900 p-4
          ${
            error
              ? "border-red-500"
              : "border-slate-700"
          }
        `}
      >
        {icon && (
          <span className="text-lg text-blue-400">
            {icon}
          </span>
        )}

        <input
          type={type}
          name={name}
          value={value ?? ""}
          onChange={change}
          placeholder={label}
          className="w-full bg-transparent text-white outline-none placeholder:text-slate-500"
        />
      </div>

      {error && (
        <p className="mt-2 text-sm text-red-500">
          {error}
        </p>
      )}
    </div>
  );
};

export default UpdateCar;