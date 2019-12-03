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

export async function getItem(arg) {
    const client = Stitch.defaultAppClient;

    return await client.callFunction("getItem", [arg]);
}

export async function writeItem(arg) {
    const client = Stitch.defaultAppClient;

    return await client.callFunction("writeItem", [arg]);
}


