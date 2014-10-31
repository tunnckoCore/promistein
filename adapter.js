var Promistein = require('./index');

exports.deferred = function () {
  var resolver = null
  var rejector = null
  var promise = new Promistein(function (resolve, reject) {
    resolver = resolve;
    rejector = reject;
  });

  return {
    promise: promise,
    resolve: resolver,
    reject: rejector
  };
};

exports.resolved = function (reason) {
  return Promistein.resolve(reason);
};

exports.rejected = function (reason) {
  return Promistein.reject(reason);
};
