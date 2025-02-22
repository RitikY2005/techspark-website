import { motion } from 'framer-motion';
import CyberLayout from '../components/CyberLayout';

function Team() {
  const teamMembers = {
    inCharge: [
      { name: "Omkar Mohite", role: "Teacher In-Charge", image: "photos/core/omkar.png" }
    ],
    chairpersons: [
      { name: "Gaurav Mehra", role: "Chairperson", image: "photos/core/Gaurav_CP.png" }
    ],
    deputyChairperson: [
      { name: "Himanshu Sharma", role: "Deputy Chairperson", image: "photos/core/himanshu_dcp.png" }
    ],
    viceChairpersons: [
      { name: "Keyur Rathod", role: "Vice Chairperson", image: "photos/core/keyur_vcp.png" },
      { name: "Meet Dhruv", role: "Vice Chairperson", image: "photos/core/Meet_VCP.png" },
      { name: "Abhishek Yadav", role: "Vice Chairperson", image: "photos/core/Abh_VCP.png" },
      { name: "Swayam Parekh", role: "Vice Chairperson", image: "photos/core/Swayam_VCP.png" }
    ],
    departments: {
      content: [
        { name: "Anshika Pangotra", role: "Content Head", image: "photos/core/Anshika_HOD_Content.png" }
      ],
      creatives: [
        { name: "Simran Gupta", role: "Creatives Head", image: "photos/core/Simran_HOD_Creatives.png" }
      ],
      events: [
        { name: "Tisha Karkar", role: "Events Head", image: "photos/core/Tisha_HOD_Events.png" },
        { name: "Riya Bishwakarma", role: "Events Head", image: "photos/core/Riya_HOD_Events.png" }
      ],
      gaming: [
        { name: "Mohit Deore", role: "Gaming & Sports Head", image: "photos/core/Mohit_HOD_GAS.png" },
        { name: "Hussain Suleman", role: "Gaming & Sports Head", image: "photos/core/Hussain_HOD_GAS.png" }
      ],
      graphics: [
        { name: "Lavya Triwadi", role: "Graphics Head", image: "photos/core/Lavya_HOD_Graphics.png" }
      ],
      logistics: [
        { name: "Sejal Kotak", role: "Logistics Head", image: "photos/core/Sejal_HOD_LOG.png" }
      ],
      marketing: [
        { name: "Suman Giri", role: "Marketing Head", image: "photos/core/Suman_HOD_Marketing.png" }
      ],
      pr: [
        { name: "Ashika Ashok", role: "Public Relations Head", image: "photos/core/Ashika_HOD_PR.png" }
      ],
      productions: [
        { name: "Ashwini Vishwakarma", role: "Productions Head", image: "photos/core/Ashwin_HOD_PROD.png" }
      ],
      security: [
        { name: "Aditya Vishwakarma", role: "Security Head", image: "photos/core/Aditya_HOD_SEC.png" }
      ],
      technical: [
        { name: "Siddh Vyas", role: "Technical Head", image: "photos/core/Siddh_HOD_TECH.png" }
      ]
    }
  };

  return (
    <CyberLayout>
      <div className="min-h-screen px-4 sm:px-6 lg:px-8 py-20 text-white">
        <div className="container mx-auto max-w-7xl flex flex-col items-center">
          {/* Teacher In-Charge Section */}
          <div className="w-full flex flex-col items-center mb-20">
            <motion.h1
              // className="text-5xl md:text-6xl text-center mb-12 font-bold text-slate-400"
              className="text-5xl md:text-6xl text-center mb-12 font-bold text-[#2a3135]"
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
            >
              TEACHER IN-CHARGE
            </motion.h1>
            
            <div className="w-full max-w-4xl flex justify-center">
              {teamMembers.inCharge.map((member, index) => (
                <motion.div
                key={index}
                className="w-[240px] sm:w-[280px] lg:w-[320px] h-[360px] sm:h-[400px] lg:h-[450px] 
                           flex flex-col items-center justify-center 
                           text-center p-6 sm:p-8 bg-black/80 backdrop-blur-sm rounded-xl 
                           border border-cyber-blue/30 shadow-[0_0_15px_rgba(0,243,255,0.2)] 
                           hover:shadow-[0_0_30px_rgba(0,243,255,0.4)]
                           transition-all duration-700 hover:-translate-y-2
                           group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <div className="relative w-full h-[240px] sm:h-[280px] lg:h-[320px] overflow-hidden flex items-center">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover 
                               group-hover:border-cyber-pink/50 
                               transition-all duration-700 group-hover:scale-105 rounded-lg"
                  />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-cyber-blue mt-4 
                              group-hover:text-cyber-pink transition-colors duration-700">
                  {member.name}
                </h3>
                {/* <p className="text-gray-300 group-hover:text-cyber-blue/80 transition-colors duration-700">
                    {member.role}
                  </p> */}
              </motion.div>
              ))}
            </div>
          </div>

          {/* Chairperson Section */}
          <div className="w-full flex flex-col items-center mb-20">
            <motion.h1
              className="text-5xl md:text-6xl text-center mb-12 font-bold text-[#2a3135]"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
            >
              CHAIRPERSON
            </motion.h1>
            <div className="w-full max-w-4xl flex justify-center">
              {teamMembers.chairpersons.map((member, index) => (
                <motion.div
                key={index}
                className="w-[240px] sm:w-[280px] lg:w-[320px] h-[360px] sm:h-[400px] lg:h-[450px] 
                           flex flex-col items-center justify-center 
                           text-center p-6 sm:p-8 bg-black/80 backdrop-blur-sm rounded-xl 
                           border border-cyber-blue/30 shadow-[0_0_15px_rgba(0,243,255,0.2)] 
                           hover:shadow-[0_0_30px_rgba(0,243,255,0.4)]
                           transition-all duration-700 hover:-translate-y-2
                           group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <div className="relative w-full h-[240px] sm:h-[280px] lg:h-[320px] overflow-hidden flex items-center">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover 
                               group-hover:border-cyber-pink/50 
                               transition-all duration-700 group-hover:scale-105 rounded-lg"
                  />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-cyber-blue mt-4 
                              group-hover:text-cyber-pink transition-colors duration-700">
                  {member.name}
                </h3>
              </motion.div>              
              ))}
            </div>
          </div>

          {/* Deputy Chairperson Section */}
          <div className="w-full flex flex-col items-center mb-20">
            <motion.h1
              className="text-5xl md:text-6xl text-center mb-12 font-bold text-[#2a3135]"
              initial={{ opacity: 1, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
            >
              DEPUTY CHAIRPERSON
            </motion.h1>
            <div className="w-full max-w-4xl flex justify-center">
              {teamMembers.deputyChairperson.map((member, index) => (
                <motion.div
                key={index}
                className="w-[240px] sm:w-[280px] lg:w-[320px] h-[360px] sm:h-[400px] lg:h-[450px] 
                           flex flex-col items-center justify-center 
                           text-center p-6 sm:p-8 bg-black/80 backdrop-blur-sm rounded-xl 
                           border border-cyber-blue/30 shadow-[0_0_15px_rgba(0,243,255,0.2)] 
                           hover:shadow-[0_0_30px_rgba(0,243,255,0.4)]
                           transition-all duration-700 hover:-translate-y-2
                           group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <div className="relative w-full h-[240px] sm:h-[280px] lg:h-[320px] overflow-hidden flex items-center">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover 
                               group-hover:border-cyber-pink/50 
                               transition-all duration-700 group-hover:scale-105 rounded-lg"
                  />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-cyber-blue mt-4 
                              group-hover:text-cyber-pink transition-colors duration-700">
                  {member.name}
                </h3>
              </motion.div>
              
              ))}
            </div>
          </div>

          {/* Vice Chairperson Section */}
          <div className="w-full flex flex-col items-center mb-20">
            <motion.h1
              className="text-5xl md:text-6xl text-center mb-12 font-bold text-[#2a3135]"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
            >
              VICE CHAIRPERSON
            </motion.h1>
            <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-24 place-items-center">
              {teamMembers.viceChairpersons.map((member, index) => (
                <motion.div
                  key={index}
                  className="w-[240px] sm:w-[280px] lg:w-[320px] h-[360px] sm:h-[400px] lg:h-[450px] 
                             flex flex-col items-center justify-center 
                             text-center p-6 sm:p-8 bg-black/80 backdrop-blur-sm rounded-xl 
                             border border-cyber-blue/30 shadow-[0_0_15px_rgba(0,243,255,0.2)] 
                             hover:shadow-[0_0_30px_rgba(0,243,255,0.4)]
                             transition-all duration-700 hover:-translate-y-2
                             group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                >
                  <div className="relative w-full h-[240px] sm:h-[280px] lg:h-[320px] overflow-hidden flex items-center">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover 
                                 group-hover:border-cyber-pink/50 
                                 transition-all duration-700 group-hover:scale-105 rounded-lg"
                    />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-cyber-blue mt-4 
                                group-hover:text-cyber-pink transition-colors duration-700">
                    {member.name}
                  </h3>
                </motion.div>
                // <motion.div
                //   key={index}
                //   className="w-full max-w-[280px] text-center p-8 bg-black/80 backdrop-blur-sm rounded-xl 
                //             border border-cyber-blue/30 
                //             shadow-[0_0_15px_rgba(0,243,255,0.2)] 
                //             hover:shadow-[0_0_30px_rgba(0,243,255,0.4)]
                //             transition-all duration-700 hover:-translate-y-2
                //             group"
                //   initial={{ opacity: 0, y: 20 }}
                //   animate={{ opacity: 1, y: 0 }}
                //   transition={{ duration: 0.8, delay: index * 0.2 }}
                // >
                //   <div className="relative overflow-hidden">
                //     <img 
                //       src={member.image} 
                //       alt={member.name} 
                //       className="w-full h-auto object-cover mx-auto mb-4
                //                group-hover:border-cyber-pink/50 
                //                transition-all duration-700
                //                group-hover:scale-105"
                //     />
                //   </div>
                //   <h3 className="text-2xl font-bold text-cyber-blue mb-2 
                //                group-hover:text-cyber-pink transition-colors duration-700">
                //     {member.name}
                //   </h3>
                //   {/* <p className="text-gray-300 group-hover:text-cyber-blue/80 transition-colors duration-700">
                //     {member.role}
                //   </p> */}
                //   {/* <p className="text-gray-400 group-hover:text-gray-100 transition-colors duration-700 font-bold">
                //       {member.role}
                //     </p> */}
                // </motion.div>
              ))}
            </div>
          </div>

          {/* Departments Section */}
          <motion.h1
            className="text-5xl md:text-6xl text-center mb-20 font-bold text-[#2a3135]"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
          >
            HEAD OF DEPARTMENTS
          </motion.h1>
          {Object.entries(teamMembers.departments).map(([dept, members], deptIndex) => (
            <div key={dept} className="w-full flex flex-col items-center mb-20">
              <motion.h2 
                className="text-3xl text-center mb-12 font-bold text-[#2a3135]"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2 }}
              >
                {dept === 'pr' ? 'PUBLIC RELATIONS' : 
                 dept === 'gaming' ? 'GAMING & SPORTS' :
                 dept.toUpperCase()}
              </motion.h2>
              <div className={`w-full max-w-7xl ${
                members.length === 1 
                  ? 'flex justify-center'
                  : 'grid grid-cols-1 md:grid-cols-2 gap-8 place-items-center'
              }`}>
                {members.map((member, index) => (
                  <motion.div
                  key={index}
                  className="w-[240px] sm:w-[280px] lg:w-[320px] h-[360px] sm:h-[400px] lg:h-[450px] 
                             flex flex-col items-center justify-center 
                             text-center p-6 sm:p-8 bg-black/80 backdrop-blur-sm rounded-xl 
                             border border-cyber-blue/30 shadow-[0_0_15px_rgba(0,243,255,0.2)] 
                             hover:shadow-[0_0_30px_rgba(0,243,255,0.4)]
                             transition-all duration-700 hover:-translate-y-2
                             group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                >
                  <div className="relative w-full h-[240px] sm:h-[280px] lg:h-[320px] overflow-hidden flex items-center">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover 
                                 group-hover:border-cyber-pink/50 
                                 transition-all duration-700 group-hover:scale-105 rounded-lg"
                    />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-cyber-blue mt-4 
                                group-hover:text-cyber-pink transition-colors duration-700">
                    {member.name}
                  </h3>
                </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </CyberLayout>
  );
}

export default Team; 