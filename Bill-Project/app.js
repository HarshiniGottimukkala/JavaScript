let navSlide = () => {
    const navbar = document.querySelector(".navbar");
    const menu = document.querySelector(".links");
    const burger = document.querySelector(".burger");

    burger.addEventListener("click", () => {
        menu.classList.toggle("nav-active");
        burger.classList.toggle("toggle")
    })

}

navSlide();

let productdetails = document.querySelector(".productdetails");

productdetails.addEventListener("submit", (e) => {
    e.preventDefault();


    let products = document.querySelector('.products');
    let result = document.createElement('div');
    products.appendChild(result);

    let firstName = document.querySelector(".fname").value;
    let lastName = document.querySelector(".lname").value;
    let eMail = document.querySelector(".mail").value;
    let phone = document.querySelector(".mobile").value;
    let place = document.querySelector(".area").value;

    let item1 = document.querySelector('.item1').value;
    let product1 = parseInt(item1);

    let item2 = document.querySelector('.item2').value;
    let product2 = parseInt(item2);

    let item3 = document.querySelector('.item3').value;
    let product3 = parseInt(item3);

    let item4 = document.querySelector('.item4').value;
    let product4 = parseInt(item4);

    if (firstName != '' && lastName != '' && eMail != '' && phone != '' && place != '' && item1 !== '' && item2 !== '' && item3 !== '' && item4 != '') {


        let para1 = document.createElement("p");
        para1.innerHTML = `Name : ${firstName +' '+ lastName}`;
        result.appendChild(para1);

        let para2 = document.createElement("p");
        para2.innerHTML = `Email : ${eMail}`;
        result.appendChild(para2);

        let para3 = document.createElement("p");
        para3.innerHTML = `Phone : ${phone}`;
        result.appendChild(para3);

        let para4 = document.createElement("p");
        para4.innerHTML = `Place : ${place}`;
        result.appendChild(para4);

        let heading3 = document.createElement("p");
        heading3.innerHTML = `Total Amount : ${ product1 + product2 + product3 + product4 }`;
        result.appendChild(heading3);

        let finalPayment = Math.ceil((product1 + product2 + product3 + product4) * 1.18)

        result.classList.add("result");
     

        let child = document.createElement("h3");
        child.innerHTML = ` Total bill with 18% GST is ${finalPayment}`;
        result.appendChild(child);

        

    }
    else {
        alert("please fill the form");
    }


});



