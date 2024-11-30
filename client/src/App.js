// import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import MemberManagement from "./pages/MemberManagement/MemberManagement";

import Signup from "./pages/SignUp/SingUp";
import SignIn from "./pages/SignIn/SignIn";
import Chat from "./pages/Chat/Chat";

// import Dashboard from "./pages/Dashboard/Dashboard";

import "./App.css";
import TaskManagement from "./pages/TaskManagement/TaskManagement";
function App() {
  return (
    <div class="bg-[#999999]">
      <BrowserRouter>
        <Routes>
          <Route path={"/"}>
            <Route path={"/"} element={<SignIn />} />
            <Route path={"/signup"} element={<Signup />} />
            <Route path={"/chat"} element={<Chat />} />
            <Route path={"/membermanagement"} element={<MemberManagement />} />
            {/* <Route path={"/dashboard"} element={<Dashboard />} /> */}
            <Route path="/taskmanagement" element={<TaskManagement />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
