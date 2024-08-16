import { read } from './read.js';

// Keep track of app load time so each log message can be timed.
// Log messages should all be approximately 1 second apart.
const startTime = Date.now();
const elapsed = (): string =>
  `${Math.round((Date.now() - startTime) / 1000)}s -`;

async function readOnce(): Promise<void> {
  const fooBar = await read('foo/bar.html')
    console.log(elapsed(), 'readOnce:', fooBar);
}

async function readSeveral(): Promise<void> {
  const msg = await read('foo1/bar.html');

      console.log(elapsed(), 'readSeveral1:', msg);
  const msg2 = await read('foo2/bar.html');

      console.log(elapsed(), 'readSeveral2:', msg2);
     const msg3 = await read('foo3/bar.html');
  console.log(elapsed(), 'readSeveral3:', msg3)
}

async function readChained(): Promise<void> {
   const fooChain = await read('foo-chain/bar.html')

      console.log(elapsed(), 'readChained1:', fooChain);
      const fooChain2 = await read(fooChain);


      console.log(elapsed(), 'readChained2:', fooChain2);
      const fooChain3 =  await read(fooChain2);

    console.log(elapsed(), 'readChained3:', fooChain3)
}

await readOnce()
 await readSeveral()
  await readChained();
