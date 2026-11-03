import { useState, useMemo } from 'react';
import { useFetch } from './hooks/useFetch';
import { useLocalStorage } from './hooks/useLocalStorage';
import { Filters } from './components/Filters';
import { Stats } from './components/Stats';
import { CharacterList } from './components/CharacterList';

export default function App() {
  const { data: characters, loading, error } = useFetch('https://hp-api.onrender.com/api/characters');
  
  // Estados locales para los filtros
  const [search, setSearch] = useState('');
  const [house, setHouse] = useState('all');
  
  // BONUS: Custom hook para favoritos
  const [favorites, setFavorites] = useLocalStorage('hp-favorites', []);

  // Derivamos los personajes filtrados (NO duplicamos estado)
  const filteredCharacters = useMemo(() => {
    if (!characters) return [];
    
    return characters
      .filter(char => char.name.toLowerCase().includes(search.toLowerCase()))
      .filter(char => house === 'all' || char.house === house);
  }, [characters, search, house]); // Solo se recalcula si estos cambian

  const toggleFavorite = (id) => {
    setFavorites(prev => 
      prev.includes(id) ? prev.filter(favId => favId !== id) : [...prev, id]
    );
  };

  if (error) return <div className="error">🪄 Error: {error}</div>;

  return (
    <div className="app-container">
      <header>
        <h1>El Archivo de Hogwarts</h1>
        <p>Favoritos guardados: {favorites.length}</p>
      </header>

      <main>
        <Filters search={search} setSearch={setSearch} house={house} setHouse={setHouse} />
        
        {loading ? (
          <div className="spinner-container">
            <div className="spinner"></div>
            <p>Invocando el mapa del merodeador...</p>
          </div>
        ) : (
          <>
            <Stats characters={filteredCharacters} />
            <CharacterList 
              characters={filteredCharacters} 
              favorites={favorites}
              onToggleFavorite={toggleFavorite}
            />
          </>
        )}
      </main>
    </div>
  );
}