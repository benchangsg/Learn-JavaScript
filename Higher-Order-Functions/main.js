const companies = [
    {title: "Ser Chuan", category: "Construction", start: 1993, end: 2035},
    {title: "Google", category: "Software", start: 1995, end: 2100},
    {title: "Maxima", category: "Technology", start: 1991, end: 2500},
    {title: "Vistek", category: "Construction", start: 2010, end: 2055},
    {title: "Aave", category: "Finance", start: 2019, end: 3000}
]

const ages = [22,25,76,46,5,2,22,25,98,70,55,34];


//BELOW SHOWS DIFFERENT FUNCTION METHODS USED ON ARRAYS

//for
// for(let i = 0; i<companies.length; i++) {
//     console.log(companies[i].title);
// }


//forEach
// companies.forEach(function(company) {
//     console.log(company.title);
// })


//Filter 21 and older
// let adults = ages.filter(age => age >= 21);
// console.log(adults);

//Filter retail companies
// const retailCompanies = companies.filter(company => company.category === "Construction");
// console.log(retailCompanies);

//Filter companies that started in 90s
// const ninetiesCompanies = companies.filter(company => (company.start > 1989 && company.start < 2000));
// console.log(ninetiesCompanies);

//Filter companies that lasted more than 100 years
// const centuryCompanies = companies.filter(company => ((company.end - company.start) > 100));
// console.log(centuryCompanies);


//MAP

//Create array of company names
// const companyNames = companies.map(company => company.title);
// console.log(companyNames);

//Square the ages into another array
// const ageSquared = ages.map(age => age * age);
// console.log(ageSquared);

//SORT
//sort companies by start year (oldest -> youngest)
// const sortedCompanies = companies.sort((a, b) => (a.start > b.start) ? 1 : -1);
// console.log(sortedCompanies);


//REDUCE
//Sum all ages in ages array
// ageSum = ages.reduce((total, age) => total + age, 0);
// console.log(ageSum);

//Sum Total numbers of years of companies' existence
// const totalYears = companies.reduce((total, company) => 
// (company.end - company.start) + total, 0);
// console.log(totalYears);