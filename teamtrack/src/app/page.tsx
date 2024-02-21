"use client";
import "../styles/variables.scss";
import "../styles/landingpage.scss";
import { Suspense, useState } from "react";
import Login from "./auth/login/page";
import Register from "./auth/register/page";

export default function Home() {
  const brandName = "TeamTrack";
  const [showLogin, setShowLogin] = useState(true);

  const handleRegisterClick = () => {
    setShowLogin(!showLogin);
  };

  return (
    <main>
      <div className="wrapper">
        <h1>{brandName}</h1>
        <span></span>
      </div>
      {showLogin ? (
        <Login onRegisterClick={handleRegisterClick} />
      ) : (
        <Register onRegisterClick={handleRegisterClick} />
      )}
    </main>
  );
}
