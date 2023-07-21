import sun from "./Sun.svg";
import moon from "./Moon.svg";

import "./style.css";

import { useState, useEffect, useRef } from "react";
import { useLocalStorage } from "../../utils/useLocalStorage";
import detectDarkMode from "../../utils/detectDarkMode";

const BtnDarkMode = () => {
  // const [darkMode, setDarkMode] = useState("light");
  const [darkMode, setDarkMode] = useLocalStorage("darkMode", detectDarkMode());

  const btnRef = useRef(null);

  useEffect(() => {
    if (darkMode === "dark") {
      document.body.classList.add("dark"); // работа с body
      btnRef.current.classList.add("dark-mode-btn--active"); // работа с кнопкой
    } else {
      document.body.classList.remove("dark"); // работа с body
      btnRef.current.classList.remove("dark-mode-btn--active"); // работа с кнопкой
    }
  }, [darkMode]);

  useEffect(() => {
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", () => {
        const newColorScheme = window.matches ? "dark" : "light";
        setDarkMode(newColorScheme);
      });
  }, []);

  const toggleDarkMode = () => {
    setDarkMode((currentValue) => {
      return currentValue === "light" ? "dark" : "light";
    });
  };

  return (
    <>
      <button ref={btnRef} className="dark-mode-btn" onClick={toggleDarkMode}>
        <img src={sun} alt="Light mode" className="dark-mode-btn__icon" />
        <img src={moon} alt="Dark mode" className="dark-mode-btn__icon" />
      </button>
    </>
  );
};

export default BtnDarkMode;
