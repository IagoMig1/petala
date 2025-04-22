// Check if user is logged in
export const checkAuth = () => {
  return localStorage.getItem('adminSession') === 'true';
};
// Protect routes
export const requireAuth = (navigate: (path: string) => void) => {
  if (!checkAuth()) {
    navigate('/admin/login');
    return false;
  }
  return true;
};