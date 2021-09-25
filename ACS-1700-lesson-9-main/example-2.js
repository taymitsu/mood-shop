// If you have node installed you can run this
// from the terminal with: node example-2.js

// Create an object
//const my_object = {
//	name: 'Borland',
//	isBoring: true,
//	fun: 0.01,
//	says: 'Meh'


// TODO: Create an object that represents a creature
// Give it a name like: manticore.
// Give it at least 4 properties and values like 
// color, size, name, has/is? make sure you have properites 
// with values of number, string, and bool

const doge = {
	name: 'Tyson',
	color: 'brindle', 
	goodBoy: true,
	says: 'bork',
	age: 1,
}


console.log('doge')
console.log('name:', doge.name)
console.log('color:', doge.color)
console.log('goodBoy:', doge.goodBoy)
console.log('Says:', doge.says)
console.log('age:', doge.age)

// TODO: use console.log() to log your object to 
// the console.



// console.log('----- Display the properties -----')
// console.log('Is boring:', my_object.isBoring)
// console.log('Is name:', my_object.name)
// console.log('fun rating:', my_object.fun)
// console.log('Says:', my_object.says)

// TODO: Print your objects properties to the console
// with console.log(). 



// // My object needs an update!
// my_object.name = 'Borland Bordon Bearson the Third'
// my_object.fun = '1.01'
// my_object.isBoring = false
// my_object.says = 'Hello and how are you on this fine day!'


// TODO: Update the properties of your object. 
// Change each of the four value to an updated value

doge.name = 'Tyson Bear'
doge.color = 'baddie brindle boy'
doge.goodBoy = false
doge.says = 'bork bork bork'
doge.age = 1.5




// console.log('----- Display the updated properties -----')
// console.log('Is boring:', my_object.isBoring)
// console.log('Is name:', my_object.name)
// console.log('fun rating:', my_object.fun)
// console.log('Says:', my_object.says)

// TODO: Print the updated values of your object to
// the console:

console.log('doge')
console.log('name:', doge.name)
console.log('color:', doge.color)
console.log('goodBoy:', doge.goodBoy)
console.log('Says:', doge.says)
console.log('age:', doge.age)


console.log('----- Access properties with a string -----')
// Sometimes you can't access a property with it's 
// identifier but you have a string spelled the same 
// console.log( my_object['name'] )
// console.log( my_object['isBoring'] )


// TODO: Display two of the properties of your object
// Using the [] and a string with the property name. 

console.log(doge['name'])
console.log(doge['says'])

// Normally you won't want to use a string it's better to 
// use the identifier. For example: 

// my_object.fun    // Good! 
// my_object['fun'] // NOT Good

// So why have this feature? There is one case 
// where this [] notation is great! When you 
// have the property name stored as a string! 
// Here is an example: 

// const name_key = 'name'
// const fun_key = 'fun'

// console.log( my_object[name_key] )
// console.log( my_object[fun_key] )

// TODO: Define a couple variables with string values
// that match the names of properties on your object. 
// Use these with [] notation to print those values 
// to the console:

const dogeName = 'name'
const yells = 'says'

console.log(doge[dogeName])
console.log(doge[yells])


console.log('----- Display keys -----')
// You can get all of the keys in a object with 
// Object.keys(). This method returns an array 
// of strings. 

// const my_object_keys = Object.keys(my_object)
// console.log(my_object_keys)

// TODO: Get all of the keys on your object using
// Object.keys() then display them in the console
const doge_keys = Object.keys(doge)
console.log(doge_keys)


// Here is a prctical example of that [] notation. 
// Normally you WON'T use [] but here is case where
// [] notation is a good choice! 
// The function below takes an object as an argument
// it prints all of the properties of the object. 
// If we don't know what the property names are 
// how can we do that? I don't know what property 
// names you chose for your object but I can print
// all those properties and valuse with Object.keys()
// and [] notation!

function displayObject(obj) {
	const keys = Object.keys(obj)
	for (key of keys) {
		console.log(`Property: ${key} is value: ${obj[key]}`)
	}
}

displayObject(doge)



// TODO: Use the displayObject() function to 
// display the properties and values of your 
// object below: 
