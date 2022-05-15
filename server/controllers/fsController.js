const fs = require('fs')

fs.readFile(path,(err,data)=>{
    if(err){
        return next(err)
    }
    res.setHeader('Content-Disposition', 'attachment: filename="' + filename + '"')
    res.send(data)
})