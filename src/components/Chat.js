import Add from "./Add";
import { mainContext, useContext } from "../context/Store";
import { useEffect } from "react";

export default function Chat() {
    const { user, selectedGroupId, groups, users, message, setMessage } = useContext(mainContext);
    useEffect(() => {
        setMessage(groups.length > 0 && selectedGroupId !== null && typeof groups[selectedGroupId] !== undefined ? groups[selectedGroupId].messages : []);
    }, [selectedGroupId, groups, setMessage]);

    
    if (selectedGroupId === null || Object.keys(users).length === 0 || groups.length === 0) {
        return (<div className="main"></div>);
    }

    return (
        <div className="main">
            <div className="w-full text-center text-xl text-indigo-600 dark:text-neutral-200 absolute top-2 left-0">
                <span>{groups[selectedGroupId].groupName}({message.length})</span>
            </div>
            <div className="overflow-y-auto flex flex-col w-full pr-2">
                {message.map((val, i) => {
                    const time = new Date((val.createDate) * 1000);
                    return (
                        <div key={i} className={`message message-${val.userId === user.userId ? "active" : "passive"}`}>
                            <span className="pr-12 text-sm font-bold">{Object.keys(users).indexOf(val.userId) !== -1 && typeof users[val.userId].userName !== 'undefined' ? users[val.userId].userName : 'unknown'}:</span>
                            <p>
                                {val.message}
                                <span className="float-right max-w-min pl-2">{time.getHours() + ":" + time.getMinutes()}</span>
                            </p>
                        </div>
                    )
                })}
            </div>
            <Add type="add_message" addStatus={false} />
        </div>
    )
}
