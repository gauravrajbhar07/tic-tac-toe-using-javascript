import React from "react";

//object destructing
function square({ value, onClick }) {
  return (
    <button type="button" className="square" onClick={onClick}>
      {value}
    </button>
  );
}

export default square;
