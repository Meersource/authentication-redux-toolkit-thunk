import { useState, useRef } from "react";
import { useDispatch } from "react-redux/es/exports";
import { authActions } from "../../store/slices/authSlice";
import { useNavigate } from "react-router-dom";
import { FetchUser } from "../../store/slices/authSlice";
import classes from "./AuthForm.module.css";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const dispatch = useDispatch();
  const history = useNavigate();

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const eneteredEmail = emailInputRef.current.value;
    const eneteredPassword = passwordInputRef.current.value;
    setIsLoading(true);
    let url;

    if (isLogin) {
      // url ="https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBxvka0YRuP-tBa2TCMkVdEFb0S1jd0ugQ";
      // return res.json()
      const cardentials = {
        email: eneteredEmail,
        password: eneteredPassword,
      }
      dispatch(FetchUser(cardentials))
    } else {
      url = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBxvka0YRuP-tBa2TCMkVdEFb0S1jd0ugQ";
    

    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: eneteredEmail,
        password: eneteredPassword,
        returnSecureToken: true,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        setIsLoading(false);
        if (res.ok) {
          // ...
          return res.json();
        } else {
          return res.json().then((data) => {
            let errorMessage = "Authentication failed!";

            throw new Error(errorMessage);
          });
        }
      })
      .then((data) => {
        dispatch(authActions.Login({ token: data.idToken }));

        history("/", {replace: true});

      })
      .catch((err) => {
        alert(err.message);
      });
  };
}

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? "Login" : "Sign Up"}</h1>
      <form onSubmit={handleSubmit}>
        <div className={classes.control}>
          <label htmlFor="email">Your Email</label>
          <input ref={emailInputRef} type="email" id="email" required />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Your Password</label>
          <input
            ref={passwordInputRef}
            type="password"
            id="password"
            required
          />
        </div>
        <div className={classes.actions}>
          <button>{isLogin ? "Login" : "Create Account"}</button>
          <button
            type="button"
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? "Create new account" : "Login with existing account"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
