const brands = [
  "BF-Goorich",
  "Continental",
  "Dunlop",
  "Firestone",
  "Goodyear",
  "Michelin",
  "Pirelli",
  "Yokohama",
];

const brandAbbrevation = ["BF-", "C-", "D-", "F-", "G-", "M-", "P-", "Y-"];

const carTypes = ["Sedan", "Truck", "SUV", "Hybird"];

const carArray = [];

const tireLevel = [
  "Econ-Control",
  "Econ-Control-Plus",
  "Pro-Contact",
  "Pro-Contact-Plus",
  "All-Terrian-Pro",
];

const price = [30, 50, 75, 100, 125];

// brands.forEach((brand) => {
//   console.log(brand);
//   tireLevel.forEach((level) => {
//     console.log(level);
//   });
// });

for (let i = 0; i < brands.length; i++) {
  for (let j = 0; j < tireLevel.length; j++) {
    const tire = {
      brand: brands[i],
      name: brandAbbrevation[i] + tireLevel[j],
      price: price[j],
      img:
        "https://www.michelinman.com/on/demandware.static/-/Sites-michelin-master-catalog/default/dw39c2fbd3/images/tires/premier-as/tire-premier-as.png",
      inStock: 120,
      carTypes: ["Sedan", "Truck", "SUV", "Hybird"],
    };

    carArray.push(tire);
  }
}
// console.log(carArray);

module.exports = carArray;
