function iniciar_sesion() {
	var  nombre = document.getElementById("usuario").value;
	if(nombre != ""){
		//document.getElementById("demo").innerHTML = "Bienvenido(a) "+ nombre;
        alert("Bienvenido(a) "+ nombre);
	}
	else{
		document.getElementById("demo").innerHTML = "Error , debe ingresar su nombre ";
	}
}

function dolarBoliviano(){
   var numero = prompt("Ingrese Valor en Dolar");
   var convetir = numero * 6.98;   
   document.getElementById("resuladoConvertidos").innerHTML = "<h3>El resultado es: </h3>"+"<h1>"+parseFloat(convetir.toFixed(2))+" Bs.</h1>";
   //
}

function bolivianoDolar(){
    var numero = prompt("Ingrese Valor en Bolivianos");
    var convetir = numero / 6.98;    
    document.getElementById("resuladoConvertidos").innerHTML = "<h3>El resultado es: </h3>"+"<h1>"+parseFloat(convetir.toFixed(2))+" $.</h1>";
 }