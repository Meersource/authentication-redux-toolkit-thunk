import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../../store/slices/authSlice";

import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  const dispatch = useDispatch();
  const isLogin = useSelector((state) => state?.auth?.isLiggedIn);
  console.log(isLogin);
  return (
    <header className={classes.header}>
      <Link to="/">
        <div className={classes.logo}>React Auth</div>
      </Link>
      <nav>
        <ul>
          {!isLogin && (
            <li>
              <Link to="/auth">Login</Link>
            </li>
          )}

          {isLogin && (
            <>
              <li>  <Link to="/products">Products</Link> </li>


              <li>
                <Link to="/profile">Profile</Link>
              </li>


            </>
          )}
          {isLogin && (
            <li>
              <button onClick={() => dispatch(authActions.Logout())}>
                Logout
              </button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
