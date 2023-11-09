import React from 'react'
import './lg.css'


const lg =  () => {
  return (
    <div>

       <section class="forms-section">
  <h1 class="section-title">Login Forms</h1>
  <div class="forms">
    <div class="form-wrapper is-active">
      <button type="button" class="switcher">
        Login
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
              <input type="email" required/>
            <label for="login-email">E-mail</label>
          
          </div>
          <div class="input-block">
            
            <input id="login-password" type="password" required/>
            <label for="login-password">Password</label>
          </div>
        </fieldset>
        <button type="submit" class="btn-login">Login</button>
      </form>
    </div>
   </div>   
</section>
    </div>
    
  )
}
export default lg
