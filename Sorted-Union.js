/*
Sorted Union
Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.
In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.
The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.
*/
 
function uniteUnique(arr) {
 
    //create a seed array
    var result = arguments[0];
 
    //cycle through each array as supplied in the 'arguments'
    for (var i = 1; i < arguments.length; i++) {
 
        //add the filter's result to the seed, ready for the next argument, then
        //check if the array element already exists in the seed
        result = result.concat(arguments[i].filter((element) => result.indexOf(element) < 0));
    }
    return result;
}
 

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1])); // should return [1, 3, 2, 5, 4].
console.log(uniteUnique([1, 3, 2], [1, [5]], [2, [4]])); // should return [1, 3, 2, [5], [4]].
console.log(uniteUnique([1, 2, 3], [5, 2, 1])); // should return [1, 2, 3, 5].
console.log(uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8])); // should return [1, 2, 3, 5, 4, 6, 7, 8].