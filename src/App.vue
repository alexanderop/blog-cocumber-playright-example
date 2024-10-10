<script setup lang="ts">
import { ref } from 'vue';
import axios from 'axios';

interface Pokemon {
  name: string;
  sprites: {
    front_default: string;
  };
}

const searchTerm = ref('');
const pokemon = ref<Pokemon | null>(null);
const error = ref<string | null>(null);

const searchPokemon = async () => {
  try {
    error.value = null;
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${searchTerm.value.toLowerCase()}`);
    pokemon.value = response.data;
  } catch (err) {
    pokemon.value = null;
    error.value = 'Pokémon not found';
  }
};
</script>

<template>
  <div class="pokemon-search">
    <h1>Pokémon Search</h1>
    <div class="search-container">
      <input v-model="searchTerm" placeholder="Enter Pokémon name" />
      <button @click="searchPokemon">Search</button>
    </div>
    <div v-if="pokemon && pokemon.sprites" class="pokemon-result">
      <h2>{{ pokemon.name }}</h2>
      <img v-if="pokemon.sprites.front_default" :src="pokemon.sprites.front_default" :alt="pokemon.name" />
      <p v-else>No image available</p>
    </div>
    <div v-if="error" class="error">{{ error }}</div>
  </div>
</template>

<style scoped>
.pokemon-search {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
}

.search-container {
  margin-bottom: 20px;
}

input {
  padding: 5px;
  margin-right: 10px;
}

button {
  padding: 5px 10px;
}

.pokemon-result {
  margin-top: 20px;
}

.pokemon-result img {
  max-width: 200px;
}

.error {
  color: red;
  margin-top: 20px;
}
</style>