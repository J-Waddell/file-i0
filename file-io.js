// blocking example *vvv*

// const { readFileSync } = require('fs')

// const fileArg = process.argv[2]

// if (fileArg) {
//     try {
//         const DATA = readFileSync(fileArg,"")
//         console.log("data??", DATA.toString())
//         // process.stdout.write(DATA) <--//doesn't need toString().
//     } catch(e) {
//         console.log('Error', e.stack)
//     }
// } else {
//     process.exit()
// }

// console.log("This is the synchronous version")

// non-blocking example *vvv*
const { readFile } = require('fs')

const fileArg = process.argv[2]

if (fileArg) {
    readFile(fileArg, (err, data) => {
        if(err) return console.error(err)
            process.stdout.write(data)
    })
} else {
    process.exit()
}
console.log("This is the async version")