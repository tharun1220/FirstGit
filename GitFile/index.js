 function myfunc(event)
 {
     event.preventDefault();
     var name = document.getElementById("name").value;
     var email = document.getElementById("email").value;
     localStorage.setItem('name',name);
     localStorage.setItem('email',email);
 }
let myObj = {
    name : "abc",
    age : 25
};

let myObj_serialized = JSON.stringify(myObj);
localStorage.setItem('myObj',myObj_serialized);
console.log(localStorage);
