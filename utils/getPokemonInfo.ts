import { PokemonFull } from "@/interfaces"
import { pokemones } from "@/services"

export const getPokemonInfo = async(item: string) => {

  const {data} = await pokemones.get<PokemonFull>(`/pokemon/${item}`)

  const pokemon = {
    id: data.id,
    name: data.name,
    sprites: data.sprites
  }

  return pokemon
}

export default getPokemonInfo