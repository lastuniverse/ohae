# @ohae/events
 
This package contained event system (implements a SimpleEventEmitter and ...)

!!! IN DEVELOPING !!!

## Installation

```
npm install @ohae/events --save
```

## Usage

### javascript commonjs modules
```javascript
const { SimpleEventEmitter, EventListener } = require('@ohae/events');
const emitter = new SimpleEventEmitter();

emitter.on("event1", function (data){
	console.log(data); // {value1: 1, value2: "1111"}
});
emitter.emit("event1", {value1: 1, value2: "1111"});


emitter.once("event2", function (data){
	console.log(data); // {value1: "1111", value2: false}
});
emitter.emit("event2", {value1: "1111", value2: false});
```

### javascript es modules
```javascript
import { SimpleEventEmitter } from '@ohae/events';
const emitter = new SimpleEventEmitter();

emitter.on("event1", function (data){
	console.log(data); // {value1: 1, value2: "1111"}
});
emitter.emit("event1", {value1: 1, value2: "1111"});


emitter.once("event2", function (data){
	console.log(data); // {value1: "1111", value2: false}
});
emitter.emit("event2", {value1: "1111", value2: false});
```

### typecript
```javascript
import { SimpleEventEmitter } from '@ohae/events';
const emitter: SimpleEventEmitter = new SimpleEventEmitter();

interface Data1 {
	value1: number,
	value2: string,
};

declare type Data2 = {
	value1: string,
	value3: any,
};

emitter.on("event1", function (data: Data1){
	console.log(data); // {value1: 1, value2: "1111"}
});
emitter.emit("event1", {value1: 1, value2: "1111"} as Data1);


emitter.once("event2", function (data: Data2){
	console.log(data); // {value1: "1111", value2: false}
});
emitter.emit("event2", {value1: "1111", value2: false} as Data2);

```

## License

MIT
