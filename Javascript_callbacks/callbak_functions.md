# Asynchronous Javascript using Callbacks

## Table of content
- Synchronous nature of Javascript
- Working Asynchronously with Javascript
- SetTimeout
- Callbacks in JS

 
 Developers use a wide range of programming languages. Even if there may be some parallels between these languages, each one is distinct in its own right and frequently well-suited to a particular class of issues. One such language is Javascript, which is primarily employed for creating web applications. Javascrip  ranks as the top technology  for software development.   Javascript can be employed in creating client-side and server side applications. Lets explore asynchronous javascript using callbacks



## Synchronous nature of Javascript

Javascript is a synchronous programming language with only one thread, the main thread. Synchronous refers to the fact that it executes or follows instructions one line at a time. In your browser, actions are carried out in the main thread.  Consider running the codes below.

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
 

 This is what you will get in the console.

 letter A
 letter B
 letter C

 ```


The browser reads the code above one line at a time. All these functions are runing on the main thread. As advantageous as this may sound, there are drawbacks because some operations, such as obtaining user data or collecting data from a server, may take longer to complete.

The idea of asynchronicity was developed to overcome this blocking difficulty.


## Asynchronous Javascript
Javascript may execute multiple operations concurrently without obstructing other operations,  thanks to asynchronous functionality!  The environment we run our javascript program enables us to carryout asynchronous tasks. The environment here is our browser and it gives us access to many different web APIs. Javascript is now able to perform tasks that were previously impossible because of these robust web APIs. You have probably encountered some of these APIs, such as the extremely popular Document Object Model that we use to modify our web pages, the fetch that allows us to access APIs, and the SetTimeout. Surprised? 

## SetTimeout
We will utilize the setTimeout method more often while thinking about the idea of asynchronicity. This method calls a javascript function or runs our code after a predetermined amount of time has passed.

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


What occurs if the delay is 0? Let's find out!

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

Even though the above code's delay is zero, the function is still delayed. This is due to the fact that setTimeout transfers control of the function to the browser regardless of the value. With this operation, the function is removed from the main thread and then put back in.
```
    //synchronous1
    //synchronous1
    //synchronous4
    //synchronous3
``` 


Callback functions
JavaScript functions are frequently referred to as "first class citizens," suggesting that we can perform special operations on them, such as passing them to other functions.
Functions that are passed as arguments into another function are referred to as callback functions. That indicates that the given function won't execute until the host function carrying it has finished running. There is no need for a parenthesis when this type of function is passed into another function; only the function name will do.



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
 
 
 


We will still be able to maintain synchronous structure without any code being blocked. As you can see, we were able to wait for the third function to complete before performing the code that follows it.

If you run this code, you should get something like this.
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

Consider the block of code above with setTimeouts nested within setTimeout; as nesting increases, readability declines even though the code still functions. This situation is referred to as "callback hell". 



We have seen how callbacks operate and how to make them quickly. We will discuss Promises and Async Await in the article that follows.
