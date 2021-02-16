import React, { useEffect, useState, useRef } from "react";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import "./Login.css";

const Login = () => {
  let [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const emailRef = useRef();
  const passwordRef = useRef();
  const history = useHistory();

  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      history.push("/dashboard");
    } catch {
      setError("Failed to LogIn");
    }

    setLoading(false);
  };

  if (loading) {
    return <p>Loading....</p>;
  }
  return (
    <div>
      <h1 className='headerTitle'>The Bear.One</h1>

      <form onSubmit={handleSubmit} className='FormBox'>
        <h2 className='FormHeader'>Log in 👋</h2>
        {error && <p>{error}</p>}

        <div className='Label-InputBox'>
          <label htmlFor='email' className='form-label'>
            Email
          </label>
          <input
            type='email'
            name='email'
            placeholder='MyEmailIsDope@examplemail.com'
            className='input-box'
            ref={emailRef}
          />
        </div>

        <div className='Label-InputBox'>
          <label htmlFor='password' className='form-label'>
            Password
          </label>
          <input
            type='password'
            name='password'
            className='input-box'
            ref={passwordRef}
          />
        </div>

        <button disabled={loading} className='Login-button' type='submit'>
          <p className='Login-button-text'>Log in</p>
        </button>
        <Link to='/signup' className='account-exists'>
          Dont have an account?
        </Link>
      </form>
    </div>
  );
};

export default Login;
