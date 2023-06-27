const provinces = ['Western Cape', 'Gauteng', 'Northern Cape', 'Eastern Cape', 'KwaZulu-Natal', 'Free State'];
const names = ['Ashwin', 'Sibongile', 'Jan-Hendrik', 'Sifso', 'Shailen', 'Frikkie'];

const data = [
  {
    Ashwin: 'Western Cape',
    Sibongile: 'Gauteng',
    'Jan-Hendrik': 'Northern Cape',
    Sifso: 'Eastern Cape',
    Shailen: 'KwaZulu-Natal',
    Frikkie: 'Free State',
  }
];

console.log(
  // Use forEach to console log each name to the console
  names.forEach(name => console.log(name)),

  // Use forEach to console log each name with a matching province
  names.forEach(name => console.log(`${name} (${data[0][name]})`)),

  // Using map, loop over all province names and turn the string to all uppercase. Log the new array to the console
  provinces.map(province => province.toUpperCase()),

  // Create a new array with map that has the amount of characters in each name
  names.map(name => name.length),

  // Use sort to sort all provinces alphabetically
  provinces.sort(),

  // Use filter to remove all provinces that have the word "Cape" in them. After filtering the array, return the amount of provinces left
provinces.filter(province => !province.includes('Cape')).length,

  // Create a boolean array by using map and some to determine whether a name contains an 'S' character
  names.map(name => name.toLowerCase().includes('s')),

  // Using reduce, turn the above into an object that indicates the province of an individual
  names.reduce((result, name) => {
    result[name] = data[0][name];
    return result;
  }, {})
);

  