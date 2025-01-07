import { useEffect, useState } from "react";
import { Card } from "../UI/Card";
import { v1 as uuidv1 } from "uuid";
import { IoIosSearch } from "react-icons/io";
import { CiLight } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";

import "./Todo.css";

export const Todo = ({sendData}) => {
const [dark, setDark] = useState(false);
  const Id = uuidv1();
  const [data, setData] = useState({
    id: 1,
    title: "",
    body: "",
  });

  // const [todoList, setTodoList] = useState([
  //   {
  //     id: 1,
  //     title: "Grocery Shopping",
  //     body: "Buy fruits, vegetables, dairy products, and snacks for the week.",
  //   },
  //   {
  //     id: 2,
  //     title: " Complete Project Report",
  //     body: "Finalize the draft, review for errors, and submit it by 5 PM.",
  //   },
  //   {
  //     id: 3,
  //     title: "Title: Exercise Session",
  //     body: "Go for a 30-minute jog in the park and complete a 15-minute yoga routine.",
  //   },
  //   {
  //     id: 4,
  //     title: "Call Family",
  //     body: "Catch up with parents and siblings, discuss holiday plans.",
  //   }
  // ]); // State for multiple todos

  // useEffect(() => {
  //   const storedTodos = JSON.parse(localStorage.getItem("todoList")) || [];
  //   setTodoList(storedTodos);
  // }, []);

  const [searchQuery, setSearchQuery] = useState("");

  const [todoList, setTodoList] = useState(() => {
    [
      {
        id: 1,
        title: "Grocery Shopping",
        body: "Buy fruits, vegetables, dairy products, and snacks for the week.",
      },
      {
        id: 2,
        title: " Complete Project Report",
        body: "Finalize the draft, review for errors, and submit it by 5 PM.",
      },
      {
        id: 3,
        title: "Title: Exercise Session",
        body: "Go for a 30-minute jog in the park and complete a 15-minute yoga routine.",
      },
      {
        id: 4,
        title: "Call Family",
        body: "Catch up with parents and siblings, discuss holiday plans.",
      },
    ];
    const storedTodos = localStorage.getItem("todoList");
    return storedTodos ? JSON.parse(storedTodos) : defaultTodos;
  });

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }, [todoList]);

  const handleInputField = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmitButton = (e) => {
    e.preventDefault();
    if (data.title.trim() === "" || data.body.trim() === "") {
      alert("Both title and body are required.");
      return;
    }

    setTodoList((prevList) => [
      ...prevList,
      { id: Id, title: data.title, body: data.body },
    ]);

    // console.log(todoList);
    setData({ id: 1, title: "", body: "" }); //! Reset form fields
  };

  // Filtered todos based on search query
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredTodos = todoList.filter(
    (todo) =>
      todo.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      todo.body.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleDarkMode = () => {
    setDark(!dark);
    const parentSendData = dark
    sendData(dark)
  };

  return (
    <>
      <section className={dark === false ? "InputFiledMainSection" : "InputFiledMainSectionDark"}>
        <span className="flex justify-between">
          <h1 className="text-3xl">MyTodo</h1>
          <span onClick={handleDarkMode} className="text-6xl darkLight">
            {dark == false ?  <MdDarkMode /> : <CiLight />}
          </span>
        </span>
        <form
          className="InputHandleMainSection m-8"
          onSubmit={handleSubmitButton}
        >
          <div className="flex justify-centers items-center">
            <input
              type="text"
              placeholder="Search"
              name="search"
              className="input-filed"
              value={searchQuery}
              onChange={handleSearchChange}
            />
            {/* <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
              <IoIosSearch />
            </span> */}
          </div>
          <div>
            <input
              type="text"
              placeholder="Title"
              name="title"
              className="input-filed m-2"
              value={data.title || ""}
              onChange={handleInputField}
            />
            <input
              type="text"
              placeholder="Body"
              name="body"
              className="input-filed m-2"
              value={data.body || ""}
              onChange={handleInputField}
            />
            <button type="submit" className="btn-add">
              Add
            </button>
          </div>
        </form>
        <section className="CardCompMain">
          {filteredTodos.map((todo, index) => (
            <Card
              key={todo.id}
              data={todo}
              setTodoList={setTodoList}
              todoList={todoList}
              index={index}
              dark={dark}
            />
          ))}
        </section>
      </section>
    </>
  );
};
