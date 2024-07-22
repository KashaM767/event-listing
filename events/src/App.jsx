import './App.css'
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import SignupForm from './components/SignupForm';
import AddEvent from './components/AddEvent';
import LoginForm from './components/LoginForm';
import EventList from './components/EventList'

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<EventList />} />
          <Route path="/addEvent" element={<AddEvent />} />
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/login" element={<LoginForm />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
