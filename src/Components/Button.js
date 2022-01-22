
import React from "react"
import PropTypes from "prop-types";

const Button = ({ color, text, onAdd }) => {
  return (
    <button
      onMouseEnter={(e)=>{
        console.log("creating a event", e)
      }}
      className="btn"
      style={{ backgroundColor: color }}
      onClick={onAdd}
    >
      {text}
    </button>
  );
};

Button.defaultProps = {
  text: "Click Me",
  color: "steelblue",
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
