import Add from "./Add";

export default function Leftbar() {
    return (
        <div className="sidebar">
            <div className="group group-active">
                <span>Group Title</span>
                <div>
                    <span>Last Messsage</span>
                    <span>13:01</span>
                </div>
            </div>
            <div className="group group-passive">
                <span>Group Title</span>
                <div>
                    <span>Last Messsage</span>
                    <span>13:01</span>
                </div>
            </div>
            <Add type="add_group_user" addStatus={true} />
        </div>
    )
}
