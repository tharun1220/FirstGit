// EXAMINE THE DOCUMENT OBJECT
//console.dir(document);
//console.log(document.domain);
//console.log(document.URL);
//console.log(document.title);
//document.title=123;
//console.log(document.doctype);
//console.log(document.head);
//console.log(document.body);
//console.log(document.all);
// console.log(document.all[10]);
// document.all[10].textContent = 'Hello';
// console.log(document.forms[0]);
// console.log(document.links);
// console.log(document.images);

//GET ELEMENT BY ID
//console.log(document.getElementById('header-title'));
// var headerTitle = document.getElementById('header-tile');
//  var header = document.getElementById('main-header');
// console.log(headerTitle);
//  header.style.borderBottom = 'solid 3px #000';
//GET ELEMENTS BY CLASS NAME
var items = document.getElementsByClassName('list-group-item');
console.log(items);
items[2].style.backgroundColor = 'green';

for( var i=0; i<items.length; i++)
{
    items[i].style.fontWeight = 'bold';
}