<template>
  <div class="pokemon">
    <div class="pokemon__stage">
      <img :src="pokemon.spriteUrl" class="pokemon__sprite" />
    </div>
    <div class="pokemon__details">
      <h3 class="pokemon__name">{{ pokemon.name | capitalize }}</h3>
      <table class="pokemon__stats">
        <tbody>
          <tr>
            <th>HP</th>
            <td>{{ pokemon.hp }}</td>
          </tr>
          <tr>
            <th>Attack</th>
            <td>{{ pokemon.attack }}</td>
          </tr>
          <tr>
            <th>Defense</th>
            <td>{{ pokemon.defense }}</td>
          </tr>
          <tr>
            <th>Sp. Atk</th>
            <td>{{ pokemon.specialAttack }}</td>
          </tr>
          <tr>
            <th>Sp. Def</th>
            <td>{{ pokemon.specialDefense }}</td>
          </tr>
          <tr>
            <th>Speed</th>
            <td>{{ pokemon.speed }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { capitalize } from "lodash-es"
import { Pokemon } from "../classes/pokemon"
export default {
  name: "PokemonCard",
  filters: {
    capitalize,
  },
  props: {
    pokemon: {
      type: Pokemon,
      required: true,
    },
  },
}
</script>
