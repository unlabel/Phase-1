const { EmergencyProtocol } = require('../emergencyProtocol');

describe('Класс EmergencyProtocol', () => {
    describe('Конструктор', () => {
        test('Создание экземпляра EmergencyProtocol с корректными параметрами', () => {
            const emergencyProtocol = new EmergencyProtocol('Протокол 1', 'Описание протокола 1', 3);
            expect(emergencyProtocol).toBeDefined();
            expect(emergencyProtocol.name).toEqual('Протокол 1');
            expect(emergencyProtocol.description).toEqual('Описание протокола 1');
            expect(emergencyProtocol.priorityLevel).toEqual(3);
            expect(emergencyProtocol.requiredActions).toEqual([]);
        });
    });

    describe('addRequiredAction()', () => {
        test('Добавление необходимого действия для протокола', () => {
            const emergencyProtocol = new EmergencyProtocol('Протокол 2', 'Описание протокола 2', 2);
            const action = 'Выполнить манипуляции с оборудованием';
            emergencyProtocol.addRequiredAction(action);
            expect(emergencyProtocol.requiredActions).toContain(action);
        });
    });
});
