const { Scientist, Engineer, Astronaut } = require('../specialistCrewMembers');

describe('Тестирование класса Scientist', () => {
    test('Создание нового объекта Scientist', () => {
        const scientist = new Scientist('Анна Петрова', 4, 'Биология');
        expect(scientist.name).toBe('Анна Петрова');
        expect(scientist.role).toBe('Scientist');
        expect(scientist.experienceLevel).toBe(4);
        expect(scientist.fieldOfStudy).toBe('Биология');
    });
});

describe('Тестирование класса Engineer', () => {
    test('Создание нового объекта Engineer', () => {
        const engineer = new Engineer('Сергей Сидоров', 3, 'Механика');
        expect(engineer.name).toBe('Сергей Сидоров');
        expect(engineer.role).toBe('Engineer');
        expect(engineer.experienceLevel).toBe(3);
        expect(engineer.specialization).toBe('Механика');
    });
});

describe('Тестирование класса Astronaut', () => {
    test('Создание нового объекта Astronaut', () => {
        const astronaut = new Astronaut('Елена Кузнецова', 6, true);
        expect(astronaut.name).toBe('Елена Кузнецова');
        expect(astronaut.role).toBe('Astronaut');
        expect(astronaut.experienceLevel).toBe(6);
        expect(astronaut.spacewalkExperience).toBe(true);
    });
});
