/* The slice() method returned shallow copy of a portion of an array into
 * a new array object
 * Key points:
 * 1. slice() does not alter the array being sliced
 * 2. makes a shallow copy  or in other words returns it for you to save in a new variable
 * Keep differences with splice:
 * 1. splice alters the array - by joining the values on the ends(yet outside) the lopped part of the array
 * 2. splice as a third argument: allowing you to add elements into the area that was spliced
 * 3. splice primarily function s or is defined as joining areas of the current rate with current values and / or  additional added values
 * 4. like you slice it returns something as well that you can save in a variable-  in this case that deleted or lopped off part of the array
 */

 // Examples
 // Regarding the altering versus shallow copy

 var array1 = [1, 2, 3, 4, 5, 6, 7];
 var slicedArray = array1.slice(1, 4);
 //  array1 //  [1, 2, 3, 4, 5, 6, 7];
 // slicedArray // [2, 3, 4]  // copy and references the original array

 var splicedArray = array1.splice(1, 4);
 //  array1 = [1, 6, 7];
 // splicedOutValue // [2, 3, 4, 5]
