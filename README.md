fibrequest
==========

Simple fibrous-friendly wrapper for mikeal/request.

# Why?

Request's callback takes three arguments; fibrous passes in a two-argument callback.

# Usage

```javascript
var fibrous = require('fibrous');
var fibrequest = require('fibrequest');

fibrous.run(function() {
  var result = fibrequest.sync({
    method: "GET",
    uri: "https//some.url.com"
  });
  console.log("Response object", result.resp);
  console.log("Response body", result.body);
}, cb)

```

# License

MIT
