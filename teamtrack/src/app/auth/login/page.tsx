"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import "../../../styles/auth/form.scss";
import { signIn, useSession } from "next-auth/react";
import { motion } from "framer-motion";
import LoadingScreen from "../../components/LoadingScreen";

const Login = ({ onRegisterClick }: any) => {
  const router = useRouter();
  const [errors, setErrors] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const { data: session } = useSession();

  // useEffect(() => {
  //   if (session) {
  //     router.push("/dashboard");
  //   }
  // }, [session, router]);

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

    try {
      const startTime = performance.now();

      const res = await signIn("credentials", {
        redirect: false,
        email,
        password,
      });

      const endTime = performance.now();
      const elapsedTime = endTime - startTime;

      if (res?.error) {
        setErrors({ email: res.error, password: "" });
      } else {
        console.log("logged in", res);
        setLoading(true);
        const minLoadingTime = 2000;
        const remainingTime = Math.max(0, minLoadingTime - elapsedTime);

        setTimeout(() => {
          setLoading(false);
          router.push("/dashboard");
        }, remainingTime);
      }
    } catch (error: any) {
      console.error("An unexpected error happened:", error);
      setErrors({ ...errors, email: "Une erreur est survenue" });
    }
  };
  return (
    <>
      <motion.div
        className="container"
        initial={{
          opacity: 0,
          x: 50,
        }}
        animate={{
          opacity: 1,
          x: 0,
        }}
        transition={{
          duration: 1,
        }}
        viewport={{ once: true }}
      >
        <div className="container">
          <h1>Connectez-vous</h1>
          <form method="POST" onSubmit={handleSubmit}>
            <div className="wrapper-input">
              <label htmlFor="email">Adresse email</label>
              <input type="text" name="email" />
            </div>
            <div className="wrapper-input">
              <label htmlFor="password">Mot de passe</label>
              <input type="password" name="password" />
            </div>
            <div className="wrapper-actions">
              <button>Se connecter</button>
              {errors.email && (
                <motion.p
                  className="error"
                  initial={{ x: 50 }}
                  animate={{ x: 0 }}
                >
                  {errors.email}
                </motion.p>
              )}
              {errors.password && (
                <motion.p
                  className="error"
                  initial={{ x: 50 }}
                  animate={{ x: 0 }}
                >
                  {errors.password}
                </motion.p>
              )}
              <p className="no-account" onClick={onRegisterClick}>
                Pas encore de compte ? Inscrivez-vous
              </p>
            </div>
          </form>
        </div>
      </motion.div>
      {loading && <LoadingScreen title="TeamTrack" />}
    </>
  );
};

export default Login;
