// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function (objecty) {
    var CURRENT = 0;
    var NEXT = 1;

    if (objecty === null || objecty === undefined) {
        return "null"; // return nothing
    }
    if (Array.isArray(objecty)) {
        function arrayHelper(array) {

            if (array.length === 0) {
                return '';
            } else if (typeof array[CURRENT] === 'undefined' || typeof array[CURRENT] === 'function') {
                var str = 'null';
                if (array[NEXT] !== undefined) {
                    str += ',';
                }
                return str + arrayHelper(array.slice(NEXT));
            } else {
                var str = JSON.stringify(array[CURRENT]);
                if (array[NEXT] !== undefined) {
                    str += ',';
                }
                return str + arrayHelper(array.slice(NEXT));
            }
        }
        return '[' + arrayHelper(objecty) + ']';
    } else if (typeof objecty === 'string' || typeof objecty === 'number' || typeof objecty === 'boolean') {
        return JSON.stringify(objecty);
    } else if (typeof objecty === 'object') {
        var objKeys = Object.keys(objecty);

        function objHelper(keys) {
            if (keys.length === 0) {
                return '';
            } else if (typeof keys[CURRENT] === 'undefined' ||
                typeof keys[CURRENT] === 'function' ||
                typeof objecty[keys[CURRENT]] === 'undefined' ||
                typeof objecty[keys[CURRENT]] === 'function') {
                return objHelper(keys.slice(NEXT));
            } else {
                var str = JSON.stringify(objecty[keys[CURRENT]]);
                if (keys[NEXT] !== undefined) {
                    str += ',';
                }
                return JSON.stringify(keys[CURRENT]) + ":" + str + objHelper(keys.slice(NEXT));
            }
        }
        return '{' + objHelper(objKeys) + '}';
    }
};