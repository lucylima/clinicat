const setLocalStorage = (database) =>
  localStorage.setItem("banco_clinicat_pets", JSON.stringify(database));

const getLocalStorage = () =>
  JSON.parse(localStorage.getItem("banco_clinicat_pets")) ?? [];

const readLocalStorage = () => getLocalStorage();

export { setLocalStorage, getLocalStorage, readLocalStorage };
