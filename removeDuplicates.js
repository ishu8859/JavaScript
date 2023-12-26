function removeDuplicates(array) 
{

  // Use a Set to store unique elements

  const uniqueSet = new Set(array);

  // Convert the Set back to an array

  const uniqueArray = Array.from(uniqueSet);

  return uniqueArray;
}

// Example usage:

const originalArray = [1, 2, 3, 4, 2, 5, 6, 1];
const newArrayWithoutDuplicates = removeDuplicates(originalArray);

console.log("Original Array:", originalArray);
console.log("Array without Duplicates:", newArrayWithoutDuplicates);
