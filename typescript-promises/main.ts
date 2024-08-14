import { takeAChance } from './take-a-chance.js';
takeAChance('Enrique')
  .then((message) => console.log(message))
  .catch((error) => console.log(`Error: ${error.message}`));
