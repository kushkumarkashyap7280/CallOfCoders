import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaExternalLinkAlt } from "react-icons/fa";
import { SiRedux, SiTailwindcss, SiVite } from "react-icons/si";
import { SiReactrouter } from "react-icons/si"; // React Router DOM icon (you can use a custom one or any icon)

function App() {
  return (
    <div className="min-h-screen flex flex-col justify-center bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white">
      <div className="max-w-3xl mx-auto p-8 rounded-lg shadow-lg bg-opacity-80">
        <motion.h1
          className="text-4xl font-bold text-center mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Welcome to <span className="text-blue-300">Call of Coders</span>
        </motion.h1>
        <p className="text-lg text-center mb-6">
          A platform created using React, Vite, TailwindCSS, React Router DOM, React Redux, and various hooks. This website provides a space for developers to manage their projects and enhance their skills.
        </p>

        <motion.div
          className="text-center mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <h2 className="text-2xl font-semibold mb-4">Technologies Used:</h2>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-6">
            <motion.div whileHover={{ scale: 1.2 }} className="flex flex-col items-center">
              <SiTailwindcss className="text-teal-400 text-5xl mb-2" />
              <p className="text-lg">TailwindCSS</p>
            </motion.div>
            <motion.div whileHover={{ scale: 1.2 }} className="flex flex-col items-center">
              <FaReact className="text-cyan-400 text-5xl mb-2" />
              <p className="text-lg">React</p>
            </motion.div>
            <motion.div whileHover={{ scale: 1.2 }} className="flex flex-col items-center">
              <SiRedux className="text-purple-600 text-5xl mb-2" />
              <p className="text-lg">Redux</p>
            </motion.div>
            <motion.div whileHover={{ scale: 1.2 }} className="flex flex-col items-center">
              <FaNodeJs className="text-green-400 text-5xl mb-2" />
              <p className="text-lg">Node.js</p>
            </motion.div>
            <motion.div whileHover={{ scale: 1.2 }} className="flex flex-col items-center">
              <SiVite className="text-amber-400 text-5xl mb-2" />
              <p className="text-lg">Vite</p>
            </motion.div>
            <motion.div whileHover={{ scale: 1.2 }} className="flex flex-col items-center">
              <SiReactrouter className="text-blue-500 text-5xl mb-2" />
              <p className="text-lg">React Router DOM</p>
            </motion.div>
          </div>
        </motion.div>

        <p className="text-center text-lg mb-6">
          The website supports login and sign-up features, saves data in localStorage, allows users to upload profile images, and showcases their projects. It also features error handling and a smooth UI.
        </p>

        {/* Motion Button */}
        <motion.a
          href="https://callofcoders.netlify.app/"
          rel="noopener noreferrer"
        >
          <motion.button
            className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300 mb-4 mx-auto block"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Visit Website{" "}
            <FaExternalLinkAlt className="inline ml-2" />
          </motion.button>
        </motion.a>

        {/* About Me Section */}
        <div className="text-center mt-8">
          <h2 className="text-2xl font-semibold mb-4">About Me</h2>
          <p className="text-lg mb-4">
            Hello! I'm <span className="font-bold">Kush Kumar</span>, a passionate web developer. I created **Call of Coders** to help fellow developers improve their skills and share their work with others.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;


