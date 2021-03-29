import { CloseIcon } from "components/AllSvgIcon";
import { CloseButton } from "layout/Topbar/Topbar.style";
import React, { useEffect, useState } from "react";
import { useAlert } from "react-alert";
import { Formik, Form } from "formik";
import FormikControl from "containers/FormikContainer/FormikControl";
import * as Yup from "yup";

import Scrollbars from "react-custom-scrollbars/lib/Scrollbars";
import Button from "components/Button/Button";
import { SlidePopupBody } from "containers/Slide/Slide.style";

const EditPostEmployee = ({ editData, onCloseBtnClick, scrollbarHeight }) => {
  const alert = useAlert();
  const [initialValues, setInitialValues] = useState({
    name: "",
    gender: "",
    residential_status: "",
    contract_type: "",
    nhif: "",
    nssf: "",
    kra: "",
    national_id: "",
    allowances: [],
    basic_salary: "",
    mpesa_number: "",
    date_of_employment: new Date(),
    job_title: "",
    email: "",
    avatar: "",
  });

  useEffect(() => {
    if (editData) {
      setInitialValues(editData);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const gender_options = [
    { value: "", key: "Choose Gender" },
    { value: "Male", key: "Male" },
    { value: "Female", key: "Female" },
  ];
  const residential_status_options = [
    { value: "", key: "Choose Status" },
    { value: "Resident", key: "Resident" },
    { value: "Non-Resident", key: "Non-Resident" },
  ];
  const contract_type_options = [
    { value: "", key: "Choose Contract" },
    { value: "Permanent", key: "Permanent" },
    { value: "Temporary", key: "Temporary" },
    { value: "Wage", key: "Wage" },
  ];

  const emailNotLongEnough = "email must be at least 3 characters";
  const emailRequired = "Please enter an email address";
  const invalidEmail = "email must be a valid email";
  const fieldRequired = "This field is required";

  const validationSchema = () => {
    return Yup.object().shape({
      email: Yup.string()
        .min(3, emailNotLongEnough)
        .max(100)
        .email(invalidEmail)
        .required(emailRequired),
      name: Yup.string().required(fieldRequired),
      contract_type: Yup.mixed().required(fieldRequired),
      nhif: Yup.string().required(fieldRequired),
      nssf: Yup.string().required(fieldRequired),
      kra: Yup.string().required(fieldRequired),
      national_id: Yup.string().required(fieldRequired),
      basic_salary: Yup.number().required(fieldRequired),
      mpesa_number: Yup.string()
        .max(15, "Phone Number too long")
        .min(12, "Phone Number is invalid")
        .required("Phone Number is Required"),
      job_title: Yup.string().required(fieldRequired),
      avatar: Yup.mixed().required(fieldRequired),
    });
  };

  const onSubmit = (values, { setErrors, setSubmitting }) => {
    setSubmitting(false);
    alert.success(`Successfully Added ${values.name}`);
    setSubmitting(true);
  };
  return (
    <>
      <CloseButton onClick={onCloseBtnClick}>
        <CloseIcon />
      </CloseButton>
      <SlidePopupBody>
        <Scrollbars
          universal
          autoHide
          autoHeight
          autoHeightMax={scrollbarHeight}
          renderView={(props) => (
            <div
              {...props}
              style={{
                ...props.style,
                marginLeft: 0,
                marginRight: props.style.marginRight,
              }}
            />
          )}
        >
          <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
            render={({ isSubmitting }) => (
              <Form>
                <FormikControl
                  control="input"
                  type={"email"}
                  label={"Email *"}
                  name="email"
                  placeholder="Ex: demo@demo.com"
                />
                <FormikControl
                  control="input"
                  type="phone"
                  label="Mpesa Number"
                  placeholder="e.g. +254 722-123123"
                  name="mpesa_number"
                />
                <FormikControl
                  control="input"
                  type="text"
                  label="NHIF"
                  name="nhif"
                />
                <FormikControl
                  control="input"
                  type="text"
                  label="NSSF"
                  name="nssf"
                />
                <FormikControl
                  control="input"
                  type="number"
                  label="basic_salary"
                  name="basic_salary"
                />
                <FormikControl
                  control="input"
                  type="text"
                  label="KRA"
                  name="kra"
                />
                <FormikControl
                  control="input"
                  type="text"
                  label="Job Title"
                  name="job_title"
                />

                <FormikControl
                  control="select"
                  label="Gender *"
                  name="gender"
                  options={gender_options}
                />
                <FormikControl
                  control="select"
                  label="Contract Type *"
                  name="contract_type"
                  options={contract_type_options}
                />
                <FormikControl
                  control="date"
                  label="Date of Employment"
                  name="date_of_employment"
                  type="date"
                />
                <FormikControl
                  control="select"
                  label="Residential Status *"
                  name="residential_status"
                  options={residential_status_options}
                />
                <FormikControl
                  control="input"
                  type="file"
                  label="Profile Image"
                  name="avatar"
                />
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  fullwidth
                  isLoading={isSubmitting}
                  title={isSubmitting ? "Submitting... " : "Submit"}
                  style={{
                    margin: "10px 0",
                  }}
                />
              </Form>
            )}
          />
        </Scrollbars>
      </SlidePopupBody>
    </>
  );
};
export default EditPostEmployee;
