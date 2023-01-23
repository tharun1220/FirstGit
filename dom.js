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
// var items = document.getElementsByClassName('list-group-item');
// console.log(items);
// items[2].style.backgroundColor = 'green';

// for( var i=0; i<items.length; i++)
// {
//     items[i].style.fontWeight = 'bold';
// }

//GET ELEMENT BY TAG NAME
// var li = document.getElementsByTagName('li');
// console.log(li);
// li[2].style.backgroundColor = 'green';
// for( var i=0; i<li.length; i++)
// {
//     li[i].style.fontWeight = 'bold';
// }

//QUERY SELECTOR
// var secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.color = 'green';
// var thirdItem = document.querySelector('.list-group-item:nth-child(3)');
// thirdItem.style.color = 'white';

//QUERY SELECTORALL
// var li = document.querySelectorAll('li');
// li[1].style.color = 'green';
// var odd = document.querySelectorAll('li:nth-child(odd)');
// for(var i = 0; i < odd.length; i++)
// {
//     odd[i].style.backgroundColor = 'green';
// }

//TRAVERSING THE DOM
 var itemList = document.querySelector('#items');
//   //parentElement
//   console.log(itemList.querySelector);
//   itemList.parentElement.style.backgroundColor = '#f4f4f4';
//   console.log(itemList.parentElement.parentElement.parentElement);

//   //child nodes
//   console.log(itemList.childNodes);
//   //First child
//   console.log(itemList.firstChild);
//   //First element child
//   console.log(itemList.firstElementChild);
//   itemList.firstElementChild.textContent = 'Hello Item 1';
//   //Last child
//   console.log(itemList.lastChild);
//   //last element child
//   console.log(itemList.lastElementChild);
//   //nextSibling
//   console.log(itemList.nextSibling);
//   //nextElementSibling
//   console.log(itemList.nextElementSibling);
//   //previousSibling
//   console.log(itemList.previousSibling);
//   //previousElementSibling
//   console.log(itemList.previousElementSibling);

//Create element
//   //create a div
//   var newDiv = document.createElement('div');
//   //add class
//   newDiv.className = 'hello';
//   //add id
//   newDiv.id = 'hello1';
//   //add attr
//   newDiv.setAttribute('title', 'Hello Div');
//   //create text node
//   var newDivText = document.createTextNode('Hello World');
//   //add text to div
//   newDiv.appendChild(newDivText);
//   document.title = 'Hello Item Lister';