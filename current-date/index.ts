///<reference path="current-date.d.ts" />
//declare CurrentDateOptions;
interface ICurrentDateOptions {
  output: boolean
  toString: boolean
}

class CurrentDateOptions implements ICurrentDateOptions {
  output:boolean = false
  toString: boolean = false
}

let currentdate = (options: ICurrentDateOptions) => {
  var d = new Date();
  var timestamp = d.getTime();
  if (options && options.output === true) {
    if (options.toString === true) {
      console.log(d.toLocaleString());
    }
    else if (options) {
      console.log('' + timestamp);
    }
  }
  return options && options.toString === true ? d.toLocaleString() : timestamp;
}

export { currentdate, CurrentDateOptions };