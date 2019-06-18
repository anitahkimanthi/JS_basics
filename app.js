console.table('Hi JavaScript') // inline comment

/*console.table('Hi JavaScript') multiline comment */

/** declearing and assigning variable */
var a; // I have declared a variable a

var c; // i have declared variable c

var b = 2; // declared var b and assigned a value 2 to b(declared and assigning value in one line)

//console.log(a) // variable a is not assigned any value so it will bring null or undefined

/* assigning a value to the variable a that was declared up there */
a = 7

console.log(a) // variable a is declared a value 7 and so it will show 7
console.log(b) // b will show 2 because is declared and assigned a 2 as value all together.

c = 10;

a = b + c // a will be 12

b = a - c // b will be 12(a) minus 10(c) so the answer will be 2

c = b + a // c will be value of be value gotten from b = a-c plus value of a=b+c so answer will be 14

console.log(a)
console.log(b)
console.log(c)

// Adding variable 
var anita ;
var damaris;
var simba;

anita = "kimanzi";

damaris = "mwia";

simba = "paul"

 console.log(anita)

 var a;
 var d ;
 var c;

  a = 5;
  d = "string"

  c= a + d
   console.log(c)

//  adding,substraction, multiplication, and division in variable

var add = 20+10;
console.log(add)

var minus = 20-10;
console.log(minus)

var times = 20*10
console.log(times)

var divide = 10/2
console.log(divide)

// incrementing and decrementing number(adding 1 to a number and reducing by 1)

var dresses = 3;
dresses = dresses + 1  // adding 1 to the assigned value
console.log(dresses)

 dresses++; // double plus sign to add one
 console.log(dresses)

 var sufuria = 5
 sufuria= sufuria - 1
 console.log(sufuria)

 sufuria--
 console.log(sufuria)

//  decimal numbers
var mydecimal = 0.5;

//multiplying decimal numbers
var myDecNumber = 0.2;

 myDecNumber = myDecNumber*2
 console.log(myDecNumber)

 var product = 0.2*2
 console.log(product)


// divide decimals
var sweets = 0.6/0.2
console.log(sweets)

// finding reminder
var remainder;
remainder =  11%3 //% is sign used for showing reminder
console.log(remainder)

// compound assignment with augmented addition
 var a =1;
 var b =1;
 var c =3

 a = a+12 //adding normal 
 console.log(a)

 b +=12
 console.log(b)

 // compound assignment with augmented substraction
 var a=2;
 var b=5
 a -=2
 console.log(a)

//  string
var myname = "anita" //string is put in quotes it might be single or double.

// escaping a literal quotes in a string
// a string can be in a single or double quotes
// use \ to escape character in a double quotes
// use single quote outside a double quotes characters

var myname= "I am anita \" kimanzi  \" I love coding and watching soaps\""
console.log(myname) 

var myname = 'I am anita \n\t\ kimanzi \n I love coding and watching soaps"'
console.log(myname)

// concatinate lines using plus
var mystring = "I am " + anita
console.log(mystring)

// using plus equal operator
var mystring = "I come first "
mystring += "I come second "
console.log(mystring)


// concantinate string with variable
var myname = "anita"
var fathersName="kimanzi"
var home = "Kitui"
var mystring = " I am " + myname  +" " +  fathersName + " from " + home

console.log(mystring)

// appending variable to a string
var home = "kitui"
var mystring = " is where I come from"

home +=mystring

console.log(home)

// find the length of a string

var namelength = 0;
var myname = "anita"
namelength = myname.length
console.log(namelength)

// branket notation to find first character in a string knowing the numers
var mynamesecondLetter = ''
var myname = "anita"
mynamesecondLetter = myname[2]
console.log(mynamesecondLetter)

// changing a string
var myName = "lanita";
myName = "anita";

console.log(myName)

// using the branket to get the last letter of the name even without knowing the numbers
var myname = "anita"
var lastLetter = myname[myname.length-1] // minus 1 because the first letter is 0 
console.log(lastLetter)


// word blanks

function clothes(person,action, cloth,  day){
    var results = ''
    results +=  "The " + person + " " + action + " " + cloth + " " + day
    return results
}

console.log (clothes("women ","wears","Skirts","daily",))
console.log(clothes("men","pays", "rent", "monthly"))


// Arrays
var people = ["anita","Maryann", "paul", "Damaris","Edward", "James", "Kelly"]
console.table(people)

// nested array

var people = [
    ["anita", "Maryann", "paul", "Damaris", "Edward", "James", "Kelly"],
    ["Mercy", "Anita", "pauline", "Dorcus", "Edwin", "Jacob", "Kennedy"],
    ["Helen", "Dorminic", "Irene", "maureen", "Emmy", "Cate", "Moses"]
]

console.table(people)

// accessing the element with an array
lastPerson = people [1][1] // double branket notation to point to the parent then to child
 console.log(lastPerson)

 lastPerson = people[[people.length - 1]][2] // third person in the last array
 console.log(lastPerson)

//  using push method to add an array in an existing array (manipulate)
 people.push(["Runy", "Pia", "Nancy", "Monica", "Eppy", "Catherine", "Moraa"])
 console.table(people)

//  removing element from an array using pop method

var removelastArray = people.pop();
console.table(removelastArray)

// removing first element of the array
var years = ["2019", "2018", ["2017", "2016"]]
removelastArray = people.shift()
console.table(years)

// adding element in the place that the first array element was removed
addElement = years.unshift("2020","2022")
console.table(years)


// another nested array of a shoping list
var list = [["cereal",2],["milk", 3], ["eggs",12], ["rice",3]]
console.table(list)

// functions
//functions helps us to make a reusable  code

function name(){
    console.log("hello there I am a function")
}
name(); //calling the function to show in the console

// passing values to the function
function maths(a,b){
console.log(a+b) //adding the values in the method and bring results
}
maths(20,30) //passing values to be used in the method on calling the function

// Global scope and function
// visiility of variable
//can be seen everywhere in your js code

var myglobal = 20; //since it is set outside a function it can be used in other functions anywhere in the code

function function1(){
    Error = "ooPs! something went wrong" // var not used if we use var inside a function
    //it can never be used in another method it will only be used in that function alone
}

function forglobalvar(){
    var output = ""; // empty string no values passes yet until the method is excuted

    if (typeof myglobal != "undefined") {
        output += "myglobal: " + myglobal;
    } 
    if (typeof Error != "undefined"){
        output +="Error:" + Error;
    }

    console.log(output)
}

function1(); // call the method
forglobalvar() //call the method