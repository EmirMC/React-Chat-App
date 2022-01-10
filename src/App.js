import { Header, Leftbar, Rightbar, Chat } from "./components/Components.js";

export default function App() {
  return (
    <div className="w-full h-screen flex bg-gray-200 dark:bg-gray-700 flex-col">
      <Header />
      <div className="grid grid-cols-12 flex-1">
        <Leftbar />
        <Chat />
        <Rightbar />
      </div>
    </div>
  )
}