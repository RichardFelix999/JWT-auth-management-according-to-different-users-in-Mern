// import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import SignIn from "./pages/SignIn/SingIn";
import MemberManagement from "./pages/MemberManagement/MemberManagement";
import TaskManagement from "./pages/TaskManagement/TaskManagement";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={"/"}>
            <Route path={"/"} element={<SignIn />} />
            <Route path={"/membermanagement"} element={<MemberManagement />} />
            <Route path="/taskmanagement" element={<TaskManagement />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
