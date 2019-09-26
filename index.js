require('dotenv').config()
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')
const Person = require('./models/person')


app.use(express.static('build'))
app.use(bodyParser.json())

morgan.token('content', function (request, response) {return JSON.stringify(request.body)})
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :content'))
app.use(cors())

app.get('/', (request, response) => {
    response.send('<h1>Phonebook</h1>')
})

app.get('/info', (request, response, next) => {
    Person.count().then(value => { 
        response.send(`<p>Phonebook has info for ${value} people</p> 
        <p>${new Date()}</p>`)
    })
    .catch(error => next(error))
})

app.get('/api/persons', (request, response, next) => {
    Person.find({})
    .then(persons => {
        response.json(persons.map(person => person.toJSON()))
    })
    .catch(error => next(error))
})

app.get('/api/persons/:id', (request, response, next) => {
    Person.findById(request.params.id)
    .then(person => {
        if (person) {
            response.json(person.toJSON())
        } else {
            response.status(404).end()
        }
    })
    .catch(error => next(error))    
})


app.post('/api/persons', (request, response, next) => {
    const body = request.body
    console.log(body.name , 'is name')
    console.log(body.number, 'is number')


    const person = new Person({
        name: body.name,
        number: body.number,
    })

    person.save().then(savedNote => {
        response.json(savedNote.toJSON())
    })
    .catch(error => next(error))
})

app.delete('/api/persons/:id', (request, response, next) => {
    Person.findByIdAndDelete(request.params.id)
    .then(result => {
        response.status(204).end()
    })
    .catch(error => next(error))
})

app.put('/api/persons/:id', (request, response, next) => {
    const body = request.body

    const person = {
        name: body.name,
        number: body.number,
    }
    Person.findByIdAndUpdate(request.params.id, person, { new: true })
        .then(updatetPerson => {
          response.json(updatetPerson.toJSON())
        })
        .catch(error => next(error))
})

const unknownEndpoint = (request, response) => {
    response.status(404).send({ error: 'unknown endpoint' })
}

app.use(unknownEndpoint)

const errorHandler = (error, request, response, next) => {
    console.log(error.message)
    if (error.name === 'CastError' && error.kind == 'ObjectId') {
        return response.status(400).send({ error: 'malformatted id' })
    } else if (error.name === 'ValidationError') {
        return response.status(400).send({ error: error.message })
    } else if (error.name === 'ValidatorError') {
        return response.status(400).send({ error: error.message})
    }
    next(error)
}

app.use(errorHandler)

const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
