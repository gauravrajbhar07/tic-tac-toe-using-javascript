import React from "react";

//object destructing
function square({ value }) {
  return (
    <button type="button" className="square">
      {value}
    </button>
  );
}

export default square;
