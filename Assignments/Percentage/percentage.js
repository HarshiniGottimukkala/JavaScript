let percentage = (num) => {

    if((num >= 40) && (num <= 50)){
        console.log("Buy a pen.")
    }
    else if((num > 50) && (num <= 60)){
        console.log("Buy a Book.")
    }
    else if((num > 60) && (num <= 70)){
        console.log("Buy a Bag.")
    }
    else if((num > 70) && (num <= 80)){
        console.log("Buy a Mobile.")
    }
    else if((num > 80) && (num <= 90)){
        console.log("Buy a Laptop.")
    }
    else if((num > 90) && (num <= 100)){
        console.log("Buy a Iphone.")
    }
    else{
        console.log("Not buy anything.")
    }
}

percentage(88);