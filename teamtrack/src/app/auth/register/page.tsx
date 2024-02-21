import "../../../styles/auth/register.scss";

const Register = ({ onRegisterClick }: any) => {
  return (
    <div className="container">
      <h1>Inscrivez-vous</h1>
      <form>
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
          <p className="no-account" onClick={onRegisterClick}>
            Vous avez déjà un compte ? Connectez-vous
          </p>
        </div>
      </form>
    </div>
  );
};

export default Register;
