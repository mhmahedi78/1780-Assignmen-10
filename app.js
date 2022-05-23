/**Assignment-Create an email pattern*/

let text="mahedihasan7178@gmail.com";

let pattern=/^[a-z0-9_.]*@[a-z]{2,5}\.[a-z]*$/;

console.log(pattern.test(text));

/**Assignment-Create a  username pattern*/

let nam="mhmahedi_78";

let pattern1=/^[a-z].*[0-9]*$/i;
console.log(pattern1.test(nam));


/**Assignment-Create a Bangladeshi phone number pattern*/

let number="+8801787511139";
let pattern2=/^(\+880|01)[0-9]{9,12}$/;
console.log(pattern2.test(number));


/**Assignment-Create a Create a password pattern */

let password="75HasanM@&#$54%456";
let pattern3=/^[.*|a-z]*.*$/i;
console.log(pattern3.test(password));

