// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    password: "",
    email: "",
    dob: "",
    city: "",
    state: "",
    hobbies: [],
  });

  const [tableData, setTableData] = useState([]);

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setFormData((prevData) => {
        const hobbies = checked
          ? [...prevData.hobbies, value]
          : prevData.hobbies.filter((hobby) => hobby !== value);
        return { ...prevData, hobbies };
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setTableData([...tableData, formData]);
    setFormData({
      name: "",
      password: "",
      email: "",
      dob: "",
      city: "",
      state: "",
      hobbies: [],
    });
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", margin: "20px" }}>
      <h2>Fill the Form</h2>
      <div
        style={{
          border: "1px solid black",
          padding: "20px",
          width: "400px",
          marginBottom: "20px",
        }}
      >
        <form onSubmit={handleSubmit}>
          <label>Name:</label>
          <br />
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <br />
          <br />
          <label>Password:</label>
          <br />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <br />
          <br />
          <label>Email:</label>
          <br />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <br />
          <br />
          <label>DOB:</label>
          <br />
          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            required
          />
          <br />
          <br />
          <label>City:</label>
          <br />
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            required
          />
          <br />
          <br />
          <label>State:</label>
          <br />
          <input
            type="text"
            name="state"
            value={formData.state}
            onChange={handleChange}
            required
          />
          <br />
          <br />
          <label>Hobbies:</label>
          <br />
          <input
            type="checkbox"
            value="Playing Cricket"
            checked={formData.hobbies.includes("Playing Cricket")}
            onChange={handleChange}
          />{" "}
          Playing Cricket
          <br />
          <input
            type="checkbox"
            value="Playing TT"
            checked={formData.hobbies.includes("Playing TT")}
            onChange={handleChange}
          />{" "}
          Playing TT
          <br />
          <input
            type="checkbox"
            value="Watching Movies"
            checked={formData.hobbies.includes("Watching Movies")}
            onChange={handleChange}
          />{" "}
          Watching Movies
          <br />
          <input
            type="checkbox"
            value="Listening Songs"
            checked={formData.hobbies.includes("Listening Songs")}
            onChange={handleChange}
          />{" "}
          Listening Songs
          <br />
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>

      <h2>Submitted Data</h2>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th style={{ border: "1px solid black", padding: "8px" }}>Name</th>
            <th style={{ border: "1px solid black", padding: "8px" }}>
              Password
            </th>
            <th style={{ border: "1px solid black", padding: "8px" }}>Email</th>
            <th style={{ border: "1px solid black", padding: "8px" }}>DOB</th>
            <th style={{ border: "1px solid black", padding: "8px" }}>City</th>
            <th style={{ border: "1px solid black", padding: "8px" }}>State</th>
            <th style={{ border: "1px solid black", padding: "8px" }}>
              Hobbies
            </th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((data, index) => (
            <tr key={index}>
              <td style={{ border: "1px solid black", padding: "8px" }}>
                {data.name}
              </td>
              <td style={{ border: "1px solid black", padding: "8px" }}>
                {data.password}
              </td>
              <td style={{ border: "1px solid black", padding: "8px" }}>
                {data.email}
              </td>
              <td style={{ border: "1px solid black", padding: "8px" }}>
                {data.dob}
              </td>
              <td style={{ border: "1px solid black", padding: "8px" }}>
                {data.city}
              </td>
              <td style={{ border: "1px solid black", padding: "8px" }}>
                {data.state}
              </td>
              <td style={{ border: "1px solid black", padding: "8px" }}>
                {data.hobbies.join(", ")}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
