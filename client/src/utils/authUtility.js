// Retrieve the JWT from local storage
export const getToken = () => localStorage.getItem('token');

// Check if the user is authenticated
export const isAuthenticated = async () => {
  const token = getToken();
  if (!token) return false;

  try {
    // Send a GET request to the server to check if the token is valid
    const response = await fetch('https://mernificent-media-group-project.onrender.com/api/auth/check', {
      method: 'GET',
      headers: { 'x-auth-token': token },
    });
    // If the response is ok, return true
    if (response.ok) {
      const data = await response.json();
      return data.msg === 'Authenticated';
    }
    // Else return false, the user is not authenticated and this will redirect them to the login page in ProtectedRoute
    return false;
  } catch (error) {
    console.error('Authentication check failed:', error);
    return false;
  }
};

// Sign out the user by removing the JWT token from local storage
export const signOut = () => {
  localStorage.removeItem('token');
};
