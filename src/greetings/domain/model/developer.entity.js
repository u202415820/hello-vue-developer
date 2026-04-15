/**
 * Represents a Developer with a first and last name.
 */
export class Developer {
    #firstName;
    #lastName;

    /**
     * Creates a new Developer instance
     * @param {string} firstName    - The developer's first name.
     * @param {string} lastName     - The developer's last name.
     */

    constructor(firstName, lastName) {
        this.#firstName = firstName?.trim() || '';
        this.#lastName = lastName?.trim() || '';
    }

    /**
     * Gets the developer's first name.
     * @returns {*} The first name of the developer.
     */

    get firstName() {
        return this.#firstName;
    }

    /**
     * Gets the developer's last name.
     * @returns {*} The last name of the developer.
     */

    get lastName() {
        return this.#lastName;
    }

    get fullName() {
        return this.#firstName && this.#lastName
            ? `${this.#firstName} ${this.#lastName}`
            : 'Unknown';
    }

}