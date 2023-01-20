import React, { useState, useEffect }  from "react";
import { useNavigate } from "react-router-dom";

import "./loading.css";
import styles from "./listPage.module.css";

import { collection, addDoc, query, getDocs, deleteDoc, doc, serverTimestamp, orderBy } from "firebase/firestore";
import {db} from "../firebase";


//loading page
const Loading = () => {
    return (
      <div className="loading-screen">
        <p className="loading-text">Loading...</p>
      </div>
    )
};

const TodoList = () => {
    //page navigate
    const navigate = useNavigate();
    function handleClick() {
      navigate("/");
    };

    //add todo
    const [inputToDo, setInputToDo] = useState("");
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (inputToDo !== "") {
            try {
                const docRef = await addDoc(collection(db, "todos"), {
                    text: inputToDo,  
                    timestamp: serverTimestamp(),
                });
                setInputToDo("");
                // console.log("Document written with ID: ", docRef.id);
            } catch (e) {
                console.error("Error adding document: ", e);
            }
        }
        fetchPost();
    };

    //read todo
    const [toDoList, setToDoList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const fetchPost = async () => {
        if (inputToDo !== "") {
            setIsLoading(false);
        }else if (isClicked) {
            setIsLoading(false);
        }else{
            setIsLoading(true);
        };
        try {
            const todosRef = collection(db, "todos");
            const q = query(todosRef, orderBy("timestamp", "desc"));
            const data = await getDocs(q);
            const newData = data.docs.map((doc) => ({...doc.data(), id:doc.id }));
            setToDoList(newData);
            // console.log(todosRef);
            // console.log(toDoList, newData);
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
        };
    };
        
    useEffect(()=>{
        fetchPost();
    }, []);

    //delete todo
    const [isClicked, setIsClicked] = useState(true);
    const handleDelete = async (id) => {
        setIsClicked(true);
        await deleteDoc(doc(db, "todos", id));
        fetchPost();
    }
    
    //render component
    if (isLoading) {
        return <Loading />
    }
    return (
        <div className={styles.toDoList}>
            <div className={styles.container}>
                <h1>Todo List</h1>
                <form className={styles.toDoForm} onSubmit={handleSubmit}>
                    <input className={styles.inputText}
                        type="text" 
                        value={inputToDo} 
                        onChange={(e) => setInputToDo(e.target.value)}
                    />  
                    <button type="submit">新增紀錄</button> 
                </form>
                <ul className={styles.allToDoList}>
                    {
                        toDoList?.map((todo,i)=>(
                            <li className={styles.singleToDoTask} key={i}>
                                <span className={styles.toDoText}>
                                    {todo.text}
                                </span>
                                <button className={styles.button} onClick={() => handleDelete(todo.id)}>刪除</button>
                            </li>
                        ))
                    }
                </ul>     
          </div>
          {toDoList.length < 1 ? null : <p className={styles.backBtn}>{`你有 ${toDoList.length} 個待辦事項`}</p>}
          <button className={styles.backBtn} onClick={handleClick}>返回首頁</button>
        </div>
    );
}
export default TodoList;