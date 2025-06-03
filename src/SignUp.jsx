import React from 'react';

import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { registerUser } from './Store'; // Make sure this action is correctly defined
import './SignUp.css';
import { useForm } from 'react-hook-form';


function SignUp() {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const myfunc = (data) => {
    dispatch(registerUser(data));
    alert("Registration successful");
    navigate("/SignIn");
  };

  return (
    <>
      
      <form onSubmit={handleSubmit(myfunc)}>
        <h2 style={{ textAlign: 'center' }}>Registration Form</h2>
        <input type="text" placeholder="username" {...register("username")} />
        <br />
        <input type="email" placeholder="Email" {...register("email")} />
        <br />
        <input type="password" placeholder="password" {...register("password")} />
        <br />
        <label>
          <input type="radio" value="male" {...register("gender")} />
          Male
        </label>
        <label>
          <input type="radio" value="female" {...register("gender")} />
          Female
        </label>
        <label>
          <input type="radio" value="other" {...register("gender")} />
          Other
        </label>
        <br />
        <button type="submit">Submit</button>
        <p>
        Already have an account? <a href="/SignIn">Sign In</a>
      </p>
        <button type="reset">Reset</button>
      </form>
    </>
  );
}

export default SignUp;