const punycode = require('punycode');

// Encode a domain name with non-ASCII characters
const domain = "例.com"; // Japanese characters for "example.com"
const encodedDomain = punycode.encode(domain);
console.log(encodedDomain); // Output: xn--fsq.com

// Decode a Punycode string
const decodedDomain = punycode.decode(encodedDomain);
console.log(decodedDomain); // Output: 例.com
