"use client";
import {usePathname, useRouter, useSearchParams} from "next/navigation";
import { useEffect, useState } from "react";
import "../../../styles/auth/form.scss";
import { signIn, useSession } from "next-auth/react";
import { motion } from "framer-motion";
import { BsEnvelope } from "react-icons/bs";
import { BsLock } from "react-icons/bs";
import {LockOutlined, MailOutlined} from "@ant-design/icons";

const Login = ({ onRegisterClick }: any) => {
  const router = useRouter();
  const [errors, setErrors] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    router.prefetch("/dashboard/home");
  }, [router]);


  const isValidEmail = (email: any) => {
    const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return regex.test(email);
  };
  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const email = event.target[0].value;
    const password = event.target[1].value;
    let newErrors = { email: "", password: "" };

    if (!isValidEmail(email)) {
      newErrors.email = "Adresse e-mail invalide";
    }

    if (!password || password.length < 6) {
      newErrors.password =
        "Le mot de passe doit contenir au moins 6 caractères";
    }

    if (newErrors.email || newErrors.password) {
      setErrors(newErrors);
      return;
    }

    setErrors({ email: "", password: "" });

    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (result?.error) {
      setErrors({ email: result.error, password: "" });
    } else {
      router.push("/dashboard/home");
    }
  };

  return (
      <div className="container">
        <motion.h1
            initial={{x: -300}}
            animate={{x: 0, speed: 2}}
        >
          Connexion
        </motion.h1>
        <motion.form
            method="POST"
            onSubmit={handleSubmit}
            initial={{x: 300, opacity: 0}}
            animate={{x: 0, opacity: 1}}
        >
          <div className="wrapper-input">
            <MailOutlined className="icon" />
            <input type="text" name="email" placeholder="Email"/>
          </div>
          <div className="wrapper-input">
            <LockOutlined className="icon" />
            <input type="password" name="password" placeholder="Mot de passe"/>
          </div>
          <div className="wrapper-actions">
            <button>
              {loading ? (
                  <>
                    Connexion... <span></span>
                  </>
              ) : (
                  "Se connecter"
              )}
            </button>
            {errors.email && (
                <motion.p
                    className="error"
                    initial={{x: 50}}
                    animate={{x: 0}}
                >
                  {errors.email}
                </motion.p>
            )}
            {errors.password && (
                <motion.p
                    className="error"
                    initial={{x: 50}}
                    animate={{x: 0}}
                >
                  {errors.password}
                </motion.p>
            )}
            <p className="link" onClick={onRegisterClick}>
              Pas encore de compte ? Inscrivez-vous
            </p>
          </div>
        </motion.form>
      </div>
  );
};

export default Login;
