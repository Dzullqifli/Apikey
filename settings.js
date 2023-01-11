const fs = require('fs')

global.creator = 'Triotz' 
global.apikey = ["Zeeoneofc", "Alphabot", "Alpha", "Triotz"]

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
	delete require.cache[file]
	require(file)
})
