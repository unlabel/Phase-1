UPDATE BookConditions
SET
    amount = amount + 10,
    condition = CASE
        WHEN condition = 'есть повреждение' THEN 'есть повреждение'
        ELSE 'новая'
    END
WHERE isbn = '9785171048013';

UPDATE BookConditions
SET
    amount = amount + 15,
    condition = CASE
        WHEN condition = 'есть повреждение' THEN 'есть повреждение'
        ELSE 'новая'
    END
WHERE isbn = '9785171342722';

UPDATE BookConditions
SET
    amount = amount + 10,
    condition = 'новая'
WHERE isbn = '9785171037451';