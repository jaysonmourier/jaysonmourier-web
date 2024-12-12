"use client";

import {  useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon, faM } from "@fortawesome/free-solid-svg-icons";

import "@/app/components/ThemeButton/ThemeButton.css"

export default function ThemeButton() {
    const [theme, setTheme] = useState("light");

    useEffect(() => {
        const storedTheme = localStorage.getItem("theme") || "light";
        setTheme(storedTheme);
        document.documentElement.classList.toggle("dark", storedTheme === "dark");
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        localStorage.setItem("theme", newTheme);
        document.documentElement.classList.toggle("dark", newTheme === "dark");
    };

    return (
        <div
            onClick={toggleTheme}
            className="fixed w-[50px] h-[50px] bg-blue-500 bottom-0 right-0 m-4 z-50 cursor-pointer rounded-full flex justify-center items-center theme-button"
        >
        <FontAwesomeIcon icon={theme === "light" ? faMoon : faSun} className="w-[25px] h-[25px]" />
        </div>
    );
}