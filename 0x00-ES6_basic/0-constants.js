export function taskFirst() {
  const task = 'I prefer const when I can.';
  return task;
}
export function taskNext() {
  let combination = 'But sometimes let';
  combination += getLast(); // Assuming getLast() is imported or defined

  return combination;
}

