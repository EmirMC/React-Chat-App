import Add from "./Add";
import { mainContext, useContext } from "../context/Store";

export default function Leftbar() {
    const { selectedGroupId, setSelectedGroupId, groups, users, user } = useContext(mainContext);

    return (
        <div className="sidebar">
            {groups?.map((val, i) => {
                const time = val.messages.length > 0 ? new Date((val.messages[val['messages'].length - 1].createDate) * 1000) : false;
                if (val.groupUsers.indexOf(user.userId) !== -1) {
                    return (
                        <div key={i} className={`groups groups-${i === selectedGroupId ? "active" : "passive"}`} onClick={() => setSelectedGroupId(i)}>
                            <span>{val.groupName}</span>
                            {(time && Object.keys(users).length > 0) &&
                                <div>
                                    <span>{users[val.messages[val['messages'].length - 1].userId].userName} : {val.messages[val['messages'].length - 1].message}</span>
                                    <span>{time.getHours() + ":" + time.getMinutes()}</span>
                                </div>
                            }
                        </div>
                    )
                }
            })}

            {typeof user.userName === 'string' && <Add type="add_group" addStatus={true} />}
        </div>
    )
}
