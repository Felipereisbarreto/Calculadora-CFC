function calculadora(valorA, valorB, op){
	if (op === '-'){
		return valorA - valorB;}
	else if (op === '/'){
		return valorA / valorB;}
	else if  (op === '+'){
		return valorA + valorB;}
		else if (op === '*'){
			return valorA * valorB;}
			else if (op === '%'){
			return  (valorA * valorB)/100;}

		else if  (op === 'raiz'){
		return Math.pow(document.calculadora.fname.value, 0.5);}
		}
var listahistorico = [];
function numeros(){
		  var numero1 = parseFloat(document.calculadora.fname.value);
		  var numero2 = parseFloat(document.calculadora.lname.value);
		  var operacao = (document.calculadora.operacao.value);
		  var calc = (document.calculadora.operacao.value);	
		  var resultado = calculadora(numero1, numero2, operacao);
		  document.calculadora.result.value = resultado;
		  document.calculadora.resul2.value = resultado;
		  

			
	if (operacao == 'raiz'){
document.calculadora.resul2.value = "A Raiz Quadrada de " + numero1 + " É = " + resultado;   
historico("A Raiz Quadrada de " + numero1 + " É = " + resultado);   
}
	else{
document.calculadora.resul2.value = numero1 + operacao + numero2 + " = " + resultado;
historico(numero1 + operacao + numero2 + " = " + resultado + "  ");	  	 
}
	if (isNaN(numero1) === true){
alert("Insira um numero valido");
}
	else if (operacao == 'raiz'){
alert("Calculo Raiz Quadrada");
}
	else if (isNaN(numero2) === true){
alert("Insira um numero valido");
}
	else if (operacao == false){
alert("Insira a operacao");
}
	 else if (operacao == 'raiz'){
alert("Calculo Raiz Quadrada");      
}
}