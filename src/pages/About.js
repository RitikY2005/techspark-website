import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import CyberLayout from '../components/CyberLayout';








function About() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const images = [
    // 'slide1.jpg',
    // 'slide2.jpg',
    // 'slide3.jpg',
    // 'slide4.jpg',
    '/photos/DSC_0109.jpg',
    '/photos/DSC_0221.jpg',
    '/photos/DSC_0318.jpg',
    '/photos/DSC_0383.JPG',
    '/photos/DSC_0397.JPG',
    '/photos/DSCN3591.JPG',
    '/photos/DSCN3644.JPG',
    '/photos/DSCN3664.JPG'
  ];

  const handleSlideChange = (newIndex) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide(newIndex);
    setTimeout(() => setIsAnimating(false), 1000);
  };

  const nextSlide = () => {
    const newIndex = (currentSlide + 1) % images.length;
    handleSlideChange(newIndex);
  };

  const prevSlide = () => {
    const newIndex = (currentSlide - 1 + images.length) % images.length;
    handleSlideChange(newIndex);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 8000);
    return () => clearInterval(timer);
  }, [currentSlide]);

  return (
    <CyberLayout>
      <div className="px-4 sm:px-8 pt-16 sm:pt-20">
        <div className="max-w-6xl mx-auto">
          <motion.h1
            className="text-3xl sm:text-5xl md:text-6xl mb-8 text-[#2a3135] font-spark text-center"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            About TechSpark
          </motion.h1>

          <motion.div
            className="mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
          >
            <h2 className="text-2xl sm:text-3xl mb-6 text-[#2a3135] font-bold">What is Techspark?</h2>
            <p className="text-base sm:text-lg text-[#2a3135] leading-relaxed max-w-4xl mx-auto text-justify">
            The vibrant atmosphere filled with cutting-edge tech competitions, insightful workshops, thought-provoking talks, and interactive showcases. From AI and coding to robotics and game development, TechSpark offers a platform to explore the latest trends, push the boundaries of innovation, and forge connections with industry leaders, pioneers, and like-minded peers.
            <br></br>With an exciting lineup of events, including hackathons, coding challenges, guest lectures from tech experts, and much more, TechSpark promises to spark your passion for technology and open doors to endless possibilities.
            {/* Stepping into the world of limitless possibilities with TechSpark, the iconig intercollegiate festival of the Computer Science Department of Mithibai College. More than just an event, Tech Spark is a celebration of technology. creativity, and innovation, where brilliance meets opportunity and ideas take flight. This year TechSpark is all set to take place on 24th and 25th February. */}
              {/* TechSpark is an intercollegiate festival organized by the Department of Computer Science at Mithibai College. 
              The events range from immensely challenging ones like quizzes on various topics, coder battles like Hackathons 
              and time-crunching Programming Challenges to ones that have more of an artistic appeal such as Poster Making, 
              Treasure Hunts, etc. We invite eminent speakers as guest lecturers to broaden our horizons on modern technologies and developments in the IT industry and other such fields of interest. Students, being the chief participants for whom these events have been thoughtfully curated, respond to every occasion by interacting and collaborating with great enthusiasm and in large numbers.  */}
            </p>
          </motion.div>

          {/* Updated Image Slideshow Section */}
          <motion.div 
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.7 }}
          >
            <div className="relative h-[500px] rounded-xl overflow-hidden shadow-[0_0_20px_rgba(0,243,255,0.3)] group">
              {/* Navigation Buttons */}
              <button 
                onClick={prevSlide}
                disabled={isAnimating}
                className="absolute left-6 top-1/2 -translate-y-1/2 z-20
                         p-2 -ml-2
                         text-white/25 hover:text-cyber-blue
                         transition-all duration-300
                         disabled:cursor-not-allowed disabled:opacity-0"
                aria-label="Previous slide"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="white" 
                  className="w-8 h-8"
                >
                  <path 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              
              {/* Images with enhanced transitions */}
              <div className="relative w-full h-full">
                {images.map((image, index) => (
                  <motion.div
                    key={index}
                    className="absolute inset-0"
                    initial={{ 
                      opacity: 0,
                      x: index > currentSlide ? '50%' : '-50%'
                    }}
                    animate={{ 
                      opacity: currentSlide === index ? 1 : 0,
                      x: currentSlide === index ? 0 : index > currentSlide ? '50%' : '-50%',
                      scale: currentSlide === index ? 1 : 1.05,
                    }}
                    transition={{ 
                      duration: 0.7,
                      ease: [0.32, 0.72, 0, 1],
                      opacity: { duration: 0.5 }
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/40" />
                    <motion.img 
                      src={image} 
                      alt={`TechSpark Moment ${index + 1}`} 
                      className="w-full h-full object-cover transform-gpu"
                      initial={{ scale: 1.05 }}
                      animate={{ 
                        scale: currentSlide === index ? 1 : 1.05,
                      }}
                      transition={{
                        duration: 6,
                        ease: 'linear',
                        repeat: Infinity,
                        repeatType: 'reverse'
                      }}
                    />
                  </motion.div>
                ))}

                {/* Subtle overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/20" />
              </div>

              <button 
                onClick={nextSlide}
                disabled={isAnimating}
                className="absolute right-6 top-1/2 -translate-y-1/2 z-20
                         p-2 -mr-2
                         text-white/25 hover:text-cyber-blue
                          
                         transition-all duration-300
                         disabled:cursor-not-allowed disabled:opacity-0"
                aria-label="Next slide"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="white" 
                  className="w-8 h-8"
                >
                  <path 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>

              {/* Updated Slide Indicators with subtle animation */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
                {images.map((_, index) => (
                  <motion.button
                    key={index}
                    onClick={() => handleSlideChange(index)}
                    disabled={isAnimating}
                    className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full transition-all duration-300 
                               ${currentSlide === index 
                                 ? 'bg-cyber-blue shadow-[0_0_10px_rgba(0,243,255,0.5)]' 
                                 : 'bg-white/20 hover:bg-white/40'}`}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    animate={currentSlide === index ? {
                      scale: [1, 1.15, 1],
                      transition: {
                        duration: 2,
                        repeat: Infinity,
                        repeatType: 'reverse'
                      }
                    } : {}}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 mb-16">
            {[
              {
                title: "Guest Lectures",
                description: "We invite eminent speakers as guest lecturers to broaden our horizons on modern technologies.",
                icon: "🎓"
              },
              {
                title: "Interactive Events",
                description: "Students participate and collaborate with great enthusiasm in various interactive sessions.",
                icon: "🤝"
              },
              {
                title: "Theme",
                description: "This year's theme 'The Silver Metamorphosis' celebrates 25 years of excellence.",
                icon: <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#96DED1"><path d="M480-80q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-83 31.5-155.5t86-127Q252-817 325-848.5T480-880q83 0 155.5 31.5t127 86q54.5 54.5 86 127T880-480q0 82-31.5 155t-86 127.5q-54.5 54.5-127 86T480-80Zm0-82q26-36 45-75t31-83H404q12 44 31 83t45 75Zm-104-16q-18-33-31.5-68.5T322-320H204q29 50 72.5 87t99.5 55Zm208 0q56-18 99.5-55t72.5-87H638q-9 38-22.5 73.5T584-178ZM170-400h136q-3-20-4.5-39.5T300-480q0-21 1.5-40.5T306-560H170q-5 20-7.5 39.5T160-480q0 21 2.5 40.5T170-400Zm216 0h188q3-20 4.5-39.5T580-480q0-21-1.5-40.5T574-560H386q-3 20-4.5 39.5T380-480q0 21 1.5 40.5T386-400Zm268 0h136q5-20 7.5-39.5T800-480q0-21-2.5-40.5T790-560H654q3 20 4.5 39.5T660-480q0 21-1.5 40.5T654-400Zm-16-240h118q-29-50-72.5-87T584-782q18 33 31.5 68.5T638-640Zm-234 0h152q-12-44-31-83t-45-75q-26 36-45 75t-31 83Zm-200 0h118q9-38 22.5-73.5T376-782q-56 18-99.5 55T204-640Z"/></svg>
                // icon: "🌐"
              },
              {
                title: "Competition",
                description: "Participate in challenging competitions designed to test your technical and creative skills.",
                icon: "🏆"
              },
              {
                title: "Networking",
                description: "Connect with industry professionals and like-minded students from various colleges.",
                icon: "🔗"
              },
              {
                title: "Innovation",
                description: "Experience cutting-edge technology and innovative solutions in the IT industry.",
                icon: "💡"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="p-6 sm:p-8 bg-black/80 backdrop-blur-sm rounded-xl border border-cyber-blue/30 
                           shadow-[0_0_15px_rgba(0,243,255,0.2)] 
                           hover:shadow-[0_0_20px_rgba(0,243,255,0.4)] 
                           transition-all duration-700"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-3xl sm:text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-lg sm:text-xl font-bold mb-3 text-cyber-blue">{feature.title}</h3>
                <p className="text-sm sm:text-base text-white">{feature.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Event Details */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-[#2a3135]">Event Details</h2>
              <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8 text-base sm:text-lg">
                <div className="bg-black/80 backdrop-blur-sm px-6 sm:px-8 py-4 sm:py-6 rounded-xl 
                              border border-cyber-blue/30 shadow-[0_0_15px_rgba(0,243,255,0.2)]">
                  <span className="font-bold text-cyber-blue">Dates:</span>
                  <span className="text-white ml-2">24th - 25th February 2025</span>
                </div>
                <div className="bg-black/80 backdrop-blur-sm px-6 sm:px-8 py-4 sm:py-6 rounded-xl 
                              border border-cyber-blue/30 shadow-[0_0_15px_rgba(0,243,255,0.2)]">
                  <span className="font-bold text-cyber-blue">Venue:</span>
                  <span className="text-white ml-2">Mithibai College Campus</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </CyberLayout>
  );
}

export default About; 