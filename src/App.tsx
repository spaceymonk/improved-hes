import { Routes, Route } from 'react-router';
import './App.css';
import { HomePage } from './components/pages/home.component';
import { LoginPage } from './components/pages/login.component';
import { ProfilePage } from './components/pages/profile.component';
import { QueryPage } from './components/pages/query.component';


function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/query" element={<QueryPage />} />
    </Routes>
  );
}

export default App;
