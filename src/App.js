import Header from "./components/header/Header";
import MainPage from "./pages/MainPage/MainPage";
import LogInPage from "../src/pages/LogInPage/LogInPage";
import SignUpPage from "../src/pages/SignUpPage/SignUpPage";
import LostPasswordPage from "../src/pages/LostPasswordPage/LostPasswordPage";
import ResendActivationPage from "../src/pages/ResendActivationPage/ResendActivationPage";
import Footer from "./components/footer/Footer";

import { Routes, Route } from "react-router-dom";
import "./App.scss";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route exact path="/" element={<MainPage />} />
        <Route path="/login" element={<LogInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/lostpassword" element={<LostPasswordPage />} />
        <Route path="/resendactivation" element={<ResendActivationPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
