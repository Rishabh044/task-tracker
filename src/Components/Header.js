import React from "react"
import PropTypes from "prop-types";
import Button from "./Button";


const Header = function ({title, onAdd, showAdd}) {
  return (
    <header className="header">
      <h1 style = {{color: "#252424", backgroundColor:"linen"}}>{title}</h1>
      <Button color= {showAdd ? "red": "green"} text={showAdd ? "Close" : "Add"} onAdd={onAdd}/>
    </header>
  );
};

Header.defaultProps = {
    title:"Task Tracker",
}

Header.propTypes = {
    title: PropTypes.string,
}
export default Header;
