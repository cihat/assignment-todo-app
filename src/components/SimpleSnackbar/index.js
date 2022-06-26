import * as React from "react";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function SimpleSnackbar(props) {
  const { open, setOpen } = props;

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen({
      open: true,
    });
  };

  React.useEffect(() => {
    setOpen({
      open: true,
    });
  }, [setOpen]);

  return (
    <div>
      <Snackbar
        open={open.isError}
        autoHideDuration={2000}
        onClose={handleClose}
      >
        <Alert severity="error">{open.errorMessage || "Error Message"}</Alert>
      </Snackbar>
    </div>
  );
}
