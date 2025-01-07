import { useState } from "react";
import { FiMoreHorizontal, FiEdit2, FiTrash2 } from "react-icons/fi"; // Using react-icons library

export const Card = ({ data, setTodoList, todoList, index, dark }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(data.title);
  const [editedBody, setEditedBody] = useState(data.body);

  const toggleOptions = () => {
    setIsExpanded(!isExpanded);
  };

  const handleDeleteToDo = () => {
    const UpdatedList = todoList.filter((list) => list.id !== data.id);
    setTodoList(UpdatedList);
    localStorage.setItem("todoList", JSON.stringify(UpdatedList));
  };

  const handleEditToDo = () => {
    setIsEditing(true);
    setIsExpanded(false);
  };

  const handleSaveEdit = () => {
    const updatedItem = { ...data, title: editedTitle, body: editedBody };
    const UpdatedList = todoList.map((item) =>
      item.id === data.id ? updatedItem : item
    );
    setTodoList(UpdatedList);
    localStorage.setItem("todoList", JSON.stringify(UpdatedList));
    setIsEditing(false);
  };

  const handleCancelEdit = () => {
    setEditedTitle(data.title);
    setEditedBody(data.body);
    setIsEditing(false);
  };

  return (
    <>
      <div className={dark === false ? "MainCard" : "MainCardDark"}>
        {isEditing ? (
          <div>
            <input
              type="text"
              value={editedTitle}
              onChange={(e) => setEditedTitle(e.target.value)}
              className="border p-2 w-full"
              placeholder="Title"
            />
            <textarea
              value={editedBody}
              onChange={(e) => setEditedBody(e.target.value)}
              className="border p-2 w-full mt-2"
              placeholder="Body"
            />
            <div className="flex justify-end mt-2">
              <button
                onClick={handleSaveEdit}
                className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
              >
                Save
              </button>
              <button
                onClick={handleCancelEdit}
                className="bg-gray-300 px-4 py-2 rounded"
              >
                Cancel
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="flex justify-between align-middle">
              <span>
                <p>{index + 1}</p>
                <h1 className="text-2xl font-bold m-2">{data.title}</h1>
                <p className="m-2">{data.body}</p>
                <p className="text-sm text-gray-500 m-2">
                  {new Date().toLocaleString()}
                </p>
              </span>
              <div
                style={{
                  position: "relative",
                  width: "200px",
                  height: "100px",
                  top: "30px",
                  right: "0",
                  background: "#ffffff",
                  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                  borderRadius: "8px",
                  padding: "8px 0",
                  transition: "transform 0.3s ease, opacity 0.3s ease",
                  transform: isExpanded ? "scaleY(1)" : "scaleY(0)",
                  transformOrigin: "top",
                  opacity: isExpanded ? 1 : 0,
                  zIndex: 100,
                  overflow: "hidden",
                }}
              >
                <div
                  onClick={handleEditToDo}
                  style={{
                    padding: "10px 15px",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    fontSize: "14px",
                    color: "#333",
                    transition: "background-color 0.2s",
                  }}
                  onMouseEnter={(e) => (e.target.style.backgroundColor = "#f2f2f2")}
                  onMouseLeave={(e) => (e.target.style.backgroundColor = "")}
                >
                  <FiEdit2 style={{ marginRight: "8px" }} />
                  Edit
                </div>
                <div
                  onClick={handleDeleteToDo}
                  style={{
                    padding: "10px 15px",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    fontSize: "14px",
                    color: "red",
                    transition: "background-color 0.2s",
                  }}
                  onMouseEnter={(e) => (e.target.style.backgroundColor = "#f2f2f2")}
                  onMouseLeave={(e) => (e.target.style.backgroundColor = "")}
                >
                  <FiTrash2 style={{ marginRight: "8px" }} />
                  Delete
                </div>
              </div>
              <div
                onClick={toggleOptions}
                style={{
                  cursor: "pointer",
                  position: "relative",
                  display: "inline-block",
                }}
              >
                <FiMoreHorizontal size={24} />
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
