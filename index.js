const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')

app.use(bodyParser.json())
app.use(morgan('tiny'))
app.use(cors())

let persons = [
    {
        name: "Outi Savolainen",
        number: "040-123456",
        id: 1
    },
    {
        name: "Mick Maus",
        number: "011-022-22335566",
        id: 2
    },
    {
        name: "Claire Frasier",
        number: "033-75767576",
        id: 3
    },
    {
        name: "Matti Meikäläinen",
        number: "045-654321",
        id: 4
    } 
]

const personsCount = () => {
    const numberOfPersons = persons.length > 0
      ? Math.max(...persons.map(n => n.id))
      : 0
    return numberOfPersons
}

app.get('/', (request, response) => {
    response.send('<h1>Persons</h1>')
})

app.get('/info', (request, response) => {
    response.send(`<p>Phonebook has info for ${personsCount()} people</p> 
    <p>${new Date()}</p>`)
})

app.get('/api/persons', (request, response) => {
    response.json(persons)
})

app.get('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    const person = persons.find(person => person.id === id)

    if (person) {
        response.json(person)
    } else {
        response.status(404).end()
    }
})

const generatedId = () => {
    const id = Math.floor(Math.random() * Math.floor(10000))
    console.log(id)
    return id
}

app.post('/api/persons', (request, response) => {
    const body = request.body
    if (!body.name || !body.number) {
        return response.status(400).json({
            error: 'Name or number missing.'
        })
    }
    const isOnList = persons.find(person => person.name === body.name)
    console.log(isOnList)
    if (typeof isOnList !== 'undefined' ) {
        return response.status(400).json({
            error: 'Name must be unique'
        })
    }

    const person = {
        name: body.name,
        number: body.number,
        id: generatedId()
    }

    persons = persons.concat(person)

    response.json(person)
})

app.delete('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    persons = persons.filter(person => person.id !== id)

    response.status(204).end()
})

app.put('/api/persons/:id', (request, response) => {
    const body = request.body
    response.json(body)
})

const PORT =  process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
