import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginuser } from './Store';
import { useForm } from 'react-hook-form';

function SignIn() {
    const {register,handleSubmit} = useForm();
    let dispatch = useDispatch();
    let navigate = useNavigate();

    let myfunc = (data)=>{
        dispatch(loginuser(data));
        navigate("/Home");
    }

  return (
    <>
    
    <form onSubmit={handleSubmit(myfunc)}>
        <h2 style={{ textAlign: 'center' }}>User Login</h2>

        <input type='text' placeholder='username'{...register('username')}/>
        <br/>
        <input type='password' placeholder='password'{...register('password')}/>
        <br/>
        <button type='submit'>Submit</button>
    </form>
    <p>
        New user ?<a href='/SignUp'>SignUp</a>
    </p>
    </>
  )
}

export default SignIn