import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import "./SignUp.css";

const SignUp = () => {
  let [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const usernameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  const { signup } = useAuth();

  const fetchData = async () => {
    let response = await fetch("/api");
    let dataBody = await response.json();

    setData(dataBody);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (passwordRef.current.value !== confirmPasswordRef.current.value) {
      return setError("Passwords dont match");
    }

    try {
      setError("");
      setLoading(true);
      await signup(
        usernameRef.current.value,
        emailRef.current.value,
        passwordRef.current.value
      );
    } catch {
      setError("Failed to create an account");
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
        <h2 className='FormHeader'>Sign Up 👋</h2>
        {error && <p>{error}</p>}

        <div className='Label-InputBox'>
          <label htmlFor='username' className='form-label'>
            Username
          </label>
          <input
            type='text'
            name='username'
            placeholder='CoolUsername...'
            className='input-box'
            ref={usernameRef}
          />
        </div>

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

        <div className='Label-InputBox'>
          <label htmlFor='confirm-password' className='form-label'>
            Confirm Password
          </label>
          <input
            type='password'
            name='confirm-password'
            className='input-box'
            ref={confirmPasswordRef}
          />
        </div>

        <button disabled={loading} className='Login-button' type='submit'>
          <p className='Login-button-text'>Log in</p>
        </button>
        <Link to='/login' className='account-exists'>
          Already have an account?
        </Link>
      </form>
    </div>
  );
};

export default SignUp;
