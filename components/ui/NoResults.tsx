import { Container, Image, Text } from "@nextui-org/react"

export const NoResults = () => {
  return (
    <Container css={{
      display: 'flex',
      flexDirection: 'column',
      height: 'calc(100vh - 100px)',
      alignItems: 'center',
      justifyContent: 'center',
      alignSelf: 'center'
    }}>

      <Text h1>
        No hay favoritos
      </Text>
      <Image 
        src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/6.svg'
        alt='Pokemon'
        width={300}
        height={300}
        css={{
          opacity: 0.1
        }}
      />

    </Container>
  )
}