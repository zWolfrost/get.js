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
## Changelog and Breaking Changes
**Watch out for this section if you wish to migrate to a different version.** <br>
*New patches are usually bugfixes and/or documentation clarifications and only meaningful ones are written.*

- **v1.1.0**: Removed "call" method as i didn't feel like it fits in the package theme. Also because it was just the following code: `window[name](...args)` <br> Added the "root" method.
  - *v1.1.1: The imports' usage was finally corrected and the type of the package is specified in package.json (module).*
<br><br>
- **v1.2.0**: Added "prime_factors" and "extracted_root" methods.

&nbsp;
## How to use
*Note that you can change the cdn version and/or package type of the library with whatever version you want. Template:*

`https://cdn.jsdelivr.net/npm/package@version/file`.

*Also note that you have to use an ES module to import as seen below, unless you want to use the CDN method*

```
import get from "@zwolfrost/get.js";
//OR
import get from "https://cdn.jsdelivr.net/npm/@zwolfrost/get.js@1.1/src/get.js";

get.fraction(1.375, 2)
//returns [ 227, 165 ] because 227/165 = 1.3757575...
```

&nbsp;
## Object Methods

**Instructions on parameters and details can be found in the JSDOC comments**

| Method         | Description
|:-:             |:-
| intervals      | Returns an array that contains the intervalling numbers between the two given numbers (or arrays).
| pattern        | Returns an array made up of the given length and number pattern.
| unique         | Returns an array made up of unique numbers (that never repeat) from the given one.
| decimals       | Returns the number of decimals in the given number.
| fraction       | Returns a fraction calculated from the given decimal number. Also works with repeating decimals, if specified.
| random         | Returns a random number between the two given numbers (inclusive).
| normalized     | Returns a normalized version of the given string (latin letters only).
| time           | Returns the current time of the day.
| GCD            | Returns the greatest common divisor between two given numbers.
| LCM            | Returns the least common multiple between two given numbers.
| prime_factors  | Returns an array that contains the prime numbers that multiply together to make the original number.
| extracted_root | Returns an array that contains the extracted number and the one left in the root.
| root           | Returns the result of a root with the given number and index.
| base           | Returns a converted number (or a string) from & to the given bases.
| performance    | Returns the time to execute the given function in milliseconds.

&nbsp;
# Found a bug and/or need help?
Please [open an issue](../../issues/) on Github to request a change, report a bug or ask for help about something and i will look into it.