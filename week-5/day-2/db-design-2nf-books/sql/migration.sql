CREATE TABLE
    Authors (
        author_id INT PRIMARY KEY,
        author_name VARCHAR(255)
    );

CREATE TABLE
    Books (
        isbn VARCHAR(13) PRIMARY KEY,
        title VARCHAR(255)
    );

CREATE TABLE
    Genres (
        isbn VARCHAR(13),
        genre VARCHAR(255),
        FOREIGN KEY (isbn) REFERENCES Books(isbn)
    );

CREATE TABLE
    BookConditions (
        isbn VARCHAR(13),
        condition VARCHAR(255),
        amount INT,
        FOREIGN KEY (isbn) REFERENCES Books(isbn)
    );

CREATE TABLE
    BookAuthors (
        isbn VARCHAR(13),
        author_id INT,
        FOREIGN KEY (isbn) REFERENCES Books(isbn),
        FOREIGN KEY (author_id) REFERENCES Authors(author_id)
    );

DROP TABLE IF EXISTS BookAuthors;

DROP TABLE IF EXISTS BookConditions;

DROP TABLE IF EXISTS Genres;

DROP TABLE IF EXISTS Books;

DROP TABLE IF EXISTS Authors;