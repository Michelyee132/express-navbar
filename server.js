const express = require('express')
const morgan = require('morgan')
const path = require('path')


const app = express()
const PORT = process.env.PORT || 3000


app.use(morgan('tiny'))


app.use(express.static(path.join(__dirname, 'public')))

app.get('/typesetting', (req, res) => {
    res.redirect('https://github.com/Michelyee132/TypeSettings')
})

app.get('/climate', (req,res) => {
    res.redirect('https://github.com/Michelyee132/climate-crisis')
})

app.get('/algo', (req,res) => {
    res.redirect('https://github.com/Michelyee132/four-sorting-algorithms')
})

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
})