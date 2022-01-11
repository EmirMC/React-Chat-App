import { useState, useEffect } from "react";
const html = window.document.documentElement;

export default function Header() {
    const [darkMode, setDarkMode] = useState(() => localStorage.getItem("theme"));

    const toggleDarkMode = () => {
        var newMode = darkMode === 'dark' ? 'light' : 'dark';
        darkMode !== "" && html.classList.remove(darkMode);
        html.classList.add(newMode);
        localStorage.setItem("theme", newMode);
        setDarkMode(newMode);
    }

    useEffect(() => {
        var mode = darkMode === null || darkMode === 'light' ? 'light' : 'dark';
        html.classList.contains(mode === 'light' ? 'dark' : 'light') && html.classList.remove(mode === 'light' ? 'dark' : 'light');
        !html.classList.contains("light") && html.classList.add(mode);
        if (darkMode === null) {
            localStorage.setItem("theme", mode);
            setDarkMode(mode);
        }
    }, []);

    return (
        <div className="w-full flex flex-row justify-between border-b-2 border-indigo-600 bg-indigo-600 dark:bg-neutral-800 dark:border-neutral-800 text-white px-4 h-14 items-center">
            Header
            <button onClick={() => toggleDarkMode()}>Koyu Mod: {darkMode === 'dark' ? 'Açık' : 'Kapalı'}</button>
        </div>
    )
}
