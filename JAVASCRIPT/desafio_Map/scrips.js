
const companie = [
    { name: 'Samsung', marketValue: 50, CEO: 'Kin Hyun Suk', foundedOn: 1938 },
    { name: 'Microsoft', marketValue: 415, CEO: 'Satya', foundedOn: 1975 },
    { name: 'Intel', marketValue: 117, CEO: 'Bryan', foundedOn: 1968 },
    { name: 'Facebook', marketValue: 383, CEO: 'Mark', foundedOn: 2004 },
    { name: 'Spotify', marketValue: 30, CEO: 'Daniel', foundedOn: 2006 },
    { name: 'Apple', marketValue: 845, CEO: 'Tim', foundedOn: 1976 },
]

const add10Percent = company => {
    company.marketValue = company.marketValue + (company.marketValue / 10)
    return company
}

const filterCompanies = company => company.foundedOn < 1990

const calculateTotalMarketValue = (acc, company) => {
    return acc + company.marketValue
}

const newCompanie = companie
.map(add10Percent)
.filter(filterCompanies)
.reduce(calculateTotalMarketValue, 0)

console.log(newCompanie)