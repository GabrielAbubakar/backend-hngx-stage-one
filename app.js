const express = require('express')
const app = express()
const port = 3000


app.get('/api', (req, res) => {
    // Set the information included in query parameters as variables
    const slack_name = req.query.slack_name;
    const track = req.query.track;

    // Set the Content-Type header to indicate JSON response
    res.setHeader('Content-Type', 'application/json');

    // Throw an error if query parameters arent included in the GET request
    if (!slack_name || !track) {
        return res.status(400).json({ error: 'Both "slack_name" and "track" parameters are required.' });
    }

    // Calculate the day of the week
    var week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var dt = new Date()
    var day = dt.getDay()

    // Create the response object
    const jsonResponse = {
        "slack_name": slack_name,
        "current_day": week[day],
        "utc_time": new Date().toISOString().slice(0, 19) + 'Z',
        "track": track,
        "github_file_url": "https://github.com/GabrielAbubakar/backend-hngx-stage-one/blob/master/app.js",
        "github_repo_url": "https://github.com/GabrielAbubakar/backend-hngx-stage-one",
        "status_code": 200
    }


    res.send(jsonResponse)
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})