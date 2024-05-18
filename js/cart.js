


let cupon1 = "10%OFF";
let cupon2 = "15%OFF";
let cupon3 = "20%OFF";

let descuentoPorcentaje = 0;


let removeEl = document.getElementsByClassName("button-remove");
for(let i = 0; i<removeEl.length; i++){
    removeEl[i].addEventListener("click", event => { 
        let row = event.target.closest("tr");
        row.remove();
    })
}
console.log(removeEl)


function checkDescuento(cupon){
    switch (cupon) {
        case "10%OFF":
            return 0.1;
        case "15%OFF":
            return 0.15;
        case "20%OFF":
            return 0.2;
        default:
           return 0;

    }
}


let updateButton = document.getElementById("button-update");
let discountButton = document.getElementById("button-cupon");
discountButton.addEventListener("click", discount);
updateButton.addEventListener("click", update);
update();

function discount(){
    let inputCupon = document.getElementById("input-cupon");
    descuentoPorcentaje = checkDescuento(inputCupon.value);
    if(descuentoPorcentaje == 0){
        alert("Codigo Cupon Incorrecto - CUPONES: 10%OFF - 15%OFF - 20%OFF") ;
    }
    else{
        alert("Codigo Cupon aplicado");
    }
    update();

}   

function update(){

    
    

    let precios = [];
    let preciosElement = document.getElementsByClassName("precio")
    for (item of preciosElement){
        precios.push((Number(item.innerText)))

    }
    let cantidades = [];
    let cantidadesElement = document.getElementsByClassName("cantidad")
    for (item of cantidadesElement){
        cantidades.push((Number(item.value)))
    }

    let subtotales = [];
    for(let i=0; i<precios.length; i++){
        console.log(precios[i]);
        console.log(cantidades[i]);
        subtotales.push((Number(precios[i]*cantidades[i])));
    }


    let subtotal = 0;
    let subtotals = document.getElementsByClassName("subtotal");
    for(let i=0; i<subtotales.length; i++){
        subtotals[i].innerText = subtotales[i];
        subtotal = subtotal + subtotales[i];
    }

    let subtotalElement = document.getElementById("subtotal")
    subtotalElement.innerText = subtotal;
    let total = document.getElementById("total");
    let descuento = document.getElementById("descuento");
    descuentoMonto = subtotal*descuentoPorcentaje;
    descuento.innerText = descuentoMonto;
    total.innerText = subtotal - descuentoMonto;

}