import React from "react";
import { motion } from "framer-motion";

function Footer() {
  // Footer text to animate
  const footerText = "Made with ❤️ by CSR Web Team";

  return (
    <footer className="bg-bg-color py-6 sm:py-8 text-center w-full relative">
      {/* Animated Footer Text */}
      <motion.div
        className="text-2xl sm:text-3xl md:text-4xl font-bold text-white"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {footerText.split("").map((char, index) => (
          <motion.span
            key={index}
            className="inline-block hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-500 hover:animate-bounce mx-1" // Added mx-1 for spacing
            whileHover={{ scale: 1.2, rotate: 10 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {char}
          </motion.span>
        ))}
      </motion.div>

      {/* Spacing */}
      <div className="mt-6 sm:mt-8"></div>

      {/* Social Media Icons */}
      <div className="flex justify-center space-x-4 sm:space-x-6">
        <motion.a
          href="https://www.instagram.com/csr.edc/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-pink-500 transition-colors duration-300"
          whileHover={{ scale: 1.2 }}
        >
          <i className="fab fa-instagram text-xl sm:text-2xl"></i>
        </motion.a>
        <motion.a
          href="https://chat.whatsapp.com/IENkT5XF3Rz9u8UfcyQds3" // Replace with your WhatsApp link
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-green-500 transition-colors duration-300"
          whileHover={{ scale: 1.2 }}
        >
          <i className="fab fa-whatsapp text-xl sm:text-2xl"></i>
        </motion.a>
      </div>

      {/* Copyright Text */}
      <motion.p
        className="mt-4 sm:mt-6 text-xs sm:text-sm text-gray-400 font-poppins"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        © {new Date().getFullYear()} CSR Club-GGSIPU EDC. All rights reserved.
      </motion.p>

      {/* Logo Section (Right Bottom Corner) */}
      <div className="absolute bottom-2 right-2 sm:bottom-4 sm:right-4">
        <img
          src="LOGO.png" // Replace with your logo URL
          alt="LOGO.png"
          className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-contain rounded-full" // Adjusted logo size for responsiveness
        />
      </div>
    </footer>
  );
}

export default Footer;