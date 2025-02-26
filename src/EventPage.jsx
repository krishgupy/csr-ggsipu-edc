import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion"; // Import Framer Motion
import "tailwindcss/tailwind.css";

const images = [
  {
    src: "event-01.png",
    alt: "Slide 1",
  },
  {
    src: "event-02.png",
    alt: "Slide 2",
  },
  {
    src: "event-03.png",
    alt: "Slide 3",
  },
  {
    src: "event-04.png",
    alt: "Slide 4",
  },
];

const events = [
  // Example event data
  {
    image: "event-01.png",
    title: "Event 1",
    description: "This is a description for Event 1.",
    date: "October 10, 2023",
  },
  {
    image: "event-02.png",
    title: "Event 2",
    description: "This is a description for Event 2.",
    date: "November 15, 2023",
  },
  {
    image: "event-03.png",
    title: "Event 3",
    description: "This is a description for Event 3.",
    date: "December 20, 2023",
  },
];

const EventPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  // Auto-slide feature
  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div
      className="min-h-screen text-white font-poppins"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      <div className="container mx-auto p-4 sm:p-6">
        {/* Carousel Heading */}
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-6 sm:mb-8">
          Events
        </h1>

        {/* Carousel */}
        <div className="relative bg-custom-color p-4 sm:p-8 rounded-lg shadow-xl mb-8 sm:mb-12">
          {/* Slide */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.7 }}
              className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] bg-cover bg-center rounded-lg"
              style={{
                backgroundImage: `url(${images[currentIndex].src})`,
              }}
            ></motion.div>
          </AnimatePresence>

          {/* Left Arrow */}
          <button
            onClick={goToPrevious}
            className="absolute top-1/2 transform -translate-y-1/2 left-2 sm:left-4 bg-bg-color text-white rounded-full p-2 sm:p-3 shadow-md hover:bg-gray-600 transition-all"
          >
            &#9664;
          </button>
          {/* Right Arrow */}
          <button
            onClick={goToNext}
            className="absolute top-1/2 transform -translate-y-1/2 right-2 sm:right-4 bg-bg-color text-white rounded-full p-2 sm:p-3 shadow-md hover:bg-gray-600 transition-all"
          >
            &#9654;
          </button>

          {/* Navigation Dots */}
          <div className="flex justify-center space-x-2 sm:space-x-3 mt-4">
            {images.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full transition-all ${
                  currentIndex === index
                    ? "bg-blue-500 scale-125 shadow-lg"
                    : "bg-gray-400 hover:bg-blue-400"
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              ></motion.button>
            ))}
          </div>
        </div>

        {/* Event Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {events.map((event, index) => (
            <motion.div
              key={index}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
              style={{ height: "300px", maxHeight: "400px" }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="relative w-full h-full">
                {/* Image */}
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover rounded-xl transition-transform duration-500 group-hover:scale-110"
                />
                {/* Hover Text */}
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-center items-center text-center p-4 sm:p-6">
                  <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">
                    {event.title}
                  </h2>
                  <p className="text-xs sm:text-sm text-gray-300 mb-4">
                    {event.description}
                  </p>
                  <p className="text-xs sm:text-sm font-semibold text-gray-300">
                    📅 {event.date}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventPage;