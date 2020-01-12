document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('submitBtn').addEventListener('click', function(event){
        event.preventDefault();
        $("#myModal").modal('hide');
    });
});