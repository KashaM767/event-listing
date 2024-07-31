import './App.css'
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import SignupForm from './components/SignupForm';
import AddEvent from './components/AddEvent';
import LoginForm from './components/LoginForm';
import EventList from './components/EventList';
import Logout from './components/Logout';
import { createContext, useState } from 'react';


export const LoginContext = createContext();

function App() {
  const user = JSON.parse(localStorage.getItem("user"));
  let token = null;
  if (user) token = user.token;
  const [loggedIn, setLoggedIn] = useState(token ? true : false);

  return (
    <>
      <LoginContext.Provider value={[loggedIn, setLoggedIn]}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/events" element={<EventList />} />
            <Route path="/addEvent" element={<AddEvent />} />
            <Route path="/signup" element={<SignupForm />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/logout" element={<Logout />} />
          </Routes>

        </BrowserRouter>
      </LoginContext.Provider>
    </>
  )
}

export default App
