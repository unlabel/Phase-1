-- Здесь пиши код для создания и удаления таблиц(ы).
CREATE TABLE IF NOT EXISTS books (
    book_id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    isbn BIGINT NOT NULL,
    author VARCHAR(255) NOT NULL,
    genres VARCHAR(255) NOT NULL,
    amount INTEGER NOT NULL
);

DROP TABLE IF EXISTS books;