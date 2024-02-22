import { useState } from "react";
import "../../../styles/auth/register.scss";
import { useRouter } from "next/navigation";

const Register = ({ onRegisterClick }: any) => {
  const [errors, setErrors] = useState({ email: "", password: "" });
  const router = useRouter();

  const isValidEmail = (email: any) => {
    const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return regex.test(email);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;
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
      const response = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      console.log("====================================");
      console.log(response);
      console.log("====================================");

      if (!response.ok) {
        throw Error("Le compte existe déjà");
      }

      const data = await response.json();
      console.log("====================================");
      console.log(data);
      console.log("====================================");
    } catch (error: any) {
      console.error(error);
      setErrors({ ...errors, email: error.message });
    }
  };
  return (
    <div className="container">
      <h1>Inscrivez-vous</h1>
      <form onSubmit={handleSubmit}>
        <div className="wrapper-input">
          <label htmlFor="email">Adresse email</label>
          <input type="text" name="email" />
        </div>
        <div className="wrapper-input">
          <label htmlFor="password">Mot de passe</label>
          <input type="password" name="password" />
        </div>
        <div className="wrapper-input">
          <label htmlFor="password">Confirmez le mot de passe</label>
          <input type="password" name="password" />
        </div>
        <div className="wrapper-actions">
          <button>S'inscrire</button>
          <p
            className="error"
            style={{
              display: errors.email || errors.password ? "block" : "none",
            }}
          >
            {errors.email}
          </p>
          <p className="no-account" onClick={onRegisterClick}>
            Vous avez déjà un compte ? Connectez-vous
          </p>
        </div>
      </form>
    </div>
  );
};

export default Register;
