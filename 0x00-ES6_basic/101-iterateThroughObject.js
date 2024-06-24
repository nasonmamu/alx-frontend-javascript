export default function iterateThroughObject(reportWithIterator) {
  // Initialize an empty array to collect employee names
  const employees = [];

  // Iterate through the reportWithIterator using for...of loop
  for (const employee of reportWithIterator) {
    employees.push(employee);
  }

  // Join the array of employee names with '|'
  return employees.join(' | ');
}

