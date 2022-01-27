import {calc, init} from '../src/wasm.ts';
console.log(import.meta.url);

await init();

console.log(await calc());

Deno.exit();