import { useState, useEffect } from 'react';

// ¡OJO AQUÍ! Debe decir "export function useFetch"
export function useFetch(url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;
    
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(url);
        if (!response.ok) throw new Error('Error al conectar con la API');
        const json = await response.json();
        
        if (isMounted) {
          setData(json);
          setError(null);
        }
      } catch (err) {
        if (isMounted) setError(err.message);
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchData();

    return () => { isMounted = false; }; 
  }, [url]);

  return { data, loading, error };
}