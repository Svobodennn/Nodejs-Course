// import fs from 'fs';


// async
// fs.readFile('./test.txt', 'utf8', (err, data) => {
//     if(err) throw err;
//     console.log("who is"+data)
// });

// // synchronous version
// const data = fs.readFileSync('./test.txt', 'utf8');
// console.log("the first"+data);



import { write } from 'fs';
import fs from 'fs/promises';

// promise .then()
fs.readFile('./test.txt', 'utf8')
    .then((data) => console.log(data))
    .catch((err) => console.log(err))

// async/await
const readFile = async () => {
    try {
        const data = await fs.readFile('./test.txt', 'utf8');
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}

readFile();

const writeFile = async () => {
    try {
        await fs.writeFile('./test.txt', 'Hello World!'); // creates if doesn't exist
        console.log('file written')
    } catch (error) {
        console.log(error)
    }
}

writeFile()

const appendFile = async () => {
    try {
        await fs.appendFile('./test.txt', '\n appended line!');
        console.log('file appended')
    } catch (error) {
        console.log(error)
    }
}

appendFile();readFile();
