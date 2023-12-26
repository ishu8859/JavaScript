function findLargestNumber(numbers) 
{

  // Check if the array is empty

  if (numbers.length === 0) 
  {
    return undefined; // or any other value to indicate that the array is empty
  }

  let largest = numbers[0];

  // Iterate through the array to find the largest number
  
  for (let i = 1; i < numbers.length; i++) 
  {
    if (numbers[i] > largest) 
    {
      largest = numbers[i];
    }
  }

  return largest;
}

// Example usage:

const numbersArray = [10, 5, 8, 20, 15, 7];
const largestNumber = findLargestNumber(numbersArray);

console.log(`The largest number is: ${largestNumber}`);
