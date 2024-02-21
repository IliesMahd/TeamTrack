import "../../../styles/auth/login.scss";

const Login = ({ onRegisterClick }: any) => {
  return (
    <div className="container">
      <h1>Connectez-vous</h1>
      <form>
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
          <p className="no-account" onClick={onRegisterClick}>
            Pas encore de compte ? Inscrivez-vous
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
