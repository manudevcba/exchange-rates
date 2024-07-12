

// key = "ca1f64be6b00014dc4bf44a1";
const apiDolar = "https://v6.exchangerate-api.com/v6/ca1f64be6b00014dc4bf44a1/latest/USD"



fetch(apiDolar)
 .then(response => response.json())
 .then(response => {
     
        Object.keys(response.conversion_rates).forEach(moneda => {
         $("#lista").append($(`<li> ${moneda}: ${response.conversion_rates[moneda]} </li> `))
            });
        const valorARSUSD = response.conversion_rates.ARS;
        console.log(valorARSUSD);
        console.log(response);      
        console.log(response.conversion_rates);
        
        function calcularTotal(valorARSUSD){ 
            const dolares = document.querySelector("#monto").value;
            const resultado = document.querySelector("#resultado");
            const resultadoTotal = valorARSUSD * dolares;
            resultado.textContent = `el resultado es ARS$${resultadoTotal}`;

            console.log(resultadoTotal);

            return false;
        }        
        const form = document.querySelector("#formulario");
        form.addEventListener("submit", event => {
            event.preventDefault();
            calcularTotal(valorARSUSD);
        
       
    })
    
 })
 .catch(error => console.error("FALLO",error));
