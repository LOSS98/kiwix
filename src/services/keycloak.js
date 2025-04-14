import Keycloak from 'keycloak-js';

const keycloakConfig = {
  url: import.meta.env.VITE_KEYCLOAK_URL || 'https://keycloak-server-url/auth',
  realm: import.meta.env.VITE_KEYCLOAK_REALM || 'kiwix-realm',
  clientId: import.meta.env.VITE_KEYCLOAK_CLIENT_ID || 'kiwix-client'
};

const keycloak = new Keycloak(keycloakConfig);

export const initKeycloak = () => {
  return keycloak.init({
    onLoad: 'login-required',
    checkLoginIframe: false,
    pkceMethod: 'S256'
  });
};

export const getToken = () => keycloak.token;

export const getTokenParsed = () => keycloak.tokenParsed;

export const isAuthenticated = () => !!keycloak.token;

export const updateToken = (minValidity = 5) => {
  return keycloak.updateToken(minValidity);
};

export const logout = () => {
  const redirectUri = window.location.origin;
  keycloak.logout({ redirectUri });
};

export const getUsername = () => keycloak.tokenParsed?.preferred_username;

export const getName = () => keycloak.tokenParsed?.name;

export const getEmail = () => keycloak.tokenParsed?.email;

export const getUserRoles = () => {
  if (keycloak.resourceAccess && keycloak.resourceAccess[keycloakConfig.clientId]) {
    return keycloak.resourceAccess[keycloakConfig.clientId].roles || [];
  }
  return [];
};

export const hasRole = (role) => {
  return getUserRoles().includes(role);
};

export default keycloak;