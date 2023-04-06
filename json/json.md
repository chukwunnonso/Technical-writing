# Understanding the JSON

# Table of Contents

- Introduction   
- What is JSON
- JSON syntax
- Accessing JSON data
- Application of JSON
- JSON Objects
- JSON arrays
- Comparisons
  - JSON vs JavaScript objects
  - JSON vs YAML and XML
- JSON methods 
   - The JSON.stringify
   -  JSON.parse
- Parsing object with fetch
- Semantics(Data serialization)
- Conclusion


Interaction with web application can be considered incomplete when data is not been exchanged. Working on web aplications requires that one interact not just with the client side but also the server side. Servers can receive and supply data. This data has to be properly formatted to make fpor easy exchange and also readability. and for the data to be acessed by the user, there has to be a means of interchanging this data with the user. One such method of exchanging the data is by using the javascript object notation which is popularly known as the JSON. 

## What is JSON
JSON(JavaScript Object Notation) is a human-readable text format that is used for exchanging data between the clients side and the server side using objects like key-value pairs. JSON is a data exchanging format. It is used for storing the data and transmitting the data. It is an electronic data exchanger. The JSON format was derived from the JavaScript programming language and it is very similar to the the JavaScript object. Although derived from javascript, the JSON is language agnostic which implies that it ca be used on other programming languages. The .json is used for all JSON file extensions. although different from the javascript .js format, all JSON files are valid javascript but cannot be used in modifying the page.

## JSON Syntax

 "for every last data type, dont place a comma". "Json doesnt support trailing comas",

 ```

  {
    "firstName": "Halina",
    "lastName": "Woods",
    "spouse": null,
    "age": 24,
    "designation": "Software Engineer",
    "lovesCoding": true,
    "country": "Nigeria",
    "address": {
    "streetAddress": "Sea Streets",
    "city": "Abuja",
    "state": "Abuja",
    "postalCode": "10003-98374"
    },
    "phoneNumbers": [
        {
            "type": "home",
            "number": "+2348101111223"
        },

        {
            "type": "office",
            "number": "6453 75644-46453"
        }

    ],

    "hobbies": [
        "shopping",
        "reading",
        "cooking"
    ]
  }

 ```
 This is an object. Lets explore the data types we have in the JSON data 
 `firstName`: string
 `lastName`: string
 `spouse`: null
 `age`: number
 `designation`: string
 `country`: Nigeria
 `address`: object
 `phoneNumbers`: array of objects
 `hobbies`: array


## Accessing JSON Data
Accessing JSON Data can be achieved in a similar way to how you access data in a typical JavaScript object. There are two main property accessors that are been used. This is the dot notation and the bracket notation

- Accessing objects using the dot notation

The dot notation happens to be the most widely used property accessor. This wide adoption can be attributed to its readability.

`Syntax`
```
  object.propertyName
```
<br>

In this syntax, our object is simply the name of the JSON which is followed by a dot/period(.) then the name of the property. For dot notation, the poperty name should be an alphanumeric. Other special characters are also supported by the dot notation. But then, the starting character cannot be a number.

```
    const playerData = {
    "firstname": "Jaden",
    "lastname": "Titles",
    "age": 17,
    "country": "Switzerland",
    "position": "Midfielder",

    "formerClubs": ["Strides FC", "Coals FC", "Challengers FC"],

    "hobbies": {
        "gaming": true,
        "fashion": true,
        "writing": false,
    }
}

    console.log(playerData.firstname) //Jaden

    console.log(playerData.formerClubs[2]) //Challengers FC

    console.log(playerData.hobbies.fashion) //true


```
- The bracket notation
- 
Aside from the dot notation, we another property accessor that can be used is the bracket notation. This notation comes with lesser restriction when chosing the JSON name. In bracket notation, the JSON name and the property name has to be strings and should be quoted using either the single or double quotes. Once stringed, any character can be used. in bracket notation all of these are valid `" "` `3student` and `!student`.

```
    const playerData = {
    "firstname": "Jaden",
    "lastname": "Titles",
    "age": 17,
    "country": "Switzerland",
    "position": "Midfielder",

      "formerClubs": ["Strides FC", "Coals FC", "Challengers FC"],

      "hobbies": {
          "gaming": true,
          "fashion": true,
          "writing": false,
      }
  }

    console.log(playerData["firstname"]) //Jaden

    console.log(playerData["formerClubs"][2]) //Challengers FC

    console.log(playerData["hobbies"]["fashion"]) //true


```

You can either use a single or double quote for the bracket notation. Note, you have to apply this quote even working with an obvious string. 

## JSON Objects

JSON objects can be converted into an array using the Object.keys();

## JSON Arrays



### JSON vs JavaScript objects
JSON is very much similar to the javascript object. This is because it was derived from the JavaScript. Even with this similarities, there are still some differences between both of them. For instance, JSON keys are placed in between a double quotation while objects are not quoted expect if the key name is separated by say a -. Also JSON can be used in other programming languages while JavaScript objects is specific to javascript only. JSON does not support functions. Objects support functions.



### JSON vs YAML

Both YAML Ain't Markup Language and JSON are designed for data. Although they are similar, there are obvious differences between both of them. Both are supported by the majority of modern programming languages. YAML is a superset of the JSON which implies that every any valid JSON file is also a valid YAML file therefore can be read. In terms of similarities, YAML is more readable compared to JSON. But then JSON does not support comments while YAML does. Relational anchors in YAML allows you to reuse thesame data you have defined in another place, a feature not supported by JSON. YAML is also less verbose as it adopts a minimal syntax compared to the JSON. ANd finally, strings in JSON are doubly quoted but with YAML, strings are not doubly quoted. 



### JSON vs  XML
Some of the differences between JSON and XML includes that JSON is easier to read  compared to XML. JSON is a data format used for exchanging data between web application and server while XML is a markup language used in formating a page. Because JSON was designed to exchange data only, it is faster than the XML when XML is used to exchange data. JSON is derived from JavaScript while XML is derived from SGML

### The JSON Methods
Remember that the primary purpose of JSON is serving as a data exchanger between web applications and the server. With the JSON, two methods are supported. These are the JSON.stringify() and the JSON.parse. What are they?


### The JSON.stringify
WHen transferring data to the server, the data type that is supported are strings. Just as the name suggests, the JSON.stringify method converts our JavaScript into a string. The method works well for both objects and arrays.
Converting JavaScript objects into strings is known as serialization
`Syntax`
```
JSON.stringify(value)
```
The value here is what we want to change into a string.

### The JSON.parse
Before diving into the method, it would be important to discuss what `parse` means. In programming, parsing is converting a program from one format into another format that is understandable by the engine the browser engine. The JSON.parse methods takes the stringified data from the server and converts it into a format that can be run on the browser. That means parsing an JSON converts it into the corresponding JavaScript object.
The process of converting strings back into object is known as reserialization.
`Syntax`

  ```
  JSON.parse(value)
  ```

```
    const studentName = '{"firstname": "Davidson", "lastname": "laar", "program": "Machine Learning","learningMode": "Online"}'


    const studentObj = JSON.parse(studentName)

    console.log(studentObj)

```

### Reading JSON files Using the Fetch

JSOn files located on the server or locally on your machine can be easily read by using the fetch method.

`syntax`
```
    fetch('url')
    .then((response) => response.json())
    .then((data) => console.log(data));
```
The fetch takes in a url which is the main difference between fetching a local file and a json file on the server. For a file on the local machine. You need to indicate the path of the file then the file name. for example we have `.\json.json`. Then it returns a promise which we have to console on the browser. To be able to get this done easily you need to have a live server installed on the Integrated Development Environment.






### Uses of JSON

JSON