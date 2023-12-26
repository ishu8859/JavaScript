function isPalindrome(str)
{
    
    // Remove non-alphanumeric characters and convert to lowercase
    const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    
    // Reverse the cleaned string
    const reversedStr = cleanedStr.split('').reverse().join('');
    
    // Check if the cleaned string is the same as its reverse
    return cleanedStr == reversedStr;
}

// Example usage :

const word = "Racecar";
const phrase = "A man, a plan, a canal, Panama!";

console.log(isPalindrome(word));  // output : true
console.log(isPalindrome(phrase));  // output : true
