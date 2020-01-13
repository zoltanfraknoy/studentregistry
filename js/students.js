document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('addStudent').addEventListener('click', function (event) {
        document.querySelector('#surname').value = '';
        document.querySelector('#cname').value = '';
        document.querySelector('#year').value = '';
        document.querySelector('#mail').value = '';
        $("#myModal").modal();
    });

    document.getElementById('submitBtn').addEventListener('click', function (event) {
        event.preventDefault();
        $("#myModal").modal('hide');
    });

    document.getElementById('table').addEventListener('click', function (event) {

        if (event.target.classList.contains('delete')) {
            event.target.closest('tr').remove();

        } else if (event.target.classList.contains('edit')) {

            document.querySelector('h4').innerText = 'Szerkesztés';

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