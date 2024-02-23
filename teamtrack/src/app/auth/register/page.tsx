import { useState } from "react";
import "../../../styles/auth/form.scss";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

const Register = ({ onRegisterClick }: any) => {
  const [errors, setErrors] = useState({
    email: "",
    password: "",
    username: "",
    confirmPassword: "",
  });
  const [successMessage, setSuccessMessage] = useState("");
  const router = useRouter();

  const isValidEmail = (email: any) => {
    const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return regex.test(email);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const email = e.target[0].value;
    const username = e.target[1].value;
    const password = e.target[2].value;
    const confirmPassword = e.target[3].value;
    let newErrors = {
      email: "",
      password: "",
      username: "",
      confirmPassword: "",
    };

    if (!isValidEmail(email)) {
      newErrors.email = "Adresse e-mail invalide";
    }

    if (!username.trim()) {
      newErrors.username = "Nom d'utilisateur requis";
    }

    if (!password || password.length < 6) {
      newErrors.password =
        "Le mot de passe doit contenir au moins 6 caractères";
    }

    if (password !== confirmPassword) {
      newErrors.confirmPassword = "Les mots de passe ne correspondent pas";
    }

    if (
      newErrors.email ||
      newErrors.password ||
      newErrors.username ||
      newErrors.confirmPassword
    ) {
      setErrors(newErrors);
      return;
    }

    setErrors({ email: "", password: "", username: "", confirmPassword: "" });

    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, username, password }),
      });

      if (!response.ok) {
        throw Error("Le compte existe déjà");
      }

      setSuccessMessage("Compte créé avec succès");
      setTimeout(() => {
        setSuccessMessage("");
        onRegisterClick();
      }, 2000);
    } catch (error: any) {
      setErrors({ ...errors, email: error.message });
    }
  };

  return (
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
      <h1>Inscrivez-vous</h1>
      <form onSubmit={handleSubmit}>
        <div className="wrapper-input">
          <label htmlFor="email">Adresse email</label>
          <input type="text" name="email" />
        </div>
        <div className="wrapper-input">
          <label htmlFor="username">Nom d'utilisateur</label>
          <input type="text" name="username" />
        </div>
        <div className="wrapper-input">
          <label htmlFor="password">Mot de passe</label>
          <input type="password" name="password" />
        </div>
        <div className="wrapper-input">
          <label htmlFor="confirmPassword">Confirmez le mot de passe</label>
          <input type="password" name="confirmPassword" />
        </div>
        <div className="wrapper-actions">
          <button>S'inscrire</button>
          {errors.email && <p className="error">{errors.email}</p>}
          {errors.password && <p className="error">{errors.password}</p>}
          {errors.confirmPassword && (
            <p className="error">{errors.confirmPassword}</p>
          )}
          {errors.username && <p className="error">{errors.username}</p>}
          {successMessage && <p className="success">{successMessage}</p>}
          <p className="no-account" onClick={onRegisterClick}>
            Vous avez déjà un compte ? Connectez-vous
          </p>
        </div>
      </form>
    </div>
  </motion.div>
  );
};

export default Register;
