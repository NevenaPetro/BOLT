import Header from './components/header/Header';
import HomePage from '../src/pages/HomePage/HomePage'
import GeneratePage from '../src/pages/GeneratePage/GeneratePage'
import PricingPage from '../src/pages/PricingPage/PricingPage'
import LogInPage from '../src/pages/LogInPage/LogInPage'
import SignUpPage from '../src/pages/SignUpPage/SignUpPage'
import LostPasswordPage from '../src/pages/LostPasswordPage/LostPasswordPage'
import ResendActivationPage from '../src/pages/ResendActivationPage/ResendActivationPage'


import { Routes, Route } from 'react-router-dom';
import './App.scss';

function App() {
  return (
    <div >
      <Header />
      <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/generate" element={<GeneratePage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/login" element={<LogInPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/lostpassword" element={<LostPasswordPage />} />
          <Route path="/resendactivation" element={<ResendActivationPage />} />
        </Routes>
    </div>
  );
}

export default App;
