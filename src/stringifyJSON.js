// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(objecty) {
  if (Array.isArray(objecty)) {
      function arrayHelper(array, index) {
          var newArray = [];
          if (index==(array.length)) {
              return newArray;
          } else if (typeof array[index] == ("undefined" || "function")) {
              return arrayHelper(array.slice(index), index+1);
          } else {
              newArray.push(JSON.stringify(array[index]));
              return arrayHelper(array.slice(index), index+1);
          }
      }
      return arrayHelper(objecty, 0);
  } else if (objecty instanceof Object) {
      function objHelper(obj, index) {
          var objKeys = Object.keys(obj);
          var newObj = {};
          if (index == (objKeys.length)) {
              return newObj;
          } else if (typeof objKeys[index] == ("undefined" || "function")) {
              return objHelper(obj, index+1);
          } else {
              newObj[JSON.stringify(objKeys[index])] = 
                  JSON.stringify(obj[objKeys[index]]);
              return objHelper(obj, index+1);
          }
      }
      return objHelper(objecty, 0);
  } else {
      return JSON.stringify(objecty);
  }
};
