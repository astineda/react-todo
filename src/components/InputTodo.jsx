import React from "react";

export const InputTodo = (props) => {
  const { todoText, onChange, onClick } = props;
  return (
    <div className="input-area">
      <input placeholder="TODOを入力" value={todoText} onchange={onchange} />
      <button onCLick={onCLick}>追加</button>
    </div>
  );
};
