A `window.log()` function enabled through a `document.location` whitelist.
Sets `window.debug` to `true/false` when location matches `//dev*` or `//localhost`, or set via `init()`

## Usage
```javascript
var log = require('util.log');
var config = {
	locations: ['http://staging', 'http://test'];
	timestamp: true;
}
log.init(config);
...
log(myObject, 'hey');
```