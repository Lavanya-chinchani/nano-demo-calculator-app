const express = require('express');
const app = express();

const PORT = process.env.PORT || 8082;

const baseUrl = '/calculator'

app.use(express.json());

const baseRouter = express.Router();

baseRouter.get('/greeting', (req, res) => {
    return res.send('hello user');
});

baseRouter.post('/add', (req, res) => {
    const {first,second} =req.body;
    const relt=first+second;
    res.json({result:relt});
});



baseRouter.post('/subtract', (req, res) => {
    const {first,second} =req.body;
    const relt=first-second;
    res.json({result:relt});
    
});

app.use(baseUrl, baseRouter);
app.listen(PORT, () => {
    console.log("Server running at PORT", PORT);
});