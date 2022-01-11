import { useState } from "react";

export default function Add({ type, addStatus }) {
    const [message, setMessage] = useState("");

    const text = type === 'add_group_user' ? "Kullanıcı Adı Giriniz" : type === 'add_group' ? "Gurup Adını Giriniz" : type === 'add_message' ? "Mesajınızı Giriniz" : "";
    return (
        <div className="w-full text-center text-xl text-indigo-600 absolute bottom-2 left-0 px-4 flex flex-row h-10">
            {addStatus ?
                <input className="w-full rounded-md border border-indigo-600 dark:border-neutral-600 p-2 text-sm resize-none dark:bg-neutral-800 dark:text-neutral-400 dark:placeholder-neutral-600 focus:outline-0" placeholder={text} onChange={(e) => setMessage(e.target.value)} /> :
                <textarea className="w-full rounded-md border border-indigo-600 dark:border-neutral-600 p-2 text-sm resize-none dark:bg-neutral-800 dark:text-neutral-400 dark:placeholder-neutral-600 focus:outline-0" onChange={(e) => setMessage(e.target.value)} placeholder={text}>{message}</textarea>
            }
            <button className="w-14 bg-indigo-600 dark:bg-neutral-600 text-white rounded-md flex items-center text-center justify-center ml-2 leading-loose" onClick={() => alert(message)}>{addStatus ? "+" : ">"}</button>
        </div>
    )
}
