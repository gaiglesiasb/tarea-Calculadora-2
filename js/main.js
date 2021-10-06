
const field1 = document.getElementsByName('firstValue')[0]
const field2 = document.getElementsByName('secondValue')[0]
const result = document.getElementsByName('resultValue')[0]

const isValid = (element, type) => (element != type) ? false : true
const isFieldsValids = (val1, val2) => (!val1 || !val2) ? false : true
const isEmpty = (element) => (element.value.length != 0) ? false : true

 

// let chooseField = (field) => {
//     document.getElementById('numbers').addEventListener('click', (e)=>getNumber(e,field))
// }
/*
field1.addEventListener('focusin', (element) => {
    document.getElementById('numbers').addEventListener('click', (e)=>getNumber(e,field1))
  });

field2.addEventListener('focusin', (element) => {
    document.getElementById('numbers').addEventListener('click', (e)=>getNumber(e,field2))
  });

field1.addEventListener('focusout', (element) => {
    field1.value=""
  });

field2.addEventListener('focusout', (element) => {
    field2.value=""
  });
*/
let lastField=field1;

//let test=0;
document.getElementById('formExample').addEventListener('click', (e) => {
  //console.log(e.target.name,field1)
  
  if(isNaN(parseInt(e.target.textContent))&& e.target.name!=field2.name ) return
  if ([field1.name,field2.name].includes(e.target.name)){
    lastField=e.target;
    //test=1;
  }
  
  //console.log(test);
  getNumber(e,lastField)
})

const getNumber = (element,field) => {
    
    if (!isValid(element.target.type, 'button')) return
    let numero = element.target.textContent
    field.value += numero
}

const calcular = (element) => {
    if (!isValid(element.target.type, 'button')) return
    if (!isFieldsValids(field1.value, field2.value)) return
    // if (!isEmpty(field1)) return
    // else alert("Number invalid");
    const operator = element.target.textContent
    result.value = eval(` ${field1.value} ${operator} ${field2.value}`)
    
}

document.getElementById('buttons').addEventListener('click', calcular)