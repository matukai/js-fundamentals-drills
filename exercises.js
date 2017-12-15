/* #doubleArray
 *
 * Takes in an array of numbers and returns an array with each element doubled
 *
 * @param {Array} // [1,2,3]
 * @return {Array} // [2,4,6]
 */
var doubleArray = function(arr) {
  var result = [];
  for (var i = 0; i < arr.length; i++) {
    result.push(arr[i] * 2);
  }
  return result;
};

/* #sumArrays
 *
 * Takes in two arrays of numbers and returns the sum of both arrays.
 *
 * @param {Array}
 * @param {Array}
 * @return {Bool}
 */

var sumArrays = function sumArray(array1,array2){
  var sum = 0;
  for(var i = 0; i < array1.length; i++){
    var total = array1[i] + array2[i];
    sum = sum + total;
  }return sum;
};

/* #stringCount
 *
 * Takes in a string and returns the length of the string.
 *
 * @param {String}
 * @return {Number}
 */

var stringCount = function stringCount(string){
  var numberOfLetters = string.length;
  return numberOfLetters;
};

/* #arrayLength
 *
 * Takes in an array and returns the length of the array.
 *
 * @param {String}
 * @return {Number}
 */

var arrayLength = function arrayLength(array){
  var length = array.length;
  return length;
};

/* #countAll
 *
 * Takes in an array and returns the sum of all numbers in the array.
 *
 * @param {Array}
 * @return {Number}
 */
var countAll = function addArray(array){
  var total = 0;
  for(var i = 0; i < array.length; i++){
    total += array[i];
  }return total;
};

/* #countStrings
 *
 * Takes in an array of strings and returns an array of string lengths.
 *
 * @param {Array}
 * @return {Array}
 */


var countStrings = function countStrings(array){
  var stringLengths = [];
  for(var i = 0; i < array.length; i++){
    stringLengths.push(array[i].length);
  }return stringLengths;
};


/* #countAllStrings
 *
 * Takes in an array of strings and returns the sum of all string lengths.
 *
 * @param {String}
 * @return {Number}
 */


var countAllStrings = function countAllStrings(array){
  var total = 0;
  for(var i = 0; i < array.length; i++){
    total = array[i].length += array[i].length;
  }return total;
};


/* #convertToArray
 *
 * Takes in an object and returns all the values of the object in an array.
 *
 * @param {Object}
 * @return {Array}
 */


var convertToArray = function convertToArray(object){

  var array = (Object.values(object));
  return array;
};


/* #objectSize
 *
 * Takes in an object and returns the number of key value pairs in the object.
 *
 * @param {Object}
 * @return {Number}
 */


var objectSize = function objectSize(object){

  var length = Object.keys(object).length;
  return length;
};


/* #createZeroFilledArray
 *
 * Takes in a number and fills an array with that number of zeroes.
 *
 * @param {Number}
 * @return {Zero}
 */

var createZeroFilledArray = function createZeroFilledArray(number){
  var zeroNum;
  var array = [];
  for(var i = 0; i < number; i++){
    zeroNum = i - i;
    array.push(zeroNum);
  }return array;
};


/* #poppedArray
 *
 * Takes in an array of numbers and returns an array of all but the last element of the array.
 *
 * @param {Array}
 * @return {Array}
 */


var poppedArray = function poppedArray(array){
  array.pop();
  return array;
};


/* #splitString
 *
 * Takes in a string and returns an array of each individual character in the string.
 *
 * @param {String}
 * @return {Array}
 */


var splitString = function splitString(string){
  var letters = string.split("");
  return letters;
};


/* #lengthOfLast
 *
 * Takes in an array of strings and returns the length of the last string.
 *
 * @param {String}
 * @return {Number}
 */
var lengthOfLast = function lengthOfLast(array){

  var str = [];
  var last = array.pop();
  str.push(last);
  var meow = last.split('');
  var bark = meow.length;
  return bark;
};


/* #sumBelowTen
 *
 * Takes in an array of numbers and returns the sum of all numbers below 10.
 *
 * @param {Array}
 * @return {Number}
 */
var sumBelowTen = function sumBelowTen(array){
  var tenOver = [];
  var sum = 0;
  for(var i = 0; i < array.length; i++){
    if(array[i] <= 10){
      sum = array[i] += sum;
    }else{
      tenOver.push(array[i]);
    }
  }return sum;
};


/* #moreThanTenLetters
 *
 * Takes in an array of strings and returns the amount of elements that have more than ten letters.
 *
 * @param {String}
 * @return {Number}
 */
var moreThanTenLetters = function eleven(array){
  var tenUnder = 0;
  var tenOver = 0;
  for(var i = 0; i < array.length; i++){
    if(array[i].length <= 10){
      tenUnder = 1 + tenUnder;
    }else{
      tenOver = 1 + tenOver;
    }
  }return tenOver;
};

/* #multiplyAll
 *
 * Takes in an array of numbers and returns the product of all elements.
 *
 * @param {Array}
 * @return {Number}
 */
var multiplyAll = function multiplyAll(array){
  var product = 1;
  for(var i = 0; i < array.length; i++){
    product = product * array[i];
  }console.log(product);
  return product;
};

/* #getKeys
 *
 * Takes in an object and returns an array of the object's keys.
 *
 * @param {Object}
 * @return {Array}
 */
var getKeys = function displayKeys(object){
  var array = [];
  for(var prop in object){
    array.push(prop);
  }
  return array;
};

/* #sumAllPositive
 *
 * Takes in an array of numbers and returns the sum of all non-negative numbers.
 *
 * @param {String}
 * @return {Number}
 */
var sumAllPositive = function sumAllPositive(array){
  var sum = 0;
  var sumNeg = 0;
  for(var i = 0; i < array.length; i++){
    if(array[i] > 0){
      sum = sum + array[i];
    }else{
      sumNeg = sum + array[i];
    }
  }return sum;
};

/* #stringCountBelowThree
 *
 * Takes in an array of strings and returns the amount of strings that have three characters or less.
 *
 * @param {Array}
 * @return {Number}
 */
var stringCountBelowThree = function stringCountBelowThree(array){
  var three = 0;
  var moreThanThree = 0;
  for(var i = 0; i < array.length; i++ ){
    if(array[i].length <= 3){
      three = three + 1;
    }else{
      moreThanThree = moreThanThree + 1;
    }
  }return three;
};

/* #countObjects
 *
 * Takes in an array of objects and returns the amount of objects in the array.
 *
 * @param {Array}
 * @return {Number}
 */
var countObjects = function objectCount(array){
  var sum = 0;
  for(var i = 0; i < array.length; i++){
    sum = 1 + sum;
  }
  return sum;
};

/* #getObjectKeys
 *
 * Takes in an object and returns an array of all the object's keys.
 *
 * @param {Object}
 * @return {Array}
 */
var getObjectKeys = function getObjectKeys(object){
  var array = [];
  for(var prop in object){
    array.push(prop);
  }
  return array;
};

/* #getObjectValues
 *
 * Takes in an object and returns an array of all the object's values.
 *
 * @param {Object}
 * @return {Array}
 */
var getObjectValues = function getObjectValues(object){
  var array = [];
  for(var prop in object){
    array.push(object[prop]);
  }
  return array;
};

/* #makeObject
 *
 * Takes in two arguments 'key' and 'value' and returns a single key-value pair in an object.
 *
 * @param {String}
 * @param {String}
 * @return {Object}
 */
var makeObject = function makeObject(key,value){
  var newObj = {};
  newObj[key] = value;
  return newObj;
};

/* #makeObjectReverse
 *
 * Takes in two arguments 'value' and 'key' and returns a single key-value pair in an object.
 *
 * @param {String}
 * @param {String}
 * @return {Bool}
 */
var makeObjectReverse = function makeObjectReverse(value,key){
  var newObj = {};
  newObj[key] = value;
  return newObj;
};

/* #tupleToObject
 *
 * Takes in a tuple (an array with two elements) and returns it into a single key-value pair in an object.
 *
 * @param {Array}
 * @return {Object}
 */
var tupleToObject = function tupleToObject(array){
  var obj = {};
  for(var i = 0; i < array.length - 1 ; i++){
    obj[array[i][0]] = array[i+1];
  }return obj;
};

/* #tupleToObjectReverse
 *
 * Takes in a tuple and returns it into a single key-value pair with second tuple element as key and first tuple element as value.
 *
 * @param {Array}
 * @return {Object}
 */
var tupleToObjectReverse = function tupleToObject(array){
  var obj = {};
  for(var i = 0; i < array.length - 1 ; i++){
    obj[array[i+1]] = array[[i][0]];
  }return obj;
};

/* #strToKeys
 *
 * Takes in an array of strings and returns an object with all string elements as the object's keys and all values set to 0.
 *
 * @param {Array}
 * @return {Object}
 */
var strToKeys = function strToKeys(array){
  var obj = {};
  var num = 0;
  for(var i = 0; i < array.length; i++){
    obj[array[i]] = num;
  }
  return obj;
};

/* #getValues
 *
 * Takes in an object and returns an array of all the object's values.
 *
 * @param {Object}
 * @return {Array}
 */
var getValues = function getValues(obj){
  var arr = [];
  for(var prop in obj){
    arr.push(obj[prop]);
  }return arr;
};

/* #getKeys
 *
 * Takes in an object and returns an array of the object's keys.
 *
 * @param {Object}
 * @return {Array}
 */
var getKeys;

/* #objectToArray
 *
 * Takes in an object and returns an array of tuples where each tuple has
 * the object's key as element 0 and object's value as element 1.
 *
 * @param {Object}
 * @return {Array}
 */
var objectToArray =function objectToArray(obj){
  var bigArray = [];
  for(var prop in obj){
    var arr = [];
    arr.push(prop);
    arr.push(obj[prop]);
    bigArray.push(arr);
  }
return bigArray;
};

/* #arrayToObject
 *
 * takes in an array and returns an object with keys set to the elements in the array and
 * all values set to false.
 *
 * @param {Array}
 * @return {Object}
 */
var arrayToObject = function arrayToObject(array){
  var obj = {};
  var bool = false;
  for(var i = 0; i < array.length; i++){
    obj[array[i]] = bool;
  }
  return obj;
};

/* #arraysToObject
 *
 * takes in two arrays, the first array elements will be keys of an object and second array elements
 * will be values of an object.
 *
 * @param {Array}
 * @param {Array}
 * @return {Object}
 */
var arraysToObject = function strToKeys(array1,array2){
  var obj = {};
  for(var i = 0; i < array1.length; i++){

    obj[array1[i]] = array2[i];
  }
  return obj;
};

/* #objectsToTuples
 *
 * takes in two objects and returns an array of tuples of the key value pairs of all objects in both arrays.
 *
 * @param {Object}
 * @param {Object}
 * @return {Array}
 */
var objectsToTuples = function objectsToTuples(obj1,obj2){

  var bigArray = [];
  var bigObj = Object.assign(obj1,obj2);

  for(var prop in bigObj){
    var array = [];
    array.push(prop);
    array.push(bigObj[prop]);
    bigArray.push(array);
  }return bigArray;
};

/* #mapArrayValues
 *
 * takes in an array of strings and returns an object with keys of the array elements and values all set to True.
 *
 * @param {Array}
 * @return {Object}
 */
var mapArrayValues = function mapArrayValues(array){
  var obj = {};
  for(var i = 0; i < array.length; i++){
    obj[array[i]] = true;
  }return obj;
};

/* #mapStringCounts
 *
 * takes in an array of strings and returns an object with key names set to the elements in the array.
 * If the character count of the key name is greater than or equal to 5 set the value to true,
 * otherwise set to false.
 *
 * @param {Array}
 * @return {Object}
 */
var mapStringCounts = function mapStringCounts(array){
  var obj = {};

  for(var i = 0; i < array.length; i++){
    if(array[i].length >= 5){
      obj[array[i]] = true;
      console.log(obj);
    }else{
      obj[array[i]] = false;
    }
  }return obj;
};

/* #arrayToObjectNums
 *
 * takes in an array of numbers and returns an object with keys set to
 * each element of the array and all values set to true.
 *
 * @param {Array}
 * @return {Object}
 */
var arrayToObjectNums = function arrayToObjectNums(array){

  var obj = {};

  for(var i = 0; i < array.length; i++){
    obj[array[i]] = true;
  }return obj;
};

/* #stringToKeys
 *
 * takes in a string and returns an object whos keys are each letter of the string and all values set to true.
 *
 * @param {String}
 * @return {Object}
 */
var stringToKeys =function stringToKeys(str){

  var strArr = str.split("");
  var obj = {};

  for (var i = 0; i < strArr.length; i++) {
    obj[strArr[i]] = true;
  }
  return obj;

};

/* #charCountMap
 *
 * takes in an array of strings and returns an object with keys set to each element of the array
 * and values set to the character count of each key name.
 *
 * @param {Array}
 * @return {Object}
 */
var charCountMap;

/* #frequencyMap
 *
 * takes in an array of strings and returns an object with the string as the key and the number of occurences as the value.
 *
 * @param {String}
 * @return {Bool}
 */
var frequencyMap;

/* #tupleConvertToObject
 *
 * takes in an array of tuples and and returns an object whos keys are
 * the first element of the tuples and values are second element of the tuples.
 *
 * @param {String}
 * @return {Bool}
 */
var tupleConvertToObject;


module.exports = {
  doubleArray: doubleArray,
  sumArrays: sumArrays,
  stringCount: stringCount,
  arrayLength: arrayLength,
  countAll: countAll,
  countStrings: countStrings,
  countAllStrings: countAllStrings,
  convertToArray: convertToArray,
  objectSize: objectSize,
  createZeroFilledArray: createZeroFilledArray,
  poppedArray: poppedArray,
  splitString: splitString,
  lengthOfLast: lengthOfLast,
  sumBelowTen: sumBelowTen,
  moreThanTenLetters: moreThanTenLetters,
  multiplyAll: multiplyAll,
  getKeys: getKeys,
  sumAllPositive: sumAllPositive,
  stringCountBelowThree: stringCountBelowThree,
  countObjects: countObjects,
  getObjectKeys: getObjectKeys,
  getObjectValues: getObjectValues,
  makeObject: makeObject,
  makeObjectReverse: makeObjectReverse,
  tupleToObject: tupleToObject,
  tupleToObjectReverse: tupleToObjectReverse,
  strToKeys: strToKeys,
  getValues: getValues,
  getKeys: getKeys,
  objectToArray: objectToArray,
  arrayToObject: arrayToObject,
  arraysToObject: arraysToObject,
  objectsToTuples: objectsToTuples,
  mapArrayValues: mapArrayValues,
  mapStringCounts: mapStringCounts,
  arrayToObjectNums: arrayToObjectNums,
  stringToKeys: stringToKeys,
  charCountMap: null,
  frequencyMap: null,
  tupleConvertToObject: null
};