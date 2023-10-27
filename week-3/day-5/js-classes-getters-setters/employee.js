class Employee {
  constructor(name, salary, position) {
    this.name = name;
    this._salary = salary; // Используем _salary для хранения зарплаты
    this.position = position;
  }

  static employees = []; // Создаем массив для хранения экземпляров

  static getAverageSalary() {
    let totalSalary = 0;
    for (const employee of Employee.employees) {
      totalSalary += employee.salary;
    }
    return totalSalary / Employee.employees.length;
  }

  get salary() {
    return this._salary;
  }

  set salary(value) {
    console.log(`Зарплата ${this.name} установлена на ${value}`);
    this._salary = value;
  }
}

const employee1 = new Employee("Jack", 30000, "РАБотяга");
const employee2 = new Employee("Peter", 40000, "РАБотяга");
const employee3 = new Employee("Vasya", 45000, "РАБотяга");

// Добавляем экземпляры в массив
Employee.employees.push(employee1, employee2, employee3);

// Изменим зарплату одного из них
employee1.salary = 35000;

// Выводим среднюю зарплату
console.log(Employee.getAverageSalary());
