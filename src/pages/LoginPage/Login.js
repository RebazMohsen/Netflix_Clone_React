import React from "react";
import "./login.css";
function Login() {
  return (
    <div>
      <a className="logo" href=" ">
        <img
          src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt="netflix"
        />
      </a>
      <div className="login">
        <h1 className="login__title">Sign In</h1>
        <div className="login__group">
          <input
            className="login__group__input"
            type="text"
            placeholder="Email or phone number"
            required="true"
          />
          <label className="login__group__label "></label>
        </div>
        <div className="login__group">
          <input
            className="login__group__input"
            type="password"
            placeholder="Password"
            required="true"
          />
          <label className="login__group__label"></label>
        </div>
        <button className="login__sign-in" type="button">
          Sign In
        </button>
        <div className="login__secondary-cta">
          <a className="login__secondary-cta__text" href=" ">
            Remember me
          </a>
          <a
            className="login__secondary-cta__text login__secondary-cta__text--need-help"
            href=" "
          >
            Need help?
          </a>
        </div>
      </div>
    </div>
  );
}

export default Login;
