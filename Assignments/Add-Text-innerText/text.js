


let heading = document.querySelector("h1");

heading.innerHTML="Hello World!";

heading.style.cssText = "color:green";


let heading2 = document.createElement('h2')

heading2.innerHTML = "Hi...."


let parent = document.querySelector(".parent");

parent.appendChild(heading2);

let heading3 = document.querySelector("h3")




let para = document.querySelector('p');

para.classList.add("para")

console.log(para)


para.classList.remove("para")

/* para.style.cssText = "background-color:green" */

let button = document.querySelector(".button")

button.addEventListener('click',()=>{
   
    para.classList.toggle("para")
})
