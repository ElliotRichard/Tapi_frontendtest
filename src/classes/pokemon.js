/**
  Holds relevant Pokemon information from PokeApi
*/
export class Pokemon {
  constructor(pokeapiResponse) {
    this.name = pokeapiResponse.name
    this.hp = pokeapiResponse.stats[0].base_stat
    this.attack = pokeapiResponse.stats[1].base_stat
    this.defense = pokeapiResponse.stats[2].base_stat
    this.specialAttack = pokeapiResponse.stats[3].base_stat
    this.specialDefense = pokeapiResponse.stats[4].base_stat
    this.speed = pokeapiResponse.stats[5].base_stat
    this.spriteUrl =
      pokeapiResponse.sprites.other["official-artwork"].front_default
  }
}
