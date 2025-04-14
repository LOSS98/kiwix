import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import Button from '../components/common/Button';

const Profile = () => {
  const { user, logout } = useAuth();
  const [userInfo, setUserInfo] = useState({
    firstName: "Jean",
    lastName: "Dupont",
    email: user?.email || "jean.dupont@example.com",
    role: "Chargé de mission",
    junior: "Junior ESCP",
    phone: "06 12 34 56 78",
    address: "10 rue de la Paix, 75002 Paris"
  });
  
  return (
    <div className="profile-page">
      <div className="profile-header">
        <h1 className="profile-page-title">Mon Profil</h1>
      </div>
      
      <div className="profile-content">
        <div className="profile-sidebar">
          <div className="profile-avatar-container">
            {user?.avatar ? (
              <img src={user.avatar} alt="Avatar" className="profile-avatar" />
            ) : (
              <div className="profile-avatar-placeholder">
                {userInfo.firstName.charAt(0) + userInfo.lastName.charAt(0)}
              </div>
            )}
          </div>
          
          <div className="profile-name">
            {userInfo.firstName} {userInfo.lastName}
          </div>
          
          <div className="profile-role">
            {userInfo.role}
          </div>
          
          <div className="profile-junior">
            {userInfo.junior}
          </div>
          
          <Button variant="primary" fullWidth onClick={logout}>
            Déconnexion
          </Button>
        </div>
        
        <div className="profile-details">
          <div className="profile-section">
            <h2 className="profile-section-title">Informations Personnelles</h2>
            
            <div className="profile-info-grid">
              <div className="profile-info-item">
                <div className="profile-info-label">Email</div>
                <div className="profile-info-value">{userInfo.email}</div>
              </div>
              
              <div className="profile-info-item">
                <div className="profile-info-label">Téléphone</div>
                <div className="profile-info-value">{userInfo.phone}</div>
              </div>
              
              <div className="profile-info-item">
                <div className="profile-info-label">Adresse</div>
                <div className="profile-info-value">{userInfo.address}</div>
              </div>
            </div>
          </div>
          
          <div className="profile-section">
            <h2 className="profile-section-title">Préférences</h2>
            
            <div className="profile-preferences">
              <div className="form-group">
                <label className="form-label">Langue</label>
                <select className="form-select">
                  <option value="fr">Français</option>
                  <option value="en">Anglais</option>
                </select>
              </div>
              
              <div className="form-group">
                <label className="form-label">Notifications</label>
                <div className="checkbox-group">
                  <label className="checkbox-label">
                    <input type="checkbox" checked className="checkbox-input" onChange={() => {}} />
                    <span className="checkbox-text">Notifications par email</span>
                  </label>
                  
                  <label className="checkbox-label">
                    <input type="checkbox" checked className="checkbox-input" onChange={() => {}} />
                    <span className="checkbox-text">Notifications sur la plateforme</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;