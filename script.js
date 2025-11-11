const fs = require('node:fs');

let data;

// 1)leggere il file da pc
try {
  data = fs.readFileSync('./input/fruit.csv', 'utf8');
  console.log(data);
} catch (err) {
  console.error(err);
}

//2)spezzare il file in un array di stringa
const stringArray = data.split(/\r?\n/);


//3)tolgo la prima riga dell'array e la metto da parte
const propertiesString = stringArray.shift();
// console.log(stringArray);
// console.log(propertiesString);

//4)creare un array per gli studenti
// const studentsArray = [];
const newArray = [];

//5)ciclo l'array di stringhe
for (let i = 0; i < stringArray.length; i++) {
    const valuesString = stringArray[i];
    
    //6) ogni giro creo un oggetto vuoto per contenere lo studente
    const newElement = {};

    // console.log('----------------------------------------------------------');
    // console.log('giro n.', i);
    // console.log('studente vuoto', student);
    // console.log('nomi delle proprietà (key)', propertiesString);
    // console.log('valori delle proprietà (value)', valuesString);

    //7)spezzo le stringhe delle proprietà e dei valori in array di stringhe
    const propertiesArray = propertiesString.split(';');
    const valuesArray = valuesString.split(';');

    // console.log(propertiesArray);
    // console.log(valuesArray);
    
    //8) faccio un ciclo interno sull'array delle proprietà e metto dentro lo studente
    //   il valore corrispondente alla proprietà 
    for (let j = 0; j < propertiesArray.length; j++) {
        const property = propertiesArray[j];
        const value = valuesArray[j];
        newElement[property] = value;
    }
    newArray.push(newElement);
}

//9) fuori dal ciclo interno metto lo studente creato nell'array degli studenti
console.log(newArray);


//10) convertire l'array creato in stringa
const jsonArray = JSON.stringify(newArray)

//11) scrivere il risultato sul file
// try {
//   fs.writeFileSync('./output/fruit-data.json', jsonArray);
// } catch (err) {
//   console.error(err);
// }





