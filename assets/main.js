// Validar inputs
function validateFunction(item) {
    let inputName = document.querySelector('#name');
    let inputAge = document.querySelector('#age');
    let inputCity= document.querySelector('#city');

    let validation = document.querySelector(`#${item}`);

    if (validation.value !== null) {
        validation.classList.add("is-valid");
        validation.classList.remove("is-invalid");
       
    }
    if (validation.value == '') {
        validation.classList.remove("is-valid");
        validation.classList.add("is-invalid");
    }
 if(inputName == '' || inputAge == '' || inputCity == '') {disableButton();} else {enableButton();} 

}
// Validar boton submit
function enableButton(){
    document.getElementById('submitButton').removeAttribute('disabled', '')
}

function disableButton(){
    document.getElementById('submitButton').setAttribute('disabled', '')
}