// Agregar o remover mensaje de valid/invalid
function validateFunction(item) {
    let inputName = document.getElementById('name').value;
    let inputAge = document.getElementById('age').value;
    let inputCity = document.getElementById('city').value;

    let validation = document.querySelector(`#${item}`);
    if (validation.value !== '') {
        validation.classList.add("is-valid");
        validation.classList.remove("is-invalid");

    } else {
        validation.classList.remove("is-valid");
        validation.classList.add("is-invalid");
    }

    //Condicional para revisar si hay un input vacio
    if (inputName === '' || inputAge === '' || inputCity === '') { disableButton(); } else { enableButton(); }

}

// Funciones para habilitar o deshabiliat boton submit
function enableButton() {
    document.getElementById('submitButton').removeAttribute('disabled', '')
}

function disableButton() {
    document.getElementById('submitButton').setAttribute('disabled', '')
}