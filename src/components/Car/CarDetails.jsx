import { motion } from "framer-motion";
import {
  FaHeart,
  FaStar,
  FaGasPump,
  FaCog,
  FaCalendarAlt,
  FaCarSide,
  FaArrowLeft,
} from "react-icons/fa";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";
  import bmw from "../../assets/bmw.jpg";

const CarDetails = () => {
  const car = {
    name: "BMW M4 Competition",
    brand: "BMW",
    price: "£85,000",
    rating: 4.9,
    year: 2025,
    fuel: "Petrol",
    transmission: "Automatic",
    mileage: "12,000 Miles",
    engine: "3.0L Twin Turbo",
    horsepower: "503 HP",
    seats: "4 Seats",
    color: "Metallic Blue",
  };

  return (
    <section className="min-h-screen bg-slate-950 py-24">

      {/* Background Glow */}

      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-blue-600/20 blur-[150px]" />

      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-cyan-500/20 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        <motion.button
          whileHover={{ x: -5 }}
          className="mb-10 flex items-center gap-3 text-slate-300 hover:text-blue-400"
        >
          <FaArrowLeft />
          Back to Cars
        </motion.button>

        <div className="grid gap-12 lg:grid-cols-2">

          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: .8 }}
          >

            <div className="overflow-hidden rounded-3xl">

              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ duration: .6 }}
                src={bmw}
                alt=""
                className="h-[550px] w-full object-cover"
              />

            </div>

          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: .8 }}
          >

            <span className="rounded-full bg-blue-600 px-5 py-2 text-sm font-semibold uppercase tracking-widest text-white">

              Premium Collection

            </span>

            <h1 className="mt-6 text-5xl font-bold text-white">

              {car.name}

            </h1>

            <p className="mt-3 text-xl text-slate-400">

              {car.brand}

            </p>

            {/* Rating */}

            <div className="mt-6 flex items-center gap-4">

              <div className="flex items-center gap-2 rounded-full bg-yellow-400 px-4 py-2 font-bold text-black">

                <FaStar />

                {car.rating}

              </div>

              <button className="rounded-full bg-white/10 p-4 text-white transition hover:bg-red-500">

                <FaHeart />

              </button>

            </div>

            {/* Price */}

            <div className="mt-8">

              <span className="rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 px-8 py-4 text-3xl font-bold text-white shadow-xl">

                {car.price}

              </span>

            </div>

            {/* Quick Specs */}

            <div className="mt-12 grid grid-cols-2 gap-5">

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">

                <FaCalendarAlt className="mb-3 text-3xl text-blue-500" />

                <p className="text-slate-400">Year</p>

                <h3 className="mt-2 text-xl font-bold text-white">

                  {car.year}

                </h3>

              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">

                <FaGasPump className="mb-3 text-3xl text-blue-500" />

                <p className="text-slate-400">Fuel</p>

                <h3 className="mt-2 text-xl font-bold text-white">

                  {car.fuel}

                </h3>

              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">

                <FaCog className="mb-3 text-3xl text-blue-500" />

                <p className="text-slate-400">Transmission</p>

                <h3 className="mt-2 text-xl font-bold text-white">

                  {car.transmission}

                </h3>

              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">

                <FaCarSide className="mb-3 text-3xl text-blue-500" />

                <p className="text-slate-400">Mileage</p>

                <h3 className="mt-2 text-xl font-bold text-white">

                  {car.mileage}

                </h3>

              </div>

            </div>

          </motion.div>

        </div>

      </div>
{/* ================= SPECIFICATIONS ================= */}

<motion.div
  initial={{ opacity: 0, y: 80 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
  className="mt-24"
>
  <h2 className="mb-10 text-4xl font-bold text-white">
    Car Specifications
  </h2>

  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

    {/* Engine */}

    <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition hover:border-blue-500 hover:shadow-2xl hover:shadow-blue-500/20">

      <h3 className="text-lg text-slate-400">
        Engine
      </h3>

      <p className="mt-3 text-2xl font-bold text-white">
        {car.engine}
      </p>

    </div>

    {/* Horsepower */}

    <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition hover:border-blue-500 hover:shadow-2xl hover:shadow-blue-500/20">

      <h3 className="text-lg text-slate-400">
        Horsepower
      </h3>

      <p className="mt-3 text-2xl font-bold text-white">
        {car.horsepower}
      </p>

    </div>

    {/* Seats */}

    <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition hover:border-blue-500 hover:shadow-2xl hover:shadow-blue-500/20">

      <h3 className="text-lg text-slate-400">
        Seating Capacity
      </h3>

      <p className="mt-3 text-2xl font-bold text-white">
        {car.seats}
      </p>

    </div>

    {/* Color */}

    <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition hover:border-blue-500 hover:shadow-2xl hover:shadow-blue-500/20">

      <h3 className="text-lg text-slate-400">
        Exterior Color
      </h3>

      <p className="mt-3 text-2xl font-bold text-white">
        {car.color}
      </p>

    </div>

    {/* Fuel */}

    <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition hover:border-blue-500 hover:shadow-2xl hover:shadow-blue-500/20">

      <h3 className="text-lg text-slate-400">
        Fuel Type
      </h3>

      <p className="mt-3 text-2xl font-bold text-white">
        {car.fuel}
      </p>

    </div>

    {/* Transmission */}

    <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition hover:border-blue-500 hover:shadow-2xl hover:shadow-blue-500/20">

      <h3 className="text-lg text-slate-400">
        Transmission
      </h3>

      <p className="mt-3 text-2xl font-bold text-white">
        {car.transmission}
      </p>

    </div>

  </div>

</motion.div>

{/* ================= DESCRIPTION ================= */}

<motion.div
  initial={{ opacity: 0, y: 80 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: .8 }}
  viewport={{ once: true }}
  className="mt-24 rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-xl"
>

  <h2 className="mb-6 text-4xl font-bold text-white">
    Description
  </h2>

  <p className="text-lg leading-9 text-slate-300">

    Experience the thrill of driving the BMW M4 Competition,
    engineered for enthusiasts who demand exceptional performance,
    luxurious comfort, and cutting-edge technology.

    Powered by a 3.0-litre TwinPower Turbo engine delivering
    over 500 horsepower, this coupe combines breathtaking
    acceleration with precision handling.

    Premium leather seats, a digital cockpit, adaptive suspension,
    ambient lighting, and intelligent driver assistance systems
    create an unforgettable driving experience whether on city
    roads or open highways.

  </p>

</motion.div>

{/* ================= FEATURES ================= */}

<motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: .8 }}
  viewport={{ once: true }}
  className="mt-24"
>

  <h2 className="mb-10 text-4xl font-bold text-white">
    Premium Features
  </h2>

  <div className="flex flex-wrap gap-4">

    {[
      "Leather Interior",
      "Panoramic Sunroof",
      "Apple CarPlay",
      "Android Auto",
      "Navigation System",
      "Parking Sensors",
      "Rear Camera",
      "Adaptive Cruise Control",
      "Wireless Charging",
      "LED Headlights",
      "Sports Exhaust",
      "Bluetooth",
    ].map((feature) => (

      <span
        key={feature}
        className="rounded-full border border-blue-500/30 bg-blue-500/10 px-6 py-3 text-white transition hover:bg-blue-600"
      >
        {feature}
      </span>

    ))}

  </div>

</motion.div>
{/* ================= IMAGE GALLERY ================= */}

<motion.div
initial={{opacity:0,y:80}}
whileInView={{opacity:1,y:0}}
transition={{duration:.8}}
viewport={{once:true}}
className="mt-24"
>

<h2 className="text-4xl font-bold text-white mb-10">
Gallery
</h2>

<div className="grid lg:grid-cols-2 gap-8">

<div className="overflow-hidden rounded-3xl">

<motion.img

whileHover={{scale:1.05}}

transition={{duration:.6}}

src={bmw}

className="w-full h-[520px] object-cover"

/>

</div>

<div className="grid grid-cols-2 gap-6">

{[bmw2,bmw3,bmw4,bmw].map((img,index)=>(

<motion.div

key={index}

whileHover={{scale:1.05}}

className="overflow-hidden rounded-3xl"

>

<img

src={img}

className="h-60 w-full object-cover"

/>

</motion.div>

))}

</div>

</div>

</motion.div>



{/* ================= VIDEO ================= */}

<motion.div

initial={{opacity:0}}

whileInView={{opacity:1}}

transition={{duration:.8}}

viewport={{once:true}}

className="mt-24"

>

<h2 className="text-4xl font-bold text-white mb-10">

Car Preview

</h2>

<div className="overflow-hidden rounded-3xl border border-white/10">

<video

src={bmwVideo}

controls

autoPlay

loop

muted

className="w-full h-[600px] object-cover"

/>

</div>

</motion.div>



{/* ================= BOOKING CARD ================= */}

<motion.div

initial={{opacity:0,y:60}}

whileInView={{opacity:1,y:0}}

transition={{duration:.8}}

viewport={{once:true}}

className="mt-24"

>

<div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-10">

<div className="grid lg:grid-cols-2 gap-12 items-center">

<div>

<h2 className="text-5xl font-bold text-white">

Book Test Drive

</h2>

<p className="text-slate-400 mt-6 leading-8">

Experience the thrill behind the wheel.

Schedule your exclusive BMW test drive

with our professional sales team.

</p>

<div className="flex gap-6 mt-10">

<button className="btn btn-primary rounded-full px-10">

Book Now

</button>

<button className="btn btn-outline rounded-full">

Contact Dealer

</button>

</div>

</div>

<div>

<img

src={bmw}

className="rounded-3xl shadow-2xl"

/>

</div>

</div>

</div>

</motion.div>
{/* ================= SIMILAR CARS ================= */}

<motion.div
  initial={{ opacity: 0, y: 80 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: .8 }}
  viewport={{ once: true }}
  className="mt-28"
>

<h2 className="text-4xl font-bold text-white mb-12">

Similar Cars

</h2>

<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

{[
{
name:"Audi RS7",
price:"£92,000",
image:bmw2
},
{
name:"Mercedes AMG GT",
price:"£99,000",
image:bmw3
},
{
name:"Porsche 911 Turbo",
price:"£185,000",
image:bmw4
},
].map((car,index)=>(

<motion.div

key={index}

whileHover={{y:-10}}

className="overflow-hidden rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl"

>

<img

src={car.image}

className="h-64 w-full object-cover transition duration-500 hover:scale-110"

/>

<div className="p-6">

<h3 className="text-2xl font-bold text-white">

{car.name}

</h3>

<p className="mt-2 text-blue-400 font-semibold">

{car.price}

</p>

<button className="btn btn-primary w-full rounded-full mt-6">

View Details

</button>

</div>

</motion.div>

))}

</div>

</motion.div>

{/* ================= CUSTOMER REVIEWS ================= */}

<motion.div
initial={{opacity:0}}
whileInView={{opacity:1}}
transition={{duration:.8}}
viewport={{once:true}}
className="mt-28"
>

<h2 className="text-4xl font-bold text-white mb-12">

Customer Reviews

</h2>

<div className="grid lg:grid-cols-3 gap-8">

{[
"Outstanding performance and luxury. Absolutely love this BMW!",
"The driving experience is incredible. Highly recommended.",
"Premium quality, comfortable interior and amazing technology."
].map((review,index)=>(

<div

key={index}

className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"

>

<div className="flex text-yellow-400 text-xl mb-5">

★★★★★

</div>

<p className="text-slate-300 leading-8">

{review}

</p>

<h4 className="mt-6 font-bold text-white">

Customer {index+1}

</h4>

</div>

))}

</div>

</motion.div>

{/* ================= DEALER INFO ================= */}

<motion.div
initial={{opacity:0,y:60}}
whileInView={{opacity:1,y:0}}
transition={{duration:.8}}
viewport={{once:true}}
className="mt-28"
>

<div className="rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl p-10">

<h2 className="text-4xl font-bold text-white">

Dealer Information

</h2>

<div className="grid md:grid-cols-3 gap-10 mt-10">

<div>

<FaMapMarkerAlt className="text-4xl text-blue-500"/>

<h3 className="mt-4 text-white text-xl font-bold">

Location

</h3>

<p className="text-slate-400 mt-2">

CarPoint Luxury Showroom

London, United Kingdom

</p>

</div>

<div>

<FaPhone className="text-4xl text-blue-500"/>

<h3 className="mt-4 text-white text-xl font-bold">

Phone

</h3>

<p className="text-slate-400 mt-2">

+44 1234 567890

</p>

</div>

<div>

<FaEnvelope className="text-4xl text-blue-500"/>

<h3 className="mt-4 text-white text-xl font-bold">

Email

</h3>

<p className="text-slate-400 mt-2">

info@carpoint.com

</p>

</div>

</div>

</div>

</motion.div>

{/* ================= SHARE ================= */}

<div className="mt-20 text-center">

<h3 className="text-white text-3xl font-bold mb-8">

Share This Car

</h3>

<div className="flex justify-center gap-6">

<button className="btn btn-circle bg-blue-600 border-none">
<FaFacebook/>
</button>

<button className="btn btn-circle bg-sky-500 border-none">
<FaTwitter/>
</button>

<button className="btn btn-circle bg-pink-600 border-none">
<FaInstagram/>
</button>

</div>

</div>

{/* ================= CTA ================= */}

<motion.div

initial={{opacity:0,y:60}}

whileInView={{opacity:1,y:0}}

transition={{duration:.8}}

viewport={{once:true}}

className="mt-32 rounded-[40px] bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-500 p-14 text-center"

>

<h2 className="text-5xl font-bold text-white">

Ready To Drive Your Dream Car?

</h2>

<p className="text-white/80 mt-6 text-lg">

Book a test drive today and experience luxury, performance,
and innovation with CarPoint.

</p>

<div className="flex flex-wrap justify-center gap-6 mt-10">

<button className="btn rounded-full px-10 bg-white text-blue-700 border-none hover:bg-slate-200">

Book Test Drive

</button>

<button className="btn btn-outline rounded-full px-10 text-white border-white hover:bg-white hover:text-blue-700">

Explore More Cars

</button>

</div>

</motion.div>
    </section>
  );
};

export default CarDetails;