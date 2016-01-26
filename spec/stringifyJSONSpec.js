// test cases are described in fixtures.js
describe('stringifyJSON', function(){
  it('should match the result of calling JSON.stringify', function(){

    stringifiableObjects.forEach(function(test){
      var expected = JSON.stringify(test);
      var result = stringifyJSON(test);
        console.log(Array.isArray(stringifiableObjects));
        console.log("stringifiable expected: " + expected);
        console.log("stringifiable result: " + result);
      expect(result).to.equal(expected);
    });

    unstringifiableValues.forEach(function(obj){
      var expected = JSON.stringify(obj);
      var result = stringifyJSON(obj);
        console.log("unstringifiable expected: " + expected);
        console.log("unstringifiable result: " + result);
      expect(result).to.equal(expected);
    });

  });
});
