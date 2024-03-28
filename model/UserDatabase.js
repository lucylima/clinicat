const setLocalStorage = (database) =>
  localStorage.setItem("database_clinicat_users", JSON.stringify(database));

const getLocalStorage = () =>
  JSON.parse(localStorage.getItem("database_clinicat_users")) ?? [];

const readLocalStorage = () => getLocalStorage();

export { setLocalStorage, getLocalStorage, readLocalStorage };