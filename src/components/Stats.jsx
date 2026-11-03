export function Stats({ characters }) {
  // Usamos reduce para contar cuántos personajes hay por casa
  const counts = characters.reduce((acc, char) => {
    const house = char.house || 'Sin casa';
    acc[house] = (acc[house] || 0) + 1;
    return acc;
  }, {});

  return (
    <div className="stats">
      <p>Total mostrados: <strong>{characters.length}</strong></p>
      {Object.entries(counts).map(([house, count]) => (
        <span key={house} className={`stat-badge ${house.toLowerCase().replace(' ', '-')}`}>
          {house}: {count}
        </span>
      ))}
    </div>
  );
}