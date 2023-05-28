import Header from "./components/header/Header";
import { ApplicationProvider } from "./context.js";
import MainPage from "./pages/MainPage/MainPage";
import LogInPage from "../src/pages/LogInPage/LogInPage";
import SignUpPage from "../src/pages/SignUpPage/SignUpPage";
import LostPasswordPage from "../src/pages/LostPasswordPage/LostPasswordPage";
import ResendActivationPage from "../src/pages/ResendActivationPage/ResendActivationPage";
import Footer from "./components/footer/Footer";

import { Routes, Route, Navigate } from "react-router-dom";
import "./App.scss";

function App() {
  const handleClickGenerate = () => {
    const element = document.getElementById("generate");

    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  const handleClickHome = () => {
    const element = document.getElementById("mainpage-wrapper");

    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  const handleClickPricing = () => {
    const element = document.getElementById("pricing");

    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <ApplicationProvider
        value={{
          handleClickGenerate,
          handleClickHome,
          handleClickPricing,
        }}
      >
        <Header />
        <Routes>
          <Route exact path="/" element={<MainPage />} />
          <Route path="/login" element={<LogInPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/lostpassword" element={<LostPasswordPage />} />
          <Route path="/resendactivation" element={<ResendActivationPage />} />
        </Routes>
        <Footer />
      </ApplicationProvider>
    </>
  );
}

export default App;
