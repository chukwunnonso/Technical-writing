# The Concept of Mutability VS Immutability in JavaScript

## Table of Contents

- The Data Types
   - Primitive Data Types
   - Reference Data Types
- What is Mutability?
   - Understanding Mutability with Examples
- What is Immutability
   - Understanding Immutability with Examples
- Const != immutability
- Preventing Object Mutability
  - Object.preventExtensions()
  - Object.seal()
  - Object.freeze()
- Final Thoughts

## Prerequisites

* Variables,
* JavaScript Objects


One of the primary concepts you are exposed to in JavaScript are Variables.
These variables accommodate all data types and allows you to store the data in specific locations in memory. In older scripts, you will find the keyword "var" being used when declaring variables, but in modern script files, the preferred way of declaring variables is the `let` and `const` keywords. Let and const keywords provides more flexibility and reduces the chances of bugs in your code. The goal of this article is to help you have a solid understanding of Mutability and Immutability with respect to data types in JavaScript. 


```
let title;
```

A memory space called `title` is now waiting to receive data.


```
   let title = 'Chef'
```

Now `title` holds `Chef` in the memory.  

## Data Types

Data types are categorized into Primitive and Reference and each category behaves distinctly.

Before exploring the categories of data types, Here's is an explanation of two important terms with regards to memory storage in JavaScript. These are the `Stack` and `Heap`.

**The Stack**: Stack is a data structure that obeys the `Last In First Out` (LIFO) algorithm. This implies that the last item to enter the `stack` goes out first. Imagine a pile of books stacked up in the library, the last book ends up been the first to be removed. Data stored inside stack can be accessed easily.

**The heap**: Reference data are stored inside the `heap`. When a reference data is created, the variable name of the data is placed on the `stack` while the actual object is placed on the `heap` .

### Primitve Data Types

Primitive data types are immutable. This data is not an object because it lacks properties and methods. Primitive data includes the following: `Strings` `Numbers` `Undefined` `Null` `Boolean` `BigInit` and `Symbol.` These data types are placed in the `stack`. 

To determine the kind of data type you are working with, use the `type of` operator. The `typeof` operator works perfectly with all primitive data except the `null`. Consider some examples of primitive data types below for better understanding.

### Primitive Data Types with examples
 
 `Number`
```
let num = 23;

console.log(typeof num)
```

 `String`

```
let str = "Table"
```

 `Undefined`
A variable is said to be undefined, if there are no values attached to it.

let figure;

 `null`

```
   let fig = null

   console.log(fig)

   console.log(fig === null)
```

`null` is not same as Null or NULL.


 `Boolean`
This primitive data is either `true` or `false`.

```
   let student = true;

   let married = false;
```
Booleans are not strings notice `true` or `false` are not quoted.

 `Symbol`
As a primitive data type, symbols are very unique. The values that is been returned is also guaranteed to be unique.

```
   const mySymbol = Symbol();
   
   console.log(typeof mySymbol) //Symbol
```

 `BigInit`
Use `BigInt` when the values you are working on is too big for the number data types.

```
   const myBigInt = 12n;

   console.log(typeof myBigInt) //BigInt

   const check = BigInt(414242532)

   console.log(typeof check)
```


### Reference Data types

By default, `reference` data types are mutable. Reference data consists of `Functions`, `Arrays`, and `Objects`.  

Here are some `reference` data types below:

`Functions`

```

   function favorite(question) {
      console.log(`Hi dear, do you like ${question} programming language?`)
   }

   favorite('JavaScript')

```

`Arrays`

```
   const countriesVisited = ['Nigeria', 'Japan', 'Australia']

   console.log(countriesVisited)

```

`Objects`

```

   const touristData = {
      firstname: 'Camila',
      lastname: 'Pedro',
      Nationality: 'Spanish'
   }
   console.log(touristData)

```
*In the object above, the `firstname` is called the `key` while `camila` is the `value`*

Reference data type places the variable name on the `stack`. The variable name serves as a pointer that points to the `object` located on the `heap.` 

Take for instance, an object named `cars` was created below.

``` 
    const cars = {
    firstCar: 'Ford',
    secondCar: 'Benz',
    thirdCar: 'Lexus'
}

```

Reassigning `cars` to another object called `rides`creates two pointers on the `stack`. Both pointers are pointing to one object on the `heap`. That means you will have `cars` and `rides` on the `stack` and one object on the `heap`.


```
   const rides = cars;

   console.log(rides.firstCar)

```


The main distinction is that Primitives are `immutable` but Reference are `mutable`. 

### What is Mutability?

Changing data is possible in the state of mutability. It allows modifying existing values even without creating new ones.

For every `object`, a pointer is added to the `stack`, and this pointer points to the `object` on the `heap`.  

Take for example: 

```
    const staff = {
         name: "Strengthened",
         age: 43,
         Hobbies: ["reading", "Swimming"]
   }
```
On the stack you will find `staff` which is a pointer to the actual object on the `heap`

```
   const staff2 = staff;

   console.log(staff);
   console.log(staff2);
```
Another pointer is placed on the `stack` when `staff` was assigned to `staff2`. These references now points to a single object on the `heap`.

Reference data does not copy values but references.


```
   staff2.age = 53;

   console.log(staff)

   console.log(staff2)

```

Changing the `age` of `staff2` updates the `age` of the `staff` object. You understand the reason why? Because both points to the same object. 

The behavior is the same for Arrays also.

Perhaps you may be wondering if there is an available method for cloning actual `properties` while assigning them to another `object`.

Ofcourse you can achieve that using the `Object. assign()`. 

#### Object.assign()

The `object.assign` method copies properties from object(the source) into another object(the target) and returns the modified target object.

`Syntax`

```Object.assign(target, source)```

In the syntax are two arguments `target` and `source.` The `target` is the object that receives new properties, while the `source` is where the properties comes from. The `target` can be an empty object `{}.` 

In a situation where the `source` and `target` share the same `key`, the `source` object overwrites the value of the `key` on the target.

```
   const staff = {
      name: "Strengthened",
      age: 43,
      Hobbies: ["reading", "Swimming"]
   }

   const staff2 = Object.assign({}, staff);
```
The properties on `staff` object was cloned into an empty `target`. 

`staff2` now has its own properties. You can prove this by changing the value of any of its properties. Making this change will not affect the values of the properties on `staff` object.

```
   staff2.age = 53;

   console.log(staff)

   console.log(staff2)
```

The value of `staff2.age` that was changed to `53` does not in any way affect the value of `staff.age` because they both have their properties.

You can also use the `spread operator`.

`Syntax`

```
   const newObj = {...obj}

```
Using the spread operator is quite simple. You need to place three dots `...` before the name of the object you intend to clone its properties.

```
   const staff = {
    name: "Strengthened",
    age: 43,
    Hobbies: ["reading", "Swimming"]
   }

   const staff2 = {...staff};


   staff2.age = 53;

   console.log(staff)

   console.log(staff2)

```



### What is Immutability?

Immutability is a state where values are immutable. A value is immutable when altering it is impossible. Primitive data types are immutable.
```
   const num = 46;
   const newNum = num;

```
Looking at the code above, `num` was assigned to `newNum.` Now both `num` and `newNum` has a value of `46`. Changing the value on `newNum` will not alter the value on `num.


```
      let student1 = "Halina";

      let student2 = student1;
```
On the lines of code above, a variable called `student1` was created and assigned to `student2`.

```
      student1 = "Brookes"

      console.log(student1);

      console.log(student2)
```

Changing `student1`  to `Brookes`, does not change the initial value on `student2`. This proves that in primitive data types, actual values are copied so both have theirs. On the stack memory, `student1` and `student2` are distinct. 


The stack obeys the `Last-In-First-Out` algorithm. The first item that enters the stack is the last item to go out and vice versa.  Accessing items  stored in the stack is easy.

### const != Immutability

Const and Immutability are different. When we declare a variable using const, it would be impossible for us to reassign the variable. 

```
   let num = 34;
   num = 50;

   console.log(num);
```
After declaring variable `num` using `let` keyword, the variable was reassigned to `num`.

```
 const num = 34;
 num = 50;

 console.log(num);

```
You will get this error `Uncaught TypeError: Assignment to constant variable`.

Constants cannot be reassigned using the assignment operator `=`. 

Is declaring an `object` with a `const` any different?

```
   const getObj = {color1: "Green", color2: "Blue", color3: "Yellow"}

   getObj.color1 = "Brown";
   
   console.log(getObj.color1) // Brown

```

Properties can be altered even when declared with `const`.

### Preventing Object Mutability 

Object mutability can be prevented using the `Object.preventExtensions()`, `Object.seal()` and `Object.freeze()` methods.


Dont forget that objects are mutable by default.

```
   const studentNames = {student1: 'Halina', student2: "Brookes", Student3:"Anthony"}


   Object.defineProperty(studentNames, "student4", {
      value: "Mirabel",
   })

   console.log(studentNames);
```

When you check the console, you should `student4` has been added.

- Object.preventExtensions

`Syntax`

`Object.prventExtensions(obj)`

The argument `obj` is made non-extensible.  Using the `Object.preventExtensions` stops new properties from entering the object. The object does not increase in size. The method ensures an object maintains its properties. By default, all objects in Javascript are extensible. After extending objects, you cannot reverse the process. But the object permits deleting properties.

- Adding new properties using the `dot notation`.

```
   const makeNonExtensive = {firstname: "Charles", lastname: "Chandlier"}

   Object.preventExtensions(makeNonExtensive)

   makeNonExtensive.designation = "Software Engineer";
   
   console.log(makeNonExtensive)

```
Check the console, the `designation` property was not added and no error message was thrown.

```
   const obj = {firstname: "Derek", designation: "Software Engineer"}
```   
- Adding property using the `defineProperty` method.
   
   `Syntax`
   
   ```
      Object.defineProperty(obj, prop, descriptor)
   ```
   
- `obj`- The object you want to add properties to.
- `prop`: You define the name of the property you want to add or change. It should be either a string or symbol
`Descriptor`: You include the value of the property.

```
   Object.defineProperty(obj, 'title', {
      value: 'Mr',
   })
   console.log(obj.title)
   console.log(obj)
```

```
   const makeNonExtensive = {firstname: "Charles", lastname: "Chandlier"}

   Object.preventExtensions(makeNonExtensive)

   Object.defineProperty(makeNonExtensive, "age", {
      value: "twenty",
   })

   console.log(makeNonExtensive)
```

- Adding new property using the define property throws this error message `index.js:361 Uncaught TypeError: Cannot define property age, object is not extensible`.

- Modifying the value of an existing property using the `define Property`.


```
    const makeNonExtensive = {firstname: "Charles", lastname: "Chandlier"}

   Object.preventExtensions(makeNonExtensive)

   Object.defineProperty(makeNonExtensive, 'firstname', {
    value: 'Jason',
    })
    console.log(makeNonExtensive)
```
The value of the property of a non-extensible object can be change as demonstrated with the above line of code.


- Deleting a property

`Syntax`

```
   delete object.propertyname
```

```
   const makeNonExtensive = {firstname: "Charles", lastname: "Chandlier"}

   Object.preventExtensions(makeNonExtensive)

   delete makeNonExtensive.lastname

   console.log(makeNonExtensive)

```

Inspite of the object been non-extensible, the `lastname` property was deleted.

#### Object.seal()
All objects in Javascript are extensible by default. The argument `obj` is rendered non-extensible. Using the `Object.preventExtensions` stops new properties from entering the object. The object does not increase in size as the method ensures it maintains its properties. After extending objects, you cannot reverse the process. But it permits deleting properties.
`Syntax`

```
Object.seal()
```


- Adding a property using the `dot notation`.

```
   const studentNames = {student1: 'Halina', student2: "Brookes", 
 
   Student3:"Alina"}

   Object.seal(studentNames)

   console.log(Object.isSealed(studentNames))
```
`Object.isSealed(studentNames)` is used to check if an object is sealed.

```
   studentNames.student4 = "Barbara";

   console.log(studentNames)
```

 Without producing an error, the dot notation fails when adding the new property `student4`. 
  
  - Adding property using the define property.
  
  ```
      Object.defineProperty(studentNames, 'student4', {
      value: 'Barbara'
      })

      console.log(studentNames)
  ```
- The error message "Uncaught TypeError: Cannot define property student4, the object is not extendable" is thrown when attempting to add the same property using the `define property` method.

- Existing properties of sealed objects can be modified.
  
```
   Object.defineProperty(studentNames, 'student2', {
      value: "Water-Brookes",
   })
   console.log(studentNames)
```
- Now `student2` has been changed from "Brookes" to "Water-Brookes".


- Deleting properties from sealed objects

```
 delete studentNames.student1
 
 console.log(studentNames)
 
```
- Properties cannot be removed from sealed objects. In the console, student1 still remains.

#### Object.freeze()

`Syntax`

```
   Object.freeze()
```
The `Object. freeze()` method freezes an object. Use this method to guarantee highest integrity. Once frozen,  changes cannot be implemented. Pulling out and adding existing or new properties to a frozen object is unattainable.
A nested object accepts changes like new properties, changing values, and deleting properties.


- Adding a new property to a frozen object

```
const teamplayers = {player1: "Andrey", player2: "Abundance"}

const participants = teamplayers;

Object.freeze(teamplayers)

console.log(Object.isFrozen(teamplayers));

console.log(Object.isFrozen(participants));

teamplayers.player3 = "Finder";

```
```
   Object.defineProperty(teamplayers, 'player3', {
    value: 'Charis'
   })
   console.log(teamplayers)
```

Dot notation fails when trying to add a property, but define property throws a TypeError instead of failing silently.

What happens when you try to change the value assigned to a property using the define property method?

- Changing the value on a property

```
   teamplayers.player1 = "Christabel"

   console.log(teamplayers)
```
- This will fail silently. But with the define property below an `typeError` is thrown.
 
```  
   Object.defineProperty(teamplayers, 'player1', {
      value: "Anne"
   })

   console.log(teamplayers)
```

 `Uncaught TypeError: Cannot redefine property: player1`

```

   delete teamplayers.player2

   console.log(teamplayers)
```
- Attempting to delete a property on a frozen object also fails silently.

- Demonstrating Deep Freeze

```
  const teamplayers = {
    player1: "Andrey",
    player2: "Abundance",
    substitutes: {
    player3: "Jeremiah",
    player4: "Jayden"
}
}

const participants = teamplayers;

Object.freeze(teamplayers)
console.log(Object.isFrozen(teamplayers));
console.log(Object.isFrozen(participants));

Object.defineProperty(teamplayers.substitutes, 'player3', {
    value: "Woodland"
})

console.log(teamplayers)

```
- Player3 has been changed to `Woodland`. Even though the `teamplayers` is frozen.

- Adding a new property to the child object.

```
   Object.defineProperty(teamplayers.substitutes, 'player5', {
   value: "Cole"
   })
   
   console.log(teamplayers)

```
- In the console, player5 property with the value of `Cole` has been added.

- Deleting a property

```
   delete teamplayers.substitutes.player3

   console.log(teamplayers)
```
- Player3 has been removed. Everything that the object.freeze prevents on the parent object is obtainable on the child object that is nested.

To prevent this, we employ the deep freeze technique as shown below

```
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

```
- Modifying a property

```
   teamplayers.substitutes.player3 = "Woodland";

   console.log(teamplayers)
```
- Player3 will not be changed to `Woodland`.

- Deleting a property from the child object

```
   delete teamplayers.substitutes.player3

   console.log(teamplayers)
```
- Adding a new property to the child object.
  
```    
   Object.defineProperty(teamplayers, 'player5', {
      value: "Alice"
   })
   console.log(teamplayers)

```
- Now when you attempt adding a property, you will get this error `Uncaught TypeError: Cannot define property player5, object is not extensible`
  
  

 ### Final Thoughts
You've now learned about the various data types and whether they are immutable or mutable by default. Objects can be changed by default. But using specific methods like the Object.seal, Object.freeze and preventExtensions can prevent mutability. The level of immutability provided by these methods varies, so ensure you use the one that corresponds to the integrity level you want to accomplish. Until next time, keep exploring JavaScript.


