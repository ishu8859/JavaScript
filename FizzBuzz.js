for (let i = 1; i <= 100; i++)
{
    
    // Check if the number is a multiple of both 3 and 5
    
    if (i % 3 == 0 && i % 5 == 0)
    {
        console.log("FizzBuzz");
    }
    
    else if (i % 3 == 0)
    {
        // Check if the number is multiple of 3
        console.log("Fizz");
    }
    
    else if (i % 5 == 0)
    {
        // Check if the numner is multiple of 5
        console.log("Buzz");
    }
    
    else
    {
        // If the number is not a multiple of 3 or 5, print the number itself.
        console.log(i);
    }
}
