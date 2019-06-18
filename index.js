var a = 3;
var b = 1;
var c;

b += 10
c = a + b

console.log(c) // value of c is 14

 var a;
 var b;
 var c;


 a = 3
 b = 1 + 10
 c = a + b

 console.log(c)

// what is value of c

var sum = 10+10
console.log(sum)

var Substraction = 20 - 10
console.log(Substraction)

var multiply = 10 * 10
console.log(multiply)

var divide = 20/2
console.log(divide)

var remainder = 11 % 2
console.log(remainder)

var name = " Anita "
var verb = " goes "
var place = " to schools "
var days = " from Monday to Friday "

sentence = name + verb + place + days
console.log(sentence)

// += add to existing value
var myarray = [
[" Anita ", " Maryann ", " Paul ", " Damaris ", " Edward ", " James ", " Kelly "],
[" Mercy ", " Anita ", " pauline ", " Dorcus ", " Edwin ", " Jacob ", " Kennedy "],
[" Helen ", " Dorminic ", " Irene ", " maureen ", " Emmy ", " Cate ", " Moses "]
]
console.log(myarray)

// myarray.push(["paul", "Simba"]) // adding an array to an existing array
// console.log(myarray)

// myarray.pop() // remove last elements
// console.log(myarray)

// myarray.shift(myarray) //remove first elements
// console.log(myarray)

// myarray.unshift(["Dorcus", "Emmy"]) // replace first removed element with new element
// console.log(myarray)

var firstnameInarray = myarray[0][1] // get the first value in the first element
console.log(firstnameInarray)

var lastnameInarray = myarray[myarray.length - 1] // getting the last values of last array
console.log(lastnameInarray)


var number = 0
var name = "anita"
length = name.length


var myname = "" // can be emited and still work
myname = "anitah"
firstletter = myname[0]
console.log(firstletter)

lastLetter = myname[myname.length - 1]
console.log(lastLetter)



//  string
var string = "anita" //string is put in quotes it might be single or double.

//  string

var myString = "I love code, everything to do with code"


// escaping a literal quotes in a string
// a string can be in a single or double quotes

// use \ to escape character in a double quotes
var myStringEscapeQuotes = "I am \" Developer \" I love coding in JavaScript and html"
console.log(myStringEscapeQuotes)

// use single quote outside a double quotes characters
var doubleAndSingleQuotes = 'Html is " basic code " for all beginners" '
console.log(doubleAndSingleQuotes)


// use \n for next line and \t for tab
var myStringManipulation = 'I am first line \n\t\ I am second line with tab \n I an a third line"'
console.log(myStringManipulation)

// I am first line
//   I am second line with tab
// I an a third line

function fillwords(gender, age, city, career) {
  results = "The " + gender + " " + "talking is " + age + " years old" + " from " + city + " pursuing diploma in " + career
  return results

}


fillwords();
console.log(fillwords("girl", "20", "Nairobi", "Web design"))

document.getElementById("missingletter").innerHTML = c;
document.getElementById("array").innerHTML = myarray;
document.getElementById("wordblank").innerHTML = results
document.getElementById("lastname").innerHTML = lastnameInarray;
document.getElementById("length").innerHTML = length;
document.getElementById("myString").innerHTML = myString;
document.getElementById("doubleAndSingleQuotes").innerHTML = doubleAndSingleQuotes;
document.getElementById("myStringEscapeQuotes").innerHTML = myStringEscapeQuotes;
document.getElementById("addition").innerHTML = sum;
document.getElementById("Substraction").innerHTML = Substraction;
document.getElementById("multiplication").innerHTML = multiply;
document.getElementById("divide").innerHTML = divide;
document.getElementById("remainder").innerHTML = remainder;
document.getElementById("stringAdd").innerHTML = sentence;
// document.getElementById("manipulating-string").innerHTML = myStringManipulation;