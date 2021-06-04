/* 
Need to turn down an event?  
We've got you covered.  
Just run this program to generate a random excuse!
*/

const fs = require('fs')

const getJoke = () => {
    const fileName = 'jokes.txt'
    // Read in raw jokes text
    const jokesText = fs.readFileSync(fileName, 'utf8')
    // Remove padding and number from jokes
    const jokesArr = jokesText.split('\n').map((joke) => joke.substring(7))
    // Geerate random number for random joke
    randNum = Math.floor(Math.random() * jokesArr.length)
    return `
        Random Excuse:
        I'd love to, but ${jokesArr[randNum]}
    `
}

console.log(getJoke())