# E-commerceReact

E-commerce with React from the Complete React Developer in 2020  

# **Notes**

In this Readme you will find some of the notes that i take it in the React course.

## React key Principles

1.  Don't touch the Dom, i will do it
   
    DOM (Document Object Modal) it's what the browser use to display the website. change the DOM is one of the biggest perfomance bottelnecks. so instead of you change the DOM, React make a representation of a DOM object, like a lightweight copy.
    
    The virtual DOM object has the same properties as a real DOM object. And based of this blueprint that we give it, React just say : 'Hey just tell me what the page should look like and I'll take care of it'.

    [1] In summary, here’s what happens when you try to update the DOM in React:

    1. The entire virtual DOM gets updated.
    2. The virtual DOM gets compared to what it looked like before you updated it. React  figures out which objects have changed.
    3. The changed objects, and the changed objects only, get updated on the real DOM.
    4. Changes on the real DOM cause the screen to change.

  

## React Developer has to:

* Decide on Componentes
* Decide the state and where it lives 
* What changes when the state changes 

Through the course i will try to implement the things i alredy know of React.

for example:

 ### Section 4 - Setting Up E-commerce

 1. I am implementing Funcional components with Hooks instead of  Class components.
 2. I will use the **UseEffect's** Hook to simulate the call of a Api.
    
 ### Section 5 - Router & Routing

 Instead of Using React Router, i'm using his alternative Reach Router.

 ### Sections 6 - Master Components

    For the Sign In Component, i used the idea of this article to create a custom component,that leave me work with so many inputs as i want for differents forms
    [2]`
    import { useState } from 'react'

    export const useInputChange = () => {
        const [input, setInput] = useState({})

        const handleInputChange = (e) => setInput({
            ...input,
            [e.currentTarget.name]: e.currentTarget.value
        })

        return [input, handleInputChange]
    }`


    Thunks

    it;s a function that returns a fuction that gets dispatch in it.

## ...I will comaback and finish my notes later  
### SECTIONS  16
#### Link of reference 
[1] https://www.codecademy.com/articles/react-virtual-dom
[2] https://dev.to/stanleyjovel/simplify-controlled-components-with-react-hooks-23nn