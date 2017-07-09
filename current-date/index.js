///<reference path="index.d.ts" />
var currentdate = (options) => {
  var d = new Date();
  var timestamp = d.getTime();
  if(options && options.output === true) {
    if(options.toString === true) {
      console.log(d.toLocaleString());
    }
    else if(options){
      console.log(''+timestamp);
    }
  }
  return options && options.toString === true? d.toLocaleString() : timestamp;
}

module.exports = currentdate;