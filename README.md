# percentage-encode-char
Percentage-encodes a single character.

[![david](https://david-dm.org/strarsis/percentage-encode-char.svg)](https://david-dm.org/strarsis/percentage-encode-char)

[![NPM](https://nodei.co/npm/percentage-encode-char.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/percentage-encode-char/)

In contrast to escape() (deprecated), encodeURI() or encodeURIComponent(), this function will encode any character 
regardless whether the particular character needs escaping to adhere to a specific RFC or not.


Installation
------------
````
npm install percentage-encode-char
````


Usage
-----
````
var percEncode = require('percentage-encode-char');
percEncode('(');
  => '%28'
````
This function will only escape the first passed character, subsequent characters will not be encoded and returned by it.
For encoding multiple characters, a string, use a loop, stream transform callback or similar mechanism for passing each character individually.


percentage-encode-char
----------------------
#### char
The character to be percentage encoded.

