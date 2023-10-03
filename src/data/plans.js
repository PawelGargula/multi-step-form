class PricePlan {
    constructor(month, year) {
        this.month = month,
            this.year = year
    }
}

export const pricePlans = {
    arcade: new PricePlan(9, 90),
    advanced: new PricePlan(12, 120),
    pro: new PricePlan(15, 150),
    onlineService: new PricePlan(1, 10),
    largerStorage: new PricePlan(2, 20),
    customizableProfile: new PricePlan(2, 20)
}