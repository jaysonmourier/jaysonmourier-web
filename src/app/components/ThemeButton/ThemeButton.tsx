"use client";

import {  useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

import "@/app/components/ThemeButton/ThemeButton.css"

export default function ThemeButton() {
    const [theme, setTheme] = useState("dark");

    useEffect(() => {
        const storedTheme = localStorage.getItem("theme") || "dark";
        setTheme(storedTheme);
        document.documentElement.classList.toggle("dark", storedTheme === "light");
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === "dark" ? "light" : "dark";
        setTheme(newTheme);
        localStorage.setItem("theme", newTheme);
        document.documentElement.classList.toggle("light", newTheme === "light");
    };

    return (
        <div
            onClick={toggleTheme}
            className="fixed w-[50px] h-[50px] bg-blue-500 bottom-0 right-0 m-4 z-50 cursor-pointer rounded-full flex justify-center items-center theme-button"
        >
        <FontAwesomeIcon icon={theme === "dark" ? faMoon : faSun} className="w-[25px] h-[25px]" />
        </div>
    );
}