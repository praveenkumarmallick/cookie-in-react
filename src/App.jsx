import React from "react";
import "./App.css";
import { CookiesProvider, useCookies } from "react-cookie";
import WelcomePage from "./components/WelcomePage";
import LoginPage from "./components/LoginPage";

const App = () => {
  const [cookie, setCookie] = useCookies(["user"]);

  const handleLogin = (user) => {
    setCookie("user", user, { path: "/" });
  };

  return (
    <>
      <CookiesProvider>
        <div>
          {cookie.user ? (
            <WelcomePage user={cookie.user} />
          ) : (
            <LoginPage onLogin={handleLogin} />
          )}
        </div>
      </CookiesProvider>
    </>
  );
};

export default App;
