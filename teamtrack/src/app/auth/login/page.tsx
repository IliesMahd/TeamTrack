"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import "../../../styles/auth/form.scss";
import { signIn, useSession } from "next-auth/react";

const Login = ({ onRegisterClick }: any) => {
  const router = useRouter();
  const [errors, setErrors] = useState({ email: "", password: "" });
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

    const res = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (res?.error) {
      setErrors({ ...errors, email: res.error });
    } else {
      router.push("/dashboard");
    }
  };
  return (
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
          {/* <p className="error">{errors.email}</p>
          <p className="error">{errors.password}</p> */}
          {errors.email && <p className="error">{errors.email}</p>}
          {errors.password && <p className="error">{errors.password}</p>}
          <p className="no-account" onClick={onRegisterClick}>
            Pas encore de compte ? Inscrivez-vous
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
