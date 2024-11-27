// import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import SignIn from './pages/SignIn/SingIn';
import MemberManagement from './pages/MemberManagement/MemberManagement';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={'/'}>
              <Route path={'/'} element={<SignIn/>} />
              <Route path={'/membermanagement'} element={<MemberManagement/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
