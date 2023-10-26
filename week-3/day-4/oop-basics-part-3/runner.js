const { CrewMember } = require('./crewMember');
const { Scientist, Engineer, Astronaut } = require('./specialistCrewMembers');
const { Resource } = require('./resource');
const { Fuel, Food } = require('./specialResources');
const { Equipment } = require('./equipment');
const { Task } = require('./task');
const { EmergencyTask } = require('./emergencyTask');
const { SpaceStation } = require('./spaceStation');
const { EmergencyProtocol } = require('./emergencyProtocol');

// Создаем экземпляры классов
const crewMember = new CrewMember('Джон Доу', 'Специалист по миссиям', 3);
const scientist = new Scientist('Джейн Смит', 5, 'Астрофизика');
const engineer = new Engineer('Алиса Браун', 4, 'Электрика');
const astronaut = new Astronaut('Боб Уайт', 6, true);

// создаем экземпляры ресурсов
const resource = new Resource('Вода', 1000, 1, 'Комната хранения 1');
const fuel = new Fuel('Водород', 500, 2, 'Хранилище топлива', 'Жидкий водород');
const food = new Food('Рационы', 200, 1, 'Комната хранения 2', '2023-12-31');

// Создаем экземпляр оборудования
const equipment = new Equipment('Дрель', 'Рабочий', 'Комната оборудования 1');

// создаем задачи и экстренные протоколы
const task = new Task('Проведение эксперимента', 'Проведение физического эксперимента в лаборатории');
const emergencyProtocol = new EmergencyProtocol('Протокол пожара', 'Тушение пожара и восстановление безопасности', 1);
const emergencyTask = new EmergencyTask('Тушение пожара', 'Тушение пожара в лаборатории', emergencyProtocol);

// Назначаем члена экипажа, ресурсы и оборудование для экстренной задачи
emergencyTask.assignCrewMember(engineer);
emergencyTask.addRequiredResource(resource);
emergencyTask.addRequiredEquipment(equipment);


// Создаем экземпляр космической станции
const spaceStation = new SpaceStation();

// Вызываем методы для класса Task
task.assignCrewMember(astronaut);
task.addRequiredResource(resource);
task.addRequiredEquipment(equipment);

// Добавляем членов экипажа, ресурсы, оборудование и задачи на космическую станцию
spaceStation.crewMembers.push(crewMember, scientist, engineer, astronaut);
spaceStation.resources.push(resource, fuel, food);
spaceStation.equipment.push(equipment);
spaceStation.tasks.push(task, emergencyTask);

// Генерируем отчет о космической станции
spaceStation.generateReport();

// Имитируем чрезвычайную ситуацию и активируем экстренную задачу
spaceStation.simulateEmergency();
spaceStation.triggerEmergency(emergencyTask);
