import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import Dashboard from './pages/Dashboard';
import MaJunior from './pages/MaJunior';
import Profile from './pages/Profile';
import Login from './pages/Login';
import Layout from './components/layout/Layout';
import HomeLayout from './components/layout/HomeLayout';
import Footer from './components/layout/Footer';

const PrivateRoute = ({ element, useHomeLayout = false }) => {
  const { authenticated, loading } = useAuth();

  if (loading) {
    return (
      <div className="loading-container">
        <div className="spinner"></div>
        <p>Chargement...</p>
      </div>
    );
  }

  return authenticated ? element : <Navigate to="/login" />;
  
  if (useHomeLayout) {
    return (
      <HomeLayout>
        {element}
        <Footer />
      </HomeLayout>
    );
  }
  
  return (
    <Layout>
      {element}
      <Footer />
    </Layout>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<PrivateRoute element={<Dashboard />} useHomeLayout={true} />} />
          <Route path="/ma-junior" element={<PrivateRoute element={<MaJunior />} />} />
          <Route path="/profile" element={<PrivateRoute element={<Profile />} />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;