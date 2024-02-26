"use client";
import "../styles/variables.scss";
import "../styles/landingpage.scss";
import { Suspense, useState } from "react";
import Login from "./auth/login/page";
import Register from "./auth/register/page";
import { motion } from "framer-motion";
import {BsMouse} from "react-icons/bs";

export default function Home() {
  const brandName = "TeamTrack";
  const [showLogin, setShowLogin] = useState(true);

  const handleRegisterClick = () => {
    setShowLogin(!showLogin);
  };

  return (
    <main>
      <div className="wrapper-mobile">
        <motion.h1
            initial={{opacity: 0}}
            animate={{opacity: 1}}

        >
          {brandName}
        </motion.h1>
        <motion.p
            initial={{opacity: 0, y: 50}}
            animate={{opacity: 1, y: 0}}
            transition={{delay: 0.5}}
        >
          Découverez la meilleure façon de gérer votre équipe
        </motion.p>
        <motion.button
            className="btn-to-login"
            initial={{opacity: 0, y: 50}}
            animate={{opacity: 1, y: 0}}
            transition={{delay: 0.5}}
        >
          Connectez-vous
        </motion.button>
{/*        <motion.span
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{delay: 0.5}}
        ></motion.span>*/}
        <span className="circle">
          <p className="text-around-circle">Scrollez</p>
          <BsMouse className="icon"/>
        </span>
      </div>
      {
        showLogin ? (
            <Login onRegisterClick={handleRegisterClick} />
        ) : (
            <Register onRegisterClick={handleRegisterClick} />
        )
      }
      {/*      <div className="wrapper">
        <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          {brandName}
        </motion.h1>
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
      )}*/}
    </main>
  );
}
