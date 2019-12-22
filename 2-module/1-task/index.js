/**
 * Клонируем объект
 * @param {Object} obj - клонируем объект
 * @returns {Object}
 */


function clone(obj) {
   let objClone = {}; 
   for (let key in obj){
       objClone[key] = obj[key];
   }
   return objClone;
}

const obj = {test : 1};

let obj1 = clone(obj);

console.log(clone(obj1) !== obj);
console.log(clone(obj1).test === obj.test);
