import React, { useContext } from "react";
import { Redirect, useHistory, useLocation } from "react-router-dom";
import { Formik, Form } from "formik";
import FormikControl from "containers/FormikContainer/FormikControl";
import * as Yup from "yup";
import { AuthContext } from "context/auth";

import {
  Wrapper,
  FormWrapper,
  // LogoImage,
  // LogoWrapper,
  Title,
  HeaderLogo,
} from "./Login.style";
import Button from "components/Button/Button";

export default function Login() {
  const initialValues = {
    email: "",
    password: "",
  };
  const emailNotLongEnough = "email must be at least 3 characters";
  const emailRequired = "Please enter an email address";
  const invalidEmail = "email must be a valid email";
  const fieldRequired = "This field is required";
  const passwordNotLongEnough = "password must be at least 8 characters";

  const getLoginValidationSchema = () => {
    return Yup.object().shape({
      email: Yup.string()
        .min(3, emailNotLongEnough)
        .max(100)
        .email(invalidEmail)
        .required(emailRequired),
      password: Yup.string()
        .min(8, passwordNotLongEnough)
        .max(100)
        .required(fieldRequired),
    });
  };

  let history = useHistory();
  let location = useLocation();
  const { authenticate, isAuthenticated } = useContext(AuthContext);
  if (isAuthenticated) return <Redirect to={{ pathname: "/" }} />;

  const { from } = location.state || { from: { pathname: "/" } };
  const onSubmit = (values, { setErrors, setSubmitting }) => {
    setSubmitting(true);
    const { email, password } = values;
    console.log(values);
    authenticate({ email, password }, () => {
      history.replace(from);
    });
  };
  return (
    <Wrapper>
      <FormWrapper>
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={getLoginValidationSchema}
          render={({ isSubmitting }) => (
            <Form>
              <div>
                <HeaderLogo>Payer</HeaderLogo>
                {/* <LogoWrapper>
                    <LogoImage src={Logoimage} alt="payer-admin" />
                  </LogoWrapper> */}
                <Title>Log in to admin</Title>
              </div>

              <FormikControl
                control="input"
                type={"email"}
                label={"Email"}
                name="email"
                placeholder="Ex: demo@demo.com"
              />

              <FormikControl
                control="input"
                type="password"
                label="Password"
                placeholder="Ex: demo"
                name="password"
              />
              <Button
                type="submit"
                disabled={isSubmitting}
                fullwidth
                isLoading={isSubmitting}
                title={isSubmitting ? "Loging you in... " : "Log in"}
                style={{
                  margin: "10px 0",
                }}
              />
            </Form>
          )}
        />
      </FormWrapper>
    </Wrapper>
  );
}
