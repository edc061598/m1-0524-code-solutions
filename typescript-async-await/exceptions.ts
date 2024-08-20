import { read } from './read.js';

// Keep track of app load time so each log message can be timed.
// Log messages should all be approximately 1 second apart.
const startTime = Date.now();
const elapsed = (): string =>
  `${Math.round((Date.now() - startTime) / 1000)}s -`;

async function throwOnce(): Promise<void> {

  try {
      const throw1 = await read('foo', false);
    console.log(elapsed(), 'throwOnce:', throw1);
  } catch(error){
     console.log(elapsed(), 'throwOnce Error:', error);
  }

}

async function throwSeveral(): Promise<void> {
  try{
    const throwSeveral1 =  await read('foo1', false);
    console.log(elapsed(), 'throwSeveral1:', throwSeveral1);

      const throwSeveral2 = await read('foo2', false);
      console.log(elapsed(), 'throwSeveral2:', throwSeveral2);

      const throwSeveral3 = await read('foo3', false);
      console.log(elapsed(), 'throwSeveral3:', throwSeveral3);

  } catch(error) {
       console.log(elapsed(), 'throwSeveral Error:', error);
      }

}

async function throwChained(): Promise<void> {

  try{
    const throwChain1 = await read('foo-chain', false);
    console.log(elapsed(), 'throwChained1:', throwChain1);

    const throwChain2 = await read(throwChain1, false);
    console.log(elapsed(), 'throwChained2:', throwChain2);

    const throwChain3 = await read(throwChain2, false);
    console.log(elapsed(), 'throwChained3:', throwChain3);
  }
    catch(error){
      console.log(elapsed(), 'throwChained Error:', error)
    }
}

await throwOnce();
await throwSeveral();
await throwChained();
