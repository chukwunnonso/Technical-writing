# JavaScript Local Storage: The powerful client-side warehouse

![Image](Screenshot%20from%202023-01-09%2004-37-51-1.png)
## We'll cover the following

- What is localStorage
- A quick explanation of session storage
- The Same Origin Policy(SOP)
- Why use local storage?
- Local Storage Data
- Local Storage API Methods
  - Set method
  - Get method
  - Remove method
  - Clear method
  - The length  
- The Data Model
- Any limitations?
- Wrapping up


If you use browsers, you should be familiar with the word 'cookies'. Cookies store key-value pairs on the client side. It then transfers this data to the server on every HTTP request. 

The data communicated with servers can cause security threats, especially on malicious sites. As a result of this, Netscape introduced a feature called Webstorge API(Application Programming Interface). This API helps keep this threat at a minimal level. 

Web storage is not a substitute for browser cookies. It is a web application security system for obtaining data from a user and storing it on the browser. These stored items are not shared with the server as cookie does. The web storage comprises the distinct local storage and session storage. 

### Session Storage 
The Session storage keeps key-value pairs data for one session. It is a temporary storage and is suitable for one-time transactions on web pages.

The session storage feature is considered both per instance and per origin. Per instance indicates that each window or tab stores its data. Per origin denotes that it obeys the same origin policy.
This storage clears all data at the end of every session or closing of the window.
### Local Storage
Local storage stores persistent key-value pairs on your browser. Closing the window or browser does not remove the data in the storage. Local storage is per origin. To set or get items from both local storage and session storage, we use a type of JavaScript API. These images illustrates how to access the local storage.

![Image](access_two.png)

![Image](access_2_ls.png)


### Same Origin Policy (SOP)

When you log in to 'http://www.bankoftherich.com', your user authentication is stored. If you visit another website 'http://www.malicious.com'. By default the browser allows the malicious website to make and get requests to and from your bank site. The malicious site does it by reusing the authentication and is empowered to do everything possible on the bank site. Some of these activities could be criminal such as initiating new transactions. 

The same origin policy as a security feature prevents the described scenario. Websites of the same origin have read and write access. But read access is denied websites of different origins. Origin means the same `URL scheme(protocol)`, `host(domain)`, and `port number`. The protocol for web applications can either be `HTTP` on `port 80` or the `HTTPS` on `port 443`. During user authentication with HTTP cookies, `SOP` ensures no sensitive credentials leaks. SOP restricts only script files. Alternately, Cascading Style Sheets(CSS) and images resource are visible. 


Given a website http://www.understandingsop.com/80

- The protocol is `http`
- `//www.understandingsop.com` is the domain
- `80` is the port
  
When all three matches, the same origin criterion is satisfied. File path variations have no impact and you activate the default port when a port is not specified.

These are the results when you compare this URL, "https://www.sameoriginpolicy.com/page.html," to the URLs listed in the table:


| Compared URL    | Outcome | Reasons|
| ----------- | ----------- | -------- |
|https://www.sameoriginpolicy.com/|Success|Same protocol, domain and port|
| http://www.sameoriginpolicy.com/html   | Failure|Different protocol|
| https://www.striver.com/html   | Failure|Different domain|
|https://www.sameoriginpolicy.com/page2.html| Success |Thesame protocol, host and port|
| https://www.sameoriginpolicy.com:8080/page.html | Failure|Different port|

<br>

### Why Use Local Storage?
- Simple and concise API.
- A bigger storage space than cookies.
- Data is not exchanged with the server hence a higher level of security.
- Windows of the same origin can access stored data.
- Local storage is supported by numerous browsers
- Local storage saves permanent information that is accessible offline.

### Local Storage Data
The browser window stores local storage data. This value is received in the form of key-value pairs. It is akin to the JavaScript Object and the JavaScript Object Notation(JSON) syntax. Strings are the data types supported by local storage. Storage capacity varies across browsers. Opera and Safari browsers stores 5 megabytes of data. Internet Explorer, Chrome, and Firefox can receive up to 10 megabytes of data.


- Passing an object into localStorage

```
   const staffData = {
     name: "Fredrik Clay",
     designation: "Software Engineer",
     Age: 40,
     Hobby: "Golfing",
   }

   localStorage.setItem("staffData", staffData);
   console.log(localStorage.getItem("staffData"))  

```
When you store an object directly into the local storage, it shows `[object object]`. 

![image](set_object_no_string.png)

For you to successfully place an object into the local storage, you need to turn it into a string using the JSON.stringify method.


```
    const staffData = {
    name: "Fredrik Clay",
    designation: "Software Engineer",
    Age: 40,
    Hobby: "Golfing",
  }

  localStorage.setItem("staffData", JSON.stringify(staffData));
  
  console.log(localStorage.getItem("staffData"))
```
![image](set_object_stringify.png)

After stringifying, you now have a JSON string. To convert the JSON string back to an object, use the JSON.parse method. A better way for you to picture JSON.parse is as a data exchanger. 

```
  let staffDataUpdated = localStorage.getItem("staffData")
  
  console.log(JSON.parse(staffDataUpdated))
```

![image](parse_object.png)


### Local Storage API Methods
Browsers declare the global objects  on the window.

```
    window.localStorage
```
When you type `window.localStorage` inside the console, It should give you all the items inside the local storage and the length of the storage.

![Image](window_localstorage.png)

- Writing to local storage

The method `localStorage.setItem` allows you to write to the local storage. You will be required to use the key-value pair combination like you have already learned. 

`Syntax`

```
  localStorage.setItem("key", value)

```

```
localStorage.setItem(2, "His second name is John")

```
If you check the storage, you should see key `2` with value of `His second name is John`

![Image](ls-set.png)


<br>


- Getting items from the local storage

For you to read the local storage using the `key`, you need the `getItem` method. 

` syntax`

```
  localStorage.getItem(key)

```

```
  localStorage.setItem('version', 12);
  
  console.log(localStorage.getItem("version"))

```
when you check the console, you should see `12`

![image](get_set.png)

![image](get_console.png)

Trying to get an item that has not been set into the local storage will return `null`. For example,there is no set item with the key `variety`. Hence in the console, you have `null`.


```
  console.log(localStorage.getItem("variety"))
```
![image](console_null.png)

- Removing an item from the local storage.

To remove an item from the local storage window, all you need to do is have the key of the item inserted into the simple method below.

`syntax`
```
  localStorage.removeItem(key)
```

```
  localStorage.setItem('version', 12);
```
![image](remove_item_ls.png)

```
    localStorage.removeItem('version')

```
![image](removed.png)

- Clear Storage

This method removes all the key- value pairs you have initially set to the local storage window.

`syntax`

```
  localStorage.clear()
```

for example lets say you set this items into your storage

```
  localStorage.setItem("friendsName", "Micah")

  localStorage.setItem("studentsScore", 67)

```

To remove them from the storage

```
  localStorage.clear()

```
This is not a selective method like the `removeItem`. 

<br>

- Local storage length

To get the number of all items in the local storage section of the browser, use this method:

`syntax`

```
  localstorage.length();
```

```

  localStorage.setItem("friendsName", "Micah")

  localStorage.setItem("studentsScore", 67)

  console.log(localStorage.length)
  
```

![image](length_ls.png)

![image](length_console.png)

The number `2` is displayed on the console. That is the length of the local storage.

### The Data Model
Local storage adopts the [Associative Array Data model](https://en.wikipedia.org/wiki/Associative_array). In this key- value pair model, each key has to be unique and cannot be used more than once. For every repeated key, the succeeding key replaces the preceeding key. Consider this as an illustration:

```

    localStorage.setItem("color", "green")

    localStorage.setItem("color", "blue")

    localStorage.setItem("color", "red")

```

 -  You will see the key `color` gets the value of `red`, when you check the storage window. It didn't get green or blue.


 Another example

```
  localStorage.setItem("position", "Software Engineer")

  localStorage.setItem("position", "Senior Engineer")

  localStorage.setItem("position", "Chief Technical Officer")
```

Because `position` was used for all three entries, which violates the Associative Data Model, `position` will be used for only the last entries.

![image](data_model.png)

### Some Limitations of Local Storage
- Local storage is not suitable for storing sensitive data.
- To use other data types on localStorage, you need some JavaScript methods.
- Local storage can be used to track how often a user visits a page and also his activities which can be used for targeted avertisement.
  
### Wrapping Up
Now when building simple applications, you can use local storage. It will store data for offline and online access. But of course, local storage is not made for delicate data, so don't store delicate data inside local storage. With the help of the simple JavaScript API discussed, you can decide what to store and update at any time. While doing that, keep data models and types at the back of your mind to prevent replacing values. 