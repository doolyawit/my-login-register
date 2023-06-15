export const useLocalStorage = () => {
  const setItem = (key: string, value: string) => {
    localStorage.setItem(key, value);
  };

  const removeItem = (key: string) => {
    localStorage.removeItem(key);
    console.log(`Remove Item ${key}`);
  };

  return { setItem, removeItem };
};
