import { loginFields } from "../src/constants";
import { useState } from "react";
import Input from "./Input";
import FormAction from "./FormAction";
import axios from "axios";
const { API_BASE_URL } = require("../constants");

const fields = loginFields;
let fieldsState = {};
fields.forEach((field) => (fieldsState[field.id] = ""));

const Login = () => {
  const [loginState, setLoginState] = useState(fieldsState);

  const handleChange = (e) => {
    setLoginState({ ...loginState, [e.target.id]: e.target.value });
  };
  const handleSubmit = (e) => {
    const { email, password } = loginState;
    e.preventDefault();
    authenticateUser();
  };
  const authenticateUser = () => {
    axios
      .post(API_BASE_URL + "users/login", loginState)
      .then((response) => {
        // console.log(response.data);
        alert("Login successful");
        window.localStorage.setItem("token", response.data.accessToken);
        console.log(response.data.accessToken);
        window.location.href = "/home";
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
        <div className="space-y-px">
          {fields.map((field) => (
            <Input
              key={field.id}
              handleChange={handleChange}
              value={loginState[field.id]}
              labelText={field.labelText}
              labelFor={field.labelFor}
              id={field.id}
              name={field.name}
              type={field.type}
              isRequired={field.isRequired}
              placeholder={field.placeholder}
            />
          ))}
        </div>
        <FormAction handleSubmit={handleSubmit} text="Login" />
      </form>
    </>
  );
};

export default Login;
