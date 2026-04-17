# Array Methods

Array methods are in built functions that perform specific operation on array objects.

## Destructive Methods
- .pop() - Removes last element in a list the returns it
- .Shift() - Removes the first element and returns it 
- .unshift - Adding an element at the beginning of an array
- .Push() - Adding am element at the end of an array
- .splice() - Removes and replaces existing elements
- .copyWithin() - copies part of this array from another location (target, start, end)
- .fill() -  changes a value within a range. (value, start, end)
- .reverse() - changes the position of the elements the first becomes the last and the last becomes the first.
- .sort() -  rearranges arrays.in order of ascending and descending order. Changes into a string and compares to unit value.


## Non-destructive Methodes
1. .slice() - Takes a portion of the array into a new array - (define start, and end not inclusive)
2. .concat() - merges two or more arrays.
3. .toReversed() - reverse orders elements in arrays.
4. .toSorted() - it returns a new array with the elements sorted in ascending order. creates new array doesn't change orginal array.
5. .toSplice() - used to delete, add and replace element in an array. Returns new array with the changes.
6. .every() - returns false if it find an element in the array doesn't satify the provided testing function. otherwise returns true
7. .flat() - creates new array from sub-array elements
8. .some() - returns true if it finds an element in the array that satisfies the provided testing function. Otherwise, it returns false.
9. .includes() - checks to see if array contains specific value and returns true or false.
10. .map() - creates new array by changing each element
11. .filter() - created new array with only elements that pass a condition.
12. .forEach() - logs in elements when condition is met.
13. .reduce() - acts a "reducer" callback function.(return value from the calculation on the preceding element)