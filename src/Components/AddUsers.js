import React from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import axios from "axios";
import * as Yup from "yup";

export function Addpro() {
  let navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      name: "",
      price: "",
      model: "",
      units: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Enter the Student name *"),
      price: Yup.number().required("Enter the Rank obtained *"),
      model: Yup.string().required("Enter the Subject *"),
      units: Yup.number().required("Enter mark *"),
    }),
    onSubmit: (values) => {
      saveHandeler(values);
      console.log(values);
    },
  });

  async function saveHandeler(value) {
    let respon = await axios.post(
      "https://6332a66e573c03ab0b4d2f59.mockapi.io/user",
      value
    );

    navigate("/all");
  }

  return (
    <div className="add-product col-8 mt-5">
      <h2 className="mb-4">Add Product</h2>

      <form onSubmit={formik.handleSubmit}>
        <label for="name">Student Name</label>
        <input
          id="name"
          name="name"
          type="text"
          class="form-control"
          onChange={formik.handleChange}
          value={formik.values.name}
        />
        {formik.touched.name && formik.errors.name ? (
          <div style={{ color: "red" }}>{formik.errors.name}</div>
        ) : null}
        <br></br>
        <label for="price">Student Rank</label>
        <input
          id="price"
          name="price"
          type="number"
          class="form-control"
          onChange={formik.handleChange}
          value={formik.values.price}
        />
        {formik.touched.price && formik.errors.price ? (
          <div style={{ color: "red" }}>{formik.errors.price}</div>
        ) : null}
        <br></br>
        <label for="model"> Subject</label>
        <input
          id="model"
          name="model"
          type="text"
          class="form-control"
          onChange={formik.handleChange}
          value={formik.values.model}
        />
        {formik.touched.model && formik.errors.model ? (
          <div style={{ color: "red" }}>{formik.errors.model}</div>
        ) : null}
        <br></br>
        <label for="unit">Mark</label>
        <input
          id="unit"
          name="units"
          type="number"
          class="form-control"
          onChange={formik.handleChange}
          value={formik.values.units}
        />
        {formik.touched.units && formik.errors.units ? (
          <div style={{ color: "red" }}>{formik.errors.units}</div>
        ) : null}
        <br></br>

        <button className="btn btn-primary" type="submit">
          Add Student
        </button>
      </form>
    </div>
  );
}
