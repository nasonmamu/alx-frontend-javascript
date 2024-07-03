/**
 * Joins a set of strings with a dash after stripping the strings of
 * a leading sub string.
 * @param {Set<String>} set - A collection of strings.
 * @param {String} startString - The string to strip from the beginning
 * of each item in the set.
 * @author Nason Mamu <https://github.com/nasonmamu>
 * @returns {String}
 */
export default function cleanSet(set, startString) {
    let resultArray = [];

    for (let item of set) {
        if (item.startsWith(startString)) {
            resultArray.push(item.substring(startString.length));
        }
    }

    return resultArray.join('-');
}
