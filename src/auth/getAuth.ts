const getAuth = async () => {
  const getUser = await fetch("http://localhost:3000/login");
  const authenticated = await getUser.json();
  return authenticated.isAuthenticated;
};

export default getAuth;
