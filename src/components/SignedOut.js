import React, { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";
import { toast } from "react-toastify";
import { Button, Dropdown, Form, Icon, Modal } from "semantic-ui-react";

export default function SignedOut({ signIn }) {
  const [open, setOpen] = useState(false);

  const [openCompany, setOpenCompany] = useState(false);

  // validation schema
  const validationSchema = yup.object().shape({
    firstName: yup
      .string()
      .required("This field is required")
      .min(1, "Must be at least 1 characters")
      .max(30, "Must be a maximum of 30 characters"),
    lastName: yup
      .string()
      .required("This field is required")
      .min(1, "Must be at least 1 characters")
      .max(30, "Must be a maximum of 30 characters"),
    nationaltyId: yup
      .string()
      .required("This field is required")
      .matches(/^[0-9]{11}$/, "nationaltyId must be   11 characters"),

    email: yup
      .string()
      .required("This field is required")
      .email("Invalid e-mail")
      .min(4, "Must be at least 4 characters")
      .max(30, "Must be a maximum of 30 characters"),
    password: yup
      .string()
      .required("This field is required")
      .matches(
        /^.*(?=.{6,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
        "Password must contain at least 6 characters, one uppercase, one number and one special case character"
      ),
    passwordConfirm: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords must match"),
  });

  // initial values
  const initialValues = {
    firstName: "",
    lastName: "",
    nationaltyId: "",
    birthDate: "",
    passwordConfirm: "",
    email: "",
    password: "",
  };

  // handleSubmit
  const onSubmit = (values) => {
    let data = {
      firstName: values.firstName,
      lastName: values.lastName,
      nationaltyId: values.nationaltyId,
      birthDate: values.birthDate,

      email: values.email,
      password: values.password,
    };
    axios
      .post("http://localhost:8080/api/candidates/add", data)
      .then((res) => {
        if (res.success === true) {
          formik.handleReset();
          setOpen(false);
          toast.success(res.message);
        } else {
          toast.success(res.message);
        }
      })
      .catch((err) => console.log(err));
  };

  // formik
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <div>
      <Modal
        size="mini"
        closeIcon
        dimmer="blurring"
        open={open}
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
      >
        <Form style={{ margin: "20px" }} onSubmit={formik.handleSubmit}>
          <Form.Input
            label="First Name"
            error={formik.touched.firstName && formik.errors.firstName}
            placeholder="First Name"
            {...formik.getFieldProps("firstName")}
          />
          <Form.Input
            label="Last Name"
            placeholder="Last Name"
            {...formik.getFieldProps("lastName")}
            error={formik.touched.firstName && formik.errors.firstName}
          />
          <Form.Input
            label="Nationalty Number"
            placeholder="Nationalty Number"
            {...formik.getFieldProps("nationaltyId")}
            error={formik.touched.nationaltyId && formik.errors.nationaltyId}
          />
          <Form.Input
            label="Birth Date"
            type="date"
            placeholder="yyyy-MM-dd"
            {...formik.getFieldProps("birthDate")}
            error={formik.touched.birthDate && formik.errors.birthDate}
          />

          <Form.Input
            label="Email"
            placeholder="Email"
            {...formik.getFieldProps("email")}
            error={formik.touched.email && formik.errors.email}
          />
          <Form.Input
            label="Password"
            placeholder="Password"
            type="password"
            {...formik.getFieldProps("password")}
            error={formik.touched.password && formik.errors.password}
          />
          <Form.Input
            label="Password Again"
            type="password"
            placeholder="Password Again"
            {...formik.getFieldProps("passwordConfirm")}
            error={
              formik.touched.passwordConfirm && formik.errors.passwordConfirm
            }
          />

          <Form.Button negative type="submit">
            Submit{" "}
          </Form.Button>
        </Form>
      </Modal>

      {/* Form for Companies */}
      <Modal
        size="mini"
        closeIcon
        dimmer="blurring"
        open={openCompany}
        onClose={() => setOpenCompany(false)}
        onOpen={() => setOpenCompany(true)}
      >
        <Form style={{ margin: "20px" }}>
          {/* <Form.Group widths="equal"> */}
          <Form.Input label="Company Name" placeholder="Company Name" />
          <Form.Input
            label="Company Web Adress"
            placeholder="Company Web Adress"
          />
          <Form.Input label="Phone Number" placeholder="Phone Number" />
          <Form.Input label="Email" placeholder="Email" />
          <Form.Input label="Password" placeholder="Password" />
          <Form.Input label="Password Again" placeholder="Password Again" />
          {/* </Form.Group> */}
          <Form.Checkbox label="I agree to the Terms and Conditions" />
          <Form.Button negative onClick={() => setOpenCompany(false)}>
            Submit{" "}
          </Form.Button>
        </Form>
      </Modal>

      <Button color="red" onClick={signIn}>
        Sign In
      </Button>
      <Button color="red">
        <Dropdown text="Sign Up" pointing labeled floating>
          <Dropdown.Menu>
            <Dropdown.Item onClick={() => setOpen(true)}>
              <Icon name="user" />
              Candidate
            </Dropdown.Item>
            <Dropdown.Item onClick={() => setOpenCompany(true)}>
              <Icon name="factory" />
              Company
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Button>
    </div>
  );
}
