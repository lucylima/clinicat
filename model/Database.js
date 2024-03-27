setLocalStorage = (database) =>
  localStorage.setItem("banco_clinicat_pets", JSON.stringify(database));
getLocalStorage = () =>
  JSON.parse(localStorage.getItem("banco_clinicat_pets")) ?? [];
readLocalStorage = () => getLocalStorage();

export { setLocalStorage, getLocalStorage, readLocalStorage };
