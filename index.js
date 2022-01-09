function square (widthRectangle, heightRectangle) {
    result = widthRectangle * heightRectangle;
    console.log(result);
    return result;
}

square (5, 6);

function circumference (diameter) {
    const PI = 3.14;
    result = PI * diameter;
    console.log(result);
    return result;
}

circumference (43);

function vCylinder (height, diameter) {
    const PI = 3.14;
    result = PI * ((diameter / 2) * (diameter / 2)) * height;
    console.log(result);
    return result;
}

vCylinder (10, 5);



function converter () {
    const doll = 27.4;
    let nom = +prompt('enter the denomination');

    if(isNaN(nom)){
        alert('enter correct value');
        return;
    } 

    let curr = prompt('enter the desired currency: $ or UAH');
    if(curr === '$' || curr === 'UAH'){      
    } else {
        alert('please enter the correct currency');
    }
        switch(curr) {
            case '$':
                result = nom * doll;
                alert(result);
                break;
            case 'UAH':
                result = nom / doll;
                alert(result);
                break;
        }
        return result;
}

function delitel(a, b) {

    for (let i = a; i <= b; i++) {
        if(i % 5 === 0){
            console.log(i);
        }
    }
}

delitel(4, 30);


function fizzBazz (){

    for (let i = 1; i <= 100; ++i) {
        if(i % 3 === 0 && i % 5 === 0){
            console.log('FizzBuzz');
        } else if(i % 3 === 0){
            console.log('Fizz');           
        } else if(i % 5 === 0) {
            console.log('Buzz');
        } else {
            console.log(i);

        }
    }
}

