import { Pokemon } from "../classes/pokemon"
export const POKEAPI_URL = "https://pokeapi.co/api/v2"
export const POKEMON_COUNT = 898

export const getPokemon = async (id) => {
  const URL = `${POKEAPI_URL}/pokemon/${id.toLowerCase()}`
  return fetch(URL).then(async (response) => {
    if (response.ok) {
      const data = await response.json()
      return new Pokemon(data)
    } else if (!response.ok) {
      console.log(`Error fetching pokemon with id ${id}`)
      return null
    }
  })
  // The URL for fetching a Pokemon is `${POKEAPI_URL}/pokemon/${id}`,
  // note that "id" can either be the name of a Pokemon or it's National Pokedex number.
  //
  // Add your implementation here
}

/**
 *
 * @returns A random Pokemon
 */
export const getRandomPokemon = async () => {
  // Generate ID from 1-898 inclusive
  const randID = Math.ceil(Math.random() * POKEMON_COUNT).toString()
  return await getPokemon(randID)
  // Using POKEMON_COUNT, generate a random number between 1 and the constants value
  // to fetch a Pokemon by it's National Pokedex number.
  //
  // Add your implementation here
}
