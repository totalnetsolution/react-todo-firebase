import { useState } from "react";
function Todo() {
const [todos, setTodos] = useState([]);
const [task, setTask] = useState("");
const [editId, setEditId] = useState(null);
const addTask = () => {
if (task) {
setTodos([...todos, { id: Date.now(), task }]);
setTask("");
}
};
const deleteTask = (id) => {
setTodos(todos.filter((todo) => todo.id !== id));
};
const editTask = (id) => {
const todoToEdit = todos.find((todo) => todo.id === id);
setTask(todoToEdit.task);
setEditId(id);
};
const updateTask = () => {
setTodos(
todos.map((todo) =>
todo.id === editId ? { ...todo, task } : todo
)
);
setTask("");
setEditId(null);
};
const deleteAllTasks = () => {
setTodos([]);
};
return (
<div className="min-h-screen flex flex-col items-center justify-center">
<div className="w-full max-w-md">
<h1 className="text-2xl font-bold mb-4">Todo App</h1>
<input
type="text"
placeholder="Add a task"
value={task}
onChange={(e) => setTask(e.target.value)}
className="input input-bordered w-full mb-4"
/>
<button
onClick={editId ? updateTask : addTask}
className="btn btn-primary w-full mb-4"
>
{editId ? "Update Task" : "Add Task"}
</button>
<ul>
{todos.map((todo) => (
<li
key={todo.id}
className="flex justify-between items-center mb-2"
>
{todo.task}
<div>
<button
onClick={() => editTask(todo.id)}
className="btn btn-warning mr-2"
>
Edit
</button>
<button
onClick={() => deleteTask(todo.id)}
className="btn btn-error"
>
Delete
</button>
</div>
</li>
))}
</ul>
<button onClick={deleteAllTasks} className="btn btn-error w-full mt-4">
Delete All
</button>
</div>
</div>
);
}
export default Todo;
