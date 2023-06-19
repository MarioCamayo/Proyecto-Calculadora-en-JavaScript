/*document.getElementById('parrafo').innerHTML = 'BIENVENIDO AL INGLATERRA Mario fabian'
document.getElementById('parrafo').innerHTML = 'Eres de Inglaterra Mario Camayo'*/

// Esta funcion agrega a la pantalla el valor del boton de la calculadora
function agregar(valor){
    document.getElementById('pantalla').value+= valor;
}

// Esta funcion vacia la pantalla
function borrar(){
    document.getElementById('pantalla').value = ''
}

// Esta funcion toma el valor  de la pantalla y ejecuta los calculos 
function calcular(){
    const valorPantalla = document.getElementById('pantalla').value
    const resultado = eval(valorPantalla)
    document.getElementById('pantalla').value = resultado
}