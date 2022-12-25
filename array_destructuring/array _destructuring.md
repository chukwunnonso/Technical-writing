
# Array Destructuring: what do you need to know?

Extract and manipulate your array items as you deem fit!
<br><br>

![Toaster](istockphoto-1433604582-612x612.jpg)<br>
*istockphotos*  <br><br>

## We'll cover the following

- Why Destructure Arrays?
- What can you achieve?
    - Can you swap variables?
    - Destructuring with more variables?
    - Assign default values?
    - Selectively return values?
    - Dealing with nested arrays?
    - A better way to ignore?
    - How about the rest?
- Summary

## Prerequisite
 It will be better if you have basic understanding of:
- [Javascript Variables](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Variables)
- [Arrays](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)



If you don't know these, still follow along and learn a thing or two.

---

ECMAScript 6 (ES6) introduced us to the Destructure assignment.

While Arrays store ordered items in a container known as a variable, destructuring syntax unpacks and assigns a distinct variable to each item.  We'll look into a few array-specific implementations of the destructuring syntax. When comparing Array literal and Destructuring, we can see quite some similarities.

 For instance:


`Array literals`
```
    const studentNames = [ ‘james’, ‘John’, ‘Jamie’]
```

- On the left we have `studentNames` as the variable name and an `array` on the right.


`Destructuring`

```
    let designation = [“student”, “staff”, “parents]

    let [a, b, c, d] = designation
```
- We have array of variables `[a, b, c, d]` on the left and `designation` to the right which is the `variable` that holds the array. 

## Why Destructure Arrays?

Using destructuring syntax is convenient for handling array components individually rather than collectively.
In programming, excessive repetition is considered bad practice. Before ES6, we retrieve elements by following these steps:

```
        let mouseNames = [
            "optical",
            "gaming",
            "ergonomic",
            "laser",
            "trackball",
            "finger"
         ];

        let firstMouse = mouseNames[0]

        let secondMouse = mouseNames[1]
        
        let thirdMouse = mouseNames[2]

        let fourthMouse = mouseNames[3]
        
        let fifthMouse = mouseNames[4]

        let sixthMouse = mouseNames[5]

```
<br>
You can see that the code is not DRY(Do Not Repeat Yourself) and doesn't read very well. With array destructuring, you can write clear and understandable code. Let's see how.


```

    let mouseNames = [
        "optical",
        "gaming",
        "ergonomic",
        "laser",
        "trackball",
        "finger"
    ]

    let [firstMouse, secondMouse, thirdMouse, fourthMouse, fifthMouse,  sixthMouse] = mouseNames

```

- Still working on the variable `mouseNames` with six items within the array.
- We created another `array` with six variables. Each array item gets assigned to one unique variable. It is the summary of what destructuring is all about.  
### What can you achieve?
You can manipulate your array with the help of the destructuring syntax. It requires using fewer lines of code. We'll be looking at a few possibilities we can have with this syntax.
#### Can you Swap Variable?

A temporary value was used before ES6 when swapping. The code below illustrates how you can do it.

```
        let players = ["Tilde", "Jordan", "Jaden", "Beloved"]

        let referees = ["Michael", "Sail", "Pathfinder", "Strides"]

        let tempVal;

        tempVal = players;

        

        players = referees

        

        referees = tempVal


        console.log(players) //['Michael', 'Sail', 'Pathfinder', 'Strides']
        
        console.log(referees) // ['Tilde', 'Jordan', 'Jaden', 'Beloved']


```
-  **Step 1:** You have two arrays `players` and `referees`
-  **Step 2:** Declare a variable `tempVal` without initializing. It is your temporary variable.
-  **Step 3:** Assign `players` to `tempVal`
-  **Step 4:** Set `players` to `referees`
-  **Step 5:** Finally initialize `referees` to the `tempval`
  
The Destructure syntax simplifies swapping of several variables or individual components of an array.

```
            let student = 'Taylor';
            let teacher = 'Benjamin';

            [student, teacher] = [teacher,student];
            console.log(`${student} ${teacher}`); //Benjamin Taylor
```

- What we have above is very straightforward. Using a square bracket, interchange the position of the variables.

<br> <b>



#### Destructuring with more variables?

Having more variables than the elements in an array will give `undefined`. It is comparable to declaring a variable without assigning a value. 

```
        let moreVariables = [1000, 2000, 3000, 4000]
        
        
        let [a, b, c, d, e, f] = moreVariables;
        
        
        console.log(a) // 1000
        
        console.log(e) // undefined
        
        console.log(f) // undefined

```
- The `moreVariables` has four items. 
- The destructuring syntax has six variables `[a, b, c, d, e, f]`. 
- As you can see, because no item is initialized to the last two variables `e,f`, you will get `undefine`.

#### Assign Default values?

Recall that variables are on the left side of the `Destructuring` syntax. Any variable without a corresponding array item returns as `undefined`. While Destructuring, the `=` operator does the trick for us. With this assignment, we can use the `default` value.


```
    let popularCities = [
        "Paris",
        "Abuja",
        "Hong-Kong"
    ]


    let [first_City, second_city, third_city, fourth_city ="London"] = popularCities;

    
    console.log(first_City) // Paris

    console.log(second_city) //Abuja

    console.log(third_city) // Hong-Kong

    console.log(fourth_city) // we have a default of "London"

```
- The `popularCities` has three cities. 
- On the `syntax` there are four variables with the fourth variable having a `default` value assigned to it.
- Instead of `undefined` , it outputs `London`. Amazing!
    

The `prompt()`  method can also assign the default. I'll be demonstrating this shortly.

```
        let sports = [
            "Basketball",
            "Tennis",
            "Soccer"
        ]

        let [sportOne, sportTwo, sportThree, sportFour=prompt("Enter sports name")] = sports

        console.log(sportFour)
```
- The `method` on `sportFour` will provide a dialogue box for you to make an input that serves as the `default`.


#### Selectively return values?

 We can ignore some elements using `trailing commas`. Each comma excludes the array item that should occupy that position. This approach is better when dealing with a small array.  

```
    let sports = [
        "hockey", 
        "basketball",
        "golf", 
        "soccer", 
        "volleyball",
        "boxing"
    ]


    let [a,,,,,b] = sports
    
    console.log(a) // hockey
    
    console.log(b) // boxing

```

- Aside from the comma after `a`, there are four succeeding `trailing commas`, each excluding an array item.
```
        function ignoreFewValues() {
            return [300,600,900, 1200]
        }
        
        const [a,,,d] = ignoreFewValues();
 
            
        console.log(a) // 300
        console.log(d) //1200

```

- This is similar to the example above.
- Here, you are returning an array with a `square` bracket. 
- Invoke  the function like this `ignoreFewValues()` on the right. If you don't, you will get an error.
#### Dealing with nested Arrays?

Nested arrays are not left out. You can use the syntax to unpack the array items no matter how deeply nested they are.

```
    let musicalInstruments = [
    "percussion",
    "brass",
    "woodwind",
    "string",[
        "guitar",
        "electric bass",
        "violin"
    ]
]

let [instument1, instrument2, instrument3, instrument4,[string1, string2, string3]] = musicalInstruments;

console.log(instrument1)

console.log(string2)

```
- The array `musicalInstruments` has another array within it.

- Take note of the `trailing commas` separating the nested arrays. 
- The nested variables are separated with a comma. 
- Without these `commas`, you will be thrown this error message "undefined is not iterable (cannot read property Symbol(Symbol.iterator))". 

<br> <br>

#### A better way to ignore?
Counting commas is challenging. But then, we can take advantage of the fact that in JavaScript, everything, including an array, is an object. Using this, you can access only the required items.
```
    let groceries = [
        "tomatoes", 
        "chicken", 
        "detergents", 
        "spices",
        "drinking water"
    ]

    let {0 : first_element, [groceries.length -1] : last_element} = groceries
    // Here the aray index is used as the key

    console.log(first_element)
    console.log(last_element)

```

Alternatively we can:

```

    let electricAppliances = [
        "television",
        "air-conditioner",
        "microwave",
        "refrigerator"
    ]

    let {0: appliance1, 2: appliance3} = electricAppliances;
    console.log(appliance3)


```


```

        const vehicle = [
            "ford",
            "BMW",
            "Mercedes",
            "Tesla"
        ] 

        const {length, 0: brandOne, [length-1]: brandTwo } = vehicle 

        console.log(brandOne, brandTwo)


```

#### How about the rest?
We can use a single variable to hold the remaining Array components. We achieve this by placing three dots before the variable name. The variable name could be "...rest", but it is not a keyword, so feel free to call it whatever you like.

```

let movieSeries = [
    "The Ocean's Eleven Series",
    "Spider-Man: Homecoming.",
    "The Mission: Impossible Series.",
    "The Bridget Jones Series.",
    "The Die Hard Movies.",
    "The Step Up Movies..",
    "The Twilight Movies.",
    "A Nightmare on Elm Street Films."
]

let [number_one, ...rest] = movieSeries;

console.log(number_one); // The Ocean's Eleven Series

console.log(rest) // contains all other items in a single array.

```

Here's another exmple demonstrating that we can use any name choice after the dots

```

    let bookGenres = [
        "Actions and Adventure", 
        "Classics", 
        "Comic Books", 
        "Detective and Mystery", 
        "Historic Fiction", 
        "Science Fiction"
    ]

     let [firstGenre, secondGenre, ...archive] = bookGenres;
 
    console.log(firstGenre)

    console.log(secondGenre)
 
    console.log(archive)

```

## In summary


We've had a great time learning about the ES6 Array Destructuring. We've also covered some of the most important options that these features open up. Despite the few constraints, Array destructuring is very useful when manipulating Arrays. I appreciate you spending the time to learn from this piece.

