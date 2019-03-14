function calculadora(valorA, valorB, op){
	if (op === '-'){
		return valorA - valorB;}
	else if (op === '/'){
		return valorA / valorB;}
	else if  (op === '+'){
		return valorA + valorB;}

}


function numeros()
	{
		  var numero1 = parseFloat(document.calculadora.fname.value);
		  var numero2 = parseFloat(document.calculadora.lname.value);
		  var operacao = (document.calculadora.operacao.value);
		
		  var resultado = calculadora(numero1, numero2, operacao);

		  document.calculadora.result.value = resultado;

	      return resultado;
	}