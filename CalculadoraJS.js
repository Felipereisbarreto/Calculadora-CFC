function calculadora(valorA, valorB, op){
	if (op === '-'){
		return valorA - valorB;}
	else if (op === '/'){
		return valorA / valorB;}
	else if  (op === '+'){
		return valorA + valorB;}
		else if  (op === 'raiz'){
		return Math.pow(document.calculadora.fname.value, 0.5);}
		}


function numeros()
	
	{
		  var numero1 = parseFloat(document.calculadora.fname.value);
		  var numero2 = parseFloat(document.calculadora.lname.value);
		  var operacao = (document.calculadora.operacao.value);
		  var calc = (document.calculadora.operacao.value)

		 		
		  var resultado = calculadora(numero1, numero2, operacao);

		  document.calculadora.result.value = resultado;
			
			
		if (isNaN(numero1) === true){
	alert("Insira o valor 1");
}
else if (operacao == 'raiz'){
 alert("Calculo Raiz Quadrada");}

else if (isNaN(numero2) === true){
 alert("Insira o valor 2");
}

else if (operacao == false){
 alert("Insira a operacao");
}
 else if (operacao == 'raiz'){
 alert("Cálculo Raiz Quadrada");

	      
	}



}
		
