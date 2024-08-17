/* 
    JS Hash tables blog from freeCodeCamp
    - https://www.freecodecamp.org/news/javascript-hash-table-associative-array-hashing-in-js/


    You can implement a Hash Table in JavaScript in three steps:
    1 - Create a HashTable class with table and size initial properties
    2 - Add a hash() function to transform keys into indices
    3 - Add the set() and get() methods for adding and retrieving key/value pairs from the table.
*/

class HashTable {
    constructor() {
        this.table = new Array(127); // all key/value pairs will be stored inside this property.
        this.size = 0;
    }


    /* 
        The hash() method will accept a key value and transform it into an index.
        A simple way to create the hash would be to sum the ASCII code of the characters in the key using the charCodeAt() method as follows. 
        Note that the method is named using _ to indicate that it's a private method.
    */
    _hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i);
        }
        return hash % this.table.length; // must return a number between 0 and table length
    }


    set(key, value) {
        const index = this._hash(key);
        this.table[index] = [key, value];
        this.size++;
    }

    get(key) {
        const index = this._hash(key);
        return this.table[index];
    }

    remove(key) {
        const index = this._hash(key);

        if (this.table[index] && this.table[index].length) {
            this.table[index] = undefined;
            this.size--;
            return true;
        } else {
            return false;
        }
    }

    // TO DO: How to Handle Index Collision
}