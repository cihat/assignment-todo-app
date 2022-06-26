import React from "react";
import Button from "@mui/material/Button";

const Link = (props) => {
  const { active, children, onClick } = props;

  return (
    <div>
      <Button
        color="primary"
        variant="contained"
        onClick={onClick}
        disabled={active}
        style={{
          marginLeft: "1rem",
        }}
      >
        {children}
      </Button>
    </div>
  );
};

export default Link;
