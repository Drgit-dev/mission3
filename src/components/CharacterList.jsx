import { CharacterCard } from './CharacterCard';

export function CharacterList({ characters, favorites, onToggleFavorite }) {
  if (characters.length === 0) {
    return <p className="empty">No se encontraron magos con esos filtros.</p>;
  }

  return (
    <div className="grid">
      {characters.map(char => (
        // KEY ESTABLE usando el id de la API
        <CharacterCard 
          key={char.id} 
          character={char} 
          isFavorite={favorites.includes(char.id)}
          onToggleFavorite={onToggleFavorite}
        />
      ))}
    </div>
  );
}