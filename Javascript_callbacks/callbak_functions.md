# Introduction to Asynchronous Javascript using Callbacks

## Table of content
- Synchronous nature of javascript
- Working Asynchronously with Javascript
- SetTimeout
- Callbacks in JS
- Limitations associated with Callbacks

Developers employ a wide range of programming languages in the industry. Even if there may be some parallels between these languages, each one is distinct in its own right and frequently well suited to a particular class of issues. One such language is Javascript, which is primarily employed for creating web applications. Javascript, which is ranked as the top technology for software development, is simple to learn and can be used to create client-side and server-side apps. Asynchronous Javascript is a crucial topic that will be covered in this post and will aid you in your quest to become a javascript expert.

## The Synchronous nature of Javascript

As a synchronous programming language, Javascript only has one thread, referred to as the main thread. Synchronous refers to the fact that it executes or follows instructions one line at a time. In your browser, actions are carried out in the main thread.  Consider running the codes below.

```
    function a () {
        console.log("letter A")
    }
    
    
    function b () {
        console.log("letter B")
    }
    
    
    function c () {
        console.log("letter C")
    }
    
    a()
    b()
    c()
 

 This is what you will get in the console

 letter A
 letter B
 letter C

 ```


The browser reads the code above one line at a time, with these functions running on the main thread. As advantageous as this may sound, there are drawbacks because some operations, such as obtaining user data or collecting data from a server, may take longer to complete.

The idea of asynchronicity was developed to overcome this blocking difficulty.


## Asynchronous Javascript
Javascript may execute multiple operations concurrently without obstructing other operations thanks to asynchronous functionality. We can work asynchronously because of the environment that Javascript is run in. Do not be alarmed; we just refer to our browser when we talk about the environment. We have access to many different web APIs via the browser. Javascript is now able to perform tasks that were previously impossible because to these robust web APIs. You have probably encountered some of these APIs, such as the extremely popular DOM that we use to modify our web pages, the fetch that allows us to access APIs, and the SetTimeout. Surprised? 

## SetTimeout
We'll utilize the setTimeout method more often while thinking about the idea of asynchronicity. This method calls a java script function or runs code after a predetermined amount of time has passed.

setTimeout(code, delay)

The delay is the amount of time in milliseconds, and the code input could be a function.



``` 
    function howSynchronousBehaves1() {
        console.log('synchronous1')
    }
    
    
    function howSynchronousBehaves2() {
        console.log('synchronous2')
    }
    
    
    function howSynchronousBehaves3() {
        setTimeout(()=> console.log('synchronous 3'), 3000)
        //console.log('As the third function, I had no choice but to come third')
    }
    
    
    function howSynchronousBehaves4() {
        console.log('Synchronous4')
    }
    
    howSynchronousBehaves1()
    howSynchronousBehaves2()
    howSynchronousBehaves3()
    howSynchronousBehaves4()
```

In the console, the code above will be executed in  the specified sequence.
```
    //synchronous1
    //synchronous1
    //synchronous4
    //synchronous3
 ```


What occurs if I set the setTimeout delay to 0? Let's find out!

```    
    function howSynchronousBehaves1() {
        console.log('synchronous1')
    }
    
    
    function howSynchronousBehaves2() {
        console.log('synchronous2')
    }
 
 
    function howSynchronousBehaves3() {
        setTimeout(()=> console.log('synchronous 3'),0)
        //console.log('As the third function, I had no choice but to come third')
    }
    
    
    function howSynchronousBehaves4() {
        console.log('Synchronous4')
    }
    
    howSynchronousBehaves1()
    howSynchronousBehaves2()
    howSynchronousBehaves3()
    howSynchronousBehaves4()
```

Even though the above code's setTimeout is zero, the function is still delayed. This is due to the fact that setTimeout transfers control of the function to the browser regardless of the value. With this operation, the function is removed from the main thread and then put back in.
```
    //synchronous1
    //synchronous1
    //synchronous4
    //synchronous3
``` 


Callback functions
JavaScript functions are frequently referred to as "first class citizens," suggesting that we can perform special operations on them, such as passing them to other functions.
Functions that are passed as arguments into another function are referred to as callback functions. That indicates that the given function won't start up until the host function carrying it has finished running. There is no need for a parenthesis when this type of function is sent into another function; only the function name will do.



``` 
    function howSynchronousBehaves1() {
        console.log('synchronous1')
    }
    
    
    function howSynchronousBehaves2() {
        console.log('synchronous2')
    }
    
    
    function howSynchronousBehaves3(callback) {
        setTimeout(() => {
            console.log("Synchronous3")
            callback()
        }, 5000)
    }
```   
 
 
function howSynchronousBehaves4() {
    console.log('Synchronous4')
}
 
howSynchronousBehaves1()
howSynchronousBehaves2()
howSynchronousBehaves3(howSynchronousBehaves4)
 
 
 


Here we will still be able to maintain synchronous structure without blocking any code. With this you can see that we were able to wait for the third function to run before executing the function that comes after it.

If you run this code, the result you should get should look like this

```
    Synchronous1
    Synchronous2
    Synchronous3
    Synchronous4
 ```




``` 
    function howSynchronousBehaves1() {
        setTimeout(() => {
            console.log("synchronous1")
            setTimeout(()=> {
                console.log("synchronous2")
                setTimeout(()=> {
                    console.log("synchronous3")
                    setTimeout(()=> {
                        console.log("synchronous4")
                    }, 5000)
                }, 7000)
            }, 9000)
        }, 11000)
    }
    howSynchronousBehaves1()
```

Consider a block of code with setTimeouts nested within setTimeout; as the nesting increases, readability declines even though the code still functions. This situation is referred to as "callback hell."
