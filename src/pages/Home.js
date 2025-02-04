import { motion } from "framer-motion";
// import { Link } from "react-router-dom";center
import CyberLayout from "../components/CyberLayout";
import Countdown from 'react-countdown';

function Home() {
   // Countdown renderer function
   const renderer = ({ days, hours, minutes, seconds }) => (
    <motion.div
      className="flex justify-center items-center space-x-6 text-2xl sm:text-3xl md:text-4xl text-gunmetal font-mangrove tracking-widest"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <div className="flex flex-col items-center">
        <span>{days}</span>
        <span className="text-sm">Days</span>
      </div>
      <div className="flex flex-col items-center">
        <span>{hours}</span>
        <span className="text-sm">Hours</span>
      </div>
      <div className="flex flex-col items-center">
        <span>{minutes}</span>
        <span className="text-sm">Minutes</span>
      </div>
      <div className="flex flex-col items-center">
        <span>{seconds}</span>
        <span className="text-sm">Seconds</span>
      </div>
    </motion.div>
  );


  return (
    <CyberLayout>
      {/* Hero Section */}
      {/* <div className="relative min-h-screen flex flex-col justify-center items- px-4 sm:px-8"> */}
      <div className="relative min-h-[50vh] sm:min-h-screen flex flex-col  justify-center items-center">
        {/* Animated Background Elements */}
        <motion.div
          className="flex md:hidden absolute  justify-center items-center w-[250px] sm:w-[300px] md:w-[600px] h-[250px] sm:h-[300px] md:h-[600px] opacity-5 z-10"
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        >
          <img
            src="/techspark-logo.png"
            alt="TechSpark Logo Background"
            className="w-full h-full"
          />
        </motion.div>

        {/* Floating Images - Hidden on small screens */}
        <motion.div
          className="hidden sm:block absolute top-20 -left-10 w-20 sm:w-40 h-20 sm:h-40"
          animate={{
            y: [0, 20, 0],
            rotate: [0, 10, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <img
            src="/floating-image1.png"
            alt="Tech Element 1"
            className="w-full h-full object-contain"
          />
        </motion.div>

        <motion.div
          className="hidden sm:block absolute bottom-40 right-20 w-16 sm:w-32 h-16 sm:h-32"
          animate={{
            y: [0, -30, 0],
            rotate: [0, -15, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        >
          <img
            src="/floating-image2.png"
            alt="Tech Element 2"
            className="w-full h-full object-contain"
          />
        </motion.div>

        {/* Main Content */}
        <motion.div
          className="relative z-20 text-center px-4 sm:px-0"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-3xl sm:text-6xl md:text-7xl mb-4 sm:mb-6 text-gunmetal font-spark 
                       tracking-wider leading-tight"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            TECHSPARK'25
          </motion.h1>

          <motion.p
            className="text-xl sm:text-2xl md:text-3xl text-gunmetal max-w-2xl mx-auto 
                       leading-relaxed mb-4 sm:mb-8 font-tech tracking-wide"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            THE SILVER METAMORPHOSIS
          </motion.p>

          <motion.p
            className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-8 sm:mb-12 text-gunmetal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            24th and 25th February 2025
          </motion.p>

             {/* Countdown Timer Section */}
             <div className="text-center mt-12 sm:mt-16">
            <motion.h2
              className="text-xl sm:text-2xl md:text-4xl text-gunmetal mb-4 font-mangrove"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Countdown
            </motion.h2>

            {/* Countdown Component */}
            <Countdown
              date={new Date("2025-02-24T10:00:00").getTime()}
              renderer={renderer}
            />
          </div>

          {/* <Link to="/events">
            <motion.button
            
              className="w-full sm:w-auto mt-4 sm:mt-8 px-6 sm:px-10 py-3 sm:py-4 text-base sm:text-lg 
                        bg-cyber-blue text-gunmetal font-extrabold rounded-full 
                        hover:-translate-y-1 transition-transform duration-200 shadow-lg
                        border border-cyber-blue/30 hover:border-white
                        hover:shadow-[0_0_15px_rgba(0,243,255,0.3)] text-[#cdcfdb]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Register Now
            </motion.button>
          </Link> */}
        </motion.div>
      </div>

      {/* Features Section */}
      <div className="py-12 sm:py-20 px-4 sm:px-8 bg-black/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 sm:gap-12">
          {[
            {
              title: "Technical Events",
              description: "Hackathons, Coding Competitions, and Escape rooms",
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="40px"
                  viewBox="0 -960 960 960"
                  width="40px"
                  fill="red"
                >
                  <path d="M146.67-200q-27 0-46.84-20.17Q80-240.33 80-266.67v-426.66q0-27 19.83-46.84Q119.67-760 146.67-760h666.66q27 0 46.84 19.83Q880-720.33 880-693.33v426.66q0 26.34-19.83 46.5Q840.33-200 813.33-200H146.67Zm0-66.67h666.66v-426.66H146.67v426.66Zm160-56.66h346.66V-390H306.67v66.67ZM202-446.67h66.67v-66.66H202v66.66Zm122.67 0h66.66v-66.66h-66.66v66.66Zm122 0h66.66v-66.66h-66.66v66.66Zm122.66 0H636v-66.66h-66.67v66.66Zm122 0H758v-66.66h-66.67v66.66ZM202-570h66.67v-66.67H202V-570Zm122.67 0h66.66v-66.67h-66.66V-570Zm122 0h66.66v-66.67h-66.66V-570Zm122.66 0H636v-66.67h-66.67V-570Zm122 0H758v-66.67h-66.67V-570ZM146.67-266.67v-426.66 426.66Z" />
                </svg>
              ),
            },
            {
              title: "Cultural Events",
              description: "Treasure hunt, Debate and Trivia",
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="40px"
                  viewBox="0 -960 960 960"
                  width="40px"
                  fill="green"
                >
                  <path d="M480-283.33q62.97 0 107.82-43 44.85-43 47.51-105.67H324q3.33 62.67 48.18 105.67t107.82 43ZM283.33-602h148q0-30.33-21.69-52.17Q387.94-676 357.47-676q-30.47 0-52.3 21.74-21.84 21.74-21.84 52.26ZM528-602h148.67q0-30.33-21.74-52.17Q633.19-676 602.67-676q-30.8 0-52.74 21.74Q528-632.52 528-602ZM480-80q-75 0-140.5-28.5t-114-77q-48.5-48.5-77-114T120-439.33V-880h720v440.67q0 74.33-28.5 139.83-28.5 65.5-77 114t-114 77Q555-80 480-80Zm0-66.67q122 0 207.67-85.33 85.66-85.33 85.66-207.33v-374H186.67v374q0 122 85.66 207.33Q358-146.67 480-146.67ZM480-480Z" />
                </svg>
              ),
            },
            {
              title: "Sports Events",
              description: "Football and Chess Tournaments",
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="40px"
                  viewBox="0 -960 960 960"
                  width="40px"
                  fill="white"
                >
                  <path d="m410.67-154 14.66-57.33q4.34-13.67 13.5-23.17Q448-244 462-245.33l130-10q14.33-1.34 25.67 5.66Q629-242.67 634-230l14 38.67q41-25 73.67-58.17 32.66-33.17 53.66-75.17L764.67-332q-12.34-8-17.34-19.83-5-11.84-2.66-24.84L774-505.33q2.33-13.34 12.5-21 10.17-7.67 22.83-9-5-25.67-13.16-50.84Q788-611.33 775.33-636q-8.33 5.67-18.5 5.5-10.16-.17-19.5-6.83l-110-65.34q-11-7-16-19.33-5-12.33-2.66-26l8.66-35.33Q585-798.67 550.5-806q-34.5-7.33-70.5-7.33-15.33 0-30.33.83-15 .83-30.34 3.17L452-738.67q5.67 12.67 2.17 26.34-3.5 13.66-14.84 23l-97.33 86q-11.33 7.66-25.17 9-13.83 1.33-26.16-6.34l-94-56q-25 40-37.5 84.84-12.5 44.83-12.5 91.83 0 17.33 4 53.33l92-8.66q14-2 26.16 5.16Q281-423 286.67-409.33l48 120q5.66 12.66 3.16 25-2.5 12.33-13.16 21.66l-38 34.67q27.66 20 58.83 33.33 31.17 13.34 65.17 20.67Zm76.66-179.33Q473-332 461.67-339q-11.34-7-17-19.67l-58-130q-5-12.66-.84-25.66 4.17-13 15.5-21l106-92Q517-637 530.67-637q13.66 0 26 7l116 69.33q11.66 7 17 19.34 5.33 12.33 2.33 26l-30.67 136.66q-3.66 12.34-13.66 21.17-10 8.83-21.67 10.17l-138.67 14ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z" />
                </svg>
              ),
            },
            {
              title: "Gaming Events",
              description: "E-Sports Tournaments and Gaming Competitions",
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="40px"
                  viewBox="0 -960 960 960"
                  width="40px"
                  fill="yellow"
                >
                  <path d="M189-160q-60 0-102.5-43T42-307q0-9 1-18t3-18l84-336q14-54 57-87.5t98-33.5h390q55 0 98 33.5t57 87.5l84 336q2 9 3.5 18.5T919-306q0 61-43.5 103.5T771-160q-42 0-78-22t-54-60l-28-58q-5-10-15-15t-21-5H385q-11 0-21 5t-15 15l-28 58q-18 38-54 60t-78 22Zm2.78-66.67q22.55 0 41.5-11.98Q252.22-250.63 262-271l28-57q13.67-27.67 39-43.17t56-15.5h190q30.67 0 56 16T671-328l28 57q9.78 20.37 28.72 32.35 18.95 11.98 41.45 11.98 33.16 0 57.16-22.5t25-55.83q0-2.33-2.66-22.33l-84-335q-7.67-31-32.27-51t-57.4-20H285q-32.47 0-57.4 19.66-24.93 19.67-32.27 51.34l-84 335q-1.33 4.66-2.66 21.33 0 33.66 24.34 56.5 24.33 22.83 58.77 22.83Zm348.34-300q14.21 0 23.71-9.61 9.5-9.62 9.5-23.84 0-14.21-9.61-23.71-9.62-9.5-23.84-9.5-14.21 0-23.71 9.61-9.5 9.62-9.5 23.84 0 14.21 9.61 23.71 9.62 9.5 23.84 9.5Zm80-80q14.21 0 23.71-9.61 9.5-9.62 9.5-23.84 0-14.21-9.61-23.71-9.62-9.5-23.84-9.5-14.21 0-23.71 9.61-9.5 9.62-9.5 23.84 0 14.21 9.61 23.71 9.62 9.5 23.84 9.5Zm0 160q14.21 0 23.71-9.61 9.5-9.62 9.5-23.84 0-14.21-9.61-23.71-9.62-9.5-23.84-9.5-14.21 0-23.71 9.61-9.5 9.62-9.5 23.84 0 14.21 9.61 23.71 9.62 9.5 23.84 9.5Zm80-80q14.21 0 23.71-9.61 9.5-9.62 9.5-23.84 0-14.21-9.61-23.71-9.62-9.5-23.84-9.5-14.21 0-23.71 9.61-9.5 9.62-9.5 23.84 0 14.21 9.61 23.71 9.62 9.5 23.84 9.5Zm-360.04 63.34q11.59 0 19.09-7.56 7.5-7.55 7.5-19.11v-43.33H410q11.56 0 19.11-7.58 7.56-7.58 7.56-19.17 0-11.59-7.56-19.09-7.55-7.5-19.11-7.5h-43.33V-630q0-11.56-7.58-19.11-7.58-7.56-19.17-7.56-11.59 0-19.09 7.56-7.5 7.55-7.5 19.11v43.33H270q-11.56 0-19.11 7.58-7.56 7.58-7.56 19.17 0 11.59 7.56 19.09 7.55 7.5 19.11 7.5h43.33V-490q0 11.56 7.58 19.11 7.58 7.56 19.17 7.56ZM480-480Z" />
                </svg>
              ),
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              className="text-center p-6 sm:p-8 rounded-xl bg-black/40 backdrop-blur-sm
                         border border-cyber-blue/30 shadow-[0_0_15px_rgba(0,243,255,0.2)]
                         hover:shadow-[0_0_30px_rgba(0,243,255,0.4)]
                         transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* <div className="text-3xl sm:text-4xl mb-4">{feature.icon}</div> */}
              <div className="flex items-center justify-center text-3xl sm:text-4xl mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-cyber-blue">
                {feature.title}
              </h3>
              <p className="text-sm sm:text-base text-white">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </CyberLayout>
  );
}

export default Home;
