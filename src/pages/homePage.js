import React from "react";
import { useNavigate } from "react-router-dom";

import "./homePage.css";

const HomePage = () => {
    const navigate = useNavigate();
    
    function handleClick() {
      navigate("/list");
    }
  
    return (
        <div className="home">
            <div className="home-card">
                <div className="header">
                    <h1>React 練習專案</h1>
                </div>
                <div className="banner">
                    <h2>歡迎光臨我的頁面</h2>
                </div>
                <button className="home-btn" onClick={handleClick}>點此開始</button>
            </div>
        </div>
    );
}
export default HomePage;