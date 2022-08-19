//Tengo un emprendimiento de venta de cervezas artesanales. 
//Precios: Golden = 120 / IPA = 115 / Block = 160



//	var cantidad,precio,desc,compra,pagar;

//precio = parseFloat(prompt("Que cerveza queres ? Ingresa el precio para conocer el descuento por cantidad"));
//cantidad = parseFloat(prompt("Ingresar cantidad"));



//compra = precio * cantidad;
//desc = compra * 0.15;
//pagar = compra - desc;

//document.write("El descuento es: " + desc);
const cervezas = [
    { nombre: "IPA", precio: 115 },
    { nombre: "Golden", precio: 120 },
    { nombre: "Block", precio: 160 },
    { nombre: "Kaiser", precio: 200 },
];

let changuito = []

let seleccion = prompt("Bienvenido a South Beers, quieres comprar alguna de nuestras cervezas si o no")

while (seleccion != "si" && seleccion != "no") {
    alert("por favor ingrese si o no")
    seleccion = prompt("Bienvenido a South Beers, quieres comprar alguna de nuestras cervezas si o no")
}

if (seleccion == "si") {
    alert("Nuestras cervezas son")
    let todaslasCervezas = cervezas.map((cerveza) => cerveza.nombre + " " + cerveza.precio + "$");
    alert(todaslasCervezas.join(" - "))

} else if (seleccion == "no") {
    alert("Gracias por visitarnos, nos vemos!!")
}

while (seleccion != "no") {
    let cerveza = prompt("Agrega una  cerveza a tu changuito")
    let precio = 0

    if (cerveza == "IPA" || cerveza == "Golden" || cerveza == "Block" || cerveza == "Kaiser") {
        switch (cerveza) {
            case "IPA":
                precio = 115;
                break;
            case "Golden":
                precio = 120;
                break;
            case "Block":
                precio = 160;
                break;
            case "Kaiser":
                precio = 200;
                break;
            default:
                break
        }
        let unidades = parseInt(prompt("Cuantas quiere comprar"))

        changuito.push({ cerveza, cantidad, precio })
        console.log(changuito)
    } else {
        alert("no tenemos stock de esa cerveza")
    }
    seleccion = prompt("Queres agregar mas?")

    while (seleccion === "no") {
        alert("Gracias por tu compra")
        changuito.forEach((changuitoFinal) => {
            console.log(`cerveza: ${changuitoFinal.cerveza}, unidades: ${changuito.unidades}, total a pagar ${changuitoFinal.unidades * changuitoFinal.precio}`)
        })

        break;
    }

}

const total = changuito.reduce((ecc, el) => acc + el.precio * el.unidades, 0)
console.log(`el monto total a pagar es: ${total}`)