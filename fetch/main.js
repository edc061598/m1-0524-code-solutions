'use strict';
async function userFunction() {
  try {
    const placeholder = await fetch(
      'https://jsonplaceholder.typicode.com/users'
    );
    if (!placeholder.ok) {
      throw new Error(`HTTP ERROR: ${placeholder.status} `);
    }
    const user = await placeholder.json();
    console.log(user);
  } catch (error) {
    console.log('Error is: ', error);
  }
}
userFunction();
async function pokemonFunction() {
  try {
    const pokemonData = await fetch('https://pokeapi.co/api/v2/pokemon/1');
    if (!pokemonData.ok) {
      throw new Error(`HTTP ERROR: ${pokemonData.status}`);
    }
    const pokemonUser = await pokemonData.json();
    console.log(pokemonUser);
  } catch (error) {
    console.log('ERROR: ', error);
  }
}
pokemonFunction();
