import { uploadPhoto, createUser } from './utils.js';

export default async function asyncUploadUser() {
    try {
        const photoPromise = uploadPhoto();
        const userPromise = createUser();

        const [photo, user] = await Promise.all([photoPromise, userPromise]);

        return {
            photo,
            user
        };
    } catch (error) {
        // If any function fails, return an empty object
        console.error(error);
        return {
            photo: null,
            user: null
        };
    }
}
