SELECT
    "Users".name,
    "Rooms".number
FROM "Users"
    JOIN "Rooms" ON "Users".id = "Rooms".id;

SELECT
    "Users".name,
    "Hotels".name
FROM "Users"
    JOIN "Hotels" ON "Users".id = "Hotels".id;

SELECT
    "Hotels".name,
    "Rooms".number
FROM "Hotels"
    JOIN "Rooms" ON "Hotels".id = "Rooms".id;