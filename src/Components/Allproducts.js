import React, { useContext, useEffect, useState } from "react";
import { prodContext } from "../App";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export function Allproducts() {
  useEffect(() => {
    getData();
  }, []);
  let context = useContext(prodContext);
  let navigate = useNavigate();

  async function getData() {
    let respon = await axios.get(
      "https://6332a66e573c03ab0b4d2f59.mockapi.io/user"
    );
    context.setData(respon.data);
  }

  async function deleteItem(id) {
    let respon = await axios.delete(
      "https://6332a66e573c03ab0b4d2f59.mockapi.io/user" + id
    );
    getData();
  }

  return (
    <div className="products col-12">
      <h2>All Users</h2>
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">No</th>
            <th scope="col">Student Name</th>
            <th scope="col">Rank</th>
            <th scope="col">Subject</th>
            <th scope="col">Mark</th>

            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {context.data.map((e, i) => {
            return (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{e.name}</td>
                <td>{e.price}</td>
                <td>{e.model}</td>
                <td>{e.units}</td>
                <td>
                  <button
                    className="btn btn-info"
                    onClick={() => {
                      navigate("/edit-product/" + e.id);
                    }}
                  >
                    Edit
                  </button>
                  &nbsp;&nbsp;
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteItem(e.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
