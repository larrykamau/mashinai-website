import React from "react";
import DatePicker from "react-date-picker";
import { Field, ErrorMessage } from "formik";
import TextError from "./TextError";

import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";

function CustomDatePicker(props) {
  const { label, name, ...rest } = props;
  return (
    <FormInput className="form-control">
      <label htmlFor={name}>{label}</label>
      <Field name={name}>
        {({ form, field }) => {
          const { setFieldValue } = form;
          const { value } = field;
          return (
            <DatePicker
              format="yyyy-MM-dd"
              id={name}
              onChange={(val) => setFieldValue(name, val)}
              value={typeof value === "string" ? new Date(value) : value}
              {...rest}
            />
          );
        }}
      </Field>
      <ErrorMessage component={TextError} name={name} />
    </FormInput>
  );
}

export default CustomDatePicker;

const FormInput = styled.div`
  width: 100%;
  max-width: 400px;
  margin: 10px;
  display: inline-block;
  /* padding: 20px; */

  label {
    /* display: none; */

    margin-bottom: 5px;
    font-size: 14px;
    line-height: 28px;
    color: #333;
  }
  .react-date-picker {
    width: 100%;
    height: 40px;
    max-width: 400px;
    background-color: ${themeGet("colors.gray.200", "#2d2d2d")};
  }
  .react-date-picker__wrapper {
    border-radius: 3px;
    border-color: #e6e6e6;
  }

  input[type="text"],
  input[type="email"],
  input[type="password"] {
    opacity: 0.9;
  }
  .error {
    color: palevioletred;
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
    font-style: italic;
  }
`;
