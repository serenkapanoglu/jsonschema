/** Common config for bookstore. */


let DB_URI = `postgresql://kitaplar`;

if (process.env.NODE_ENV === "test") {
  DB_URI = `${DB_URI}/books-test`;
} else {
  DB_URI = process.env.DATABASE_URL || `${DB_URI}/kitaplar`;
}


module.exports = { DB_URI };