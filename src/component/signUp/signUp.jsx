import { Controller, useForm } from "react-hook-form";

//Components
import { Button, TextField, Typography } from "@mui/material";

//Constants
import { emailRegex } from "../../utils/constants";
import { mobileNoRegex } from "./utils";

//Styles
import { styles } from "./utils";
import { Link } from "react-router-dom";

//Reducers
import { setSnackBar } from "../../reducers/snackBar/snackBar";

//Services
import signUp from "../../services/auth/signUp.js";
import { useDispatch } from "react-redux";

const SignInFrom = () => {
  //States
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      name: "",
      mobileNo: "",
      password: "",
    },
  });

  //Helpers
  const dispatch = useDispatch();

  const onSubmit = async (data) => {
    try {
      await signUp(data);
      dispatch(setSnackBar({ message: "User Create successfully" }));
    } catch (error) {
      dispatch(setSnackBar({ message: "try again", severity: "error" }));
    }
  };

  return (
    <div id="SignInFrom">
      <form style={styles.from} onSubmit={handleSubmit(onSubmit)}>
        <Typography sx={styles.title} variant="h5">
          {"Sign Up"}
        </Typography>
        <Controller
          name={"name"}
          id={"name"}
          control={control}
          rules={{
            required: "Name is required",
          }}
          render={({ field }) => (
            <TextField
              sx={styles.inputField}
              placeholder="Enter user name"
              variant="standard"
              error={errors.name}
              helperText={errors.name?.message}
              {...field}
            />
          )}
        />
        <Controller
          name={"email"}
          id={"email"}
          control={control}
          rules={{
            required: "Email is required",
            pattern: {
              value: emailRegex,
              message: "Please enter a valid email",
            },
          }}
          render={({ field }) => (
            <TextField
              sx={styles.inputField}
              placeholder="Email"
              variant="standard"
              error={errors.email}
              helperText={errors.email?.message}
              {...field}
            />
          )}
        />
        <Controller
          name={"mobileNo"}
          id={"mobileNo"}
          control={control}
          rules={{
            required: "Mobile no is required",
            pattern: {
              value: mobileNoRegex,
              message: "Please enter a valid mobile number",
            },
          }}
          render={({ field }) => (
            <TextField
              sx={styles.inputField}
              placeholder="Enter mobile no"
              variant="standard"
              error={errors.mobileNo}
              helperText={errors.mobileNo?.message}
              {...field}
            />
          )}
        />
        <Controller
          name="password"
          id="password"
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
          Create
        </Button>
        <Typography variant="caption">
          Already have an account? <Link to={`/`}>Login.</Link>
        </Typography>
      </form>
    </div>
  );
};

export default SignInFrom;
