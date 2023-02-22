import { Layout } from "@/components/layouts";
import { ListPokemon } from "@/components/pokemon/ListPokemon";
import { NoResults } from "@/components/ui";
import { SmallPokemon } from "@/interfaces";
import { listFavorites } from "@/utils/localFavorites";
import { Grid } from "@nextui-org/react";
import { useEffect, useState } from "react";

// pages/404.tsx
export default function Favorites() {

  const [myFavorites, setmyFavorites] = useState<SmallPokemon[]>([])
  const [loading, setloading] = useState(true)

  useEffect(() => {    
    setmyFavorites(listFavorites())
    setloading(false)  
  }, [])
  

  return (
    <Layout title='Pokemones favoritos'>
      {
        loading ? 'Cargando...' : ''   
      }
      {
        myFavorites.length === 0 && !loading
        ? (<NoResults />) :
        (
          <Grid.Container gap={2} justify="flex-start">
            { myFavorites.map( (pokemon) => (
                <ListPokemon pokemon={pokemon} key={pokemon.id} />            
              ))
            }
          </Grid.Container>
        )        
      }
    </Layout>
  )
}