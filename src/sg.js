import React from 'react'
import './sg.css' 
import {link} from "react-router-dom";
const Sg = () => {
  return (
    <div>
      
       <section class="forms-section">
  <h1 class="section-title">signup Forms</h1>
  <div class="forms">
    <div class="form-wrapper is-active">
      <button type="button" class="switcher">
        signup
        <span class="underline"></span>
      </button>
      <form class="form form-login">
        <fieldset>
          <legend>Please, enter your email and password for login.</legend>
          <div class="input-block">
              <input type="username" required/>
            <label for="login-email">username</label>

          
          </div>
          <div class="input-block">
              <input type="rollnumber" required/>
            <label for="login-email">rollnumber</label>
          
          </div>
          <div class="input-block">
              <input type="email" required/>
            <label for="login-email">E-mail</label>
          
          </div>
          <div class="input-block">
           
            <input id="login-password" type="password" required/>
            <label for="login-password">Password</label>
          </div>
          <div class="input-block">
          <input id="login-password" type="password" required/>
            <label for="login-password">confrim Password</label>
            </div>
        </fieldset>
        <button type="submit" class="btn-login">signup</button>
      </form>
    </div>
   </div>   
   </section>
   </div>
  )
} 

export default Sg


