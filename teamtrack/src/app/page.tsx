"use client";
import "../styles/variables.scss";
import "../styles/landingpage.scss";
import { Suspense, useState } from "react";
import Login from "./auth/login/page";
import Register from "./auth/register/page";
import { motion } from "framer-motion";

export default function Home() {
  const brandName = "TeamTrack";
  const [showLogin, setShowLogin] = useState(true);

  const handleRegisterClick = () => {
    setShowLogin(!showLogin);
  };

  return (
    <main>
      <div className="wrapper">
        {/* <h1>{brandName}</h1> */}
        <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          {brandName}
        </motion.h1>
        {/* <span></span> */}
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        ></motion.span>
      </div>
      {showLogin ? (
        <Login onRegisterClick={handleRegisterClick} />
      ) : (
        <Register onRegisterClick={handleRegisterClick} />
      )}
    </main>
  );
}
