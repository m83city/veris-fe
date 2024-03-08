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
import { string, date, object, ref } from "yup";
import { useTranslation } from "react-i18next";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
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
    confirmPassword: string;
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
    confirmPassword: "",
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const registrationSchema = object().shape({
    name: string()
      .matches(
        /^[^0-9_!@#$%^&*()<>?/|}{~:=+"]+$/,
        t(t("registrationForm.error.name"))
      )
      .min(2, t("registrationForm.error.min"))
      .max(50, t("registrationForm.error.max"))
      .required(t("registrationForm.error.required")),
    secondName: string()
      .matches(
        /^[^0-9_!@#$%^&*()<>?/|}{~:=+"]+$/,
        t(t("registrationForm.error.name"))
      )
      .min(2, t("registrationForm.error.min"))
      .max(50, t("registrationForm.error.max"))
      .required(t("registrationForm.error.required")),
    lastName: string()
      .matches(
        /^[^0-9_!@#$%^&*()<>?/|}{~:=+"]+$/,
        t(t("registrationForm.error.name"))
      )
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
      .required(t("registrationForm.error.required"))
      .default(() => new Date()),
    phoneNumber: string()
      .required(t("registrationForm.error.required"))
      .min(16, t("registrationForm.error.phoneNumber"))
      .max(16, t("registrationForm.error.phoneNumber")),
    password: string()
      .required(t("registrationForm.error.required"))
      .min(8, t("registrationForm.error.min"))
      .max(90)
      .matches(
        /^[a-zA-Z0-9-_.!@#$%^&*(){}+=?]+$/,
        t("registrationForm.error.password")
      ),
    confirmPassword: string()
      .required(t("registrationForm.error.required"))
      .min(8, t("registrationForm.error.min"))
      .max(90)
      .matches(
        /^[a-zA-Z0-9-_.!@#$%^&*(){}+=?]+$/,
        t("registrationForm.error.password")
      )
      .oneOf([ref("password")], t("registrationForm.error.passwordMatch")),
  });

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => {
        console.log(values);
      }}
      validationSchema={registrationSchema}
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
            <>
              <MuiTelInput
                className="registration_form-tel"
                value={values.phoneNumber}
                name="phoneNumber"
                id="phoneNumber"
                onChange={(phoneNumber) =>
                  setFieldValue("phoneNumber", phoneNumber)
                }
              />
              <ErrorMessage name="phoneNumber" component="div" />
            </>

            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                value={values.dateOfBirdth}
                className="registration_form-date"
                label={t("registrationForm.label.birth")}
                onChange={(birthDay: any) =>
                  setFieldValue("dateOfBirdth", birthDay)
                }
              />
              <ErrorMessage name="dateOfBirdth" component="div" />
            </LocalizationProvider>

            <FormControl variant="outlined">
              <InputLabel htmlFor="password">
                {t("registrationForm.label.password")}
              </InputLabel>
              <OutlinedInput
                value={values.password}
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
                value={values.confirmPassword}
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
