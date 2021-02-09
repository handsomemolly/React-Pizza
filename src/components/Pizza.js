import React from "react";

const Pizza = (props) => {
  return (
    <tr>
      <td>{props.myPizza.topping}</td>
      <td>{props.myPizza.size}</td>
      <td>{props.myPizza.vegetarian ? "Aw yissss" : "Naw"}</td>
      <td>
        <button
          onClick={() => props.selectedPizza(props.myPizza)}
          type="button"
          className="btn btn-primary"
        >
          Edit Pizza
        </button>
      </td>
    </tr>
  );
};

export default Pizza;
