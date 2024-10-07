const Card = ({ cats, updateCats, aux }) => {
  return (
    <div className="card bounce" onClick={() => updateCats(`${aux}, ${cats.name}`)}>
      <img src={cats.image} alt={cats.name} />
      <p>{cats.name}</p>
    </div>
  )
}

export default Card