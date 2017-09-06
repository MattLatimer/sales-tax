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

function sumArray(list) {
  return list.reduce(function(a, b){return a+b;});
}

function calculateSalesTax(salesData, taxRates) {
  var salesTax = {};

  for (var i = 0; i < salesData.length; i++) {
    var company = salesData[i].name;

    if(!salesTax[company]) {
      salesTax[company] = { totalSales : 0, totalTaxes : 0 };
    }

    var sales = sumArray(salesData[i].sales);
    salesTax[company].totalSales += sales;
    salesTax[company].totalTaxes += sales * taxRates[salesData[i].province];
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

