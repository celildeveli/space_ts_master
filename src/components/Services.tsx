import { FaBroadcastTower, FaGlobe, FaRegMoon, FaRocket } from "react-icons/fa";
import { GiSatelliteCommunication } from "react-icons/gi";
import { MdSatellite } from "react-icons/md";
import wave2 from "../assets/wave2.gif";
import { motion } from "framer-motion";

export interface SERVICE {
  title: string;
  description: string;
  icon: JSX.Element;
  aosDelay: string;
}

const ServiceData: SERVICE[]  = [
  {
    title: "Real-Time Universe Monitoring", 
    description: "Continuously monitors the universe by integrating NASA’s star maps with real-time data from observatories around the world.",
    icon: <FaRocket />,
    aosDelay: "300",
  },
  {
    title: "Rapid Change Detection",
    description: "Detects changes invisible to the human eye within seconds; quickly identifies new planets, systems, or potential signs of life.",
    icon: <MdSatellite />,
    aosDelay: "400",
  },
  {
    title: "Data Integration and Analysis",
    description: "Combines astronomical data from multiple sources into a single algorithm to generate meaningful insights.",
    icon: <FaGlobe />,
    aosDelay: "500",
  },
  {
    title: "3D Modeling",
    description: "Uses collected data to reconstruct planets’ surface changes, atmospheric movements, and light reflections in three dimensions.",
    icon: <FaBroadcastTower />,
    aosDelay: "600",
  },
  {
    title: "Life Potential Analysis",
    description: "Evaluates a planet’s potential to host life by analyzing its changes over time and presents findings to researchers.",
    icon: <FaRegMoon />,
    aosDelay: "700",
  },
  {
    title: "Shared Observational Intelligence",
    description: "Unifies all observatory and NASA data into a single AI-driven consciousness, creating a collaborative and shareable observation infrastructure.",
    icon: <GiSatelliteCommunication />,
    aosDelay: "800",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0 },
};

const Services = () => {
  return (
    <div 
      id="features"
      className="pt-4 pb-10 p-8 text-white bg-black relative z-50"
    >
      <div className="min-h-[400px]">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7 relative mt-10 z-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          {ServiceData.map((services, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="flex flex-col items-center gap-3 bg-sky-900/60 p-8 rounded-md w-full cursor-pointer"
            >
              <div className="text-5xl">{services.icon}</div>
              <h1 className="text-1xl md:text-2xl text-center">{services.title}</h1>
              <p className="text-sm text-center">{services.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <img
          src={wave2}
          alt="wave"
          className="hidden md:flex md:h-[300px] w-full object-cover mix-blend-screen translate-y-3 relative z-[0]"
        />
      </div>
    </div>
  );
};

export default Services;

//   return (
//     <div className="pt-4 pb-10 p-8 text-white bg-black relative z-50">
//       <div className="min-h-[400px]">
//         <motion.div
//           className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7 relative mt-10 z-10"
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true, amount: 0.3 }}
//         >
//           {ServiceData.map((services, index) => (
//             <motion.div
//               key={index}
//               variants={itemVariants}
//               className="flex flex-col items-center gap-3 bg-sky-900/60 p-8 rounded-md w-full"
//             >
//               <div className="text-5xl">{services.icon}</div>
//               <h1 className="text-1xl md:text-2xl">{services.title}</h1>
//               {/* <p className="text-sm">{services.content}</p> */}
//               <p className="text-sm text-center">{services.description}</p>
//             </motion.div>
//           ))}
//         </motion.div>

//         <img
//           src={wave2}
//           alt="wave"
//           className="hidden md:flex md:h-[300px] w-full object-cover mix-blend-screen translate-y-3 relative z-[0]"
//         />
//       </div>
//     </div>
//   );
// };