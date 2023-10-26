const { EmergencyTask } = require('../emergencyTask');

describe('EmergencyTask', () => {
    test('Создание экземпляра EmergencyTask', () => {
        const emergencyTask = new EmergencyTask('Задача 1', 'Описание задачи 1', 'Протокол аварийной ситуации');
        expect(emergencyTask.name).toBe('Задача 1');
        expect(emergencyTask.description).toBe('Описание задачи 1');
        expect(emergencyTask.emergencyProtocol).toBe('Протокол аварийной ситуации');
    });

    test('Наследование свойств от класса Task', () => {
        const emergencyTask = new EmergencyTask('Задача 2', 'Описание задачи 2', 'Протокол аварийной ситуации');
        expect(emergencyTask.name).toBeDefined();
        expect(emergencyTask.description).toBeDefined();
        expect(emergencyTask.assignedCrewMember).toBeNull();
        expect(emergencyTask.requiredResources).toEqual([]);
        expect(emergencyTask.requiredEquipment).toEqual([]);
    });
});
