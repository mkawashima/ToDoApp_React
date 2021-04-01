import React from "react";
import "./styles.css";

export const App = () => {
  return (
    <>
      <div className="input-area">
        <input id="add-text" placeholder="TODOを入力" />
        <button id="add-button">追加</button>
      </div>

      <div className="incomplete-area">
        <p className="title">未完了TODO</p>
        <ul id="incomplete-list">
          <li className="list-row">
            <div className="list-content">
              <p>aaaaaaaaa</p>
              <button>完了</button>
              <button>削除</button>
            </div>
          </li>
          <li className="list-row">
            <div className="list-content">
              <p>ｂｂｂｂｂｂｂｂ</p>
              <button>完了</button>
              <button>削除</button>
            </div>
          </li>
        </ul>
      </div>

      <div className="complete-area">
        <p className="title">完了したTODO</p>
        <ul id="complete-list">
          <li className="list-row">
            <div className="list-content">
              <p>ｂｂｂｂｂｂｂｂ</p>
              <button>戻す</button>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};
