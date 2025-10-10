// // const regex = /code/i;
// // console.log(regex.test("I love Code"));  // true
// // console.log(regex.test("I love JavaScript")); // false




// // let str = "banana";
// // console.log(str.match(/a/g)); // ['a', 'a', 'a']



// // const str = "Hello world\nHi Deepak";
// // const regex = /^Hi/;   

// // console.log(regex.test(str)); 

// // function isValidEmail(email) {
// //   const pattern = /^[\w.-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
// //   return pattern.test(email);
// // }
// // console.log(isValidEmail("deepak@gmail.com"))
// // console.log(isValidEmail("deepak@gmailom"))


// // ===============================
// //  ALL USEFUL REGEX PATTERNS IN JS
// // ===============================

// const text = "Hello 123 World_2025!\nJavaScript is fun.";

// // 1️⃣ \d  → any digit (0-9)
// console.log("\\d  :", text.match(/\d/g)); // ['1', '2', '3', '2', '0', '2', '5']

// // 2️⃣ \D  → non-digit
// console.log("\\D  :", text.match(/\D/g)); // All characters except digits

// // 3️⃣ \w  → word character (a-z, A-Z, 0-9, _)
// console.log("\\w  :", text.match(/\w/g)); // Letters, digits, underscores

// // 4️⃣ \W  → non-word character
// console.log("\\W  :", text.match(/\W/g)); // Spaces, punctuation, symbols

// // 5️⃣ \s  → whitespace (space, tab, newline)
// console.log("\\s  :", text.match(/\s/g)); // [' ', ' ', '\n', ' ', ' ']

// // 6️⃣ \S  → non-whitespace
// console.log("\\S  :", text.match(/\S/g)); // All characters except spaces/newlines

// // 7️⃣ ^   → start of string (or line with /m)
// console.log("^Hello :", /^Hello/.test(text)); // true (starts with Hello)

// // 8️⃣ $   → end of string
// console.log("fun.$ :", /fun\.$/.test(text)); // true (ends with 'fun.')

// // 9️⃣ .   → any character except newline
// console.log(". :", text.match(/./g)); // Each char (except newline)

// // 🔟 *   → 0 or more occurrences
// console.log("lo* :", "loooop".match(/lo*/g)); // ['loooo']

// // 11️⃣ +   → 1 or more occurrences
// console.log("lo+ :", "loooop".match(/lo+/g)); // ['loooo']

// // 12️⃣ ?   → 0 or 1 occurrence
// console.log("colou?r :", "color colour".match(/colou?r/g)); // ['color', 'colour']

// // 13️⃣ {n} → exactly n times
// console.log("\\d{3} :", "My pin 12345".match(/\d{3}/g)); // ['123', '345']

// // 14️⃣ {n,} → n or more times
// console.log("\\d{2,} :", "Age 9 10 100".match(/\d{2,}/g)); // ['10', '100']

// // 15️⃣ {n,m} → between n and m times
// console.log("\\d{2,4} :", "99999 1234 12".match(/\d{2,4}/g)); // ['9999', '1234', '12']

// // 16️⃣ [abc] → any one of a, b, or c
// console.log("[abc] :", "abcxyz".match(/[abc]/g)); // ['a','b','c']

// // 17️⃣ [^abc] → NOT a, b, or c
// console.log("[^abc] :", "abcxyz".match(/[^abc]/g)); // ['x','y','z']

// // 18️⃣ (abc) → group / capture
// console.log("(abc) :", "abcabcabc".match(/(abc)/g)); // ['abc','abc','abc']

// // 19️⃣ Combined example — pattern matching using multiple flags
// const paragraph = `
// apple
// banana
// grape
// `;

// console.log("Lines ending with a :", paragraph.match(/a$/gm)); // ['a','a']

// // 20️⃣ Complex Example – find all numbers in text
// const mixed = "Room 101, Floor 12, Block 3";
// console.log("All numbers:", mixed.match(/\d+/g)); // ['101', '12', '3']



// const s = "Roo!m 204B, /n Tel: 98765";
// console.log(s.match(/\s/g));    
// console.log(s.match(/\d+/g));   

//s
// console.log("Line1\nLine2\tEnd".match(/\s/g));

//S
// console.log(" hi ".match(/\S/g)); // ['h','i']




//^

// const t = "First line\nSecond line";
// console.log(/^First/.test(t));   // true  (start of whole string)
// console.log(/^Second/.test(t));  // false
// console.log(/^Second/m.test(t)); // true  (/m lets ^ match start of any line)



//$

// const u = "one\ntwo\nthree";
// console.log(/three$/.test(u));   // true
// console.log(/^two$/m.test(u));   // true  (line 'two' matches exactly)
// console.log(/^one/m.test(u));



// //.
// console.log(/a.b/.test("a\nb"));   // false
// console.log(/a.b/s.test("a\nb"));  // true   (s = dotAll)


console.log("Pin 123526".match(/\d{5}/));
