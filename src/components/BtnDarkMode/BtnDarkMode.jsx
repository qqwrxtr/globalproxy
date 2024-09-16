import "./btndarkmode.css";
import React, { useEffect } from "react";
import moon from "./../../assets/img/moon.svg";
import { motion } from "framer-motion";
import sun from "./../../assets/img/sun.svg";
import { useLocalStorage } from "./../../Utils/UseLocalStorage/useLocalStorage.jsx";

const BtnDarkMode = () => {
  const [darkMode, setDarkMode] = useLocalStorage("darkMode", "light");

  useEffect(() => {
    if (darkMode === "dark") {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  useEffect(() => {
    const handleColorSchemeChange = (event) => {
      const newColorScheme = event.matches ? "dark" : "light";
      setDarkMode(newColorScheme);
    };

    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", handleColorSchemeChange);

    return () => {
      window
        .matchMedia("(prefers-color-scheme: dark)")
        .removeEventListener("change", handleColorSchemeChange);
    };
  }, [setDarkMode]);

  const toggleDarkMode = () => {
    setDarkMode((currentValue) =>
      currentValue === "light" ? "dark" : "light",
    );
  };

  const btnNormal = "dark-mode-btn";
  const btnActive = "dark-mode-btn dark-mode-btn--active";

  return (
    <motion.button
      className={darkMode === "dark" ? btnActive : btnNormal}
      onClick={toggleDarkMode}
      whileTap={{ scale: 0.9 }}
      whileHover={{ scale: 1.1, rotate: 10 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.img
        src={darkMode === "dark" ? sun : moon}
        alt={darkMode === "dark" ? "Light mode" : "Dark mode"}
        className={
          darkMode === "dark"
            ? "dark-mode-btn__icon"
            : "dark-mode-btn__icon_dark"
        }
        key={darkMode}
        initial={{ rotate: 0 }}
        animate={{ rotate: darkMode === "dark" ? 360 : -360 }}
        transition={{ duration: 0.5 }}
      />
    </motion.button>
  );
};

export default BtnDarkMode;
