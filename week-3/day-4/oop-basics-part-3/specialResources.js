const { Resource } = require("./resource");

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

module.exports = { Fuel, Food };
