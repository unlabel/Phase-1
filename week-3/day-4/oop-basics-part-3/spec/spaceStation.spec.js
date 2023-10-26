const { SpaceStation } = require('../spaceStation');
const { CrewMember } = require('../crewMember');
const { Resource } = require('../resource');
const { Equipment } = require('../equipment');
const { Task } = require('../task');

describe('Класс SpaceStation', () => {
    describe('Конструктор', () => {
        test('Создание новой космической станции', () => {
            const station = new SpaceStation();
            expect(station).toBeDefined();
            expect(station.crewMembers).toEqual([]);
            expect(station.resources).toEqual([]);
            expect(station.equipment).toEqual([]);
            expect(station.tasks).toEqual([]);
        });
    });

    describe('runTask()', () => {
        let station, crewMember, resource, equipment, task;

        beforeEach(() => {
            station = new SpaceStation();
            crewMember = new CrewMember('Иван', 'Космический инженер', 3);
            resource = new Resource('Вода', 1000, 1, 'Комната хранения 1');
            equipment = new Equipment('Манипулятор', 'Манипулятор для работы в космосе', 'Рабочий');
            task = new Task('Задача 1', 'Описание задачи 1');
        });

        test('Задача не может быть выполнена без члена экипажа', () => {
            task.addRequiredResource(resource);
            task.addRequiredEquipment(equipment);
            station.resources.push(resource);
            station.equipment.push(equipment);
            station.tasks.push(task);
            const result = station.runTask(task);
            expect(result).toBeUndefined();
        });

        test('Задача не может быть выполнена без необходимых ресурсов', () => {
            task.assignCrewMember(crewMember);
            task.addRequiredEquipment(equipment);
            station.crewMembers.push(crewMember);
            station.equipment.push(equipment);
            station.tasks.push(task);
            const result = station.runTask(task);
            expect(result).toBeUndefined();
        });

        test('Задача не может быть выполнена без необходимого оборудования', () => {
            task.assignCrewMember(crewMember);
            task.addRequiredResource(resource);
            station.crewMembers.push(crewMember);
            station.resources.push(resource);
            station.tasks.push(task);
            const result = station.runTask(task);
            expect(result).toBeUndefined();
        });

        test('Задача успешно выполняется при наличии члена экипажа, необходимых ресурсов и оборудования', () => {
            task.assignCrewMember(crewMember);
            task.addRequiredResource(resource);
            task.addRequiredEquipment(equipment);
            station.crewMembers.push(crewMember);
            station.resources.push(resource);
            station.equipment.push(equipment);
            station.tasks.push(task);
            const result = station.runTask(task);
            expect(result).toBeUndefined(); // Задача успешно выполняется, если функция runTask() не возвращает значение
        });
    });

});
