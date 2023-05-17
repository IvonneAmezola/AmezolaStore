import React from "react";
import { useFormik } from "formik";

const validate = (values) => {
  const errors = {};

  if (!values.firstName) {
    errors.firstName = "Required";
  } else if (values.firstName.length > 15) {
    errors.firstName = "Must be 15 characters or less";
  }

  if (!values.lastName) {
    errors.lastName = "Required";
  } else if (values.lastName.length > 20) {
    errors.lastName = "Must be 20 characters or less";
  }
  if (!values.phone) {
    errors.phone = "Required";
  } else if (values.phone.length >= 10) {
    errors.phone = "Must be 10 characters";
  }
  if (!values.address) {
    errors.address = "Required";
  } else if (values.address.length > 10) {
    errors.address = "Must be more than 10 characters";
  }

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  return errors;
};

const Formulario = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      phone: "",
      address: "",
      email: "",
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 4));
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <label htmlFor="firstName">Nombre</label>
        <input
          id="firstName"
          name="firstName"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.firstName}
        />
      </div>
      
      {formik.errors.firstName ? <div>{formik.errors.firstName}</div> : null}
      <br></br>

      <label htmlFor="lastName">Last Name</label>
      <input
        id="lastName"
        name="lastName"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.lastName}
      />
      {formik.errors.phone ? <div>{formik.errors.phone}</div> : null}
      <label htmlFor="phone">Last Name</label>
      <input
        id="phone"
        name="phone"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.phone}
      />
      {formik.errors.phone ? <div>{formik.errors.phone}</div> : null}

      <div>
        <label htmlFor="email">Email Address</label>
        <input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
      </div>

      {formik.errors.email ? <div>{formik.errors.email}</div> : null}
      <br></br>
      
      <p>
        Recuerda que todos los pedidos tienen un tiempo de producción de
        30 Dias hábiles
      </p>
      <br></br>
      <button className="btn" type="submit">Pagar</button>
    </form>
  );
};

export default Formulario;
