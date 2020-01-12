// MongoDB entry schema:
// {"item": "shirt",
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

import { Stitch } from 'mongodb-stitch-react-native-sdk';

export default class API{
    static async getItem(id) {
        const client = Stitch.defaultAppClient;

        return await client.callFunction("getItem", [id]);
    }

    static async writeItem(objectToWrite) {
        const client = Stitch.defaultAppClient;

        return await client.callFunction("writeItem", [objectToWrite]);
    }
}



