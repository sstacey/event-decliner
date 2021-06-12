/* 
Need to turn down an event?  
We've got you covered.  
Just run this program to generate a random excuse!
*/

// Import fs module
const fs = require('fs');

const fileName = 'jokes.txt';

const getFile = fileName => {
    // Read in raw jokes text
    const jokesText = fs.readFileSync(fileName, 'utf8')
    // Remove padding and number from jokes
    return jokesText.split('\n')
    
}

const getJoke = (jokesArr) => {
    // Geerate random number for random joke
    randNum = Math.floor(Math.random() * jokesArr.length)
    // Return random excuse
    return `
        Random Excuse:
        I'd love to, but ${jokesArr[randNum]}
    `
}

const jokesArr = getFile(fileName);
console.log(getJoke(jokesArr))