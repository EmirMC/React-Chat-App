import { useState, useEffect } from "react";
import { mainContext, useContext } from "../context/Store";
import Add from "./Add";
const html = window.document.documentElement;

export default function Header() {
    const [darkMode, setDarkMode] = useState(() => localStorage.getItem("theme"));
    const { user, setUser, users } = useContext(mainContext);

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
            <input type="checkbox" className="hidden peer" id="profile" />
            <label className="cursor-pointer" for="profile">{typeof user.userName === 'string' ? user.userName : "Hesap Seç"}</label>
            <div className="hidden peer-checked:flex bg-indigo-600 dark:bg-neutral-600 absolute top-14 left-0 z-10 flex-col border-r border-neutral-200">
                {Object.keys(users).map(id => {
                    return (
                        <button key={id} className="py-4 px-8 text-white min-w-min text-center border-b border-neutral-200" onClick={() => setUser({ ...users[id], 'userId': id })}>
                            {users[id].userName}
                        </button>
                    )
                })}
            </div>
            <div className="relative w-80 h-14">
                <Add type="add_user" addStatus={true} />
            </div>
            <button onClick={() => toggleDarkMode()}>Koyu Mod: {darkMode === 'dark' ? 'Açık' : 'Kapalı'}</button>
        </div>
    )
}
