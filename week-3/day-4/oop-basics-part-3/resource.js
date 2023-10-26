class Resource {
  constructor(name, quantity, consumptionRate, storageLocation) {
    this.name = name;
    this.quantity = quantity;
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
