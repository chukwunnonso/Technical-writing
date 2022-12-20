
# Array Destructuring: what do you need to know?

## Contents

- Why Destructure our arrays?
- What can we do with Array destructuring?
    - Can we Swap Variables using destructuring?
    - Selectively return values?
    - What happens when you try to destructure with more variables than the - original array?
    - A better way to ignore?
    - How do you access only the first and last element?
    - What about the rest of the array?
    - Can we use Default values?
- Summary

## Prerequisite
 It will be better if you have basic understanding of:
- Variables in Javascript
- Arrays

But if you don't, we you can still follow along and learn a thing or two.

ECMAScript 6 (ES6) introduced us to the Destructure assignment. This syntax enables us to destructure Arrays and Objects. We'll look into a few array-specific implementations of the destructuring syntax.

Arrays store ordered items in a container known as a variable. While Destructuring syntax unpacks and assigns a distinct variable to each item. Comparing Array literal and the Destructuring, we can see quite some similarities.


 For instance:


`Array literals`
```
    Const studentNames = [ ‘james’, ‘John’, ‘Jamie’]
```

`Destructuring`

```
    let designation = [“student”, “staff”, “parents]

    let [a, b, c, d] = designation
```

## Why Destructure our arrays?

Using destructuring syntax will come in handy for you when you decide to treat the components of an array individually rather than collectively.

Excessive repetition is typically regarded as bad practice in programming. Before ES6 we retrieve elements by following these steps:

You can see from the code that we have to repeat ourselves, and our code doesn't read very well. With array destructuring, we create clear and understandable code. Let's see how.

### What can we do with destructuring?
There are many things that we can achieve with our arrays-thanks to destructuring. But of course, we will be considering the most important ones here.

### Can we Swap Variables using destructuring?

Yes we can! But lets see how we can achieve that without destructuring

```
        let players = ["Tilde", "Jordan", "Jaden", "Beloved"]
        let referees = ["Michael", "Sail", "Pathfinder", "Strides"]

        // Declare a variable without assignment

        let pseudoValue;
        //  then swap

        // Assign "players" to the declared variable

        pseudoValue = players;

        // Then set "players" to be "referees"
        players = referees

        // Finally assign referees to the temporary value

        referees = pseudoValue
        // Print the result to the console.

        console.log(players) //['Michael', 'Sail', 'Pathfinder', 'Strides']
        console.log(referees) // ['Tilde', 'Jordan', 'Jaden', 'Beloved']
```



The Destructure syntax simplifies swapping of several variables or individual components of an array.

```
            let student = 'Taylor';
            let teacher = 'Benjamin';

            [student, teacher] = [teacher,student];
            console.log(`${student} ${teacher}`); //Benjamin Taylor
```


<br> <b>
### Selectively return values?

We can ignore some elements using trailing commas instead of variable names. Each trailing comma excludes the array item that should occupy that position. This method is better when dealing with a small array. Yet, when the Array of items increases,  using commas becomes more difficult. Using this approach happens to be one of the limitations of Destructuring  Arrays.


```
    let sports = [
        "hockey", 
        "basketball",
        "golf", 
        "soccer", 
        "volleyball",
        "boxing"
    ]


    // Aside the first comma after a, there are four succeeding trailing commas, each represent an array item.

    let [a,,,,,b] = sports
    console.log(a) // hockey
    console.log(b) // boxing

```

```
        function ignoreFewValues() {
            return [300,600,900, 1200]
        }
        
        const [a, ,,d] = ignoreFewValues();

        //Take note, we are returning an array. Also we are calling  a function call not just a variable. 
            
        console.log(a) // 300
        console.log(d) //1200


```



### What happens when you try to destructure with more variables than the original array?

The result of having more variables than the elements in the Array is "undefined" and is comparable to declaring a variable without assignment.

```
        let moreVariablesThanNeeded = [1000, 2000, 3000, 4000, 5000, 6000,  7000, 8000, 9000, 10000]
        // We have ten items in our array.
        let [a, b, c, d, e, f, g, h, i ,j, l, m] = moreVariablesThanNeeded;
        // We have 12 items in our array variables
        console.log(a) // 1000
        console.log(m) // undefined
        console.log(l) // undefined

```



### A better way to ignore?
* How do you access only the first and last element?

In JavaScript, everything, including an array, is an object. Using the following method, you can only access the first and last elements:

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


### What about the rest of the array?
We can use a single variable to hold the remaining Array components. We achieve this by placing three dots before the variable name. The variable name could be "...rest", but it is not a keyword, so you can choose to call it whatever you like.

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

Here's another exmple demonstrating that we can use any word choice after the dots

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




### Can we use Default values?

Recall that our variables are on the left side of the Destructuring syntax. Any variable without a corresponding array item will give "undefined". While Destructuring, the "=" operator does the trick for us. With this assignment, we can use the "default" value.

The prompt keyword can also assign the default. I'll be demonstrating this shortly.

```
    let popularCities = [
        "Paris",
        "Abuja",
        "Hong-Kong"
    ]
// we have an array of three cities.

    let [first_City, second_city, third_city, fourth_city ="London"] = popularCities;

    // The syntax has four variables in the array. 
    // tHe fourth variable has a default asigned to it. Amazing!
    
    console.log(first_City) // Paris

    console.log(second_city) //Abuja

    console.log(third_city) // Hong-Kong

    console.log(fourth_city) // we have a default of "London"


```


## In summary


We've had a great time learning about the ES6 Array Destructuring. We've also covered some of the most important options that these features open up. Despite the few constraints, Array destructuring is very useful when manipulating Arrays. I appreciate you spending the time to learn from this piece.

