import { Text, Spacer, useTheme, Link } from "@nextui-org/react";
import Image from "next/image";



export const Navbar = () => {

const { theme } = useTheme(); 

  return(
    <div style={{
      display: 'flex',
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'start',
      padding: '0px 20px',
      backgroundColor: theme?.colors.gray50.value
    }}>

      <Image
        src={'https://www.seekpng.com/png/full/12-128847_pokeball-for-my-sleeve-stickers-tattoos-artwork-pokeball.png'}
        alt="Icono App"
        width="40"
        height="40"
      />
      <Link href="/">
        <Text color="white" h2>P</Text>
        <Text color="white" h3>okemons</Text> 
      </Link>
      
      <Spacer css={{flex: 1}}></Spacer>

      <Link href='/favorites'>
        <Text color="white">Favoritos</Text>
      </Link>

    </div>
  )
}