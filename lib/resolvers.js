'use strict'

const books = [
    {
        _id: '1',
        title: 'API for Dummies',
        description: 'Libro con la editorial de IBM',
        isbn: '1029-1973-233'
    },
    {
        _id: '2',
        title: 'DBA PostgreSQL',
        description: 'Administración de Base de Datos en PostgreSQL',
        isbn: '1029-1973-033'
    },
    {
        _id: '3',
        title: 'Aprende GNU/Linux como si estuviera en primero',
        description: 'Libro de GNU/Linux',
        isbn: '1029-2393-233'
    }
]

module.exports = {
    Query: {
        getBooks: () => {
            return books
        },
        getBook: (root, args) => {
            const book = books.filter(book => book._id === args.id)
            return book.pop()
        }
    }
}