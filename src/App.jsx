import { useState } from "react";
import { Todo } from "./Components/Pages/Todo";
import "./Components/Pages/Todo.css";
import ExpandableDropdown from "./Components/UI/Add";



export default function App() {
  const [dataFromChild, setDataFromChild] = useState(false);

  const handleDataFromChild = (data) => {
    setDataFromChild(data);
    console.log(data);
  };
  return (
    <section className={dataFromChild === false ? "MainAppCompo" : "MainAppCompoDark"}>
      <section className="Main-dashboard">
        <h1>Todo List</h1>
        <p className="hover:bg-blue-900 cursor-pointer ">Dashboard</p>
      </section>
      <Todo sendData={handleDataFromChild}/>
    {/* <ExpandableDropdown/> */}
    </section>

  );
}
