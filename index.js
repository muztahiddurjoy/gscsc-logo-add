const sharp = require('sharp')
 const fs = require('fs')
 const path = require('path')
 const directoryPath = path.join(__dirname, '/input');

const data = fs.readdirSync(directoryPath)
data.forEach(async (elem,i)=> {
    await sharp(`${directoryPath}/${elem}`).composite([{
        input:'./src/input.png',
        left:100,
        top:100,
    }])
    .jpeg({quality:100})
    .toFile(`./out/${elem}`)
    .catch(err=> console.log(err))
    .then(()=> console.log(`done ${elem}`))
})