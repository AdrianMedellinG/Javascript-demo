var arrKoders = [];
var tbody = document.querySelector('tbody')

//Funcion para agregar objetos a la tabla de los koders ingresados por el formulario
function submitKoders() {
    var inputName = document.querySelector('#name').value.toUpperCase()
    var inputAge = document.querySelector('#age').value;
    var inputCity= document.querySelector('#city').value.toUpperCase();

    let = koders = {};
    koders.name = inputName;
    koders.age = inputAge;
    koders.city = inputCity;
    //console.log(name,age,city)
    
    arrKoders.push(koders);

    let template = ''
    arrKoders.forEach((cv) => {

        template += `
            <tr>
                <td>${cv.name}</td>
                <td>${cv.age} years old</td>
                <td>${cv.city}</td>
            </tr>
        `
        tbody.innerHTML = template;
    })
}

//Si no hay koders en la tabla, mostrara esto.
if (arrKoders == '') {
    tbody.innerHTML = `<tr><td colspan="3">NO INFORMATION</td></tr>`
}