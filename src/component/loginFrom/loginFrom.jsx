import { Controller, useForm} from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

//Components
import { Button, TextField, Typography } from "@mui/material";

//Constants
import { emailRegex, WELCOME, ROUTES, EMAIL } from "../../utils/constants";

//Styles
import styles from "./utils/styles";

//Reducers
import { setSnackBar } from "../../reducers/snackBar/snackBar.js";
import { loginReducer } from "../../reducers/user/userSlice.js";

const LoginFrom = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      id: "",
      password: "",
    },
  });
  
  //Helpers
  const navigation = useNavigate();

  const dispatch = useDispatch();

  const onSubmit = async (data) => {
    try {
      dispatch(loginReducer(data)).then(() => {
        dispatch(setSnackBar({ message: "login successfully" }));
        navigation(`${ROUTES.HOME}`);
      });
    } catch (error) {
      dispatch(
        setSnackBar({ message: error.response.data.error, severity: "error" })
      );
    }
  };

  return (
    <div id="loginFrom">
      <form style={styles.from} onSubmit={handleSubmit(onSubmit)}>
        <Typography sx={styles.title} variant="h5">
          {WELCOME}
        </Typography>
        <Controller
          name={"id"}
          id={"id"}
          control={control}
          rules={{
            required: "Email/Mobile No is required",
            pattern: {
              value: emailRegex,
              message: "Please enter a valid Email/Mobile No",
            },
          }}
          render={({ field }) => (
            <TextField
              sx={styles.inputField}
              placeholder="Email/Mobile No"
              variant="standard"
              error={errors.email}
              helperText={errors.email?.message}
              {...field}
            />
          )}
        />
        <Controller
          name={"password"}
          id={"password"}
          control={control}
          rules={{
            required: "required",
            maxLength: { value: 10, message: "password should be lessthan 10" },
          }}
          render={({ field }) => (
            <TextField
              sx={styles.inputField}
              type="password"
              placeholder="Password"
              variant="standard"
              error={errors.password}
              helperText={errors.password?.message}
              {...field}
            />
          )}
        />
        <Button sx={styles.button} variant="contained" type="submit">
          Login
        </Button>
        <Typography variant="caption">
          New to Shop? <Link to={`signup`}>Create an account.</Link>
        </Typography>
      </form>
    </div>
  );
 };

export default LoginFrom;
