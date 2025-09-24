import React, { useState } from "react";

function TodoList() {
    const [task, setTask] = useState("");
    const [list, setList] = useState([]);

    const addTask = () => {
        if (task.trim() === "") return;
        setList([...list, task]);
        setTask("");
    };

    const removeTask = (index) => {
        setList(list.filter((_, i) => i !== index));
    };

    return (
        <div>
            {/* <h2>Bài 1: To-do List</h2> */}
            <input
                value={task}
                onChange={(e) => setTask(e.target.value)}
                placeholder="Nhập công việc"
            />
            <button onClick={addTask}>Thêm</button>
            <ul>
                {list.map((t, i) => (
                    <li key={i}>
                        {t} <button onClick={() => removeTask(i)}>Xóa</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TodoList;