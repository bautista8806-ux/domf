function sumar (){
    //declarar las variables num1, num2

    let num1 =Number(document.getElementById("num1").value);
    let num2 =Number(document.getElementById("num2").value);

    //mostrar resultado en el input con el id resultado1
    document.getElementById("resultado1").value =num1+num2;
}

function restar (){
    //declarar las variables num1, num2

    let num1 =Number(document.getElementById("num1").value);
    let num2 =Number(document.getElementById("num2").value);

    //mostrar resultado en el input con el id resultado1
    document.getElementById("resultado1").value =num1-num2;
}
function multi (){
    //declarar las variables num1, num2

    let num1 =Number(document.getElementById("num1").value);
    let num2 =Number(document.getElementById("num2").value);

    //mostrar resultado en el input con el id resultado1
    document.getElementById("resultado1").value =num1*num2;
}

function divi (){
    //declarar las variables num1, num2

    let num1 =Number(document.getElementById("num1").value);
    let num2 =Number(document.getElementById("num2").value);

    //mostrar resultado en el input con el id resultado1
    document.getElementById("resultado1").value =num1/num2;
}