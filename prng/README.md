# @ohae/prng
 
This package usage implements a PRNG (pseudo random number generator)
> It ensures repeatability of the generation result when using the same input data. This gives wide opportunities for its use in game development. For example, to ensure the generation of identical maps on the client side. To do this, you only need to provide clients with identical seeds.

!!! IN DEVELOPING !!!

## Installation

```
...
```

## Usage


### javascript commonjs modules
```javascript
const Prng = require('@ohae/prng');
const PrngImplementClass = require('@ohae/prng-xx-hash');

const seed = 1234567;
const prng = new Prng(PrngImplementClass, seed);

prng.random(1);
prng.random(2,3);
prng.random(4,5,6);

```

### javascript es modules
```javascript
import { Prng } from '@ohae/prng';
import { XXHash } from '@ohae/prng-xx-hash';

const seed = 1234567;
const prng = new Prng(PrngImplementClass, seed);

prng.random(1);
prng.random(2,3);
prng.random(4,5,6);

```

### typecript
```javascript
import { Prng, IPrng } from '@ohae/prng';
import { XXHash } from '@ohae/prng-xx-hash';

const seed: number = 1234567;
const prng: IPrng = new Prng(PrngImplementClass, seed);

prng.random(1);
prng.random(2,3);
prng.random(4,5,6);

```

## License

MIT
