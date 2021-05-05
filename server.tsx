const express = require('express')
const app = express()
const PORT = process.env.PORT || 8080

app.get('/', (req, res) =>{
    res.json({result: 'ok'})
})

app.listen(PORT, () => {
    console.log(`Server is running in PORT ${PORT}.`)
})