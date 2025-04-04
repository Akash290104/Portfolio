import React, { useState } from "react";
import {
  FaLinkedin,
  FaGithub,
  FaBars,
  FaTimes,
  FaFile,
  FaEnvelope,
  FaProjectDiagram,
} from "react-icons/fa";

const Navbar = ({ scrollToProjects, scrollToContact }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-gradient-to-r from-blue-600 to-purple-500 text-white shadow-md z-50">
      <div className="flex items-center justify-end px-6 py-4">
        {/* Logo or Site Name */}

        {/* Right Section (Always Visible) */}
        <div className="flex items-center gap-6">
          {/* GitHub & LinkedIn (Always Visible) */}
          <a
            href="https://www.linkedin.com/in/akash-mishra-6568a0252"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-cyan-300 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/Akash290104"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-cyan-300 transition"
          >
            <FaGithub />
          </a>

          {/* Buttons (Hidden on Small Screens) */}
          <div className="hidden sm:flex items-center gap-4">
            <button
              onClick={scrollToContact}
              className="text-lg font-medium border-b-2 border-transparent hover:text-cyan-300 transition"
            >
              Contact
            </button>
            <button
              onClick={scrollToProjects}
              className="flex items-center text-lg gap-2 cursor-pointer border-b-2 border-transparent hover:text-cyan-300 transition"
            >
              <FaProjectDiagram /> See My Projects
            </button>
            <a
              href="https://drive.google.com/file/d/1uSNyND4sVdDvY0Oljtww_4uZIwWQSAEN/view"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-cyan-300 transition"
            >
              <FaFile /> View Resume
            </a>

            <a
              href="https://drive.google.com/uc?export=download&id=1uSNyND4sVdDvY0Oljtww_4uZIwWQSAEN"
              download
              className="flex items-center gap-2 hover:text-cyan-300 transition"
            >
              <FaFile /> Download Resume
            </a>
          </div>

          {/* ☰ Hamburger Menu (Only on Small Screens) */}
          <button
            onClick={() => setIsOpen(true)}
            className="text-white text-3xl sm:hidden"
          >
            <FaBars />
          </button>
        </div>
      </div>

      {/* Sidebar Menu (For Small Screens) */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-gray-900 shadow-lg transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out sm:hidden`}
      >
        <div className="flex flex-col items-start p-6 space-y-6 text-lg relative">
          {/* ✖ Close Button */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 text-white text-2xl"
          >
            <FaTimes />
          </button>

          <a
            href="https://drive.google.com/file/d/1uSNyND4sVdDvY0Oljtww_4uZIwWQSAEN/view"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-cyan-300 transition"
          >
            <FaFile /> View Resume
          </a>

          <a
            href="https://drive.google.com/uc?export=download&id=1uSNyND4sVdDvY0Oljtww_4uZIwWQSAEN"
            download
            className="flex items-center gap-2 hover:text-cyan-300 transition"
          >
            <FaFile /> Download Resume
          </a>

          <a
            href="mailto:mishra.ak801@gmail.com"
            className="flex items-center gap-2 hover:text-cyan-300 transition"
          >
            <FaEnvelope /> Shoot Me an Email
          </a>

          <button
            onClick={scrollToProjects}
            className="flex items-center gap-2 cursor-pointer hover:text-cyan-300 transition"
          >
            <FaProjectDiagram /> See My Projects
          </button>

          <button
            onClick={scrollToContact}
            className="text-lg font-medium hover:text-cyan-300 transition"
          >
            Contact
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
