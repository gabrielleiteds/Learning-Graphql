const User = require('./Schemas/User');
const Book = require('./Schemas/Book')

module.exports = {
    Query: {
        //users 
        users: () => User.find(),
        user: (_, { id }) => User.findById(id),

        //books
        books: () => Book.find(),
        book: (_, { name }) => Book.findOne(name)

    },

    Mutation: {
        createUser: (_, { name, email }) => User.create({ name, email }),
        createBook: (_, { name, subject }) => Book.create({ name, subject })
    }
}