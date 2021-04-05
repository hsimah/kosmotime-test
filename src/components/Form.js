import { useFormik } from "formik";
import { useContext, useEffect } from "react";
import * as Yup from "yup";
import { FormContext } from "../App";

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
const nameRegExp = /[a-zA-Z]{3,30}/;

const Form = () => {
  const { setValid } = useContext(FormContext);

  const { handleSubmit, handleChange, values, errors, touched } = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      blog_url: "",
    },
    validationSchema: Yup.object().shape({
      name: Yup.string()
        .matches(nameRegExp, "Phone number is not valid")
        .required("Name is required"),
      email: Yup.string()
        .email("Please input correct email")
        .required("Email is required"),
      phone: Yup.string().matches(phoneRegExp, "Phone number is not valid"),
      blog_url: Yup.string().url("Do not match"),
    }),
    onSubmit: (values) => {
      if (Object.keys(errors).length) {
        setValid(false);
      } else {
        setValid(true);
      }
    },
  });

  useEffect(() => {
    if (!Object.keys(errors).length && Object.keys(touched).length) {
      setValid(true);
    } else {
      setValid(false);
    }
  }, [errors, setValid, touched]);

  return (
    <div className="row">
      <h1 className="text-center">Form Validation</h1>
      <form onSubmit={handleSubmit}>
        <h3>Name:</h3>
        <input
          type="text"
          name="name"
          value={values.name}
          onChange={handleChange}
        />
        <h3>Email:</h3>
        <input
          type="email"
          name="email"
          value={values.email}
          onChange={handleChange}
        />
        <h3>Phone:</h3>
        <input
          type="phone"
          name="phone"
          value={values.phone}
          onChange={handleChange}
        />
        <h3>Blog URL:</h3>
        <input
          type="text"
          name="blog_url"
          value={values.blog_url}
          onChange={handleChange}
        />
        <div className="small-6 small-centered text-center columns">
          <button
            type="submit"
            className="button success expand round text-center"
          >
            Verify
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
