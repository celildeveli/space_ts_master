import { motion } from "framer-motion";

const Hero = () => {
  return (
    <>
      <div className="text-white">
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-6 h-screen">
          <div className="flex flex-col items-start justify-center ml-5 md:ml-10">
            <motion.h1
              initial={{ opacity: 0, y: -100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{
                duration: 0.8,
                ease: [0, 0.71, 0.2, 1.01],
              }}
              className="text-4xl md:text-5xl font-bold"
            >
             "Intelligence Watching the Infinite"
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: -100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{
                duration: 0.8,
                delay: 0.3,
                ease: [0, 0.71, 0.2, 1.01],
              }}
              className="text-xl mt-5"
            >
             In the depths of the universe, something happens at every moment…
            </motion.p>
            <motion.div
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            >
              <button className="py-2 px-4 rounded-md mt-5 font-normal text-md bg-blue-600 hover:bg-blue-500 transition-all duration-300 hover:border-0" >
                <a href="https://www.spaceappschallenge.org/2025/find-a-team/stellarnovax/?tab=details">
                     Learn More
                </a>
             
              </button>
            </motion.div>
          </div>

          <div></div>
        </div>
      </div>

      <div className="absolute -bottom-32 md:-bottom-20 w-full z-30 bg-gradient-to-b from-transparent from-10% to-black to-90% h-[20%] sm:h-[50px] md:[60px]"></div>
    </>
  );
};

export default Hero;
