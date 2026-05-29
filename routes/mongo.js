const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/kitaplar')

const Book = mongoose.model('Book', new mongoose.Schema({}, { strict: false })) 

router.get('/books', async (req, res) => {
  const filter = {}
  if (req.query.genre) filter.genre = req.query.genre
  if (req.query.author) filter.author = req.query.author
  if (req.query.search) filter.title = { $regex: req.query.search, $options: 'i' }
  const books = await Book.find(filter)
  res.json(books)
})

router.get('/books/:id', async (req, res) => {
  const book = await Book.findById(req.params.id)
  if (!book) {
    return res.status(404).json({ error: 'Book not found' })
  }
  res.json(book)
})

router.post('/books', async (req, res) => {
  const book = new Book(req.body)
  await book.save()
  res.json(book)
})

router.put('/books/:id', async (req, res) => {
  const book = await Book.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  )
  res.json(book)
})

router.delete('/books/:id', async (req, res) => {
  await Book.findByIdAndDelete(req.params.id)
  res.json({ message: 'Book deleted' })
})

module.exports = router