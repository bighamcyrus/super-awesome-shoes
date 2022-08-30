import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../utils/mutations";
import "./login.css";
import Auth from "../utils/auth";
const Login = (props) => {
  const [formState, setFormState] = useState({ username: "", password: "" });
  const [login, { error, data }] = useMutation(LOGIN_USER);
  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };
  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
      const { data } = await login({
        variables: { ...formState },
      });
      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }
    // clear form values
    setFormState({
      username: "",
      password: "",
    });
  };
  return (
    <main className="display">
      <div className="">
        <div className="">
          <h4 className="head" style={{fontSize: '35px', fontFamily: 'Silkscreen, cursive', textAlign: 'center'}} >Login</h4>
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
                  placeholder="Username"
                  name="username"
                  type="username"
                  style={{borderRadius: '18px', textAlign: 'center'}}
                  value={formState.username}
                  onChange={handleChange}
                />
                <input
                  className="line"
                  placeholder="Password"
                  name="password"
                  type="password"
                  style={{borderRadius: '18px', textAlign: 'center'}}
                  value={formState.password}
                  onChange={handleChange}
                />
                <button
                  className="but"
                  style={{ cursor: "pointer", width: '85px', height: '30px', borderRadius: '4px', fontSize: '16px',
                  color: '#FFB300', justifyContent: 'center', backgroundColor: 'black', borderColor: 'black' }}
                  type="submit">Submit
                </button>
                <button
                  className="but"
                  style={{ cursor: "pointer", width: '85px', height: '30px', borderRadius: '4px', fontSize: '16px',
                  color: '#FFB300', justifyContent: 'center', backgroundColor: 'black', borderColor: 'black' }}
                  type="submit">Sign Up
                </button>
              </form>
            )}
            {error && <div className="line">{error.message}</div>}
          </div>
        </div>
      </div>
    </main>
  );
};
export default Login;