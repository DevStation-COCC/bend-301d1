let window = {};

(function(module) {
  'use strict';
  let innerConfig = {};

  innerConfig.getConnectionObject = function(){
    return {
      host: 'localhost',
      port: 5432
    }
  }

  module.config = innerConfig;

})(global);


console.log(global.config.name);
console.log(global.config.getConnectionObject());

global.config.getConnectionObject = function(){}