function myfunc(event)
{
    event.preventDefault();
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    localStorage.setItem('name',name);
    localStorage.setItem('email',email);
}