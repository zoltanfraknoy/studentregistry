document.addEventListener('DOMContentLoaded', function () {
    let editedRow = null;
    document.getElementById('addStudent').addEventListener('click', function (event) {

        document.querySelector('#surname').value = '';
        document.querySelector('#cname').value = '';
        document.querySelector('#year').value = '';
        document.querySelector('#mail').value = '';
        document.querySelector('h4').innerText = 'Új diák';
        editedRow = null;
        $("#myModal").modal();
    });

    document.getElementById('submitBtn').addEventListener('click', function (event) {

        event.preventDefault();

        if (!validator()) {
            return;
        }
        if (editedRow) {

            editedRow.querySelectorAll('td')[0].innerText = document.querySelector('#surname').value;
            editedRow.querySelectorAll('td')[1].innerText = document.querySelector('#cname').value;
            editedRow.querySelectorAll('td')[2].innerText = document.querySelector('#year').value;
            editedRow.querySelectorAll('td')[3].innerText = document.querySelector('#mail').value;


        } else {

            let newTr = document.querySelector('tr.prototype').cloneNode(true);
            newTr.classList.remove('prototype', 'd-none');
            let table = document.querySelector('tbody');
            let newRow = table.appendChild(newTr);

            let surName = document.querySelectorAll('tr')[document.querySelectorAll('tr').length - 1].cells[0];
            let cName = document.querySelectorAll('tr')[document.querySelectorAll('tr').length - 1].cells[1];
            let yearInSchool = document.querySelectorAll('tr')[document.querySelectorAll('tr').length - 1].cells[2];
            let mail = document.querySelectorAll('tr')[document.querySelectorAll('tr').length - 1].cells[3];

            surName.innerText = document.querySelector('#surname').value;
            cName.innerText = document.querySelector('#cname').value;
            yearInSchool.innerText = document.querySelector('#year').value;
            mail.innerText = document.querySelector('#mail').value;
        }

        $("#myModal").modal('hide');
    });

    document.getElementById('table').addEventListener('click', function (event) {

        if (event.target.classList.contains('delete')) {
            event.target.closest('tr').remove();

        } else if (event.target.classList.contains('edit')) {

            document.querySelector('h4').innerText = 'Szerkesztés';

            editedRow = event.target.closest('tr');

            document.querySelector('#surname').value = event.target.closest('tr')
                .querySelectorAll('td')[0].innerText;
            document.querySelector('#cname').value = event.target.closest('tr')
                .querySelectorAll('td')[1].innerText;
            document.querySelector('#year').value = event.target.closest('tr')
                .querySelectorAll('td')[2].innerText;
            document.querySelector('#mail').value = event.target.closest('tr')
                .querySelectorAll('td')[3].innerText;

            $("#myModal").modal();

        }
    })
});



function validator() {

    let nameRegex = /^[a-zA-Z ]{2,30}$/;
    let mailRegex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+) *@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    let inputSurName = document.querySelector('#surname');
    let inputCName = document.querySelector('#cname');
    let inputYear = document.querySelector('#year');
    let inputMail = document.querySelector('#mail');
    let isAcceptable = true;

    inputSurName.classList.remove('is-invalid');
    inputCName.classList.remove('is-invalid');
    inputYear.classList.remove('is-invalid');
    inputMail.classList.remove('is-invalid');

    if (inputSurName.value === '' || !nameRegex.test(inputSurName.value)) {
        inputSurName.classList.add('is-invalid');
        isAcceptable = false;
    }
    if (inputCName.value === '' || !nameRegex.test(inputCName.value)) {
        inputCName.classList.add('is-invalid');
        isAcceptable = false;
    }
    if (inputYear.value === '') {
        inputYear.classList.add('is-invalid');
        isAcceptable = false;
    }
    if (inputMail.value === '' || !mailRegex.test(inputMail.value)) {
        inputMail.classList.add('is-invalid');
        isAcceptable = false;
    }


    return isAcceptable;


}

//Az elk**t idő emlékére

//ez működik
/* let surName = newRow.insertCell(0);
 let cName = newRow.insertCell(1);
 let yearInSchool = newRow.insertCell(2);
 let mail = newRow.insertCell(3);
 let buttons = newRow.insertCell(4);
 buttons.className = 'text-right';*/

/*let delButton = document.createElement('button');
delButton.type = "button";
delButton.className = "btn btn-info btn-sm delete";
delButton.id = 'delete';
delButton.innerHTML = 'Törlés';*/

// let editButton = document.querySelector('.edit').cloneNode(true);
// let delButton = document.querySelector('.delete').cloneNode(true);


// buttons.appendChild(editButton);
//buttons.appendChild(delButton);

//felejtős
/*let buttonSpanDel = document.createElement('span');
buttonSpanDel.className = 'glyphicon glyphicon-pencil';
let buttonSpanEdit = document.createElement('span');
buttonSpanEdit.className = 'glyphicon glyphicon-pencil';*/

//szintén felejtős
/*let editButton = document.createElement('input');
editButton.type = "button";
editButton.className = "btn btn-info btn-sm edit";
editButton.id = 'edit';
editButton.appendChild(buttonSpanEdit);
buttonSpanEdit.innerHTML = "Szerkeszt";*/