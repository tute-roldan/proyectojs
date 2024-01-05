
let compraBuzo;
let compraRemera;
let compraGorra;
let compraMedias;
let totalBuzo;
let totalIva;


class Productos{
    constructor (modelo, color, talle, precio, cantidad){
        this.modelo = modelo;
        this.color = color;
        this.talle = talle;
        this.precio = precio;
        this.cantidad = cantidad;

    }
    sumaIva(){
        return this.precio *= 1.21;
        
    }
    vender(){
        this.cantidad -=1;
    }
}

const producto1 = new Productos("Buzo con capucha", "Rojo", "XL", 25000, 5);

const producto2 = new Productos("Buzo con capucha", "Verde", "M", 25000, 5);


const producto3 = new Productos("Remera", "Naranja", "S", 15000, 4);
const producto4 = new Productos("Remera", "Azul", "L", 15000, 4);


const producto5 = new Productos("Gorra", "Violeta", "universal", 8000, 8);
const producto6 = new Productos("Gorra", "Amarilla", "universal", 8000, 8);


const producto7 = new Productos("Medias", "Celestes", "universal", 2500, 6);
const producto8 = new Productos("Medias", "Rosas", "universal", 2500, 6);



let usuario =prompt("¡Bienvenido a Tienda PERAS! ¿como es tu nombre?")
let edad = parseInt(prompt("¡Hola!" + " " + `${usuario}` + " " + "¿Cuantos años tienes?")) 

let pedido = prompt(`${usuario}` + " " + "¿que producto desea comprar? Eliga un número: 1-Buzos // 2-Remeras // 3-Gorras // 4- Medias");

switch (pedido) {
    case "1":      
        alert(sumar("OPCION 1:", " ", JSON.stringify(producto1)));
        alert(sumar("OPCION 2:", " ", JSON.stringify(producto2)));
    
        
        compraBuzo = parseInt(prompt("Elija una opcion: 1:Buzo c/capucha Rojo // 2:Buzo c/capucha Verde "))
        if (compraBuzo == 1) {
        alert("¡Elegiste " + " " + JSON.stringify(producto1) + "!" ); 
        break;
        }
        if (compraBuzo == 2) {
        alert("¡Elegiste " + " " + JSON.stringify(producto2) + "!" );  
        break;
        }    
        else {
            alert("Error - Ingrese nuevamente");
            break; 
        }    
        
    case "2":      
        alert(sumar("OPCION 1:", " ", JSON.stringify(producto3)));
        alert(sumar("OPCION 2:", " ", JSON.stringify(producto4)));
    
        
        compraMedias = parseInt(prompt("Elija una opcion: 1: Remera Naranja // 2:Remera Azul "))
        if (compraMedias == 1) {
        alert("¡Elegiste" + " " + JSON.stringify(producto3) + "!" );
        break;
        }
        if (compraMedias == 2) {
        alert("¡Elegiste " + " " + JSON.stringify(producto4) + "!" ); 
        break;
        }    
        else {
            alert("Error - Ingrese nuevamente");
            break; 
        }             
    

    case "3":      
        alert(sumar("OPCION 1:", " ", JSON.stringify(producto5)));
        alert(sumar("OPCION 2:", " ", JSON.stringify(producto6)));
    
        
        compraGorra = parseInt(prompt("Elija una opcion: 1: Gorra Violeta  // 2: Gorra Amarilla "))
        if (compraGorra == 1) {
            alert("¡Elegiste " + " " + JSON.stringify(producto5) + "!" ); 
        break;
        }
        if (compraGorra == 2) {
            alert("¡Elegiste " + " " + JSON.stringify(producto6) + "!" );  
        break;
        }    
        else {
            alert("Error - Ingrese nuevamente");
            break; 
        } 
        
    case "4":      
        alert(sumar("OPCION 1:", " ", JSON.stringify(producto7)));
        alert(sumar("OPCION 2:", " ", JSON.stringify(producto8)));
    
        
        compraMedias = parseInt(prompt("Elija una opcion: 1: Medias Celestes // 2: Medias Rosas "))
        if (compraMedias == 1) {
        alert("¡Elegiste " + " " + JSON.stringify(producto7) + "!" ); 
        break;
        }
        if (compraMedias == 2) {
        alert("¡Elegiste " + " " + JSON.stringify(producto8) + "!" ); 
        break;
        }    
        else {
            alert("Error - Ingrese nuevamente");
            break; 
        }    




 }




    
   
    


let pago= parseInt(prompt("Ingrese una forma de pago:  1: Efectivo // 2: Tarjeta"));

if (pago == 1) {
    alert ("¡Muchas gracias por tu compra!" + 
    producto1.modelo);      
}
if(pago == 2){
    totalIva = producto1.sumaIva()
    alert ("Te queda a un valor de " + " " + totalIva + " hasta 12 cuotas");
    alert ("¡Muchas gracias por tu compra!" + 
    producto1.modelo + " "  + " " + producto1.talle);         
}

















        
        
        function sumar(num1, num2, num3) {
            return num1 + num2 + num3;
        };
        
        function restar(num1, num2) {
            return num1 - num2;
        };
        
        function dividir(num1, num2) {
            return num1 / num2;
        };
        
        function Multiplicar(num1, num2) {
            return num1 * num2;
        };