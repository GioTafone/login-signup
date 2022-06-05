import React from 'react';
import { useState } from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = React.useState({
    email: "",
    password: "",
    passwordConfirm: "",
    joinedNewsletter: true
  })

  function handleChange(event) {
    const {name, value, type, checked} = event.target
    setFormData(prevFormData => ({
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value
    }))
  } 

  function handleSubmit(event) {
    event.preventDefault()
    if(formData.password === formData.passwordConfirm) {
        console.log("Successfully signed up")
    } else {
      alert("Password do not match")
      console.log("Passwords do not match")
      return
    }
    
    if(formData.joinedNewsletter) {
        console.log("Thanks for signing up for our newsletter!")
    }
}

  return (
    <div className="form-login">
          <form className="form" onSubmit={handleSubmit}>
            <input 
                type="email"
                placeholder="Email Address"
                className="login--input"
                name="email"
                onChange={handleChange}
                value={formData.email}
            /> <br />
            <input 
                type="password"
                placeholder="Password"
                className="login--input"
                name="password"
                onChange={handleChange}
                value={formData.password}
            /> <br />
            <input 
                type="password"
                placeholder="Confirm password"
                className="login--input"
                name="passwordConfirm"
                onChange={handleChange}
                value={formData.passwordConfirm}
            />
            <div className="form--marketing">
              <input
                id="okayToEmail"
                type="checkbox"
                name="joinedNewsletter"
                onChange={handleChange}
                checked={formData.joinedNewsletter}
                        
              />
              <label htmlFor="okayToEmail">Sign me up for the newsletter</label>
            </div> <br />
            <button className="login--submit">Sign up</button>
        </form>
    </div>
  );
}

export default App;
