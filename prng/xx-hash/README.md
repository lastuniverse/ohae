# @ohae/prng/xx-hash
 
This package implements a PRNG (pseudo random number generator) based on the xx_hash algorithm
> It ensures repeatability of the generation result when using the same input data. This gives wide opportunities for its use in game development. For example, to ensure the generation of identical maps on the client side. To do this, you only need to provide clients with identical seeds.

## Installation

```
npm install @ohae/prng/xx-hash --save
```

## Usage


### javascript commonjs modules
```javascript
const XXHash = require('@ohae/prng-xx-hash');
const seed = 1234567;
const prng = new XXHash(seed);

prng.random(1);
prng.random(2,3);
prng.random(4,5,6);

```

### javascript es modules
```javascript
import { XXHash } from '@ohae/prng-xx-hash';
const seed = 1234567;
const prng = new XXHash(seed);

prng.random(1);
prng.random(2,3);
prng.random(4,5,6);

```

### typecript
```typescript
import { XXHash } from '@ohae/prng-xx-hash';
const seed: number = 1234567;
const prng: XXHash = new XXHash(seed);

prng.random(1);
prng.random(2,3);
prng.random(4,5,6);

```

## License

MIT
