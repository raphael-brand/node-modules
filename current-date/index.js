///<reference path="current-date.d.ts" />
var CurrentDateOptions = (function () {
    function CurrentDateOptions() {
        this.output = false;
        this.toString = false;
    }
    return CurrentDateOptions;
})();
exports.CurrentDateOptions = CurrentDateOptions;
var currentdate = function (options) {
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
};
exports.currentdate = currentdate;
