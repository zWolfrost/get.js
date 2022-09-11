# get.js
A JavaScript library that provides a bunch of useful, optimized and often math-related functions.

All versions are written in vanilla javascript (ES12) and have no dependencies.

&nbsp;
## Versions
| Version    | Methods Available | JSDOC Documentation | Minification
|:-          |:-:                |:-:                  |:-:
| get.js     | All methods       | :heavy_check_mark:  | :x:
| get.min.js | All methods       | :x:                 | :heavy_check_mark:

&nbsp;
## How to install
You can just install it like any npm package,<br>
`npm i @zwolfrost/get.js`<br>
use a [cdn](#how-to-use) or copy the file from the [src directory](src/).

&nbsp;
## How to use
*Note that you can change the cdn version and/or package type of the library with whatever version you want. Template:*<br>
`https://cdn.jsdelivr.net/npm/package@version/file`.
```
import get from "path/to/get.js";
//OR
import get from "https://cdn.jsdelivr.net/npm/@zwolfrost/get.js@1.0.1/src/get.js";

get.fraction(2.5)
//returns [ 5, 2 ]
```

&nbsp;
## Object Methods

**Instructions on parameters and details can be found in the JSDOC comments**

| Method      | Description
|:-:          |:-
| intervals   | Returns an array containing the intervalling numbers between the two given numbers (or arrays).
| pattern     | Returns an array made up of the given length and number pattern.
| unique      | Returns an array made up of unique numbers (that never repeat) from the given one.
| decimals    | Returns the number of decimals in the given number.
| fraction    | Returns a fraction calculated from the given decimal number.
| random      | Returns a random number between the two given numbers (inclusive).
| normalized  | Returns a normalized version of the given string (latin letters only).
| call        | Returns the result of a given function after calling it by name (globals only).
| time        | Returns the current time of the day.
| GCD         | Returns the greatest common divisor between two given numbers.
| LCM         | Returns the least common multiple between two given numbers.
| base        | Returns a converted number (or a string) from & to the given bases.
| performance | Returns the time to execute the given function in milliseconds.

&nbsp;
# Found a bug and/or need help?
Please [open an issue](../../issues/) on Github to request a change, report a bug or ask for help about something and i will look into it.