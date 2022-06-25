import React from "react";

const Link = (props) => {
  const { active, children, onClick } = props;

  return (
    <div>
      <button onClick={onClick} disabled={active}>
        {children}
      </button>
    </div>
  );
};

export default Link;
