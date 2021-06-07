function randomNumber(n){
    return Math.floor(Math.random() * n)
}
//create object to give client random messages
const messageObj = {
day: ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday','sunday'],
fortune: ['luckyday', 'badluck', 'tryHard', 'goodluck'],
messageDay: ['dont give up', 'time will change', 'try and try', 'try until succed']

}
// store the message in an array 
let personalMessage = []

// use FOR IN loop to iterate through object
for (let word in messageObj){
    let choices = randomNumber(messageObj[word].length)
    switch(word){
        case 'day':
            personalMessage.push(`On ${messageObj[word][choices]}`)
            case 'fortune':
                personalMessage.push(`your fortune ${messageObj[word][choices]}`)
                case 'messageDay':
                personalMessage.push(`Hence message for you ${messageObj[word][choices]}`)
               // default:
                 //   personalMessage.push('There is not enough info.')
    }
}

const FinalMessage = msg => {
    let clientMessag = personalMessage.join('\n')
    console.log(clientMessag)
}
FinalMessage(personalMessage);