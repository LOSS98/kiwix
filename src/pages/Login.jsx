const Login = () => {
    return (
      <div className="login-page">
        <div className="login-container">
          <div className="login-logo">
            <svg className="kiwix-logo" viewBox="0 0 24 24" width="48" height="48">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <h1 className="login-title">KiwiX</h1>
        </div>
        
        <div className="login-info">
          <p>Connexion sécurisée via Keycloak</p>
          <p>Vous allez être redirigé vers la page de connexion</p>
        </div>
        
        <div className="login-spinner">
          <div className="spinner"></div>
        </div>
      </div>
    </div>
  );
};

export default Login;