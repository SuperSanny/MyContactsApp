import { signupFields } from "../src/constants";
import { useState } from "react";
import Input from "./Input";
import FormAction from "./FormAction";
import axios from "axios";
const { API_BASE_URL } = require("../constants");
const fields = signupFields;
let fieldsState = {};
fields.forEach((field) => (fieldsState[field.id] = ""));

const Signup = () => {
  const [signupState, setSignupState] = useState(fieldsState);
  // const [mismatch, setMismatch] = useState(false);

  const handleChange = (e) => {
    setSignupState({ ...signupState, [e.target.id]: e.target.value });
  };
  const handleSubmit = (e) => {
    const { password, confirmPassword } = signupState;
    e.preventDefault();
    const passwordMatch =
      password !== confirmPassword
        ? console.log("Passworrd mismatch")
        : createAccount();
  };
  const createAccount = () => {
    axios
      .post(API_BASE_URL + "users/register", signupState)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
        <div className="">
          {fields.map((field) => (
            <Input
              key={field.id}
              handleChange={handleChange}
              value={signupState[field.id]}
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
        <FormAction handleSubmit={handleSubmit} text="Signup" />
      </form>
    </>
  );
};

export default Signup;
