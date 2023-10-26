class Resource {
  constructor(name, quantity, consumptionRate, storageLocation) {
    this.name = name;
    if (quantity < 0) {
      throw new Error("Количество не может быть отрицательным");
    }
    this.quantity = quantity;
    if (consumptionRate < 0) {
      throw new Error("Скорость потребления не может быть");
    }
    this.consumptionRate = consumptionRate;
    this.storageLocation = storageLocation;
  }
}

class Fuel extends Resource {
  constructor(name, quantity, consumptionRate, storageLocation, fuelType) {
    super(name, quantity, consumptionRate, storageLocation);
    this.fuelType = fuelType;
  }
}

class Food extends Resource {
  constructor(
    name,
    quantity,
    consumptionRate,
    storageLocation,
    expirationDate
  ) {
    super(name, quantity, consumptionRate, storageLocation);
    this.expirationDate = expirationDate;
  }
}

module.exports = { Resource, Fuel, Food };

// const resource = new Resource("Вода", 1000, 1, "Комната хранения 1");
// console.log(resource);
