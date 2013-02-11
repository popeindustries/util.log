A `window.log()` function enabled through a `document.location` whitelist.
Sets `window.debug` to `true/false` when location matches `//dev*` or `//localhost`, or set via `init()`

## Usage
```javascript
var config = {
	locations: ['http://staging', 'http://test'];
	timestamp: true;
}
require('util.log').init(config);
...
window.log(myObject, 'hey');
```