<template>
  <div id="app">
    <Logo />
    <SearchField
      placeholder="Search Pokemon"
      v-model="searchValue"
      :style="{ backgroundColor: validSearch }"
      autofocus
    />
    <div class="loader_container" v-if="fetchingData">
      <Loader />
    </div>

    <PokemonCard :pokemon="pokemon" v-if="pokemon" />
  </div>
</template>

<script>
// import { ref } from "vue"
import Logo from "./components/Logo.vue"
import SearchField from "./components/SearchField.vue"
import Loader from "./components/Loader.vue"
import PokemonCard from "./components/PokemonCard.vue"
import { getRandomPokemon, getPokemon } from "./api/index"

export default {
  name: "App",
  components: {
    Logo,
    SearchField,
    Loader,
    PokemonCard,
  },
  data: () => ({
    pokemon: null,
    searchValue: "",
    fetchingData: true,
    validSearch: "inherit",
  }),
  created() {
    this.fetchRandomPokemon().then((pokemon) => {
      this.fetchingData = false
      this.pokemon = pokemon
    })
  },
  methods: {
    async fetchRandomPokemon() {
      return await getRandomPokemon()
    },
    async fetchPokemon(id) {
      return await getPokemon(id)
    },
  },
  watch: {
    searchValue: {
      handler(val, oldVal) {
        this.validSearch = "#e5e7eb"
        val = val.trim()
        if (val !== oldVal && val.length > 0) {
          this.fetchingData = true
          this.fetchPokemon(val).then((response) => {
            this.fetchingData = false
            if (response !== null) {
              this.pokemon = response
            } else this.validSearch = "#ff8888"
          })
        }
      },
    },
  },
}
</script>
