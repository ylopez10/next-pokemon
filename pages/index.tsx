import { Layout } from "@/components/layouts"
import { Grid } from "@nextui-org/react";
import { ListPokemon } from "@/components/pokemon/ListPokemon"
import { PokemonListResponse, SmallPokemon } from "@/interfaces"
import { pokemones } from "@/services"
import {GetStaticProps} from "next"
import { FC } from "react"

interface Props {
  pokemons: SmallPokemon[]
}

export const HomePage: FC<Props> = ({ pokemons }) => {
  return (   
    <Layout title='Listado de Pokémons'>
      <Grid.Container gap={2} justify="flex-start">
      {
          pokemons.map( (pokemon) => (
            <ListPokemon pokemon={pokemon} key={pokemon.id} />            
          ))
        }
      </Grid.Container>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async(ctx) =>{

  const {data} = await pokemones.get<PokemonListResponse>('/pokemon?limit=151')
  
  const pokemons: SmallPokemon[] = data.results.map( (poke, i) => ({
    ...poke,
    id: i + 1,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${i+1}.svg` 

  }))

  return {
    props: {
      pokemons
    }
  }

} 

export default HomePage