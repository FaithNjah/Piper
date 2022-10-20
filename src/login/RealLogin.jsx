import React from "react";
// import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

const RealLogin = () => {
  // step 1: We want to perform some operation on username and password so we declare them as one(initialvalues) aka outer variables created
  const initialValues = { username: "", password: "" };

  // step 2: use usestate for the changing of state or process for intialvalues, this use state is named formvalues
  const [formValues, setFormValues] = useState(initialValues);

  // step 10: because error messages and proper messages would be changing we have to use usestate for them, their initial would be empty
  const [formErrors, setFormErrors] = useState({});

  // step 13:
  const [isSubmit, setIsSubmit] = useState(false);

  //step 4: function to handle the change
  const handleChange = (e) => {
    // step 5: create variable to handle the process or logic in this particular function aka inner variables created
    const { name, value } = e.target;
    //step 6: get formvalues, i.e, actual value. Get their value and use name as key by placing it in a square bracket
    setFormValues({ ...formValues, [name]: value });
    console.log(formValues);
  };

  // step 8: create submit function
  const handleSubmit = (e) => {
    e.preventDefault();
    //update us with the current error if any
    setFormErrors(validate(formValues));
    isSubmit(validate(formValues));
  };

  // step 12: use effect to properly submit
  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formValues).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);

  // step 9: create validate function and pass in values as the parameter
  const validate = (values) => {
    // step 11: create it variable
    const errors = {};
    if (!values.username) {
      errors.username = "username is required";
    }
    if (!values.password) {
      errors.password = "password is required";
    }
    //step 12: return error to update the error state
    return errors;
  };

  return (
    <div
      className="bg-[#EFF7FF] h-[100vh] w-[100%]"
      // step 7: listen for a submit event
      onSubmit={handleSubmit}
    >
      <pre>{JSON.stringify(formValues, undefined, 2)}</pre>

      <div className="h-[120px] w-[100%] border-solid border-2 border-[0, 0, 0, 0.25]"></div>

      <div className="pt-[80px]">
        <form className="grid grid-cols-1 gap-1 m-[10px] h-[450px] w-[718px] bg-[white] top-[50px] left-[24%] rounded-[30px] pt-[100px] ml-[25%]">
          <p>{formErrors.username}</p>
          <label className="  ml-[70px] font-mono font-semibold text-[25px] text-[#082183]">
            Username
          </label>

          {/*step 3: Bind the input field with the formValues, then, create a function*/}
          <input
            type="text"
            name="username"
            className="bg-[#F1F1F1] border-solid border-[1px] border-[#082183] rounded-[10px] w-[554px] h-[51px]  ml-[70px] mt-[-40px]"
            value={formValues.username}
            onChange={handleChange}
          />

          <p>{formErrors.password}</p>
          <label className="  ml-[70px] mt-[0px] font-mono font-semibold text-[25px] text-[#082183]">
            Password
          </label>
          <input
            type="password"
            className="bg-[#F1F1F1] border-solid border-[1px] border-[#082183] rounded-[10px] w-[554px] h-[51px]  ml-[70px] mt-[-40px]"
            value={formValues.password}
            name="password"
            onChange={handleChange}
          />

          {/* <Link to={"/homepage"}> */}
          <button className="bg-[#082183] h-[50px] w-[146px] rounded-[15px] ml-[70px] font-mono font-semibold text-[15px] text-[#ffffff]">
            Login
          </button>
          {/* </Link> */}
        </form>
      </div>
    </div>
  );
};
export default RealLogin;
