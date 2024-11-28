// import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import MemberManagement from './pages/MemberManagement/MemberManagement';
import Signup from './pages/SignUp/SingUp';
import SignIn from './pages/SignIn/SignIn';
import Chat from './pages/Chat/Chat';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={'/'}>
            <Route path={'/'} element={<SignIn />} />
            <Route path={'/signup'} element={<Signup />} />
            <Route path={'/chat'} element={<Chat />} />
            <Route path={'/membermanagement'} element={<MemberManagement />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
