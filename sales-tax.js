var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];

function sumArray(array) {
  var sum = 0;
  for (var i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}

function calculateSalesTax(salesData, taxRates) {
  var salesTax = {};

  for (var i = 0; i < salesData.length; i++) {

    if(!salesTax[salesData[i].name]) {
      salesTax[salesData[i].name] = { totalSales : 0, totalTaxes : 0 };
    }
    var sales = sumArray(salesData[i].sales);
    salesTax[salesData[i].name].totalSales += sales;
    salesTax[salesData[i].name].totalTaxes += sales * taxRates[salesData[i].province];
  }

  return  salesTax;
}

var results = calculateSalesTax(companySalesData, salesTaxRates);
console.log(results);
/* Expected Results:
{
  Telus: {
    totalSales: 1300
    totalTaxes: 144
  },
  Bombardier: {
    totalSales: 800,
    totalTaxes: 40
  }
}
*/