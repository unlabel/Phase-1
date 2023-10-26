const { CrewMember } = require('../crewMember');

describe('Тестирование класса CrewMember', () => {
    test('Создание нового объекта CrewMember', () => {
        const crewMember = new CrewMember('Иван Иванов', 'Командир', 5);
        expect(crewMember.name).toBe('Иван Иванов');
        expect(crewMember.role).toBe('Командир');
        expect(crewMember.experienceLevel).toBe(5);
    });
});
