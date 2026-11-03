import { useState, useEffect } from 'react';

export function useLocalStorage(key, initialValue) {
  // Inicializamos leyendo de localStorage
  const [value, setValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  // Cada vez que cambia el valor, lo guardamos
  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}