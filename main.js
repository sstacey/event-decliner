// write program here


const getJokes = (fileName) => {
    const fs = require('fs')

    const textArr = fs.readFile(fileName, 'utf8', (err, data) => {
        if (err) {
            throw err
        }
        return data.split('\n')
    })
    console.log(textArr)
    console.log(textArr)

    

    // fs.readFile(filename, 'utf8', function(err, data) {
    // if (err) throw err;
    // console.log('OK: ' + filename);
    // console.log(data)
}


getJokes('jokes.txt')