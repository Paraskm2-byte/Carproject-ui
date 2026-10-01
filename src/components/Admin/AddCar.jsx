import { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import Sidebar from "./Sidebar";
import {
    FaCar,
    FaMoneyBillWave,
    FaChair,
    FaPalette,
    FaBolt,
    FaTachometerAlt,
    FaImage,
} from "react-icons/fa";


const AddCar = () => {

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
        featuers: []
    };
const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [car, setCar] = useState(initialState);
    const [preview, setPreview] = useState("");
    const [loading, setLoading] = useState(false);
    const [toast, setToast] = useState({
        show: false,
        type: "",
        message: "",
    });
    const carData = {
        name: car.name,
        brand: car.brand,
        model: Number(car.model),
        price: Number(car.price),
        fuelType: car.fuelType,
        transmission: car.transmission,
        seats: Number(car.seats),
        horsepower: Number(car.horsepower),
        topSpeed: car.topSpeed,
        colour: car.colour,
        description: car.description,

    };




    const handleChange = (e) => {


        setCar({

            ...car,

            [e.target.name]: e.target.value

        });


    };





    const handleFeature = (feature) => {

        if (car.featuers.includes(feature)) {

            setCar({
                ...car,
                featuers: car.featuers.filter(item => item !== feature)
            });

        } else {

            setCar({
                ...car,
                featuers: [...car.featuers, feature]
            });

        }

    };




    const handleImage = (e) => {


        const file = e.target.files[0];


        if (file) {


            setPreview(
                URL.createObjectURL(file)
            );


        }


    };






    const handleSubmit = async (e) => {


        e.preventDefault();


        try {


            setLoading(true);



            const carData = {


                name: car.name,

                brand: car.brand,

                model: car.model,

                price: Number(car.price),

                fuelType: car.fuelType,

                transmission: car.transmission,

                seats: Number(car.seats),

                horsepower: Number(car.horsepower),

                topSpeed: Number(car.topSpeed),

                colour: car.colour,

                description: car.description,

                featuers: car.featuers


            };




            const response = await axios.post(

                "http://localhost:8081/admin/create",

                carData

            );



            console.log(response.data);



            setToast({
                show: true,
                type: "success",
                message: "🚗 Luxury Car Added Successfully!",
            });

            setTimeout(() => {
                setToast({
                    show: false,
                    type: "",
                    message: "",
                });
            }, 3000);



            setCar(initialState);

            setPreview("");



        }

        catch (error) {


            console.log(error);


            setToast({
                show: true,
                type: "error",
                message: "❌ Failed to Add Car!",
            });

            setTimeout(() => {
                setToast({
                    show: false,
                    type: "",
                    message: "",
                });
            }, 3000);


        }


        finally {


            setLoading(false);


        }


    };








    return (


        <section className="min-h-screen bg-slate-950 py-16">

            <Sidebar
                isOpen={isSidebarOpen}

            />
            <div className="relative mx-auto max-w-7xl px-6">


                <motion.div

                    initial={{
                        opacity: 0,
                        y: -50
                    }}

                    animate={{
                        opacity: 1,
                        y: 0
                    }}

                    className="text-center"

                >


                    <h1 className="
text-5xl
font-bold
text-white
">

                        Add Luxury Car

                    </h1>


                    <p className="
mt-4
text-slate-400
">

                        CarPoint Admin Panel

                    </p>


                </motion.div>






                <motion.form

                    onSubmit={handleSubmit}

                    className="
mt-12
rounded-3xl
bg-white/5
border
border-white/10
p-10
backdrop-blur-xl
"


                >






                    <div className="
grid
md:grid-cols-2
gap-8
">



                        <InputField

                            icon={<FaCar />}

                            label="Car Name"

                            name="name"

                            value={car.name}

                            change={handleChange}

                        />




                        <InputField

                            label="Brand"

                            name="brand"

                            value={car.brand}

                            change={handleChange}

                        />




                        <InputField

                            label="Model"

                            name="model"

                            value={car.model}

                            change={handleChange}

                        />





                        <InputField

                            icon={<FaMoneyBillWave />}

                            label="Price"

                            name="price"

                            type="number"

                            value={car.price}

                            change={handleChange}

                        />




                        <InputField

                            icon={<FaChair />}

                            label="Seats"

                            name="seats"

                            type="number"

                            value={car.seats}

                            change={handleChange}

                        />





                        <InputField

                            icon={<FaBolt />}

                            label="Horsepower"

                            name="horsepower"

                            type="number"

                            value={car.horsepower}

                            change={handleChange}

                        />




                        <InputField

                            icon={<FaTachometerAlt />}

                            label="Top Speed"

                            name="topSpeed"

                            type="number"

                            value={car.topSpeed}

                            change={handleChange}

                        />





                        <InputField

                            icon={<FaPalette />}

                            label="Colour"

                            name="colour"

                            value={car.colour}

                            change={handleChange}

                        />



                    </div>









                    <div className="mt-8">


                        <label className="text-white">

                            Fuel Type

                        </label>


                        <select

                            name="fuelType"

                            value={car.fuelType}

                            onChange={handleChange}

                            className="
mt-3
w-full
rounded-xl
bg-slate-900
p-4
text-white
"


                        >


                            <option value="">
                                Select Fuel
                            </option>


                            <option>
                                Petrol
                            </option>


                            <option>
                                Diesel
                            </option>


                            <option>
                                Hybrid
                            </option>


                            <option>
                                Electric
                            </option>


                        </select>


                    </div>







                    <div className="mt-8">


                        <label className="text-white">

                            Transmission

                        </label>



                        <select

                            name="transmission"

                            value={car.transmission}

                            onChange={handleChange}

                            className="
mt-3
w-full
rounded-xl
bg-slate-900
p-4
text-white
"


                        >


                            <option value="">
                                Select Transmission
                            </option>


                            <option>
                                Automatic
                            </option>


                            <option>
                                Manual
                            </option>


                        </select>


                    </div>








                    <div className="mt-8">


                        <label className="text-white flex gap-2">

                            <FaImage />

                            Car Image

                        </label>



                        <input

                            type="file"

                            accept="image/*"

                            onChange={handleImage}

                            className="
mt-3
file-input
w-full
bg-slate-900
text-white
"

                        />



                        {
                            preview &&

                            <img

                                src={preview}

                                className="
mt-5
h-48
w-full
rounded-xl
object-cover
"

                            />

                        }


                    </div>







                    <div className="mt-8">


                        <h2 className="
text-white
text-xl
font-bold
mb-4
">

                            Features

                        </h2>


                        <div className="
grid
md:grid-cols-4
gap-4
">


                            {

                                [
                                    "Sunroof",
                                    "Leather Seats",
                                    "360 Camera",
                                    "Navigation",
                                    "Bluetooth",
                                    "Parking Assist",
                                    "Wireless Charging",
                                    "AI Assistant"

                                ].map((feature) => (


                                    <label

                                        key={feature}

                                        className="
bg-slate-900
p-3
rounded-xl
text-white
"


                                    >


                                        <input

                                            type="checkbox"

                                            checked={
                                                car.featuers.includes(feature)
                                            }

                                            onChange={() =>
                                                handleFeature(feature)
                                            }

                                        />


                                        <span className="ml-2">

                                            {feature}

                                        </span>


                                    </label>


                                ))


                            }


                        </div>


                    </div>







                    <textarea

                        name="description"

                        value={car.description}

                        onChange={handleChange}

                        placeholder="Car description"

                        className="
mt-8
textarea
w-full
h-40
bg-slate-900
text-white
"

                    />







                    <button

                        disabled={loading}

                        className="
mt-10
w-full
rounded-xl
bg-blue-600
py-4
text-white
font-bold
hover:bg-blue-700
"


                    >


                        {

                            loading
                                ?
                                "Adding Car..."
                                :
                                "🚗 Add Car"

                        }


                    </button>






                </motion.form>


            </div>

            {toast.show && (
                <div className="toast toast-top toast-end z-[9999] mt-20">
                    <div
                        className={`alert shadow-2xl rounded-2xl border backdrop-blur-xl animate-in slide-in-from-right duration-300 ${toast.type === "success"
                            ? "alert-success"
                            : "alert-error"
                            }`}
                    >
                        {toast.type === "success" ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="stroke-current shrink-0 h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M9 12l2 2 4-4m6 2A9 9 0 1112 3a9 9 0 019 9z"
                                />
                            </svg>
                        ) : (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="stroke-current shrink-0 h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M12 9v2m0 4h.01M5.07 19h13.86c1.54 0 2.5-1.67 1.73-3L13.73 4c-.77-1.33-2.69-1.33-3.46 0L3.34 16c-.77 1.33.19 3 1.73 3z"
                                />
                            </svg>
                        )}

                        <span className="font-semibold">{toast.message}</span>
                    </div>
                </div>
            )}
        </section>


    );


};







const InputField = ({

    icon,

    label,

    name,

    value,

    change,

    type = "text"


}) => {


    return (


        <div>


            <label className="text-white font-semibold">

                {label}

            </label>


            <div className="
mt-3
flex
items-center
gap-3
rounded-xl
bg-slate-900
p-3
text-white
">


                {icon}


                <input

                    type={type}

                    name={name}

                    value={value}

                    onChange={change}

                    placeholder={label}

                    className="
w-full
bg-transparent
outline-none
"

                />


            </div>


        </div>


    );


};





export default AddCar;