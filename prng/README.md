# @ohae/prng
 
This package usage implements a PRNG (pseudo random number generator)
> It ensures repeatability of the generation result when using the same input data. This gives wide opportunities for its use in game development. For example, to ensure the generation of identical maps on the client side. To do this, you only need to provide clients with identical seeds.

!!! IN DEVELOPING !!!

## Installation

```
npm install @ohae/prng --save
```

## Usage


### javascript commonjs modules
```javascript
const { Prng } = require('@ohae/prng');
const { XXHash } = require('@ohae/prng-xx-hash');


const prngImplement = new XXHash();
const seed = 1234567;
const prng = new Prng(prngImplement, seed);

console.log(prng.random(1));	// 0.25214675354122806
console.log(prng.random(1));	// 0.25214675354122806
console.log(prng.random(2, 3));	// 0.5936155299641228
console.log(prng.random(2, 3));	// 0.5936155299641228
console.log(prng.random(4, 5, 6));	// 0.7994929356033664
console.log(prng.random(4, 5, 6));	// 0.7994929356033664
```

### javascript es modules
```javascript
import { Prng } from '@ohae/prng';
import { XXHash } from '@ohae/prng-xx-hash';

const prngImplement = new XXHash();
const seed = 1234567;
const prng = new Prng(prngImplement, seed);

console.log(prng.random(1));	// 0.25214675354122806
console.log(prng.random(1));	// 0.25214675354122806
console.log(prng.random(2, 3));	// 0.5936155299641228
console.log(prng.random(2, 3));	// 0.5936155299641228
console.log(prng.random(4, 5, 6));	// 0.7994929356033664
console.log(prng.random(4, 5, 6));	// 0.7994929356033664

```

### typecript
```javascript
import { Prng, IPrng } from '@ohae/prng';
import { XXHash } from '@ohae/prng-xx-hash';

const prngImplement: IPrng = new XXHash();
const seed: number = 1234567;
const prng: IPrng = new Prng(prngImplement, seed);

console.log(prng.random(1));	// 0.25214675354122806
console.log(prng.random(1));	// 0.25214675354122806
console.log(prng.random(2, 3));	// 0.5936155299641228
console.log(prng.random(2, 3));	// 0.5936155299641228
console.log(prng.random(4, 5, 6));	// 0.7994929356033664
console.log(prng.random(4, 5, 6));	// 0.7994929356033664

```

## License

MIT
