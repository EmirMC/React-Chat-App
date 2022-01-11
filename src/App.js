import { useState, useEffect } from "react";
import { Header, Leftbar, Rightbar, Chat } from "./components/Components.js";
import { mainContext } from "./context/Store.js";

export default function App() {
  const [user, setUser] = useState({});
  const [selectedGroupId, setSelectedGroupId] = useState(null);
  const [message, setMessage] = useState([]);
  const [groups, setGroups] = useState(() => localStorage.getItem("groups") !== null ? JSON.parse(localStorage.getItem('groups')) : []);
  const [users, setUsers] = useState(() => localStorage.getItem("users") !== null ? JSON.parse(localStorage.getItem('users')) : {});

  useEffect(() => {

    return () => {
      setSelectedGroupId(null);
      setMessage([]);
      setGroups(() => localStorage.getItem("groups") !== null ? JSON.parse(localStorage.getItem('groups')) : []);
      setUser(() => localStorage.getItem("users") !== null ? JSON.parse(localStorage.getItem('users')) : {});
    }
  }, []);

  const data = {
    user,
    setUser,
    selectedGroupId,
    setSelectedGroupId,
    groups,
    setGroups,
    users,
    setUsers,
    message,
    setMessage
  }

  return (
    <mainContext.Provider value={data}>
      <div className="w-full h-screen flex bg-gray-200 dark:bg-neutral-900 flex-col">
        <Header />
        <div className="grid grid-cols-12 flex-1">
          <Leftbar />
          <Chat />
          <Rightbar />
        </div>
      </div>
    </mainContext.Provider>
  )
}