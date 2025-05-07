/*
  Name: Gianni
  Date: April 6, 2025
  Project: Array Cardio Day 1 (JavaScript30)
  Changes:
    - Used array methods (filter, map, sort, reduce)
    - Output logs to both the console and the page
    - Output area hidden by default and shown on button click
    - Added buttons to show raw datasets
*/

const outputEl = document.getElementById('output');

const log = (label, data) => {
  console.group(label);
  console.log(data);
  console.groupEnd();

  outputEl.style.display = 'block';
  outputEl.textContent += `\n${label}:\n${JSON.stringify(data, null, 2)}\n\n`;
};

// Datasets
const inventors = [
  { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
  { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
  { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
  { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
  { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
  { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
  { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
  { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
  { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
  { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
  { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
  { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];

const people = [
  'Bernhard, Sandra', 'Bethea, Erin', 'Becker, Carl', 'Bentsen, Lloyd', 'Beckett, Samuel', 'Blake, William',
  'Berger, Ric', 'Beddoes, Mick', 'Beethoven, Ludwig', 'Belloc, Hilaire', 'Begin, Menachem', 'Bellow, Saul',
  'Benchley, Robert', 'Blair, Robert', 'Benenson, Peter', 'Benjamin, Walter', 'Berlin, Irving', 'Benn, Tony',
  'Benson, Leana', 'Bent, Silas', 'Berle, Milton', 'Berry, Halle', 'Biko, Steve', 'Beck, Glenn', 'Bergman, Ingmar',
  'Black, Elk', 'Berio, Luciano', 'Berne, Eric', 'Berra, Yogi', 'Berry, Wendell', 'Bevan, Aneurin', 'Ben-Gurion, David',
  'Bevel, Ken', 'Biden, Joseph', 'Bennington, Chester', 'Bierce, Ambrose', 'Billings, Josh', 'Birrell, Augustine',
  'Blair, Tony', 'Beecher, Henry', 'Biondo, Frank'
];

const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck', 'pogostick'];

// 1. Filter inventors born in the 1500s
const fifteen = inventors.filter(inv => inv.year >= 1500 && inv.year < 1600);
log('Inventors from the 1500s', fifteen);

// 2. Full names
const fullNames = inventors.map(inv => `${inv.first} ${inv.last}`);
log('Inventor Full Names', fullNames);

// 3. Oldest to youngest
const ordered = inventors.sort((a, b) => a.year - b.year);
log('Inventors Sorted by Birthdate', ordered);

// 4. Total years lived
const totalYears = inventors.reduce((total, inv) => total + (inv.passed - inv.year), 0);
log('Total Years Lived', totalYears);

// 5. Sort by years lived
const oldest = inventors.sort((a, b) => (b.passed - b.year) - (a.passed - a.year));
log('Inventors Sorted by Years Lived', oldest);

// 7. Sort people by last name
const alpha = people.sort((a, b) => {
  const [aLast] = a.split(', ');
  const [bLast] = b.split(', ');
  return aLast.localeCompare(bLast);
});
log('People Sorted by Last Name', alpha);

// 8. Tally the transportation data
const transportation = data.reduce((obj, item) => {
  obj[item] = (obj[item] || 0) + 1;
  return obj;
}, {});
log('Transportation Data Tally', transportation);

// Button-controlled raw data views
function showInventors() {
  outputEl.style.display = 'block';
  outputEl.textContent = 'Inventors:\n' + JSON.stringify(inventors, null, 2);
}

function showPeople() {
  outputEl.style.display = 'block';
  outputEl.textContent = 'People:\n' + JSON.stringify(people, null, 2);
}

function showTransportData() {
  outputEl.style.display = 'block';
  outputEl.textContent = 'Transport Data:\n' + JSON.stringify(data, null, 2);
}