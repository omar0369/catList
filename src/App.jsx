import { useEffect, useState } from 'react'
import './App.css'
import Card from './components/Card'
import Select from './components/Select'
import getBreeds from './helpers/getBreeds'
import getCats from './helpers/getCats'
import Error from './components/Error'

function App() {
  const [breeds, setBreeds] = useState([])
  const [cats, setCats] = useState([])
  const [error, setError] = useState(null)
  const [aux, setAux] = useState(null)

  const updateBreeds = () => {
    getBreeds()
      .then(newBreeds => {
        setBreeds(newBreeds)
      })
      .catch(error => {
        console.log(error)
        setError('Error al cargar la lista de razas')
      })
  }

  useEffect(() => {
    updateBreeds()
  }, [])

  const updateCats = (breedId) => {
    getCats(breedId)
      .then(newCat => {
        setCats(newCat)
        setAux([breedId.split(',')])
      })
      .catch(error => {
        console.log(error)
        setError('Error al cargar la intormación del gato')
      })
  }

  useEffect(() => {
    setCats(null)
  }, [])

  return (
    <div className='app'>
      <h1 className='h1'>Cat List</h1>
      <Select breeds={breeds} updateCats={updateCats} />
      {error && <Error error={error} />}
      {cats && <Card cats={cats} updateCats={updateCats} aux={aux}/>}
    </div>
  )
}

export default App
