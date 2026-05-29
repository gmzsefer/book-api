# Book API

A REST API built with Node.js, Express, PostgreSQL and MongoDB.

## Endpoints

### PostgreSQL
- `GET /pg/books` - List all books
- `GET /pg/books/:id` - Get a book
- `POST /pg/books` - Add a book
- `PUT /pg/books/:id` - Update a book
- `DELETE /pg/books/:id` - Delete a book

### MongoDB
- `GET /mg/books` - List all books (supports ?genre= and ?search=)
- `GET /mg/books/:id` - Get a book
- `POST /mg/books` - Add a book
- `PUT /mg/books/:id` - Update a book
- `DELETE /mg/books/:id` - Delete a book

## Setup

```bash
npm install
node index.js
```
