

function calcularTarifa(){
   var ingresado=(document.getElementById('valorIngresado').value);
var tarifa=0;
var iva=19/100;
var total_Iva=tarifa*iva;
   if(ingresado<58000000){
       tarifa=3492568;
  
}if(ingresado>=58000000 && ingresado<=76077167){
    tarifa=4884654;
   
    }if(ingresado>=76077168 && ingresado<=95096269){
    tarifa=6307144;
   
}if(ingresado>=95096270 && ingresado<=114115751){
    tarifa=7729634;
    
}
if(ingresado>=114115752 && ingresado<=133134853){
    tarifa=9152503;
    
}
if(ingresado>=133134854 && ingresado<=152154335){



    tarifa=10574993;
}
if(ingresado>=152154336 && ingresado<=171173436){

    tarifa=11997863;
}
if(ingresado>=171173436&& ingresado<=190192918){

    tarifa=13420353;
}
if(ingresado>=190192919 && ingresado<=209212020){


    tarifa=14842842;
}
if(ingresado>=209212021 && ingresado<=228231502 ){



    tarifa=16265712;
}
if(ingresado>=228231503&& ingresado<=247250604 ){

           tarifa=17688202;
}
if(ingresado>=247250605 && ingresado<=266270085 ){


    tarifa=19111071;
}
if(ingresado>=266270086 && ingresado<=285289187){


    tarifa=20533561;
}
if(ingresado>=285289188 && ingresado<=304308669){



    tarifa=21956051;
}
if(ingresado>=304308670&& ingresado<=323327771){




    tarifa=23378921;
}
if(ingresado>=323327772  && ingresado<=342347253 ){





    tarifa=24801410;
}
if(ingresado>= 342347254&& ingresado<=361366355){






    tarifa=26224280;
}
if(ingresado>=361366356 && ingresado<=380385836){








    tarifa=27646770;
}
if(ingresado>=380385837){








    tarifa=28500000;

}
//organizando el codigo
total_Iva = tarifa * iva;
var total_IvaR = total_Iva.toFixed();
	var valorTotal = parseFloat(tarifa) + parseFloat(total_Iva);
	var valorTotalR = valorTotal.toFixed();

var contenedorResultado = document.getElementById("resultado");

	// Creando etiqueta <p> #1
	var resultado1 = document.createElement('p');
	resultado1.innerText = "La tarifa en pesos es:$" + tarifa; // Agregando texto
	
	// Creando etiqueta <p> #2
	var resultado2 = document.createElement('p');
	resultado2.innerText = "Su valor con IVA es:$" + total_IvaR; // Agregando texto
	
	// Creando etiqueta <p> #3
	var resultado3 = document.createElement('p');
	resultado3.innerText = "Su valor total a pagar es:$" + valorTotalR; // Agregando texto

	// Agregando colores a etiquetas <p>
	resultado1.style.color = '#0d47a1';
	resultado2.style.color = '#0d47a1';
	resultado3.style.color = '#0d47a1';

	// Reseteando contenido del resultado 
	contenedorResultado.innerHTML = '';

	// Agregando etiquetas <p> al contenedor del resultado
	contenedorResultado.append(resultado1);
	contenedorResultado.append(resultado2);
	contenedorResultado.append(resultado3);

}

function tama() {
	getElementById("size").style.fontSize = "100px";
}




/*document.write("La tarifa en pesos es:$"+tarifa+'<br></br>');

total_Iva=tarifa*iva;
var  total_IvaR=total_Iva.toFixed();
document.write("Su valor  con IVA es:$"+total_IvaR+'<br></br>');
var valorTotal=parseFloat(tarifa)+parseFloat(total_Iva);
var  valorTotalR=valorTotal.toFixed();
document.write("Su valor  total a pagar  es:$"+valorTotalR+'<br></br>');*/
