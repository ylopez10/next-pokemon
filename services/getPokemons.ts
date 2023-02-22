import axios from 'axios'

interface dataAxios {
  baseUrl: string
}

const pokemones = axios.create({
  baseURL: "https://pokeapi.co/api/v2"
})


export default pokemones

