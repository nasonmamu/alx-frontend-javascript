// Export a const instance of WeakMap and name it weakMap
export const weakMap = new WeakMap();

// Export a new function named queryAPI
export function queryAPI(endpoint) {
    // Get the current count of queries for the endpoint
    let queryCount = weakMap.get(endpoint) || 0;

    // Increment the query count
    queryCount += 1;

    // Update the count in the weakMap
    weakMap.set(endpoint, queryCount);

    // If the number of queries is >= 5, throw an error
    if (queryCount >= 5) {
        throw new Error('Endpoint load is high');
    }
}
