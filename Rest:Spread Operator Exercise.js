function filterOutOdds(...nums) {
    return nums.filter((num) => num % 2 === 0
    );
}

function findMin(...nums) {
    return nums.reduce((min, next) => min < next ? min : next);
}

const mergeObjects = (obj1, obj2) => ({ ...obj1, ...obj2 });

function doubleAndReturnArgs(arr, ...nums) {
    return [...arr, ...nums.map(el => el * 2)];
};

/** remove a random element in the items array
and return a new array without that item. */

function removeRandom(items) {
    let randNum = Math.floor(Math.random() * items.length);
    return [...items.slice(0, randNum), ...items.slice(randNum + 1)];

};

/** Return a new array with every item in array1 and array2. */

function extend(array1, array2) {
    return [...array1, ...array2];

}

/** Return a new object with all the keys and values
from obj and a new key/value pair */

function addKeyVal(obj, key, val) {
    let newObj = { ...obj }
    newObj[key] = val;
    return newObj;

}