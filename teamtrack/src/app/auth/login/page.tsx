"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import "../../../styles/auth/form.scss";
import { signIn, useSession } from "next-auth/react";
import { motion } from "framer-motion";
import LoadingScreen from "../../components/LoadingScreen";
import { BsEnvelope } from "react-icons/bs";
import { BsLock } from "react-icons/bs";

const Login = ({ onRegisterClick }: any) => {
  const router = useRouter();
  const [errors, setErrors] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const { data: session } = useSession();

  useEffect(() => {
    router.prefetch("/dashboard");
    console.log('router', router)

/*    if (router.events) {
      console.log('router.events', router.events)
      const handleRouteChange = (url: any, { shallow }: any) => {
        console.log(
            `App is changing to ${url} ${
                shallow ? 'with' : 'without'
            } shallow routing`
        );
      };

      router.events.on('routeChangeStart', handleRouteChange);

      return () => {
        router.events.off('routeChangeStart', handleRouteChange);
      };
    } else {
        console.log('router.events is not available')
    }*/
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
        router.push("/dashboard");
      }
    } catch (error: any) {
      console.error("An unexpected error happened:", error);
      setErrors({ ...errors, email: "Une erreur est survenue" });
    }
  };
  return (
    <>
      <div className="container">
        <motion.h1
          initial={{ x: -300 }}
          animate={{ x: 0, speed: 2 }}
        >
            Connexion
        </motion.h1>
        <motion.form
          method="POST"
          onSubmit={handleSubmit}
          initial={{ x: 300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
        >
          <div className="wrapper-input">
            <BsEnvelope className="icon"/>
            <input type="text" name="email" placeholder="Email"/>
          </div>
          <div className="wrapper-input">
            <BsLock className="icon"/>
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
            <p className="no-account" onClick={onRegisterClick}>
              Pas encore de compte ? Inscrivez-vous
            </p>
          </div>
        </motion.form>
      </div>
    </>
  );
};

export default Login;
