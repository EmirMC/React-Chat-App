import { useState, useEffect } from "react";
import { mainContext, useContext } from "../context/Store";

export default function Add({ type, addStatus }) {
    const [data, setData] = useState("");
    const { user, setSelectedGroupId, groups, setGroups, selectedGroupId, setMessage, message, setUsers, users, setUser } = useContext(mainContext);

    function ToSeoUrl(url) {
        return url.toString()               // Convert to string
            .normalize('NFD')               // Change diacritics
            .replace(/[\u0300-\u036f]/g, '') // Remove illegal characters
            .replace(/\s+/g, '')            // Change whitespace to dashes
            .toLowerCase()                  // Change to lowercase
            .replace(/&/g, '')          // Replace ampersand
            .replace(/[^a-z0-9\-]/g, '')     // Remove anything that is not a letter, number or dash
            .replace(/-+/g, '')             // Remove duplicate dashes
            .replace(/^-*/, '')              // Remove starting dashes
            .replace(/-*$/, '');             // Remove trailing dashes
    }

    const addFunction = (data) => {
        if (data === null || data.trim().length === 0) {
            alert("Boş Bırakmayınız!");
            return;
        }
        if (type === 'add_group' && typeof user.userId === 'string') {
            if (groups.length > 0 && groups.findIndex(e => e.groupName === data) !== -1) {
                alert("Bu Gurup daha önce eklenmiştir! Lütfen Farklı Bir Gurup Giriniz!");
                return;
            }
            setGroups((groups) => {
                let arr = [...groups];
                arr.push({ 'groupName': data.trim(), 'groupUsers': [user.userId], messages: [] });
                localStorage.setItem("groups", JSON.stringify(arr));
                setSelectedGroupId(arr.length - 1);
                return arr;
            });
        } else if (type === 'add_message') {
            var time = new Date();
            time = parseInt(time / 1000);
            let tempArr = [...message];
            tempArr.push({ userId: user.userId, message: data.trim(), createDate: time });
            
            let arr = [...groups];
            let nowGroup = groups[selectedGroupId];
            if (selectedGroupId !== 0) {
                nowGroup.messages = tempArr;
                arr.splice(selectedGroupId);
                arr.unshift(nowGroup);
                setSelectedGroupId(0);
            } else {
                arr[0].messages = tempArr;
            }
            localStorage.setItem("groups", JSON.stringify(arr));
            setMessage(tempArr);
            setGroups(arr);
        } else if (type === 'add_user') {
            if (Object.keys(users).indexOf(ToSeoUrl(data)) !== -1) {
                alert("Bu kullanıcı daha önce eklenmiştir! Lütfen Farklı Bir Kullanıcı Giriniz!");
                return;
            }
            setUser({ userName: data, userId: ToSeoUrl(data) });
            setSelectedGroupId(null);
            setMessage([]);
            setUsers({ [ToSeoUrl(data)]: { userName: data }, ...users });
            localStorage.setItem("users", JSON.stringify({ [ToSeoUrl(data)]: { userName: data.trim() }, ...users }));
        } else {
            alert("Sol Üstten Kullanıcı Seçiniz");
        }

        setData("");
    }

    const text = type === 'add_user' ? "Kullanıcı Adı Giriniz" : type === 'add_group' ? "Gurup Adını Giriniz" : type === 'add_message' ? "Mesajınızı Giriniz" : "";
    return (
        <div className="w-full text-center text-xl text-indigo-600 absolute bottom-2 left-0 px-4 flex flex-row h-10">
            {addStatus ?
                <input className="w-full rounded-md border bg-neutral-100 border-indigo-600 dark:border-neutral-600 p-2 text-sm resize-none dark:bg-neutral-800 dark:text-neutral-400 dark:placeholder-neutral-600 focus:outline-0" placeholder={text} value={data} onChange={(e) => setData(e.target.value)} /> :
                <textarea className="w-full rounded-md border border-indigo-600 dark:border-neutral-600 p-2 text-sm resize-none dark:bg-neutral-800 dark:text-neutral-400 dark:placeholder-neutral-600 focus:outline-0" onChange={(e) => setData(e.target.value)} placeholder={text} value={data}></textarea>
            }
            <button className={`w-14 ${type === 'add_user' ? 'bg-neutral-100 text-indigo-600' : 'bg-indigo-600 text-white'} dark:text-neutral-100 dark:bg-neutral-600 rounded-md flex items-center text-center justify-center ml-2 leading-loose`} onClick={() => addFunction(data)}>{addStatus ? "+" : ">"}</button>
        </div>
    )
}
