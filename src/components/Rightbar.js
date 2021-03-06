import { mainContext, useContext } from "../context/Store";

export default function Rightbar() {
    const { selectedGroupId, setSelectedGroupId, setGroups, groups, users, user } = useContext(mainContext);

    const removeGroup = () => {
        setGroups((groups) => {
            let arr = [...groups];
            arr = arr.filter((e, i) => {
                return i !== selectedGroupId
            });
            localStorage.setItem('groups', JSON.stringify(arr));
            setSelectedGroupId(null);
            return arr;
        })
    }

    if (groups.length === 0 || selectedGroupId === null) {
        return (<div className="sidebar"></div>);
    }

    const ejectGroups = (id) => {
        if (id === user.userId) {
            alert("Kendini Silemezsin Grubu Silmen Gerekir!");
            return;
        }
        let arr = [...groups];
        let userArr = arr[selectedGroupId].groupUsers;
        userArr = userArr.filter(e => e !== id);
        arr[selectedGroupId].groupUsers = userArr;
        localStorage.setItem("groups", JSON.stringify(arr));
        setGroups(arr);
    }

    const addGroups = (id) => {
        let arr = [...groups];
        let userArr = arr[selectedGroupId].groupUsers;
        userArr.push(id);
        arr[selectedGroupId].groupUsers = userArr;
        localStorage.setItem("groups", JSON.stringify(arr));
        setGroups(arr);
    }

    return (
        <div className="sidebar p-4">
            <div className="w-full dark:text-neutral-200 text-neutral-900 gap-3 flex flex-col">
                <label className="">Gruptaki Kişiler</label>
                {groups[selectedGroupId]['groupUsers'].map(id => {
                    return (
                        <div key={id} className="w-full border-2 dark:border-neutral-200 border-indigo-200 rounded-md py-2 px-4 flex flex-row justify-between items-center">
                            <span>{users[id].userName}</span>
                            <button className="py-1 px-4 font-black bg-red-600 rounded-md text-white" onClick={() => ejectGroups(id)}>-</button>
                        </div>
                    )
                })}
            </div>
            <div className="w-full dark:text-neutral-200 text-neutral-900 gap-3 flex flex-col mt-2.5">
                <label className="">Gruba Eklenebilir Kişiler</label>
                {Object.keys(users).map(id => {
                    if (groups[selectedGroupId]['groupUsers'].indexOf(id) === -1) {
                        return (
                            <div key={id} className="w-full border-2 dark:border-neutral-200 border-indigo-200 rounded-md py-2 px-4 flex flex-row justify-between items-center">
                                <span>{users[id].userName}</span>
                                <button className="py-1 px-4 font-black bg-red-600 rounded-md text-white" onClick={() => addGroups(id)}>+</button>
                            </div>
                        )
                    }
                })}
            </div>
            <button className="w-full p-4 bg-red-600 text-white text-center mt-auto" onClick={() => removeGroup()}>Grubu Sil</button>
        </div>
    )
}
