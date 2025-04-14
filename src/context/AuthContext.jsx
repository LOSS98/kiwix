import { createContext, useContext, useState, useEffect } from 'react';
import keycloak, { initKeycloak, logout as keycloakLogout, isAuthenticated, getEmail, getName, getUsername } from '../services/keycloak';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(true);
  const [user, setUser] = useState({
    id: "test-user-id",
    username: "testuser",
    name: "Utilisateur Test",
    email: "test@example.com",
    roles: ["user", "admin"]
  }); 
  const [loading, setLoading] = useState(false); // Ne pas afficher le chargement
  // const [authenticated, setAuthenticated] = useState(false);
  // const [user, setUser] = useState(null);
  // const [loading, setLoading] = useState(true);

  useEffect(() => {
    // const initAuth = async () => {
    //   try {
    //     const authenticated = await initKeycloak();
    //     setAuthenticated(authenticated);
        
    //     if (authenticated) {
    //       setUser({
    //         id: keycloak.subject,
    //         username: getUsername(),
    //         name: getName(),
    //         email: getEmail(),
    //         roles: keycloak.resourceAccess?.[keycloak.clientId]?.roles || []
    //       });
    //     }
    //   } catch (error) {
    //     console.error('Failed to initialize Keycloak:', error);
    //   } finally {
    //     setLoading(false);
    //   }
    // };

    // initAuth();
  }, []);

  const logout = () => {
    keycloakLogout();
  };

  const hasRole = (role) => {
    return user?.roles?.includes(role) || false;
  };

  return (
    <AuthContext.Provider value={{ 
      authenticated, 
      user, 
      logout, 
      loading,
      hasRole,
      keycloak
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};