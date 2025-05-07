
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, Moon, Sun } from "lucide-react";

const sections = [
  { id: "wieso-atabuy", label: "Wieso Atabuy?" },
  { id: "wieso-nachhaltigkeit", label: "Wieso Nachhaltigkeit?" },
  { id: "ueber-uns", label: "Über uns" },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className={darkMode ? "dark bg-gray-900 text-white" : "bg-white text-gray-800"}>
      <header className={darkMode ? 
        "fixed top-0 left-0 w-full z-50 bg-gray-800 text-white shadow-md" : 
        "fixed top-0 left-0 w-full z-50 bg-white text-gray-900 shadow-md"}>
        <div className="flex justify-between items-center p-4">
          <div className="text-xl font-bold text-cyan-700 dark:text-cyan-400">ATABUY</div>
          <div className="flex items-center gap-4">
            <button onClick={() => setDarkMode(!darkMode)} className="md:mr-4 text-cyan-600 dark:text-cyan-300">
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button onClick={toggleMenu} className="md:hidden text-cyan-600 dark:text-cyan-300">
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {menuOpen && (
        <nav className="absolute top-16 left-0 w-full bg-white dark:bg-gray-800 shadow-md flex flex-col gap-4 p-4 md:hidden">
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className="text-lg hover:text-cyan-600 dark:hover:text-cyan-300 transition"
              onClick={() => setMenuOpen(false)}
            >
              {section.label}
            </a>
          ))}
          <a
            href="/rechtliches"
            className="text-lg hover:text-cyan-600 dark:hover:text-cyan-300 transition"
            onClick={() => setMenuOpen(false)}
          >
            Rechtliches
          </a>
        </nav>
      )}

      <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-cyan-100 to-cyan-300 dark:from-gray-800 dark:to-gray-900 text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight tracking-tight"
        >
          <span className="text-gray-900 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-cyan-300 dark:to-blue-300">
            Willkommen bei ATABUY
          </span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-lg md:text-xl text-gray-700 dark:text-gray-300"
        >
          Unser Shop wird derzeit überarbeitet. In der Zwischenzeit könnt ihr uns auf Ebay erreichen:
        </motion.p>
        <motion.a
          href="https://www.ebay.de/usr/atabuy_de"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="mt-4 inline-block bg-cyan-600 text-white px-6 py-3 rounded-full hover:bg-cyan-700 transition"
        >
          Jetzt auf Ebay besuchen
        </motion.a>
      </section>
    </div>
  );
}
