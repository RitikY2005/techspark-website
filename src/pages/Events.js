import { motion, AnimatePresence } from "framer-motion";
import CyberLayout from "../components/CyberLayout";
import { useState, useEffect } from "react";
import { events } from "../constants/events.constants.js";

function Events() {
  const [expandedEvent, setExpandedEvent] = useState(null); // Track the currently expanded event
  const [selectedRules, setSelectedRules] = useState(null); // For displaying event rules modal
  const [selectedRegistration, setSelectedRegistration] = useState(null);

  const handleToggleEventDetails = (index) => {
    setExpandedEvent(expandedEvent === index ? null : index); // Toggle the event section
  };

  const handleViewRules = (index, subIndex) => {
    const rules = events[index].subEvents[subIndex]?.eventRules;
    const title = events[index].subEvents[subIndex]?.title;
    if (rules) {
      setSelectedRules({ title, rules });
    }
  };

  const handleRegister = (index, subIndex,eventName) => {
    const RegistrationForm =
      events[index].subEvents[subIndex]?.registrationForm;
    if (RegistrationForm) {
      setSelectedRegistration(<RegistrationForm eventName={eventName} />);
    }
  };

  const RulesModal = ({ title, rules, onClose }) => (
    <motion.div
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="bg-black/90 rounded-xl border border-cyber-blue/30 p-8 max-w-2xl w-full shadow-[0_0_30px_rgba(0,243,255,0.2)]"
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-cyber-blue">{title} Rules</h2>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-cyber-blue transition-colors"
          >
            ✕
          </button>
        </div>
        <div className="space-y-4">
          {rules.map((rule, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-start gap-3"
            >
              <span className="text-cyber-blue">•</span>
              <p className="text-slate-400">{rule}</p>
            </motion.div>
          ))}
        </div>
        <motion.button
          className="mt-8 px-6 py-3 bg-black text-cyber-blue font-bold rounded-lg border border-cyber-blue/30 hover:border-white hover:shadow-[0_0_15px_rgba(0,243,255,0.3)] transition-all duration-300 w-full"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={onClose}
        >
          CLOSE
        </motion.button>
      </motion.div>
    </motion.div>
  );

  const RegistrationModal = ({ onClose }) => (
    <motion.div
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="bg-black/90 rounded-xl border border-cyber-blue/30 max-w-2xl w-full shadow-[0_0_30px_rgba(0,243,255,0.2)] relative"
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="absolute right-3 top-3 z-10">
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-cyber-blue transition-colors text-lg"
          >
            ✕
          </button>
        </div>
        <div className="max-h-[80vh] overflow-y-auto">
          {selectedRegistration}
        </div>
      </motion.div>
    </motion.div>
  );

  useEffect(() => {
    if (selectedRegistration || selectedRules) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedRegistration, selectedRules]);

  return (
    <CyberLayout>
      <div className="h-auto overflow-auto px-3 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="mx-auto">
          <motion.h1
            className="text-3xl sm:text-5xl md:text-6xl text-center mb-8 sm:mb-12 font-bold text-gunmetal"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            UPCOMING EVENTS
          </motion.h1>

          <div className="space-y-8 sm:space-y-12">
            {events.map((event, index) => (
              <motion.div
                key={index}
                className="bg-black/80 backdrop-blur-sm rounded-xl p-4 sm:p-10 border border-cyber-blue/30 shadow-[0,0,15px,rgba(0,243,255,0.2)] hover:shadow-[0,0,30px,rgba(0,243,255,0.4)] transition-all duration-700 group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <motion.div
                  className="grid grid-cols-1 md:grid-cols-5 gap-6 sm:gap-10 items-center"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="md:col-span-5 space-y-4 sm:space-y-6 text-center md:text-left">
                    <motion.h2
                      className="text-2xl sm:text-3xl font-bold text-white group-hover:text-white transition-colors duration-700"
                      // onClick={() => handleToggleEventDetails(index)}
                    >
                      <div className="space-y-8 text-cyber-blue">
                        {event.title}
                        <div className="text-base sm:text-lg text-white leading-relaxed mt-6">
                          <p>{event.description}</p>
                        </div>
                      </div>
                    </motion.h2>

                    {/* "See More" Button */}
                    <motion.button
                      className="w-full sm:w-auto px-6 py-3 text-sm bg-cyber-blue text-black font-bold rounded-lg border border-cyber-blue/30 hover:border-white hover:shadow-[0,0,15px,rgba(0,243,255,0.3)] transition-all duration-300"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleToggleEventDetails(index)}
                    >
                      {expandedEvent === index ? "See Less" : "See More"}
                    </motion.button>

                    {/* Collapsible Content */}
                    <AnimatePresence>
                      {expandedEvent === index && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden md:px-6"
                        >
                          <div className="space-y-6 mt-6">
                            {/* Sub Events */}
                            <div className="mt-6 sm:mt-8 grid gap-4 sm:gap-6">
                              {event.subEvents.map((subEvent, subIndex) => {
                                const isEven = event.subEvents.length % 2 === 0;
                                return (
                                  <motion.div
                                    key={subIndex}
                                    className={`p-4 sm:p-6 bg-black/60 rounded-lg border border-cyber-blue/20 hover:border-cyber-blue/40 transition-all duration-300 flex flex-col justify-between ${subIndex === 0 && !isEven ? "md:col-span-2" : ""} ${isEven ? "md:col-span-1" : ""}`}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{
                                      duration: 0.3,
                                      delay: subIndex * 0.1,
                                    }}
                                  >
                                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-3 sm:mb-4 gap-2">
                                      <h3 className="text-lg sm:text-xl font-bold text-cyber-blue">
                                        {subEvent.title}
                                      </h3>
                                      <span
                                        className={`px-3 py-1 text-xs font-bold rounded-full whitespace-nowrap ${
                                          subEvent.status ===
                                          "REGISTRATION LIVE"
                                            ? "bg-cyber-blue/20 text-cyber-blue animate-pulse"
                                            : "bg-cyber-blue/10 text-cyber-blue"
                                        }`}
                                      >
                                        {subEvent.status}
                                      </span>
                                    </div>
                                    <p className="text-sm text-left sm:text-base text-white leading-relaxed mb-4 flex-grow">
                                      {subEvent.description}
                                    </p>
                                    <span className="text-sm text-left sm:text-base text-white leading-relaxed mb-4 flex-grow text-white-500 font-bold">
                                      {subEvent.eventDate}
                                    </span>

                                    <span className="text-sm text-left sm:text-base text-white leading-relaxed mb-4 flex-grow text-white-500 font-bold">
                                      {subEvent.location}
                                    </span>

                                    <div className="flex items-center mt-3 gap-4">
                                      <motion.button
                                        className="w-full sm:w-auto px-6 py-3 text-sm bg-black text-cyber-blue font-bold rounded-lg border border-cyber-blue/30 hover:border-white hover:shadow-[0,0,15px,rgba(0,243,255,0.3)] transition-all duration-300"
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        onClick={() =>
                                          handleViewRules(index, subIndex)
                                        }
                                      >
                                        View Rules
                                      </motion.button>

                                      <motion.button
                                        className="w-full sm:w-auto px-6 py-3 text-sm bg-cyber-blue text-black font-bold rounded-lg border border-cyber-blue/30 hover:border-white hover:shadow-[0,0,15px,rgba(0,243,255,0.3)] transition-all duration-300"
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        onClick={() =>
                                          handleRegister(index, subIndex,subEvent.title)
                                        }
                                      >
                                        Register
                                      </motion.button>
                                    </div>
                                  </motion.div>
                                );
                              })}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {selectedRules && (
          <RulesModal
            title={selectedRules.title}
            rules={selectedRules.rules}
            onClose={() => setSelectedRules(null)}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {selectedRegistration && (
          <RegistrationModal onClose={() => setSelectedRegistration(null)} />
        )}
      </AnimatePresence>
    </CyberLayout>
  );
}

export default Events;
