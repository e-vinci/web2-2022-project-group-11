let currentPage;

const getActiveLink = () => currentPage;

const setActiveLink = (page) => {
  currentPage = page;
};

const isActive = () => currentPage !== undefined;

const clearActive = () => {
  currentPage = undefined;
};

export { getActiveLink, setActiveLink, isActive, clearActive };