export function Filters({ search, setSearch, house, setHouse }) {
  return (
    <div className="filters">
      <input 
        type="text" 
        placeholder="Buscar mago por nombre..." 
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <select value={house} onChange={(e) => setHouse(e.target.value)}>
        <option value="all">Todas las casas</option>
        <option value="Gryffindor">Gryffindor</option>
        <option value="Slytherin">Slytherin</option>
        <option value="Hufflepuff">Hufflepuff</option>
        <option value="Ravenclaw">Ravenclaw</option>
      </select>
    </div>
  );
}