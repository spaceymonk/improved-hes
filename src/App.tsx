import { Routes, Route } from 'react-router';
import './App.css';
import { HomePage } from './components/home.component';
import { LoginPage } from './components/login.component';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
}

export default App;
