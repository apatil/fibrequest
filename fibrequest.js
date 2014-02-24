var request = require('request')
module.exports = function(opts, cb) {
  request.get(opts, function(err, resp, body) {
    if (err) {
      cb(err);
    } else {
      cb(null, {resp: resp, body: body});
    }
  });
}