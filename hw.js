'use strict'
const generateList=array=>{
    let result=[]
    for (let i = 0; i < array.length; i++) {
        if (Array.isArray(array[i])) {
          result.push(generateList(array[i]));
        } else {
          result.push(array[i]);
        }
      }
      return result;
    }

