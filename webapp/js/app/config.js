/*globals console*/
'use strict';

define(
  [],
  function() {

// returns a string identifying the environment in which the app is running
// possible values: local, openshift
var inferEndpoint = function() {
  var location = window.location;
  // running on openshift
  if (location.hostname.indexOf('rhcloud')!==-1) {
    return location.origin + '/api/wines';
  // running locally
  } else {   // if (location.protocol === "file:") {
    return 'http://localhost:9000/api/wines';
    //return 'http://bb-jugar.rhcloud.com/api/wines';
  }
};

var config = {
  endpoint: inferEndpoint()
  // endpoint: 'http://localhost:9000/api/wines'
  // endpoint: 'http://bb-jugar.rhcloud.com/api/wines'
};

return config;

})