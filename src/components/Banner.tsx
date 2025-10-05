// Banner.tsx
import sateliteImg from "../assets/6.png";
import { motion } from "framer-motion";

interface DATA {
  image: string;
  subTitle: string;
  title: string;
  description: string;
}

const data: DATA[] = [
  {
    image: sateliteImg,
    subTitle: "Our Project",
    title: "Before",
    description:
      "A calm moment in the universe…  Our AI system is ready to analyze this image. No new objects have entered the frame yet; the AI scans every pixel to detect potential planets, stars, or moving celestial bodies.",
  },
];

const Banner = () => {
  return (
    <section id="galaxy" className="bg-black text-white pb-12 pt-12">
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        transition={{
          duration: 0.8,
          delay: 0.3,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        className="container"
      >
        {data.map((items, index) => (
          <div
            key={index}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center"
          >
            {/* Görsel */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <img
                src={items.image}
                alt={items.title}
                className="w-full sm:w-[80%] mx-auto max-h-[350px] object-cover rounded-lg"
              />
            </motion.div>

            {/* Yazılar */}
            <div className="space-y-6 xl:pr-36 p-4 border-r-2 border-b-2 border-r-sky-800 border-b-sky-800">
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-sky-800 uppercase"
              >
                {items.subTitle}
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="uppercase text-5xl"
              >
                {items.title}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
              >
                {items.description}
              </motion.p>
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
              >
                <button className="bg-blue-400 text-white hover:bg-blue-500 px-4 py-1 rounded-md duration-200">
                  View All
                </button>
              </motion.div>
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default Banner;
