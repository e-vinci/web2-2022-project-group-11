<<<<<<< HEAD
const STORE_NAME = 'user';
const REMEMBER_ME = 'remembered';

let currentUser;

const getAuthenticatedUser = () => {
  if (currentUser !== undefined) return currentUser;

  const remembered = getRememberMe();
  const serializedUser = remembered
    ? localStorage.getItem(STORE_NAME)
    : sessionStorage.getItem(STORE_NAME);

  if (!serializedUser) return undefined;

  currentUser = JSON.parse(serializedUser);
  return currentUser;
};

const setAuthenticatedUser = (authenticatedUser) => {
  const serializedUser = JSON.stringify(authenticatedUser);
  const remembered = getRememberMe();
  if (remembered) localStorage.setItem(STORE_NAME, serializedUser);
  else sessionStorage.setItem(STORE_NAME, serializedUser);

=======
let currentUser;

const getAuthenticatedUser = () => currentUser;

const setAuthenticatedUser = (authenticatedUser) => {
>>>>>>> authorizeBranch
  currentUser = authenticatedUser;
};

const isAuthenticated = () => currentUser !== undefined;

const clearAuthenticatedUser = () => {
<<<<<<< HEAD
  localStorage.clear();
  sessionStorage.clear();
  currentUser = undefined;
};

function getRememberMe() {
  const rememberedSerialized = localStorage.getItem(REMEMBER_ME);
  const remembered = JSON.parse(rememberedSerialized);
  return remembered;
}

function setRememberMe(remembered) {
  const rememberedSerialized = JSON.stringify(remembered);
  localStorage.setItem(REMEMBER_ME, rememberedSerialized);
}
//reglage pb
export {
  getAuthenticatedUser,
  setAuthenticatedUser,
  isAuthenticated,
  clearAuthenticatedUser,
  getRememberMe,
  setRememberMe,
};
=======
  currentUser = undefined;
};

// eslint-disable-next-line object-curly-newline
export { getAuthenticatedUser, setAuthenticatedUser, isAuthenticated, clearAuthenticatedUser };
>>>>>>> authorizeBranch
