import {NfcRfidScanner} from "react-native-rfid-nfc-scanner";


let listenerCallback =  function(data){
    console.log("Data Read: ");
    console.log(data);
};

let errorCallback =  function(err){
    console.log("Err: ");
    console.log(err);
};

class CardReader{
    constructor(){
        this.scanner = new NfcRfidScanner();
        this.scanner.addListener(
            "test",
            listenerCallback, errorCallback);
    }
}

export default CardReader;

// export async function readCard() {
//     console.log("Reader Button pressed!");
//     NFC.on('reader', reader => {
//         console.log("Saw reader");
//         reader.on('card', async card => {
//
//             console.log();
//             console.log(`card detected`, card);
//
//             // example reading 12 bytes assuming containing text in utf8
//             try {
//
//                 // reader.read(blockNumber, length, blockSize = 4, packetSize = 16)
//                 const data = await reader.read(4, 12); // starts reading in block 4, continues to 5 and 6 in order to read 12 bytes
//                 console.log(`data read`, data);
//                 const payload = data.toString(); // utf8 is default encoding
//                 console.log(`data converted`, payload);
//
//             } catch (err) {
//                 console.error(`error when reading data`, err);
//             }
//
//         });
//     });
// }
//
//
// export async function writeCard(arg) {
//
//     NFC.on('reader', reader => {
//         reader.on('card', async card => {
//
//
//
//             // example write 12 bytes containing text in utf8
//             try {
//
//                 const data = Buffer.allocUnsafe(12);
//                 data.fill(0);
//
//                 data.write(arg); // if text is longer than 12 bytes, it will be cut off
//                 // reader.write(blockNumber, data, blockSize = 4)
//                 await reader.write(4, data); // starts writing in block 4, continues to 5 and 6 in order to write 12 bytes
//                 console.log(`data written`);
//
//             } catch (err) {
//                 console.error(`error when writing data`, err);
//             }
//
//         });
//     });
// }

