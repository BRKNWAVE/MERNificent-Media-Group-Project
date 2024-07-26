import React from 'react';
import { Navigate } from 'react-router-dom';
import { isAuthenticated } from '../utils/authUtility';

// ProtectedRoute component to protect routes from unauthorized access using isAuthenticated function from authUtility.js
// We use this in our App.js and routes to redirect the user to the login page if they are not authenticated
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
