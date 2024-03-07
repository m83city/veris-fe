import {
  Button,
  FormControl,
  FormHelperText,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
} from "@mui/material";

import { ErrorMessage, Form, Formik } from "formik";
import { string, date, object } from "yup";
import { useTranslation } from "react-i18next";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import "./RegistrationForm.scss";
import { MuiTelInput } from "mui-tel-input";
import { useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";

function RegistrationForm() {
  const { t } = useTranslation();

  interface IRegisterForm {
    name: string;
    secondName: string;
    lastName: string;
    dateOfBirdth: string;
    email: string;
    nickName: string;
    phoneNumber: string;
    password: string;
  }
  const initialValues: IRegisterForm = {
    name: "",
    dateOfBirdth: "",
    email: "",
    lastName: "",
    nickName: "",
    phoneNumber: "",
    secondName: "",
    password: "",
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const registrationSchema = object().shape({
    name: string()
      .min(2, t("registrationForm.error.min"))
      .max(50, t("registrationForm.error.max"))
      .required(t("registrationForm.error.required")),
    secondName: string()
      .min(2, t("registrationForm.error.min"))
      .max(50, t("registrationForm.error.max"))
      .required(t("registrationForm.error.required")),
    lastName: string()
      .min(2, t("registrationForm.error.min"))
      .max(50, t("registrationForm.error.max"))
      .required(t("registrationForm.error.required")),
    nickName: string()
      .min(2, t("registrationForm.error.min"))
      .max(50, t("registrationForm.error.max"))
      .required(t("registrationForm.error.required")),
    email: string()
      .email(t("registrationForm.error.email"))
      .required(t("registrationForm.error.required")),
    dateOfBirdth: date()
      .required()
      .default(() => new Date()),
    phoneNumber: string()
      .required()
      .matches(phoneRegExp, "Phone number is not valid"),
    password: string()
      .required()
      .min(6, t("registrationForm.error.min"))
      .max(90, t("registrationForm.error.max")),
  });

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {({ handleChange, values, setFieldValue, resetForm, setValues }) => (
        <>
          <Form className="registration_form">
            <FormControl variant="outlined">
              <InputLabel htmlFor="name">
                {t("registrationForm.label.name")}
              </InputLabel>
              <OutlinedInput
                value={values.name}
                label={t("registrationForm.label.name")}
                name="name"
                id="name"
                aria-describedby="my-helper-text"
                onChange={handleChange}
              />
              <ErrorMessage name="name" />
            </FormControl>

            <FormControl variant="outlined">
              <InputLabel htmlFor="secondName">
                {t("registrationForm.label.secondName")}
              </InputLabel>
              <OutlinedInput
                value={values.secondName}
                label={t("registrationForm.label.secondName")}
                name="secondName"
                id="secondName"
                aria-describedby="my-helper-text"
                onChange={handleChange}
              />
              <ErrorMessage name="secondName" />
            </FormControl>

            <FormControl variant="outlined">
              <InputLabel htmlFor="lastName">
                {t("registrationForm.label.lastName")}
              </InputLabel>
              <OutlinedInput
                value={values.lastName}
                label={t("registrationForm.label.lastName")}
                name="lastName"
                id="lastName"
                aria-describedby="my-helper-text"
                onChange={handleChange}
              />
              <ErrorMessage name="lastName" />
            </FormControl>

            <FormControl variant="outlined">
              <InputLabel htmlFor="nickName">
                {t("registrationForm.label.nickName")}
              </InputLabel>
              <OutlinedInput
                value={values.nickName}
                label={t("registrationForm.label.nickName")}
                name="nickName"
                id="nickName"
                aria-describedby="my-helper-text"
                onChange={handleChange}
              />
              <ErrorMessage name="nickName" />
            </FormControl>

            <FormControl variant="outlined">
              <InputLabel htmlFor="email">
                {t("registrationForm.label.email")}
              </InputLabel>
              <OutlinedInput
                value={values.email}
                label={t("registrationForm.label.email")}
                name="email"
                id="email"
                aria-describedby="my-helper-text"
                onChange={handleChange}
              />
              <FormHelperText id="name-helper-text">
                {t("registrationForm.info.emailHelperText")}
              </FormHelperText>
              <ErrorMessage name="email" component="div" />
            </FormControl>

            <MuiTelInput
              className="registration_form-tel"
              value={values.phoneNumber}
              name="phoneNumber"
              id="phoneNumber"
              onChange={(phoneNumber) =>
                setFieldValue("phoneNumber", phoneNumber)
              }
            />

            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                value={values.dateOfBirdth}
                className="registration_form-date"
                label={t("registrationForm.label.birth")}
                onChange={(birthDay: any) =>
                  setFieldValue("dateOfBirdth", birthDay)
                }
              />
            </LocalizationProvider>

            <FormControl variant="outlined">
              <InputLabel htmlFor="password">
                {t("registrationForm.label.password")}
              </InputLabel>
              <OutlinedInput
                className="registration_form-password"
                label={t("registrationForm.label.password")}
                name="password"
                id="password"
                aria-describedby="my-helper-text"
                onChange={handleChange}
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
              />
              <ErrorMessage name="password" />
            </FormControl>

            <FormControl variant="outlined">
              <InputLabel htmlFor="confirmPassword">
                {t("registrationForm.label.confirmPassword")}
              </InputLabel>
              <OutlinedInput
                className="registration_form-password registration_form-password_confirm"
                label={t("registrationForm.label.confirmPassword")}
                name="confirmPassword"
                id="confirmPassword"
                aria-describedby="my-helper-text"
                onChange={handleChange}
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
              />
              <ErrorMessage name="confirmPassword" />
            </FormControl>
            <div className="registration_form-button_container">
              <Button
                className="registration_form-sumbit"
                variant="outlined"
                type="submit"
              >
                {t("registrationForm.label.submit")}
              </Button>
              <Button
                className="registration_form-reset"
                variant="outlined"
                type="button"
                color="error"
                onClick={() => resetForm()}
              >
                {t("registrationForm.label.reset")}
              </Button>
            </div>
          </Form>
        </>
      )}
    </Formik>
  );
}
export default RegistrationForm;
