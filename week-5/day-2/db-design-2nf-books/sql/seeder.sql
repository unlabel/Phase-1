INSERT INTO
    Authors (author_id, author_name)
VALUES (1, 'Тед Чан'), (2, 'Айзек Азимов'), (3, 'Френк Герберт'), (4, 'Аркадий Стругацкий'), (5, 'Борис Стругацкий');

-- Заполнение таблицы "Books"

INSERT INTO Books (isbn, title)
VALUES (
        '9785171048013',
        'История твоей жизни (сборник)'
    ), (
        '9785171330361',
        'Выдох (сборник)'
    ), ('9785041727161', 'Сами боги'), ('9785171514327', 'Дюна'), ('9785171342722', 'Дюна'), (
        '9785171037451',
        'Мессия Дюны'
    ), (
        '9785171092825',
        'Обитаемый остров'
    ), (
        '9785171115432',
        'Жук в муравейнике'
    ), (
        '9785170943210',
        'Волны гасят ветер'
    );

-- Заполнение таблицы "Genres"

INSERT INTO
    Genres (isbn, genre)
VALUES (
        '9785171048013',
        'научная фантастика'
    ), (
        '9785171330361',
        'научная фантастика'
    ), (
        '9785041727161',
        'научная фантастика'
    ), (
        '9785171514327',
        'научная фантастика'
    ), (
        '9785171342722',
        'научная фантастика'
    ), (
        '9785171037451',
        'научная фантастика'
    ), (
        '9785171092825',
        'научная фантастика'
    ), (
        '9785171092825',
        'приключенческий роман'
    ), (
        '9785171092825',
        'социальная фантастика'
    ), (
        '9785171115432',
        'научная фантастика'
    ), ('9785171115432', 'детектив'), (
        '9785170943210',
        'научная фантастика'
    );

-- Заполнение таблицы "BookConditions"

INSERT INTO
    BookConditions (isbn, condition, amount)
VALUES ('9785171048013', 'новая', 3), ('9785171330361', 'новая', 5), ('9785041727161', 'новая', 1), ('9785171514327', 'новая', 0), ('9785171342722', 'новая', 2), ('9785171037451', 'новая', 4), ('9785171092825', 'новая', 4), ('9785171115432', 'новая', 1), (
        '9785170943210',
        'есть повреждение',
        1
    );

-- Заполнение таблицы "BookAuthors"

INSERT INTO
    BookAuthors (isbn, author_id)
VALUES ('9785171048013', 1),
    ('9785171330361', 1),
    ('9785041727161', 2),
    ('9785171514327', 3),
    ('9785171342722', 3),
    ('9785171037451', 3),
    ('9785171092825', 4),
    ('9785171092825', 5);