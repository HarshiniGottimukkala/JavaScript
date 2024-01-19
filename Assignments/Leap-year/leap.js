let find = (year) => {
    if((year % 4 === 0) && (year % 100 ===0) && (year % 400 === 0)){
        console.log(`${year} is Leap year`)
    }else{
        console.log(`${year} is not Leap year`)
    }
}
find(2024);
find(2000);
find(1700);
find(1800);
find(1900);
find(1600);