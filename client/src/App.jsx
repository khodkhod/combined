import { Navigate, Route, Routes } from "react-router-dom";
import Register from "./components/Register";
import Nav from "./components/Nav";
import ListOfStudent from "./components/List-of-student";
import Signin from "./components/Signin";
import Product from "./components/Product";
import ListOfProduct from "./components/List-Of-Product";
import NotFound from "./components/Not-found";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import UserProfile from "./components/UserProfile";
import Users from "./components/Users";
import Sendmailer from "./components/sendmailer";


const App = () => {
  let authToken = localStorage.getItem("token");
  console.log(authToken);

  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Sendmailer" element={<Sendmailer />} />
        <Route path="/list-of-student" element={<ListOfStudent />} />
        <Route path="/register" element={<Register />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/products" element={<Product />} />
        <Route path="/products/:product" element={<ListOfProduct />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/user/:username" element={<UserProfile />} />
        <Route path="/dashboard" element={authToken ? <Dashboard /> : <Navigate to="/signin" />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
