const Select = ({ breeds, updateCats }) => {
  return (
    <div>
      <select onChange={(e) => updateCats(e.target.value)}>
        <option>Seleccione...</option>
        {breeds.map(breed => (
          <option key={breed.id} value={[breed.id, breed.name]}>{breed.name}</option>
        ))}
      </select>
    </div>
  )
}

export default Select