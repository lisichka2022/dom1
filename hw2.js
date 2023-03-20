'use strict'
const  createTable=()=>{
  let table =document.createElement('table')  
  for(let i=1;i<=10;i++){
    let row=document.createElement('tr')
  
for(let b=1;b<=10;b++){
    let td=document.createElement('td')
    let tdText= document.createTextNode((i - 1) * 10 + b);
    td.appendChild(tdText);
    row.appendChild(td);
}
table.appendChild(row)}

document.body.appendChild(table);}
createTable();