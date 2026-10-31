function calcular (){

    let nota1 =Number(document.getElementById("nota1").value);
    let nota2 =Number(document.getElementById("nota2").value);
    let nota3 =Number(document.getElementById("nota3").value);

    let promedio =(nota1+nota2+nota3)/3;

    document.getElementById("promedio").value =promedio.toFixed(1);

}