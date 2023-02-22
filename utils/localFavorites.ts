
interface dataPOkemon{
  id: number;
  name: string
}

const tootgleFavorite = (id: number, name:string) => {

  let favorites: dataPOkemon[] = JSON.parse( localStorage.getItem('favorites') || '[]')

  let valida = favorites.filter((favorite) => { return favorite.id === id }).length > 0
  ? true
  : false

  if(valida){
    favorites = favorites.filter((favorite) => { return favorite.id !== id })
  } else {
    favorites.push({id, name})
  }

  localStorage.setItem('favorites', JSON.stringify(favorites))
}

const exisInFovorites = (id:number) : boolean =>{

  if(typeof window === 'undefined' ) return false

  let favorites: dataPOkemon[] = JSON.parse( localStorage.getItem('favorites') || '[]')

  let valida = favorites.filter((favorite) => { return favorite.id === id }).length > 0
  ? true
  : false

  return valida
}

const listFavorites = () => {

  let pokemones = JSON.parse( localStorage.getItem('favorites') || '[]')
  
  pokemones = pokemones.map( (val:any) => ({
    ...val,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${val.id}.svg`,
    url: 'asddfgdfgd'
  }))

  return pokemones
}
 
export {
  tootgleFavorite,
  exisInFovorites,
  listFavorites
}