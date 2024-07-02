/**
 * Retrieves students in a given location.
 * @param {{
 *   id: Number,
 *   firstName: String,
 *   location: String}[]} students - The list of students.
 * @param {String} city - The location.
 * @author Nason Mamu
 * @returns {Object[]} The list of students in the given location.
 */
export default function getStudentsByLocation(students, city) {
  if (Array.isArray(students)) {
    return students.filter((student) => student.location === city);
  }
  return [];
}
