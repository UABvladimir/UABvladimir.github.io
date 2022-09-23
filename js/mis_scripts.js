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
   document.getElementById("resuladoConvertidos").innerHTML = "<h1>El resultado es: </h1>"+parseFloat(convetir);
   //
}

function bolivianoDolar(){
    var numero = prompt("Ingrese Valor en Bolivianos");
    var convetir = numero / 6.98;
    document.getElementById("resuladoConvertidos").innerHTML = "<h1>El resultado es: </h1>"+parseFloat(convetir);
 }