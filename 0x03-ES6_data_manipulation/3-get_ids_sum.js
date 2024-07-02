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
export default function getStudentIdsSum(students) {
  if (students instance of Array) {
    return students.reduce(
      (prevStudent, curStudent) => prevStudent.id || prevStudent + curStudent.id,
      0,
    );
  }
  return 0;
}
