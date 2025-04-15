export const isAuthenticated = (): boolean => {
    const authToken = localStorage.getItem('authToken');
    if (!authToken) return false;
  
    try {
      const payload = JSON.parse(atob(authToken.split('.')[1]));
      const expirationTime = payload.exp * 1000; // Convert to milliseconds
      
      if (Date.now() >= expirationTime) {
        // Token has expired, remove it and return false
        localStorage.removeItem('authToken');
        return false;
      }
      
      return true;
    } catch (error) {
      // If token is invalid or can't be decoded, remove it and return false
      localStorage.removeItem('authToken');
      return false;
    }
  };
  
  export const getAuthToken = (): string | null => {
    if (!isAuthenticated()) {
      window.location.href = '/auth/signin';
      return null;
    }
    return localStorage.getItem('authToken');
  };
  
  export const logout = () => {
    localStorage.removeItem('authToken');
    window.location.href = '/auth/signin';
  };