-- Здесь пиши код для выборки данных из таблиц(ы).
SELECT title FROM books
WHERE amount > 0;

SELECT title FROM books
WHERE amount = 0;

SELECT title FROM books
WHERE amount >= 5;

SELECT title, amount FROM books
WHERE amount BETWEEN 6 and 9;

SELECT title, amount FROM books
WHERE amount > 0
ORDER BY amount DESC;

SELECT title, amount FROM books
WHERE amount > 0
ORDER BY amount LIMIT 5;

