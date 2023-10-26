const { Resource } = require('../resource');
const { Fuel, Food } = require('../specialResources');
const { Equipment } = require('../equipment');


describe('Класс Resource', () => {
    describe('Конструктор', () => {
        test('Создание ресурса с корректными параметрами', () => {
            const resource = new Resource('Вода', 1000, 1, 'Комната хранения 1');
            expect(resource).toBeDefined();
            expect(resource.name).toEqual('Вода');
            expect(resource.quantity).toEqual(1000);
            expect(resource.consumptionRate).toEqual(1);
            expect(resource.storageLocation).toEqual('Комната хранения 1');
        });

        test('Создание ресурса с отрицательным количеством', () => {
            expect(() => {
                new Resource('Вода', -100, 1, 'Комната хранения 1')
            }).toThrow()
        });

        test('Создание ресурса с некорректной скоростью потребления', () => {
            expect(() => new Resource('Вода', 1000, -1, 'Комната хранения 1')).toThrow();
        });
    });
});

describe('Класс Fuel', () => {
    describe('Конструктор', () => {
        test('Создание топлива с корректными параметрами', () => {
            const fuel = new Fuel('Водород', 500, 2, 'Хранилище топлива', 'Жидкий водород');
            expect(fuel).toBeDefined();
            expect(fuel.name).toEqual('Водород');
            expect(fuel.quantity).toEqual(500);
            expect(fuel.consumptionRate).toEqual(2);
            expect(fuel.storageLocation).toEqual('Хранилище топлива');
            expect(fuel.fuelType).toEqual('Жидкий водород');
        });
    });
});

describe('Класс Food', () => {
    describe('Конструктор', () => {
        test('Создание продовольствия с корректными параметрами', () => {
            const food = new Food('Рационы', 200, 1, 'Комната хранения 2', '2023-12-31');
            expect(food).toBeDefined();
            expect(food.name).toEqual('Рационы');
            expect(food.quantity).toEqual(200);
            expect(food.consumptionRate).toEqual(1);
            expect(food.storageLocation).toEqual('Комната хранения 2');
            expect(food.expirationDate).toEqual('2023-12-31');
        });
    });
});

describe('Класс Equipment', () => {
    describe('Конструктор', () => {
        test('Создание объекта Equipment с корректными параметрами', () => {
            const equipment = new Equipment('Манипулятор', 'Готов к использованию', 'Склад 1');
            expect(equipment).toBeDefined();
            expect(equipment.name).toEqual('Манипулятор');
            expect(equipment.status).toEqual('Готов к использованию');
            expect(equipment.location).toEqual('Склад 1');
        });
    });
});
