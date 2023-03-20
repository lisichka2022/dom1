'use strict'
let ulList = document.querySelector('ul');
let arrValue = [];
let arrName = []
for (let attr of ulList.attributes) {
    arrValue.push(attr.value)
    arrName.push(attr.name)}
   console.log(`Name: ${arrName}\nValue: ${arrValue}`) ;

   
let lastChild=ulList.querySelector('li:last-child')
let myName =  'Helen';
lastChild.textContent = `Hi,my name is ${myName}`;
let firstChild = ulList.querySelector('li:first-child');
firstChild.setAttribute('data-my-name', myName);
ulList.removeAttribute('data-dog-tail');