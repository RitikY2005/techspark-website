import { motion } from 'framer-motion';
import CyberLayout from '../components/CyberLayout';

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
  };

  return (
    <CyberLayout>
      <div className="min-h-screen px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-2xl mx-auto">
          <motion.h1
            className="text-5xl md:text-6xl text-center mb-12 font-bold text-gunmetal"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            CONTACT US
          </motion.h1>

          <motion.form
            className="flex flex-col gap-6 bg-black/60 backdrop-blur-sm p-8 rounded-xl 
                       border border-cyber-blue/30 shadow-[0_0_15px_rgba(0,243,255,0.2)]"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <input
              type="text"
              placeholder="Name"
              required
              className="p-4 bg-black text-white placeholder-gray-400 border-2 border-cyber-blue/30 
                         rounded-lg focus:outline-none focus:border-cyber-blue focus:shadow-[0_0_10px_rgba(0,243,255,0.3)]
                         transition-all duration-300"
            />
            <input
              type="email"
              placeholder="Email"
              required
              className="p-4 bg-black text-white placeholder-gray-400 border-2 border-cyber-blue/30 
                         rounded-lg focus:outline-none focus:border-cyber-blue focus:shadow-[0_0_10px_rgba(0,243,255,0.3)]
                         transition-all duration-300"
            />
            <input
              type="tel"
              placeholder="Contact Number"
              required
              className="p-4 bg-black text-white placeholder-gray-400 border-2 border-cyber-blue/30 
                         rounded-lg focus:outline-none focus:border-cyber-blue focus:shadow-[0_0_10px_rgba(0,243,255,0.3)]
                         transition-all duration-300"
            />
            <textarea
              placeholder="Your message..."
              required
              className="p-4 bg-black text-white placeholder-gray-400 border-2 border-cyber-blue/30 
                         rounded-lg min-h-[150px] resize-y focus:outline-none focus:border-cyber-blue 
                         focus:shadow-[0_0_10px_rgba(0,243,255,0.3)] transition-all duration-300"
            />
            <motion.button
              type="submit"
              className="px-8 py-4 bg-cyber-blue text-black font-bold rounded-lg
                         border border-cyber-blue/30 hover:border-white
                         hover:shadow-[0_0_15px_rgba(0,243,255,0.3)]
                         transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              SEND MESSAGE
            </motion.button>
          </motion.form>
        </div>
      </div>
    </CyberLayout>
  );
}

export default Contact; 