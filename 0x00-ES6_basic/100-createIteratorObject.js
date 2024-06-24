export default function createIteratorObject(report) {
  // Extract all employees from the report
  const allEmployees = Object.values(report.allEmployees).flat();

  let index = 0;

  // Return the iterable object
  return {
    [Symbol.iterator]: function() {
      return {
        next: function() {
          if (index < allEmployees.length) {
            return { value: allEmployees[index++], done: false };
          } else {
            return { done: true };
          }
        }
      };
    }
  };
}

