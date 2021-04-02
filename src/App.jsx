import React, { useState, useEffect } from "react";
import "./styles.css";

export const App = () => {
  const [incompleteTodos, setIncompleteTodos] = useState([
    "ああああああ",
    "いいいいいいい"
  ]);
  const [completeTodos, setCompleteTodos] = useState([
    "カカかっか",
    "さささささっっっっっっささ"
  ]);
  return (
    <>
      <div className="input-area">
        <input id="add-text" placeholder="TODOを入力" />
        <button id="add-button">追加</button>
      </div>

      <div className="incomplete-area">
        <p className="title">未完了TODO</p>
        <ul id="incomplete-list">
          {incompleteTodos.map((todo) => {
            return (
              <li key={todo} className="list-row">
                <div className="list-content">
                  <p>{todo}</p>
                  <button>完了</button>
                  <button>削除</button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="complete-area">
        <p className="title">完了したTODO</p>
        <ul id="complete-list">
          {completeTodos.map((todo) => {
            return (
              <li key={todo} className="list-row">
                <div className="list-content">
                  <p>{todo}</p>
                  <button>戻す</button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};
