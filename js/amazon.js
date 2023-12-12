let calificacion1 = document.getElementById("calificacion1");
let calificacion2 = document.getElementById("calificacion2");
let calificacion3 = document.getElementById("calificacion3");
let calificacion4 = document.getElementById("calificacion4");
let calificacion5 = document.getElementById("calificacion5");
let btngraficar = document.getElementById("btngraficar");

let spanProm1 = document.getElementById("promedio1");
let spanProm2 = document.getElementById("promedio2");
let spanProm3 = document.getElementById("promedio3");
let spanProm4 = document.getElementById("promedio4");
let spanProm5 = document.getElementById("promedio5");

btngraficar.addEventListener("click", function(){
    let sumaClificacion = (Number(calificacion1.value)+Number(calificacion2.value)+Number(calificacion3.value)+Number(calificacion4.value)+Number(calificacion5.value));

    //promedio

    let promedio1 = Math.round(parseFloat(calificacion1.value/sumaClificacion)*100);
let promedio2 = Math.round(parseFloat(calificacion2.value/sumaClificacion)*100); 
let promedio3 = Math.round(parseFloat(calificacion3.value/sumaClificacion)*100);
let promedio4 = Math.round(parseFloat(calificacion4.value/sumaClificacion)*100);
let promedio5 = Math.round(parseFloat(calificacion5.value/sumaClificacion)*100);

spanProm1.innerHTML=promedio1
spanProm2.innerHTML=promedio2
spanProm3.innerHTML=promedio3
spanProm4.innerHTML=promedio4
spanProm5.innerHTML=promedio5

});