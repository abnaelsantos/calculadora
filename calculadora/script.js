
// Somar
const somar = document.querySelector('#soma');
somar.addEventListener('click', () =>{
    const number = document.querySelector('#num1').value;
    const number2 = document.querySelector('#num2').value;
    const soma = parseInt(number) + parseInt(number2);
    

    const resultado = document.querySelector('#result');
    resultado.textContent = `${soma}`;
    
});

// Divisão
const dividir = document.querySelector('#divisao');
dividir.addEventListener('click', () =>{
    const number = document.querySelector('#num1').value;
    const number2 = document.querySelector('#num2').value;
    const divisao = parseInt(number) / parseInt(number2);
    const Redivisao = divisao.toFixed(2);

    const resultado = document.querySelector('#result');
    resultado.textContent = `${Redivisao}`;
    
});

// Subtração
const subtrair = document.querySelector('#subtracao');
subtrair.addEventListener('click', () =>{
    const number = document.querySelector('#num1').value;
    const number2 = document.querySelector('#num2').value;
    const subtracao = parseInt(number) - parseInt(number2);
    

    const resultado = document.querySelector('#result');
    resultado.textContent = `${subtracao}`;
    
});

// Multiplicação
const multiplicar = document.querySelector('#mult');
multiplicar.addEventListener('click', () =>{
    const number = document.querySelector('#num1').value;
    const number2 = document.querySelector('#num2').value;
    const multiplicacao = parseInt(number) * parseInt(number2);
    

    const resultado = document.querySelector('#result');
    resultado.textContent = `${multiplicacao}`;
    
});











