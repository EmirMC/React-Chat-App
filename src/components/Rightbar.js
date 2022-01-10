import Add from "./Add";

export default function Rightbar() {
    return (
        <div className="sidebar">
            <Add type="add_group_user" addStatus={true} />
        </div>
    )
}
