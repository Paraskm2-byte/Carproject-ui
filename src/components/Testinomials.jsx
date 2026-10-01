import { motion } from "framer-motion";
import { FaStar, FaQuoteLeft } from "react-icons/fa";

const reviews = [
  {
    id: 1,
    name: "Rahul Sharma",
    role: "BMW M4 Owner",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400",
    review:
      "Excellent service! CarPoint helped me find my dream BMW with an easy financing process.",
  },
  {
    id: 2,
    name: "Priya Singh",
    role: "Mercedes Owner",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400",
    review:
      "The showroom experience was amazing. Premium quality cars and professional staff.",
  },
  {
    id: 3,
    name: "Aman Verma",
    role: "Audi Owner",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400",
    review:
      "Highly recommended! Transparent pricing and excellent customer support throughout the purchase.",
  },
];

const stats = [
  {
    number: "1500+",
    title: "Cars Sold",
  },
  {
    number: "50K+",
    title: "Happy Customers",
  },
  {
    number: "120+",
    title: "Premium Brands",
  },
  {
    number: "15+",
    title: "Years Experience",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-slate-900 py-24">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >

          <span className="text-blue-500 uppercase tracking-widest">

            Testimonials

          </span>

          <h2 className="text-5xl font-bold text-white mt-4">

            What Our Customers Say

          </h2>

        </motion.div>

        {/* Reviews */}

        <div className="grid md:grid-cols-3 gap-8 mt-16">

          {reviews.map((item, index) => (

            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="relative rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl p-8"
            >

              <FaQuoteLeft className="text-blue-500 text-4xl mb-6" />

              <p className="text-slate-300 leading-8">
                {item.review}
              </p>

              <div className="flex items-center gap-4 mt-8">

                <img
                  src={item.image}
                  className="w-16 h-16 rounded-full object-cover"
                />

                <div>

                  <h3 className="text-white font-bold">
                    {item.name}
                  </h3>

                  <p className="text-slate-400 text-sm">
                    {item.role}
                  </p>

                  <div className="flex gap-1 mt-2">

                    <FaStar className="text-yellow-400" />
                    <FaStar className="text-yellow-400" />
                    <FaStar className="text-yellow-400" />
                    <FaStar className="text-yellow-400" />
                    <FaStar className="text-yellow-400" />

                  </div>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

        {/* Statistics */}

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-24">

          {stats.map((item, index) => (

            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="rounded-3xl bg-blue-600 p-8 text-center"
            >

              <h2 className="text-5xl font-bold text-white">

                {item.number}

              </h2>

              <p className="text-blue-100 mt-3">

                {item.title}

              </p>

            </motion.div>

          ))}

        </div>

        {/* CTA */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-24 rounded-[40px] bg-gradient-to-r from-blue-600 to-cyan-500 p-16 text-center"
        >

          <h2 className="text-5xl font-bold text-white">

            Ready To Drive Your Dream Car?

          </h2>

          <p className="text-blue-100 mt-6 text-lg">

            Browse hundreds of premium vehicles and book your test drive today.

          </p>

          <button className="btn bg-white text-blue-600 rounded-full border-none mt-10 px-8">

            Explore Cars

          </button>

        </motion.div>

      </div>

    </section>
  );
};

export default Testimonials;