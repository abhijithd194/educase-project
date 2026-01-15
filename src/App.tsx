import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MobileContainer from './components/MobileContainer';
import Landing from './pages/landing';
import LoginForm from './pages/LoginForm';
import Signup from './pages/Signup';
import Profile from './pages/Profile';

function App() {
  return (
    <Router>
      <MobileContainer>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login-form" element={<LoginForm />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/profile/:id" element={<Profile />} />
        </Routes>
      </MobileContainer>
    </Router>
  );
}

export default App;
