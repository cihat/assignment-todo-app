import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function InputPopup({ open, setOpen, todo, updateTodo }) {
  const [text, setText] = React.useState(todo?.text);
  const handleClose = () => {
    setOpen(false);
  };

  const handleUpdateTodo = (e) => {
    updateTodo({ id: todo.id, text });
    handleClose();
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      TransitionComponent={Transition}
      fullWidth
    >
      <DialogTitle>Update Todo</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Update Todo "
          type="text"
          fullWidth
          variant="standard"
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              handleUpdateTodo(e);
            }
          }}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleUpdateTodo}>Update</Button>
      </DialogActions>
    </Dialog>
  );
}
