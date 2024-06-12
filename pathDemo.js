import path from 'path'

const filePath = './dir1/dir2/test.txt';

// returns last portion of a path
console.log (path.basename(filePath));

// returns file path
console.log(path.dirname(filePath))

// returns extension
console.log(path.extname(filePath))

// returns everything
console.log(path.parse(filePath))

import url from 'url'
const __filename = url.fileURLToPath(import.meta.url) // file://filepath
const __dirname = path.dirname(__filename)

// join()
const filePath2 = path.join(__dirname, 'dir1', 'dir2', 'test.txt') // puts / or \ , the necessary one between the strings
console.log(filePath2)

// resolve()
const filePath3 = path.resolve(__dirname, 'dir1', 'dir2', 'test.txt') // same
console.log(filePath3)
