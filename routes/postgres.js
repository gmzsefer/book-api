const express = require('express')
const router = express.Router()
const { Pool } = require('pg')

const pool = new Pool({
  user: 'gamzesefer',
  host: 'localhost',
  database: 'kitaplar',
  password: '',
  port: 5432,
})

pool.query(`
  CREATE TABLE IF NOT EXISTS books (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    author VARCHAR(255) NOT NULL,
    year INT NOT NULL
  )
`)

router.get('/books', async (req, res) => {
  const result = await pool.query('SELECT * FROM books')
  res.json(result.rows)
})

router.get('/books/:id', async (req, res) => {
  const result = await pool.query(
    'SELECT * FROM books WHERE id = $1',
    [req.params.id]
  )
  if (result.rows.length === 0) {
    return res.status(404).json({ error: 'Book not found' })
  }
  res.json(result.rows[0])
})

router.post('/books', async (req, res) => {
  const { title, author, year } = req.body
  const result = await pool.query(
    'INSERT INTO books (title, author, year) VALUES ($1, $2, $3) RETURNING *',
    [title, author, year]
  )
  res.json(result.rows[0])
})

router.put('/books/:id', async (req, res) => {
  const { title, author, year } = req.body
  const result = await pool.query(
    'UPDATE books SET title = $1, author = $2, year = $3 WHERE id = $4 RETURNING *',
    [title, author, year, req.params.id]
  )
  res.json(result.rows[0])
})

router.delete('/books/:id', async (req, res) => {
  await pool.query('DELETE FROM books WHERE id = $1', [req.params.id])
  res.json({ message: 'Book deleted' })
})

module.exports = router

