import { useState } from "react"
import { GetStaticProps, GetStaticPaths, NextPage } from "next"
import { Button, Card, Container, Grid, Image, Text } from "@nextui-org/react"
import confetti from 'canvas-confetti'
import { PokemonFull, PokemonListResponse } from "@/interfaces"
import { Layout } from "@/components/layouts"
import { pokemones } from "@/services"
import { exisInFovorites, getPokemonInfo, tootgleFavorite } from "@/utils"
import { ParsedUrlQuery } from "querystring"


interface Props{
  pokemon: PokemonFull;
}

interface Params extends ParsedUrlQuery {
  name: string;
}

const PagePokemonbyName: NextPage<Props> = ({pokemon}) =>{

  const [isFavorite, setisFavorite] = useState(exisInFovorites(pokemon.id))

  const onToogleFavorite = () => {
    tootgleFavorite(pokemon.id, pokemon.name)
    setisFavorite(!isFavorite)

    if(!isFavorite){
      confetti({
        zIndex: 999,
        particleCount: 250,
        spread: 190,
        angle: -100,
        origin:{
          x: 1,
          y: 0
        }
      })
    }
  }

  return <Layout title='un pokemon'>
    <Grid.Container css={{ marginTop: '5px' }} gap={2}>
      <Grid xs={12} sm={4}>
        <Card isHoverable css={{padding : '30px'}}>
          <Card.Body>
            <Card.Image src={pokemon.sprites.other?.dream_world.front_default || '/no-image.png'}
            alt={pokemon.name}
            width="100%"
            height={200} />
          </Card.Body>
        </Card>
      </Grid>

      <Grid xs={12} sm={8}>
        <Card>
          <Card.Header css={{ display: 'flex', justifyContent: 'space-between'}}>
            <Text h1 transform="capitalize">{pokemon.name}</Text>
            <Button color="gradient" ghost={isFavorite} onPress={ onToogleFavorite }>              
              {isFavorite? 'En favorito' : 'Guardar en favoritos'}
            </Button>
          </Card.Header>

          <Card.Body>
            <Text size="30">Sprites:</Text>

            <Container direction="row" display="flex" gap={0}>
              <Image
              src={pokemon.sprites.front_default}
              alt={pokemon.name}
              width="100"
              height="100"
              />
              <Image
              src={pokemon.sprites.back_default}
              alt={pokemon.name}
              width="100"
              height="100"
              />
              <Image
              src={pokemon.sprites.front_shiny}
              alt={pokemon.name}
              width="100"
              height="100"
              />
              <Image
              src={pokemon.sprites.back_shiny}
              alt={pokemon.name}
              width="100"
              height="100"
              />
            </Container>
          </Card.Body>
        </Card>
      </Grid>
    </Grid.Container>
  </Layout>
}

export const getStaticPaths: GetStaticPaths<Params> = async () => {

  const {data} = await pokemones.get<PokemonListResponse>('/pokemon?limit=151')

  const namesPokemones: String[] = data.results.map(pokemon => pokemon.name) 

  return {
    paths: namesPokemones.map( name =>({
      params: {name} 
    })),
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async({params}) =>{

  const { name } = params as { name: string }
  
  return {
    props: {
      pokemon: await getPokemonInfo(name)
    }
  }

}

export default PagePokemonbyName