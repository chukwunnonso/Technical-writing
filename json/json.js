// const jsonObj = {"name": "james", "occupation": "farmer", "yearsOfExperience": 17 }

// const toObject = JSON.parse(jsonObj);



// const playerData = {
//     "firstname": "Jaden",
//     "lastname": "Titles",
//     "age": 17,
//     "country": "Switzerland",
//     "position": "Midfielder",

//     "formerClubs": ["Strides FC", "Coals FC", "Challengers FC"],

//     "hobbies": {
//         "gaming": true,
//         "fashion": true,
//         "writing": false,
//     }
// }

// console.log(playerData.firstname) //Jaden

// console.log(playerData.formerClubs[2]) //Challengers FC

// console.log(playerData.hobbies.fashion) //true


// `syntax`
// variableName.key




// const playerData = {
//     "firstname": "Jaden",
//     "lastname": "Titles",
//     "age": 17,
//     "country": "Switzerland",
//     "position": "Midfielder",

//     "formerClubs": ["Strides FC", "Coals FC", "Challengers FC"],

//     "hobbies": {
//         "gaming": true,
//         "fashion": true,
//         "writing": false,
//     }
// }

// console.log(playerData["firstname"]) //Jaden

// console.log(playerData["formerClubs"][2]) //Challengers FC

// console.log(playerData['hobbies']['fashion']) //true



//note: when using square brackets, the key values should be in double quotes
// and enclosed in a square brackets

// `syntax`
// variableName["key"]




// const fakeData = {
//     firstname: "George",
//     lastname: "Landford",
//     designation: "Project Manager"
// }

// const correctData = JSON.stringify(fakeData)
// console.log(correctData)



// const studentName = '{"firstname": "Davidson", "lastname": "laar", "program": "Machine Learning","learningMode": "Online"}'

// //So I cant break this into a separate line 

// /*
// {
//     like this
// }

// */

// const studentObj = JSON.parse(studentName)

// console.log(studentObj)


// const standard = `{
//     "name": "Jennifer"
//     "lastname": carter,
//     "age" : 22,
//     "program": "Software Engineering",
//     "hobby": "reading",
// }`;

// const findout = JSON.parse(standard);

// console.log(findOut);



// const myObj = {
//     "firstname": "Benjamin",
//     "lastname": "Kings",
//     "designation": "Technical Communicator"
// }

// const myArr = Object.keys(myObj)
// console.log(myArr)

// const JSON_obj = { 
//     "Name": "Ali", 
//     "Hometown": "Hyderabad", 
//     "age": "29" 
//  }; 
//  var array = Object.keys(JSON_obj); 

//  console.log(array)




// fetch('./json.json')
//     .then((response) => response.json())
//     .then((json) => console.log(json));


//     fetch('http://example.com/movies.json')
//   .then((response) => response.json())
//   .then((data) => console.log(data));


fetch('./json.json')
  .then((response) => response.json())
  .then((mata) => console.log(mata));
