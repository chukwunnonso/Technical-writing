// let age = 23;
// let newAge = age;

// newAge = 25;

// console.log(age)
// console.log(newAge)



// const groceries = {
//     Item1: "Tomatoes",
//     Item2: "Chicken",
//     Item3: "Hollandia"
// }
// const purchaseList = groceries;

// console.log(groceries);

// console.log(purchaseList);

// groceries.Item1 = "oranges";
// console.log(groceries)
// console.log(purchaseList)


// let student1 = "Halina";

// let student2 = student1;

// student1 = "Brookes"

// console.log(student1);

// console.log(student2)

// Looking at these, we changed student one and the change was implemented. But it didnt affect student2 even though
// we referenced student2 to student1.

// The above example is from primitive data type.


// const staff = {
//     name: "Strengthened",
//     age: 43,
//     Hobbies: ["reading", "Swimming"]
// }

// const staff2 = staff;

// console.log(staff);
// console.log(staff2);

// staff.age = 53;

// console.log(staff)
// console.log(staff2)

// Here we mutated the object which is a reference data type. As we can see the changed age reflected on both staff and staff2
// This is unlike what we have for the primitive data type.



// let staffYearsWithCompany = 4;

// let staff2YearsWithCompany = staffYearsWithCompany;

// console.log(staffYearsWithCompany)
// console.log(staff2YearsWithCompany)

// staff2YearsWithCompany = 6;

// console.log(staffYearsWithCompany)
// console.log(staff2YearsWithCompany)

// I need to lok into this proper. The concept of mutability with boolean

// let janeSpouse = true;

// let johnSpouse = janeSpouse;


// // console.log(janeSpouse);
// // console.log(johnSpouse);

// johnSpouse = false;

// console.log(johnSpouse)
// console.log(johnSpouse)








// const nieces = {first: "Chimamanda", second: "Osinachi"}

// nieces["second"] = "Mirabel";

// console.log(nieces)

// nieces["thrid"] = "Osinachi";

// console.log(nieces)

// nieces["fourth"] = "Chisom";

// console.log(nieces)

//How to replace keys
// nieces["ninth"] = nieces["second"];
// delete nieces ["second"]
// console.log(nieces)


// Object.preventExtensions

// syntax

//Object.defineProperty(obj, prop, descriptor)

// obj- This is the object we want to add properties to.
// prop: He we define the name of the property we want to add or change. It should be either a string or symbol
// Descriptor: here you include the value of the property.

/*
const obj = {names: "Chukwunonso", designation: "Software Engineer"}

Object.defineProperty(obj, 'title', {
    value: 'Mr',
})
console.log(obj.title)
console.log(obj)

*/


///


// const studentNames = {student1: 'Halina', student2: "Brookes", Student3:"Anthony"}

// Object.defineProperty(studentNames, "student4", {
//     value: "Mirabel",
// })


// const makeImmutable = {firstname: "Charles", lastname: "Chandlier"}

// Object.preventExtensions(makeImmutable)

// Object.defineProperty(makeImmutable, "age", {
//     value: "twenty",
// })
// console.log(makeImmutable)

// Trying to define property on an inextensible object throws a type-error

// You will get  Uncaught TypeError: Cannot define property age, object is not extensible
    

// Object.seal

// const studentNames = {student1: 'Halina', student2: "Brookes", Student3:"Anthony"}


// Object.seal(studentNames)

// studentNames.student4 = "Barbara";

// console.log(studentNames)
// //No error is thrown but also student4 is not added.

// Object.defineProperty(studentNames, 'student2', {
//     value: "Water-Brookes"
// })


const books = {
    title1: "Atomic Habit",
    title2: "How to win friends and influence people",
    title3: "Understanding your potential",
}

const authors = Object.seal(books);


books  === authors;

books.title2 = "Maximizing your potential"

console.log(books)

// We were able to add change property from "How to win friends and Influence people" to "maximizing your potential"


//Lets add a new property


books.title4 = "The millionaire next door"

console.log(books)
//Title four is not added and no eror is thrown back.

//Mind you this is on the prototype object. Lets try thesame on the "authors"

//authors.title4 = "The millionaire next door";

//console.log(title4)

//Uncaught ReferenceError: title4 is not defined.

Object.defineProperty(books, 'title2', {
    value: "What makes the great great",
})
console.log(books)

// With this, we were able to change the title2 value

// Object.defineProperty(books, 'title4', {
//     value: "What makes the great great",
// })
// console.log(books)

// // here we couldnt add to title four
// // Uncaught TypeError: Cannot define property title4, object is not extensible


delete books.title2
console.log(books)

// Delete property syntax

// delete object.property
// delete object[property]


// const num = 34;
// num = 50;

// console.log(num);

// let num = 34;
// num = 50;

// console.log(num);

const getObj = {color1: "Green", color2: "Blue", color3: "Yellow"}

getObj.color1 = "Brown";
console.log(getObj) // Brown

// Change property name







// const teamplayers = {player1: "Andrey", player2: "Abundance"}

// const participants = teamplayers;

// Object.freeze(teamplayers)
// console.log(Object.isFrozen(teamplayers));
// console.log(Object.isFrozen(participants));


// Object.defineProperty(teamplayers, 'player3', {
//     value: "Brookes"
// })
// console.log(teamplayers)
// // Trying to change the value assigned to property one will throw the error "index.js:273 Uncaught TypeError: Cannot define property player3, object is not extensible"


// const teamplayers = {
//     player1: "Andrey",
//      player2: "Abundance",
//     substitutes: {
//         player3: "Jeremiah",
//         player4: "Jayden"
//     }
// }

// const participants = teamplayers;

// Object.freeze(teamplayers)
// console.log(Object.isFrozen(teamplayers));
// console.log(Object.isFrozen(participants));

// //teamplayers.substitutes.player3 = "Woodland";

// Object.defineProperty(teamplayers.substitutes, 'player5', {
//     value: "Cole"
// })

// delete teamplayers.substitutes.player3

// console.log(teamplayers)

// deep freeze

// const deepFreeze = obj => {
//     Object.keys(obj).forEach(prop => {
//       if (typeof obj[prop] === 'object') deepFreeze(obj[prop]);
//     });
//     return Object.freeze(obj);
//   };

//   const teamplayers = deepFreeze( {
//     player1: "Andrey",
//      player2: "Abundance",
//     substitutes: {
//         player3: "Jeremiah",
//         player4: "Jayden"
//     }
// }
// )
// const participants = teamplayers;

// Object.freeze(teamplayers)
// console.log(Object.isFrozen(teamplayers));
// console.log(Object.isFrozen(participants));

// //teamplayers.substitutes.player3 = "Woodland";


// delete teamplayers.substitutes.player3
// teamplayers.substitutes['player5'] = "Alice";
// console.log(teamplayers)


// 'use strict';

// const val = deepFreeze([1, [2, 3]]);

// val[0] = 3; // not allowed
// val[1][0] = 4; // not allowed as well



const myBigInt = 12n;

console.log(typeof myBigInt) //BigInt

const check = BigInt(414242532)

console.log(typeof check)


/////


// const books = {
//     title1: "Atomic Habit",
//     title2: "How to win friends and influence people",
//     title3: "Understanding your potential",
// }

// const authors = Object.seal(books);


// books  === authors;

// books.title2 = "Maximizing your potential"

// console.log(books)



// const arr = ["Movies", "Books", "Cooking"]

// //Object.freeze(arr)

// //console.log(Object.isFrozen(arr))

// arr.slice(2)
//  console.log(arr)

//Uncaught TypeError: Cannot add property 3, object is not extensible




// - On checking the console, you should notice player3 is not added. No error is thrown also. This means thatwe canot add new properties to a frozen object.


// We cannot modify properties in a frozen object

// ```   
//    const teamplayers = {player1: "Andrey", player2: "Abundance"}

//    const participants = teamplayers;

//    Object.freeze(teamplayers)
//    console.log(Object.isFrozen(teamplayers));
//    console.log(Object.isFrozen(participants));

//    //teamplayers.player1 = ["Christabel"]
//    teamplayers.player1 = "Christabel"
//    //You can modify properties in objects using the above steps
//    console.log(teamplayers)








// const teamplayers = {
// player1: "Andrey",
// player2: "Abundance",
// substitutes: {
// player3: "Jeremiah",
// player4: "Jayden"
// }
// }

// const participants = teamplayers;

// Object.freeze(teamplayers)
// console.log(Object.isFrozen(teamplayers));
// console.log(Object.isFrozen(participants));

// //teamplayers.substitutes.player3 = "Woodland";

// Object.defineProperty(teamplayers.substitutes, 'player3', {
// value: "David"
// })
// console.log(teamplayers)

// ```


// - You can also add a new property to the `substitute` property whose value is an object.

// ```

// const teamplayers = {
//         player1: "Andrey",
//         player2: "Abundance",
// substitutes: {
//         player3: "Jeremiah",
//         player4: "Jayden"
//     }
// }

// const participants = teamplayers;

// Object.freeze(teamplayers)
// console.log(Object.isFrozen(teamplayers));
// console.log(Object.isFrozen(participants));


// Object.defineProperty(teamplayers.substitutes, 'player5', {
// value: "Cole"
// })
// console.log(teamplayers)

// ```

// - You can see below that player3 has been successfully deleted.
// ```


const deepFreeze = obj => {
    Object.keys(obj).forEach(prop => {
      if (typeof obj[prop] === 'object') deepFreeze(obj[prop]);
    });
    return Object.freeze(obj);
  };

  const teamplayers = deepFreeze( {
    player1: "Andrey",
     player2: "Abundance",
    substitutes: {
        player3: "Jeremiah",
        player4: "Jayden"
    }
}
)
const participants = teamplayers;

Object.freeze(teamplayers)
console.log(Object.isFrozen(teamplayers));
console.log(Object.isFrozen(participants));

teamplayers.substitutes.player3 = "Woodland";


// const num = 46;
// const newNum = num;

let num = 46;
let newNum = num;

num = 36;
console.log(num)

console.log(newNum)


const studentNames = {student1: 'Halina', student2: "Brookes", 
 
student3:"Alina"}

Object.seal(studentNames)

console.log(Object.isSealed(studentNames))

Object.defineProperty(studentNames, 'student3', {
    value: 'Excel',
})

    // Object.defineProperty(studentNames, 'student2', {
    //     value: "Water-Brookes",
    // })

console.log(studentNames)

// index.js:516 Uncaught TypeError: Cannot define property student3, object is not extensible






// function mutability (cares) {
//     //console.log(mutability)
//  }
//  console.log('sure')
// //  mutability()


function favorite(question) {
    console.log(`Hi dear, do you like ${question} programming language?`)
}

favorite('JavaScript')


const countriesVisited = ['Nigeria', 'Japan', 'Australia']

console.log(countriesVisited)


const touristData = {
    firstname: 'Camila',
    lastname: 'Pedro',
    Nationality: 'Spanish'
}
console.log(touristData)

// const dataTourist = touristData

// console.log(dataTourist.firstname)


const cars = {
    firstCar: 'Ford',
    secondCar: 'Benz',
    thirdCar: 'Lexus'
}

const rides = cars;

console.log(rides.firstCar)