import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Car from "../pages/Car";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import User from "../pages/User";
import Error from "../pages/Error";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/car/:name" element={<Car />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/user" element={<User />} />
      <Route path="/*" element={<Error />} />
    </Routes>
  );
}

export default Router;
