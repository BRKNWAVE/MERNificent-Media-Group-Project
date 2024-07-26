import React from 'react';
import { Navigate } from 'react-router-dom';
import { isAuthenticated } from '../utils/authUtility';

const ProtectedRoute = ({ element: Component }) => {
  const [authenticated, setAuthenticated] = React.useState(null);

  React.useEffect(() => {
    const checkAuth = async () => {
      const status = await isAuthenticated();
      setAuthenticated(status);
    };

    checkAuth();
  }, []);

  if (authenticated === null) return <div>Loading...</div>;

  return authenticated ? <Component /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
