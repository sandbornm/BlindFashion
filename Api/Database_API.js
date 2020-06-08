// MongoDB clothing item entry schema:
// {
// "id" : "54387978629834"
// "item": "shirt",
// "brand": "Nike",
// "size": "M",
// "type": "short sleeved",
// "material": "90% polyester 10% cotton",
// "care": "wash cold with like colors",
// "color": "blue",
// "pattern": "solid with white Nike swoosh on chest",
// "combination suggestion":"wear with khaki shorts or pants or any athletic shorts",
// "price": "24.95 USD",
// "opacity": "solid, opaque"
// }

// MongoDB user entry schema:
// { "email" : "example@email.com",
//   "name" : "John Smith",
//   "closet" : { }
// }

// Each user will have a closet that is a "nested document" containing an array of clothing items

import { Stitch } from 'mongodb-stitch-react-native-sdk';

export default class API{

    /*
     * Retrieves item by id from the descriptions collection.
     *
     * @param the id of the object to be retrieved.
     * @return A 2D array containing the clothing item.
     */
    static async getItem(id) {
        const client = Stitch.defaultAppClient;

        return await client.callFunction("getItem", [id]);
    }

    /*
     * Retrieves clothing item by id from the descriptions collection.
     *
     * To do: create this stitch function, figure out generating a unique id for each clothing item added
     *
     * @param the id of the object to be retrieved.
     * @return A 2D array containing the clothing item.
     */
    static async getUserClothingItem(id) {
        const client = Stitch.defaultAppClient;

        return await client.callFunction("getUserClothingItem", [id]);
    }

    /*
     * Adds a clothing item to the currently logged in user's closet
     *
     * To do: create this stitch function on the mongodb website
     *
     * @param clothingItem A JSON object representing the clothing item to be added. Must follow the form
     *                     of the entry schema at the top of this file
     */
    static async addClothingItem(clothingItem) {
        const client = Stitch.defaultAppClient;

        // *** GENERATE THIS WHEN clothingItem created so the id can be placed on the nfc tag
        // generate unique item id (for this user) using seconds since Jan 1, 1970
        clothingItem['id'] = Date.now();

        return await client.callFunction("addClothingItem", [clothingItem]);
    }

    static async writeItem(objectToWrite) {
        const client = Stitch.defaultAppClient;

        return await client.callFunction("writeItem", [objectToWrite]);
    }

    static async getUser(email) {
        const client = Stitch.defaultAppClient;

        const results = await client.callFunction("getUser", [email])

        if(results.length > 0){
            return results[0];
        }
        return "No user found";
    }

    static async addUser(email, name) {
        const client = Stitch.defaultAppClient;

        const user = {
            email: email,
            name: name
        };

        return await client.callFunction("addUser", [user]);
    }
}



