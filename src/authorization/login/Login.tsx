import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Button,
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import { ErrorMessage, Form, Formik } from "formik";
import { useState } from "react";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  interface ILogin {
    password?: string;
    email?: string;
    name?: string;
  }
  const initialValues: ILogin = {
    password: "",
    name: "",
    email: "",
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, { setSubmitting }) => {}}
      validate={(values) => {
        const errors: ILogin = {};
        if (!values.email) {
          errors.email = "Required";
        } else if (!values.password) {
          errors.password = "Required";
        }
        return errors;
      }}
    >
      {({ handleChange }) => (
        <Form>
          <FormControl variant="outlined">
            <InputLabel htmlFor="password">Password</InputLabel>
            <OutlinedInput
              onChange={handleChange}
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
            <ErrorMessage name="password" component="div" />
          </FormControl>
          <FormControl variant="outlined">
            <InputLabel htmlFor="email">Email address</InputLabel>
            <OutlinedInput
              label="Email address"
              name="email"
              id="email"
              aria-describedby="my-helper-text"
              onChange={handleChange}
            />
            <FormHelperText id="name-helper-text">
              We'll never share your email.
            </FormHelperText>
            <ErrorMessage name="email" component="div" />
          </FormControl>
          <Button type="submit" variant="contained">
            Submit
          </Button>
        </Form>
      )}
    </Formik>
  );
}
export default Login;
