function isPrime(number) 
{

  // 1 and numbers less than 2 are not prime

  if (number < 2) 
  {
    return false;
  }

  // Check for divisibility from 2 to the square root of the number
  
  for (let i = 2; i <= Math.sqrt(number); i++) 
  {
    if (number % i === 0) 
    {
      return false; // Found a divisor, not a prime number
    }
  }

  return true; // No divisors found, it's a prime number
}

// Example usage:

const testNumber = 17;

if (isPrime(testNumber)) 
{
  console.log(`${testNumber} is a prime number.`);
} 

else 
{
  console.log(`${testNumber} is not a prime number.`);
}
