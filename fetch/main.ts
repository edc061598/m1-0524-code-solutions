interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

async function userFunction(): Promise<void> {
  try {
    const placeholder = await fetch(
      'https://jsonplaceholder.typicode.com/users'
    );
    if (!placeholder.ok) {
      throw new Error(`HTTP ERROR: ${placeholder.status} `);
    }
    const user = (await placeholder.json()) as User;
    console.log(user);
  } catch (error) {
    console.log('Error is: ', error);
  }
}

userFunction();

interface Pokemon {
  name: string;
  height: number;
  weight: number;
}

async function pokemonFunction(): Promise<void> {
  try {
    const pokemonData = await fetch('https://pokeapi.co/api/v2/pokemon/1');

    if (!pokemonData.ok) {
      throw new Error(`HTTP ERROR: ${pokemonData.status}`);
    }
    const pokemonUser = (await pokemonData.json()) as Pokemon;
    console.log(pokemonUser);
  } catch (error) {
    console.log('ERROR: ', error);
  }
}

pokemonFunction();
