export default
{
   /**
    * @returns {Array.<Number>} An array containing the intervalling numbers between the two given numbers (or arrays)
    * @param {any} a The starting number
    * @param {any} b The ending number
    * @param {Number} steps The number of steps in-between the two (default: 1)
    * @param {Boolean} edges Whether to include the starting and ending numbers (default: true)
    */
   intervals: function(a, b, steps=1, edges=true)
   {
      let floatFix = (n) => Number.parseFloat(n.toFixed(15));

      steps++;
      const BEG = edges ? 0 : 1;
      const END = edges ? steps : steps-1;

      let intervals = [];

      if (typeof a === "number" && typeof b === "number")
      {
         for (let i=BEG; i <= END; i++)
         {
            intervals.push(floatFix(a + (b-a) * i / steps));
         }
      }
      else if (a.length == b.length)
      {
         for (let i=BEG; i <= END; i++)
         {
            let curInterval = [];

            for (let j=0; j < a.length; j++)
            {
               curInterval.push(floatFix(a[j] + (b[j]-a[j]) * i / steps));
            }

            intervals.push(curInterval)
         }
      }

      return intervals;
   },

   /**
    * @returns An array made up of the given length and number pattern
    * @param {Number} length The length of the final array
    * @param  {Array.<Number>} pattern The pattern of the numbers that the array will contain
    */
   pattern: function(length, pattern)
   {
      let arr = new Array(length);

      for (let i=0; i < length; i++)
      {
         arr[i] = pattern[i % pattern.length];
      }

      return arr;
   },

   /**
    * @returns {Array.<Number>} An array made up of unique numbers (that never repeat) from the given one
    * @param {Array.<Number>} arr The array to make unique
    */
   unique: function(arr)
   {
      return [...new Set(arr)]
   },

   /**
    * @returns {Number} The number of decimals in the given number
    * @param {Number} decimal The desired number
    */
   decimals: function(decimal)
   {
      let str = Math.abs(+decimal).toString();

      let ndec = str.length - str.indexOf(".") - 1;

      return ndec === str.length ? 0 : ndec;
   },

   /**
    * Calculates a fraction from the given decimal number
    * @param {Number} decimal The desired decimal number
    * @param {Number} repDec The number of repeating decimal digits
    * @param {Boolean} simplify Whether to simplify the fraction (e.g: 25/10 ➜ 5/2) (default: true)
    * @returns {Array.<Number>} An array containing the numerator and denominator of the calculated fraction
    */
   fraction: function(decimal, repDec=0, simplify=true)
   {
      if (decimal < 0)
      {
         let absRes = get.fraction(-decimal, repDec);
         return [-absRes[0], absRes[1]];
      }

      let num, den;

      if (repDec == 0)
      {
         let allDecMult = 10 ** this.decimals(decimal);

         num = decimal * allDecMult;
         den = allDecMult;
      }
      else
      {
         let removeDecimals = (dec, rem) => Math.trunc(dec*(10**rem))/10**rem;

         let regularDec = this.decimals(decimal) - repDec;

         num = (decimal * (10**repDec) - removeDecimals(decimal, regularDec)) * 10**regularDec;
         den = (10**repDec - 1) * 10**regularDec;
      }

      num = Math.trunc(num);

      if (simplify)
      {
         let gcd = (n1, n2) => n2 ? gcd(n2, n1 % n2) : n1;

         const GCD = gcd(num, den);

         num /= GCD;
         den /= GCD;
      }

      return [num, den];
   },

   /**
    * Calculates a random number between the two given numbers (inclusive).
    *
    * If only a parameter is provided, the minimum number is 0
    * @param {Number} min The min number
    * @param {Number} max The max number
    * @returns {Number} A random number
    */
   random: function(min, max=undefined)
   {
      if (max == undefined) [min, max] = [0, min];

      return Math.floor(Math.random() * (max - min + 1) + min);
   },


   /**
    * @returns {String} A normalized version of the given string (latin letters only)
    * @param {String} str The string to normalize
    */
   normalized: function(str)
   {
      return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
   },


   /**
    * Calls a given function by name (globals only)
    * @param {String} name The name of the function to call
    * @param  {...any} args The arguments to pass to the function
    * @returns {any} The result of the function
    */
   call: function(name, ...args)
   {
      return window[name](...args);
   },

   /**
    * Gets the current time of the day
    * @returns {Array.<Number>} An array that contains the current hours, minutes, seconds and milliseconds (respectively)
    */
   time: function()
   {
      let dn = new Date();

      return [dn.getHours(), dn.getMinutes(), dn.getSeconds(), dn.getMilliseconds()];
   },


   /**
    * @returns {Number} The greatest common divisor between two given numbers
    * @param {Number} n1 The desired first number
    * @param {Number} n2 The desired second number
    */
   GCD: function(n1, n2)
   {
      return (!n2) ? n1 : this.GCD(n2, n1 % n2);
   },
   /**
    * @returns {Number} The least common multiple between two given numbers
    * @param {Number} n1 The desired first number
    * @param {Number} n2 The desired second number
    */
   LCM: function(n1, n2)
   {
      return (n1 * n2) / this.GCD(n1, n2);
   },


   /**
    * Converts a number (or a string) from & to the given bases
    *
    * The supported bases are 2-36 AND 64
    * @param {any} base The desired number/string
    * @param {Number} bx The current base (default: 10)
    * @param {Number} by The desired final base (default: 10)
    * @returns {any} The converted number/string
    */
   base: function(base, bx=10, by=10)
   {
      if (bx == 64) return atob(base);
      else if (by == 64) return btoa(base);
      else
      {
         let chartonum = (char) =>
         {
            let chcode = char.charCodeAt(0);
            return (chcode >= 65) ? chcode - 55 : chcode - 48;
         }

         let numtochar = (num) => (num < 10) ? num : String.fromCharCode(num + 55);


         base = base.toString().toUpperCase();
         bx = BigInt(bx);
         by = BigInt(by);

         let b10 = 0n;

         for (let i=0; i<base.length; i++) //base x to base 10
         {
            b10 += BigInt(chartonum(base.at(-i-1))) * (bx ** BigInt(i));
         }

         let res = "";

         while (b10 != 0) //base 10 to base y
         {
            res = numtochar(Number(b10 % by)) + res;
            b10 /= by;
         }

         return res;
      }
   },


   /**
    * Calculates the time to execute the given function in milliseconds
    * @param {Function} fun The desired function
    * @param {Boolean} log Whether to log the performance and result of the function
    * @returns {Array.<any>} An array that contains the performance and result of the function
    */
   performance: function(fun, log=true)
   {
      let BEG, END, RES;

      BEG = performance.now();
      RES = fun();
      END = performance.now();

      if (log) console.log(`perf (ms): ${END-BEG}\nresult: ${JSON.stringify(RES)}`);

      return [END-BEG, RES];
   },
}