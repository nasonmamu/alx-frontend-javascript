/**
 * Retrieves the sum of ids of a list of students.
 * @param {{
 *   id: Number,
 *   firstName: String,
 *   Location: String
 * }[]} students - The list of students.
 * @author Nason Mamu <https://github.com/nasonmamu>
 * @returns {Number}
 */
// 3-get_ids_sum.js

function getStudentIdsSum(students) {
  return students.reduce((sum, student) => sum + student.id, 0);
}

export default getStudentIdsSum;
