// Using normal function 

// function countVowel(str)
// {
//     let count = 0;
//     for(const char of str)
//     {
//       if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u")
//       {
//         count = count + 1;
//       }
//     }
//     // console.log(count);
//     return count;
// }

// Using aero function

const countVow = (str) => {
    let count = 0;
    for(const char of str)
    {
      if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u")
      {
        count = count + 1;
      }
    }
    // console.log(count);
    return count;
}