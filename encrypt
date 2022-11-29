function encrypt(str) {
    var bytes = []; // char codes
    var key = "Kryptos";
    for (var i = 0; i < str.length; ++i) {
        var code = str.charCodeAt(i);
        bytes = bytes.concat([code ^ key.charCodeAt(i % 7)]);
    }
    var s = '';
    bytes.forEach(function(byte) {
        s += ('0' + (byte & 0xFF).toString(16)).slice(-2);
    });

    return s;
}

// Write a function that decrypts an encrypted message
function decrypt(enc) {
  // TODO:
  
  return enc;
}

var enc = encrypt("test");
console.log(encrypted);

var dec = decrypt(enc);
console.log(dec);
