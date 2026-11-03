export function CharacterCard({ character, isFavorite, onToggleFavorite }) {
  return (
    <article className="card">
      <img 
        src={character.image || 'https://via.placeholder.com/150?text=No+Image'} 
        alt={character.name} 
        loading="lazy"
      />
      <div className="card-content">
        <h2>{character.name}</h2>
        <p className={`house ${character.house ? character.house.toLowerCase() : 'sin-casa'}`}>
          {character.house || 'Sin casa'}
        </p>
        <p className="actor">Interpretado por: {character.actor || 'Desconocido'}</p>
        
        <button 
          className={`btn-fav ${isFavorite ? 'active' : ''}`}
          onClick={() => onToggleFavorite(character.id)}
        >
          {isFavorite ? '❤️ Favorito' : '🤍 Añadir a favoritos'}
        </button>
      </div>
    </article>
  );
}