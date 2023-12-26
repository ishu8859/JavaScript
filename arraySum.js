function arraySum(numbers) 
{

  // Use the reduce function to accumulate the sum
  
  const sum = numbers.reduce((accumulator, currentValue) => 
  {
    return accumulator + currentValue;
  }, 0);

  return sum;
}

// Example usage:

const numbersArray = [1, 2, 3, 4, 5];
const sumOfArray = arraySum(numbersArray);

console.log("Array:", numbersArray);
console.log("Sum of Array Elements:", sumOfArray);
