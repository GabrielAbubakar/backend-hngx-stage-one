const express = require('express')
const app = express()
const port = 3000


app.get('/', (req, res) => {
    // Set the Content-Type header to indicate JSON response
    res.setHeader('Content-Type', 'application/json');

    const jsonResponse = {
        message: 'Hello, Express!',
        date: new Date()
    };


    res.send(jsonResponse)
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})