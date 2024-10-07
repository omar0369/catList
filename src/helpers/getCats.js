const getCats = async (breedId) => {
  const id = breedId.split(',')

  if (id.length < 2) {
    return 
  }

    console.log(id)

  const url = `https://api.thecatapi.com/v1/images/search?breed_ids=${id[0]}`
  const res = await fetch(url)
 
  if (!res.ok) {
    const { url, status,statusText } = res
    throw Error(`Error: ${status} ${statusText}in fetch ${url}`);
  }

  const data = await res.json()

  const cats = {
    image: data[0].url,
    id: data[0].id,
    name: id[1]
  }

  return cats
}

export default getCats