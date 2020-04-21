const companies = [
  { name: "Company One", category: "Finance", start: 1981, end: 2003 },
  { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
  { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
  { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
  { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
  { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
  { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
  { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
  { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

//for( let i = 0; i < companies.length; i++) {
//    console.log(companies[i]);
//}

//forEach

//companies.forEach(function(x) {
//    console.log(x.name);
//});

//let canDrink = [];
//for( let i = 0; i < ages.length; i++) {
//    if (ages[i] >= 21) {
//        canDrink.push(ages[i]);
//    }
//}
//console.log(canDrink);

//filter

//const canDrink = ages.filter(function(age) {
//      if(age >= 21) {
//         return true;
//      }
//});

//const canDrink = ages.filter(age => age >= 21);
//console.log(canDrink);

//filter retail companies
//const retailCompanies = companies.filter(function(company) {
//    if(company.category === "Retail") {
//        return true;
//    }
//});
//  console.log(JSON.stringify(retailCompanies));

//const retailCompanies = companies.filter( x => x.category === "Retail" );
//console.log(retailCompanies);

//const companiesEighties = companies.filter(x => ( x.start >= 1980 && x.start <= 1989));
//console.log(companiesEighties);

//const bigBoys = companies.filter(x => ((x.end - x.start) >= 10));
//console.log(bigBoys);

//map

//const testMap = companies.map(function(x) {
//      return `${x.name} [${x.start} - ${x.end}]`;
//});

const testMap = companies.map(x => `${x.name} [${x.start} - ${x.end}]`);
console.log(testMap);
//console.log(testMap);

//const sqrAge = ages
//     .map(x => Math.sqrt(x))
//     .map(x => parseInt(Math.pow(x,2)));
//console.log(sqrAge);

//sort

//const sortedComp = companies.sort( function(c1, c2) {
//    if(c1.start > c2.start) {
//        return 1;
//    } else {
//        return -1;
//    };
//});

//console.log(sortedComp);

//const sortedComp = companies.sort( (c1, c2) => (c1.start) > (c2.start) ? 1 : -1);
//console.log(sortedComp);

//const sortAges = ages.sort((a1, a2) => (a1 > a2) ? 1 : -1);
//console.log(sortAges);

//sau
//const sortAges = ages.sort((a, b) => a-b);
//console.log(sortArges);

//reduce

//const ageSum = ages.reduce((total, age) => total + age, 0);

//const ageSum = ages.reduce(function(total, age) {
//    return total + age;
//}, 0);

//console.log(ageSum);

//get total years for all companies

//const totalYears = companies.reduce((total, x) => total + (x.end - x.start), 0);
//console.log(totalYears);

//combine methods

/*const combined = ages
  .map(age => age * 2)
  .filter(age => age >= 40)
  .sort((a, b) => a - b)
  .reduce((a, b) => a + b, 0);

console.log(combined); */
