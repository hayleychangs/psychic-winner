import React, { useState, useEffect }  from "react";
import { useNavigate } from "react-router-dom";

import "./loading.css";
import "./listPage.css";
  

const Loading = () => {
    return (
      <div className="loading-screen">
        <p className="loading-text">Loading...</p>
      </div>
    )
}

const TodoList = () => {
    const navigate = useNavigate();
    
    function handleClick() {
      navigate("/");
    }

    const [inputToDo, setInputToDo] = useState("")
    const [toDoList, setToDoList] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputToDo !== "") {
            setToDoList([{ id: `${inputToDo}-${Date.now()}`, inputToDo }, ...toDoList])
            setInputToDo("");
        }
        console.log(toDoList)
    }

    const handleDelete = (id) => {
        const deleteTodo = toDoList.filter((to) => to.id !== id);
        setToDoList([...deleteTodo]);    
        console.log(toDoList)
    }

    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 1000);
    }, []);

    if (isLoading) {
        return <Loading />
    }
    return (
        <div className="toDoList">
            <div className="container">
                <h1>To-Do List</h1>
                <form className="toDoForm" onSubmit={handleSubmit}>
                    <input 
                        type="text" 
                        value={inputToDo} 
                        onChange={(e) => setInputToDo(e.target.value)}
                    />  
                    <button type="submit">新增紀錄</button> 
                </form>
                <ul className="allToDoList">
                    {toDoList.map((t) => (
                        <li className="singleToDoTask" key={t.id}>
                            <span className="toDoText">
                                {t.inputToDo}
                            </span>
                            <button onClick={() => handleDelete(t.id)}>刪除</button>
                        </li>
                    ))}
                </ul>     
          </div>
          <button className="btn" onClick={handleClick}>返回首頁</button>
        </div>
    );
}
export default TodoList;