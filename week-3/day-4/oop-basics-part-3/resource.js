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

module.exports = { Resource };
