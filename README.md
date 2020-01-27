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

2.   

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

#### Link of reference 
[1] https://www.codecademy.com/articles/react-virtual-dom