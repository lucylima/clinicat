const setSession = (id) => sessionStorage.setItem('owner', id)
const getSession = () => sessionStorage.getItem('owner')
const clearSession = () => sessionStorage.clear()

const setLocalStorage = (mode) => localStorage.setItem('dark_mode', mode)
const getLocalStorage = () => localStorage.getItem("dark_mode") ?? false;

export {
  setSession,
  getSession,
  clearSession,
  setLocalStorage,
  getLocalStorage
}
