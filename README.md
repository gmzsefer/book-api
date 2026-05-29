# 📚 Book API

A REST API that demonstrates the difference between **PostgreSQL** (relational) and **MongoDB** (document) databases using the same endpoints.

## 🔍 What's the difference?

| | PostgreSQL | MongoDB |
|---|---|---|
| Schema | Strict (title, author, year only) | Flexible (any field accepted) |
| ID | Auto-increment (1, 2, 3...) | Random string |
| Extra fields | Ignored | Saved |

## 🚀 Setup

```bash
# Install dependencies
npm install

# Start PostgreSQL and MongoDB
brew services start postgresql@15
brew services start mongodb-community

# Create PostgreSQL database
psql postgres -c "CREATE DATABASE kitaplar;"

# Run the server
node index.js
```

## 📡 Endpoints

### PostgreSQL (`/pg`)
| Method | URL | Description |
|---|---|---|
| GET | /pg/books | List all books |
| GET | /pg/books/:id | Get a book |
| POST | /pg/books | Add a book |
| PUT | /pg/books/:id | Update a book |
| DELETE | /pg/books/:id | Delete a book |

### MongoDB (`/mg`)
| Method | URL | Description |
|---|---|---|
| GET | /mg/books | List all books |
| GET | /mg/books?genre=Sci-Fi | Filter by genre |
| GET | /mg/books?search=dune | Search by title |
| GET | /mg/books/:id | Get a book |
| POST | /mg/books | Add a book |
| PUT | /mg/books/:id | Update a book |
| DELETE | /mg/books/:id | Delete a book |

## 💡 Example Requests

### Add a book (PostgreSQL)
```json
POST /pg/books
{
  "title": "Dune",
  "author": "Frank Herbert",
  "year": 1965
}
```

### Add a book with extra fields (MongoDB)
```json
POST /mg/books
{
  "title": "Dune",
  "author": "Frank Herbert", 
  "year": 1965,
  "rating": 9.5,
  "genre": "Sci-Fi"
}
```

## 🛠 Tech Stack
- Node.js
- Express.js
- PostgreSQL
- MongoDB
- Mongoose