const dayjs = require('dayjs');
const express = require('express');
const app = express();
const port = 8080;
app.use(express.json());

// show current date using dayjs

app.get('/', (req, res) => {

    const currDate = dayjs().format('YYYY-MM-DD HH:mm:ss');
    res.send(`Current date and time: ${currDate}`);
    console.log(`Current date and time: ${currDate}`);

});
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});