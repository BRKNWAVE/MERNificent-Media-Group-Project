export const getToken = () => localStorage.getItem('token');

export const isAuthenticated = async () => {
  const token = getToken();
  if (!token) return false;

  try {
    const response = await fetch('/api/auth/check', {
      method: 'GET',
      headers: { 'x-auth-token': token },
    });

    if (response.ok) {
      const data = await response.json();
      return data.msg === 'Authenticated';
    }
    
    return false;
  } catch (error) {
    console.error('Authentication check failed:', error);
    return false;
  }
};

export const signOut = () => {
  localStorage.removeItem('token');
};
