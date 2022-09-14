import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { useSelector } from "react-redux";
import PublicRoutes from "./routes/PublicRoutes";
import ProtectedRoutes from "./routes/ProtectedRoutes";
import Layout from "./components/Layout/Layout";
import UserProfile from "./components/Profile/UserProfile";
import AuthPage from "./pages/AuthPage";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";

function App() {
  const isLogin = useSelector((state) => state?.auth?.isLiggedIn);
  console.log(isLogin);
  return (
    <Layout>

      <Routes>

        <Route path="/" element={<PublicRoutes/>} >
          <Route path="/auth" element={<AuthPage />}>
          </Route>
        </Route>


        <Route path="/" element={<ProtectedRoutes/>}> 

        <Route path="/" index element={<HomePage />}> </Route>
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/products" element={<ProductPage />} />
        
        </Route>
        


      </Routes>

    </Layout>
  );
}

export default App;
