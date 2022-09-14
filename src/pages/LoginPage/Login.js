import React, { useState } from "react";
import "./login.css";
import { login } from "../../app/authSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import MainLayout from "../../layout/MainLayout";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [form, setForm] = useState({});

  function submitHandler(e) {
    e.preventDefault();

    // Make POST request to the /login API endpoint

    // if successful => JWT token is returned
    dispatch(login(form.username));
    navigate("/", { replace: true });
    // if rejected =>  error telling u what's going on (username doesn't exist)
  }

  function onChangeHandler(event) {
    const name = event.target.name;
    const value = event.target.value;
    setForm((values) => ({ ...values, [name]: value }));

    console.log(form);
  }

  return (
    <MainLayout>
      <div className="login__container">
        <a
          className="logo"
          href="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
            alt="netflix"
          />
        </a>
        <form onSubmit={submitHandler}>
          <div className="login">
            <h1 className="login__title">Sign In</h1>
            <div className="login__group">
              <label
                className="login__group__label "
                htmlFor="username"
              ></label>
              <input
                className="login__group__input"
                type="username"
                placeholder="username"
                required={true}
                name="username"
                id="username"
                value={form.username || ""}
                onChange={onChangeHandler}
              />
            </div>
            <label className="login__group__label" htmlFor="password"></label>
            <div className="login__group">
              <input
                className="login__group__input"
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                value={form.password || ""}
                onChange={onChangeHandler}
                required={true}
              />
            </div>
            <button className="login__sign-in" type="submit">
              Sign In
            </button>
            <div className="login__secondary-cta">
              <p className="login__secondary-cta__text">Remember me</p>
              <p className="login__secondary-cta__text login__secondary-cta__text--need-help">
                Need help?
              </p>
            </div>
          </div>
        </form>
      </div>
    </MainLayout>
  );
}

export default Login;
