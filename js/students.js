document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('addStudent').addEventListener('click', function (event) {
        $("#myModal").modal();
    });

    document.getElementById('submitBtn').addEventListener('click', function(event){
        event.preventDefault();
        $("#myModal").modal('hide');
    });
});