import React from "react";
import { useNavigate } from "react-router-dom";

import styles from "./homePage.module.css";

const HomePage = () => {
    const navigate = useNavigate();
    
    function handleClick() {
      navigate("/list");
    }
  
    return (
        <div className={styles.home}>
            <div className={styles.homeCard}>
                <div className={styles.header}>
                    <h1>React 練習專案</h1>
                </div>
                <div className={styles.banner}>
                    <h2>歡迎光臨我的頁面</h2>
                </div>
                <button className={styles.homeBtn} onClick={handleClick}>點此開始</button>
            </div>
        </div>
    );
}
export default HomePage;