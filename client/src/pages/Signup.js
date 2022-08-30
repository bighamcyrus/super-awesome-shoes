import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../utils/mutations";
// import "./signup.css";
import Auth from "../utils/auth";
const Signup = () => {
  const [formState, setFormState] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [addUser, { error, data }] = useMutation(ADD_USER);
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
      const { data } = await addUser({
        variables: { ...formState },
      });
      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <main className="display">
      <div className="">
        <div className="">
          <h4 className="head" style={{fontSize: '35px', fontFamily: 'Silkscreen, cursive', textAlign: 'center'}}>Sign Up</h4>
          <div className="">
            {data ? (
              <p>
                Success! You may now head{" "}
                <Link to="/">back to the homepage.</Link>
              </p>
            ) : (
              <form onSubmit={handleFormSubmit}>
                <input
                  className="line"
                  placeholder="Create Username"
                  name="username"
                  type="text"
                  style={{borderRadius: '18px', textAlign: 'center'}}
                  value={formState.name}
                  onChange={handleChange}
                />
                  <input
                  className="line"
                  placeholder="Create Password"
                  name="password"
                  type="password"
                  style={{borderRadius: '18px', textAlign: 'center'}}
                  value={formState.password}
                  onChange={handleChange}
                />
                <input
                  className="line"
                  placeholder="Enter Email"
                  name="email"
                  type="email"
                  style={{borderRadius: '18px', textAlign: 'center'}}
                  value={formState.email}
                  onChange={handleChange}
                />
                <button
                  className="but"
                  style={{ cursor: "pointer", width: '100px', height: '30px', borderRadius: '4px', fontSize: '16px',
                  color: '#FFB300', justifyContent: 'center', backgroundColor: 'black', borderColor: 'black' }} type="submit">Submit
                </button>
              </form>)}
            {error && (
              <div className="my-3 p-3 bg-danger text-white">
                {error.message}</div>)}
          </div>
        </div>
      </div>
    </main>
  );
};
export default Signup;