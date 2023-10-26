const { Task } = require('../task');
const { CrewMember } = require('../crewMember');
const { Resource } = require('../resource');
const { Equipment } = require('../equipment');

describe('Класс Task', () => {
    describe('Конструктор', () => {
        test('Создание задачи с корректными параметрами', () => {
            const task = new Task('Задача 1', 'Описание задачи 1');
            expect(task).toBeDefined();
            expect(task.name).toEqual('Задача 1');
            expect(task.description).toEqual('Описание задачи 1');
            expect(task.assignedCrewMember).toBeNull();
            expect(task.requiredResources).toEqual([]);
            expect(task.requiredEquipment).toEqual([]);
        });
    });

    describe('assignCrewMember()', () => {
        test('Назначение члена экипажа на задачу', () => {
            const task = new Task('Задача 2', 'Описание задачи 2');
            const crewMember = new CrewMember('Иван', 'Космический инженер', 3);
            task.assignCrewMember(crewMember);
            expect(task.assignedCrewMember).toEqual(crewMember);
        });
    });

    describe('addRequiredResource()', () => {
        test('Добавление необходимого ресурса для задачи', () => {
            const task = new Task('Задача 3', 'Описание задачи 3');
            const resource = new Resource('Вода', 1000, 1, 'Комната хранения 1');
            task.addRequiredResource(resource);
            expect(task.requiredResources).toContain(resource);
        });
    });

    describe('addRequiredEquipment()', () => {
        test('Добавление необходимого оборудования для задачи', () => {
            const task = new Task('Задача 4', 'Описание задачи 4');
            const equipment = new Equipment('Манипулятор', 'Манипулятор для работы в космосе');
            task.addRequiredEquipment(equipment);
            expect(task.requiredEquipment).toContain(equipment);
        });
    });
});
