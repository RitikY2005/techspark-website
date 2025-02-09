import { motion } from 'framer-motion';
import CyberLayout from '../components/CyberLayout';
import { useState } from 'react';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref as sRef, push, set } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCcJAsPTafPBMKklrMdgGVWCmRIVGb6M6o",
  authDomain: "techspark-9a6c1.firebaseapp.com",
  databaseURL: "https://techspark-9a6c1-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "techspark-9a6c1",
  storageBucket: "techspark-9a6c1.appspot.com",
  messagingSenderId: "231294777537",
  appId: "1:231294777537:web:d7b3db631e9c0f33953c40",
  measurementId: "G-P3X6NQQQDD"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

function Contact() {
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // Add form submission logic here
  // };

  const [formData, setFormData] = useState({ name: '', email: '', contact: '', message: '' });
  const [errors, setErrors] = useState({});

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateContact = (contact) => {
    const contactRegex = /^\+?[0-9]{7,15}$/;
    return contactRegex.test(contact);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'contact') {
      if (!/^[0-9]*$/.test(value) || value.length > 10) return;
      setFormData({ ...formData, contact: value });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const getCurrentDateTime = () => {
    const now = new Date();
    const date = `${now.getDate().toString().padStart(2, '0')}/${(now.getMonth() + 1).toString().padStart(2, '0')}/${now.getFullYear()}`;
    const time = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}:${now.getSeconds().toString().padStart(2, '0')}`;
    return `${date} ${time}`;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    let newErrors = {};
    const timestamp = getCurrentDateTime();

    if (!validateEmail(formData.email)) {
      newErrors.email = 'Please provide a valid email';
    }

    if (!validateContact(formData.contact)) {
      newErrors.contact = 'Invalid contact number';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      const newRegistrationRef = push(sRef(db, 'contact'));
      await set(newRegistrationRef, {
        timestamp,
        name:formData.name,
        phoneNumber:formData.contact,
        email:formData.email,
        message:formData.message
      });
      
      //alert("We will contact you soon!");
      setFormData({ name: '', email: '', contact: '', message: '' } );
    } catch (error) {
      console.error("Error adding document: ", error);
    }
    //document.getElementById("contact-form").reset();


    setErrors({});
    //console.log('Form submitted:', formData);
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
        name="name"
        placeholder="Name"
        required
        value={formData.name}
        onChange={handleChange}
        className="p-4 bg-black text-white placeholder-gray-400 border-2 border-cyber-blue/30 
                   rounded-lg focus:outline-none focus:border-cyber-blue focus:shadow-[0_0_10px_rgba(0,243,255,0.3)]
                   transition-all duration-300"
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        required
        value={formData.email}
        onChange={handleChange}
        className="p-4 bg-black text-white placeholder-gray-400 border-2 border-cyber-blue/30 
                   rounded-lg focus:outline-none focus:border-cyber-blue focus:shadow-[0_0_10px_rgba(0,243,255,0.3)]
                   transition-all duration-300"
      />
      {errors.email && <p className="text-red-600 text-bold text-sm mt-1"><b>{errors.email}</b></p>}
      <div className="flex items-center gap-2 p-4 bg-black text-white border-2 border-cyber-blue/30 rounded-lg focus-within:border-cyber-blue focus-within:shadow-[0_0_10px_rgba(0,243,255,0.3)] transition-all duration-300">
        <span className="text-gray-400">+91</span>
        <input
          type="tel"
          name="contact"
          placeholder="Contact number"
          required
          value={formData.contact}
          onChange={handleChange}
          className="bg-transparent flex-1 outline-none text-white placeholder-gray-400"
        />
      </div>
      {errors.contact && <p className="text-red-600 text-bold text-sm mt-1"><b>{errors.contact}</b></p>}
      <textarea
        name="message"
        placeholder="Your message..."
        required
        value={formData.message}
        onChange={handleChange}
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