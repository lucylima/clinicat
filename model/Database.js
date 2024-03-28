const setLocalStorage = (database) =>
  localStorage.setItem("database_clinicat_pets", JSON.stringify(database));

const getLocalStorage = () =>
  JSON.parse(localStorage.getItem("database_clinicat_pets")) ?? [];

const readLocalStorage = () => getLocalStorage();

export { setLocalStorage, getLocalStorage, readLocalStorage };
