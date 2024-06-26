// handleProfileSignup.js

// Import statements
import signUpUser from './4-user-promise.js';
import uploadPhoto from './5-photo-reject.js';

/**
 * Handles the signup process and photo upload for a user profile.
 * @param {string} firstName - The first name of the user.
 * @param {string} lastName - The last name of the user.
 * @param {string} fileName - The filename of the photo to upload.
 * @returns {Promise<Array>} An array of objects with status and value/error of each operation.
 */
export default async function handleProfileSignup(firstName, lastName, fileName) {
    try {
        // Using Promise.allSettled to execute both signUpUser and uploadPhoto concurrently
        const results = await Promise.allSettled([
            signUpUser(firstName, lastName),
            uploadPhoto(fileName)
        ]);

        // Mapping results to the required format
        return results.map(result => ({
            status: result.status,
            value: result.status === 'fulfilled' ? result.value : String(result.reason)
        }));
    } catch (error) {
        // If there's an error in execution, return an empty array
        console.error('Error in handleProfileSignup:', error);
        return [];
    }
}
