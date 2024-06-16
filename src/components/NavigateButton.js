import React from "react";
import { useNavigate } from "react-router-dom";

function NavigateButton({className, to, text }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(to);
  };

  return (
    <button className={`btn btn-primary ${className}`} onClick={handleClick}>
      {text}
    </button>
  );
}

export default NavigateButton;
