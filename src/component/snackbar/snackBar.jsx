import React from "react";
import { useDispatch, useSelector } from "react-redux";

//Components
import MuiAlert from "@mui/material/Alert";
import { Snackbar } from "@mui/material";

//Helpers
import { closeSnackBar } from "../../reducers/snackBar/snackBar";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
const SnackBarComponent = () => {
  //States
  const snackBar = useSelector((state) => state.snackBar.snackBar);

  //Helpers
  const dispatch = useDispatch();
  const handleCLoseSnackbar = () => {
    dispatch(closeSnackBar());
  };
  return (
    <Snackbar
      severity={snackBar.severity}
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      autoHideDuration={3000}
      onClose={handleCLoseSnackbar}
      open={snackBar.open}
    >
      <Alert severity={snackBar.severity}>{snackBar.message}</Alert>
    </Snackbar>
  );
};

export default SnackBarComponent;
